import React,{FunctionComponent, useState} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit, faPlus, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import Badge from 'react-bootstrap/Badge'
import {transformWord} from "../../Utils/translate";
import baseObjects from '../../Utils/baseObjects';

const LibraryMenu: FunctionComponent = () => {
    const {mockWords, searchFilterBase, baseWord} = baseObjects

    const [words, setWords] = useState(mockWords)
    const [showNewWordModal, setShowNewWordModal] = useState(false)
    const [searchFilter, setSearchFilter] = useState(searchFilterBase)
    const [selectedWordCard, setSelectedWordCard] = useState(baseWord)

    const saveNewWord : (word: Word) => void = function (word: Word): void {
        //TODO: Validate word
        //TODO: Pass it to the backend
        setWords([word, ...words])
    }

    const deleteWord = (id: number) => {
        //TODO: Call the API to delete
        setWords(words.filter(word => word.id !== id))
    }

    const filterWords = () => {
        const searchTextLowered = searchFilter.searchText.toLowerCase()
        const filteredWordsArray = words.filter((currentWord) => {
            return currentWord.meaning.toLowerCase().includes(searchTextLowered)
        })
        return filteredWordsArray
    }

    const onChangeFilter = ({currentTarget: input}: React.ChangeEvent<HTMLInputElement>) => {
        setSearchFilter({searchText: input.value, page: 1})
    }

    let filteredWordsVar: Word[] = filterWords()

    return(
        <div className="row">
            <NewWordModal show={showNewWordModal} onHide={() => setShowNewWordModal(false)} saveWord={saveNewWord} />
            <div className="col-8">
            <h4>You have {words.length} words saved!</h4>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <button className="btn btn-sizzling" type="button" onClick={() => setShowNewWordModal(true)}>Add a new word <FontAwesomeIcon icon={faPlus} /></button>
                </div>
                <input type="text" className="form-control" placeholder="... or search for a word here" onChange={onChangeFilter}/>
            </div>
            { 
                (searchFilter.searchText !== '') && 
                <small>There are {filteredWordsVar.length} words that match the filter. Page {searchFilter.page} of {Math.floor(filteredWordsVar.length/10)+1}</small>
                }
            <table className="table table-hover table-sm">
                <thead>
                    <tr>
                        <th>Word</th>
                        <th>Meaning</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {filteredWordsVar.map((word) => {
                    const {original, meaning, id} = word
                    return (
                        <tr key={id} onClick={() => setSelectedWordCard(word)}>
                            <td>{original}</td>
                            <td>{meaning}</td>
                            <td>
                                <button className="btn btn-danger btn-sm"><FontAwesomeIcon icon={faTrashAlt} onClick={() => deleteWord(id)} /></button>
                                <button className="btn btn-info btn-sm"><FontAwesomeIcon icon={faEdit} /></button>
                            </td>
                        </tr>
                    )}
                )}
                </tbody>
            </table>
            </div>
            <div className="col-4">
                {wordCard(selectedWordCard)}
            </div>
        </div>
    )
}

const wordCard = (word: Word): JSX.Element => {
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

function NewWordModal (props: NewWordModalProps) {
    const types = ['Verb', 'Adjective', 'Noun', 'Other']
    const emptyWord: Word = {id: 0, knowledge: 2, meaning: "", original: "", tags: [], type: "Other"}
    const [newWord, setNewWord] = useState(emptyWord)
    const tagInput = React.useRef<HTMLInputElement>(null)

    const addTag = () => {
        if(tagInput.current) {
            const value: string = tagInput.current.value
            // @ts-ignore
            let tagsList = newWord['tags'] ? newWord['tags'] : []
            tagsList.push(value)
            tagInput.current.value = ""
            setNewWord({...newWord, tags: [...tagsList]})
        }
    }

    const deleteTag = (deleteTag: string) => {
        let tags: string[] = []
        // @ts-ignore
        if(newWord['tags']) tags = newWord['tags']
        tags = tags.filter(tag => tag !== deleteTag)
        setNewWord({...newWord, tags: tags})
    }

    const onChangeInput = ({currentTarget: input}: React.ChangeEvent<HTMLInputElement>) => {
        if(input.name === "original") {
            input.value = transformWord(input.value)
        }
        setNewWord({...newWord, [input.name]: input.value })
        //Add validation
    }

    const onCancel = () => {
        setNewWord(emptyWord)
        props.onHide()
    }

    const saveNewWord = () => {
        //Add id to the new word
        const generatedId: number = Math.floor(((Math.random() * 10000) + 100))
        const wordWithid: Word = {...newWord, id: generatedId}
        props.saveWord(wordWithid)
        onCancel()
    }

    const {knowledge, meaning, original, tags, type} = newWord

    return (
        <Modal
            show={props.show}
            onHide={onCancel}
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
                    <Form.Group controlId="formGroupOriginalWord">
                        <Form.Label>Original word</Form.Label>
                        <InputGroup size="lg">
                            <FormControl
                                placeholder="Write the word on it's original language"
                                aria-label="Write the word on it's original language"
                                aria-describedby="original-word-input"
                                autoComplete="off"
                                name="original"
                                value={original}
                                onChange={onChangeInput}
                            />
                            <InputGroup.Append>
                                <Form.Control as="select" className="pr-2" size="lg" defaultValue="hiragana">
                                    <option value="hiragana">Hiragana</option>
                                </Form.Control>
                            </InputGroup.Append>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group controlId="formGroupMeaning">
                        <Form.Label>Meaning</Form.Label>
                        <Form.Control type="text" autoComplete="off" placeholder="The meaning of the word in your language" name="meaning" value={meaning} onChange={onChangeInput} />
                    </Form.Group>
                    <Form.Group controlId="formGroupKnowledge">
                        <Form.Label>Knowledge</Form.Label>
                        <Form.Control type="range" min="1" max="3" onChange={onChangeInput} value={knowledge} name="knowledge"/>
                        <Form.Text className="text-muted">
                            Do you know the word?. Pick a range, from "I never remember the word" to "I always remember what it means"
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formGroupType">
                        <Form.Label>Type</Form.Label>
                        <Form.Control as="select" name="type" onChange={onChangeInput} value={type}>
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
                <button className="btn btn-default" onClick={onCancel}>Cancel</button>
                <button className="btn btn-success" onClick={saveNewWord} >Save</button>
            </Modal.Footer>
        </Modal>
    );
}

export default LibraryMenu