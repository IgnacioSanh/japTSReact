import React, {Component} from 'react'
import './modal.css'

interface modalProps {
    show: boolean;
    title?: string;
    buttonAccept?: string;
    buttonClose?: string;
    submitText?: string;
    submitFunction?: any;
}

export default class Modal extends Component<modalProps> {
    state = {
        show: false
    }

    componentDidUpdate(prevProps: modalProps){
        if(prevProps.show !== this.props.show) {
            this.setState({
                show: !this.state.show
            })
        }
    }

    onClose() {
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        const {show} = this.state
        let {title, buttonAccept, buttonClose, submitText, submitFunction} = this.props
        title = title ? title: "Message"
        if(!show) return null
        return (
            <div className="modal fade show" tabIndex={-1}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            {title && <h5 className="modal-title">{title}</h5>}
                            <button type="button" className="close" aria-label="Close" onClick={() => this.onClose()}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {this.props.children}
                        </div>

                        {(buttonAccept || buttonClose) && <div className="modal-footer">
                            {buttonClose && <button type="button" className="btn btn-secondary"
                                                    onClick={() => this.onClose()}>{buttonClose}</button>}
                            {buttonAccept && <button type="button" className="btn btn-primary">{buttonAccept}</button>}
                            {(submitText && submitFunction) && <button className="btn btn-primary">{submitText}</button>}
                        </div>}
                    </div>
                </div>
            </div>
        )
    }
}