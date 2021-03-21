import React,{FunctionComponent, useState} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit, faPlus, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import {ModalProps} from "react-bootstrap"
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import Badge from 'react-bootstrap/Badge'

interface word {
    id: number;
    original: string;
    meaning: string;
    knowledge: 1 | 2 | 3;
    type: string;
    tags: string[]
}

const LibraryMenu: FunctionComponent = () => {
    const mockWords: word[] = [{
        id: 1,
        original: 'ありがおつ',
        meaning: 'Thank you',
        knowledge: 3,
        type: 'Other',
        tags: ['greeting']
    }]
    const [words, setWords] = useState(mockWords)
    const [showNewWordModal, setShowNewWordModal] = useState(false)

    return(
        <div className="row">
            <NewWordModal show={showNewWordModal} onHide={() => setShowNewWordModal(false)}/>
            <div className="col-8">
            <h4>You have {words.length} words saved!</h4>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <button className="btn btn-sizzling" type="button" onClick={() => setShowNewWordModal(true)}>Add a new word <FontAwesomeIcon icon={faPlus} /></button>
                </div>
                <input type="text" className="form-control" placeholder="... or search for a word here"/>
            </div>
            <table className="table table-hover table-sm">
                <thead>
                    <tr>
                        <th>Word</th>
                        <th>Meaning</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {words.map(({original, meaning, id}) => {return (
                        <tr key={id}>
                            <td>{original}</td>
                            <td>{meaning}</td>
                            <td>
                                <button className="btn btn-danger btn-sm"><FontAwesomeIcon icon={faTrashAlt} /></button>
                                <button className="btn btn-info btn-sm"><FontAwesomeIcon icon={faEdit} /></button>
                            </td>
                        </tr>
                    )}
                )}
                </tbody>
            </table>
            </div>
            <div className="col-4">
                {wordCard(words[0])}
            </div>
        </div>
    )
}

const wordCard = (word: word): JSX.Element => {
    const {original, meaning, knowledge, type, tags} = word
    return (
        <div className="card text-center">
            <div className="card-header" style={{backgroundColor: '#d3efef'}}>
                <h1>{original}</h1>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <span className="font-weight-bold">Meaning: </span><span className="font-weight-light font-italic">{meaning}</span></li>
                <li className="list-group-item"><b>Type</b> <span className="badge badge-pill badge-info">{type}</span></li>
                <li className="list-group-item"><b>Knowledge:</b> {knowledge}</li>
                <li className="list-group-item">
                    <b>Tags: </b>
                    {tags.map((tag, idx) => <span className="badge badge-pill badge-primary" key={idx}>{tag}</span>)}
                </li>
            </ul>
        </div>
    )
}

const NewWordModal = (props: ModalProps) => {
    const types = ['Verb', 'Adjective', 'Noun', 'Other']
    const emptyArray: string[] = []
    const [tags, setTags] = useState(emptyArray)
    const tagInput = React.useRef<HTMLInputElement>(null);
    const addTag = () => {
        if(tagInput.current) {
            const value: string = tagInput.current.value
            setTags([...tags, value])
            tagInput.current.value = ""
        }
    }
    const deleteTag = (deleteTag: string) => {
        setTags(tags.filter(tag => tag !== deleteTag))
    }
    const onChangeControl = ({currentTarget: input}: React.ChangeEvent<HTMLInputElement>) => {
        console.log(input.value)
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add new word
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Original Word</Form.Label>
                        <input className="form-control" type="text" placeholder="The word on it's original language" onChange={onChangeControl}/>
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Meaning</Form.Label>
                        <Form.Control type="text" placeholder="The meaning of the word in your language" />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Knowledge</Form.Label>
                        <Form.Control type="range" min="1" max="3"/>
                        <Form.Text className="text-muted">
                            Do you know the word?. Pick a range, from "I never remember the word" to "I always remember what it means"
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Type</Form.Label>
                        <Form.Control as="select">
                            {types.map(type => <option key={type} value={type}>{type}</option>)}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formGroupTags">
                        <Form.Label>Tags</Form.Label>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Enter a tag that describes the word"
                                aria-label="Enter a tag that describes the word"
                                aria-describedby="tag-input"
                                ref={tagInput}
                                autoComplete="off"
                            />
                            <InputGroup.Append>
                                <button type="button" className="btn btn-info" onClick={addTag}>Add tag</button>
                            </InputGroup.Append>
                        </InputGroup>
                        <div>
                            {tags.map((tag, index) =>
                                <Badge pill variant="primary" className="mr-1" key={index}>
                                    {tag +  " "}
                                    <FontAwesomeIcon icon={faTimesCircle} onClick={() => deleteTag(tag)} style={{cursor: 'pointer'}}/>
                                </Badge>
                            )}
                        </div>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-default" onClick={props.onHide}>Cancel</button>
                <button className="btn btn-success">Save</button>
            </Modal.Footer>
        </Modal>
    );
}

export default LibraryMenu