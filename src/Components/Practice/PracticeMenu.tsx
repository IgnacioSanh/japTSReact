import {FunctionComponent, useState} from "react"
import Modal from '../Common/Modal'

const PracticeMenu: FunctionComponent = () => {
    const [show, setShow] = useState(false)

    const showModal = () => {
        setShow(!show)
    }

    return(
        <>
            <h1>Practice!</h1>
            <button className="btn btn-primary" onClick={showModal}>Show/Hide modal</button>
            <Modal show={show}>Message in modal</Modal>
        </>

    )
}

export default PracticeMenu