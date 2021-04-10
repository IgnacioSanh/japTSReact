import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faChevronLeft, faHandPaper, faQuestionCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import Timer from './timer'
import './practiceWords.css'

const PracticeWords = (): JSX.Element => {

    const [started, setStarted] = useState(false)

    const StartMessage = (): JSX.Element => {
        return(
            <React.Fragment>
                <h4>Are you ready to start?</h4>
                <small>You have 2 words in your library</small>
                <br/>
                <Link to="/library">Wait! let me add more words first!</Link>
                <Button variant="primary" size="lg" block className="mt-3" onClick={() => setStarted(true)}>
                    ¡¡Start!!
                </Button>
            </React.Fragment>
        )
    }

    return(
        <>
            <Navbar bg="light" className="mb-2" style={{borderRadius: 10}}>
                <Link to="/practice">
                    <FontAwesomeIcon icon={faChevronLeft}/>
                    {' '} Back to practice
                </Link>
            </Navbar>

            <Row className="mt-4">
                <Col xs={6}>
                    <Row>
                        <Col xs={12}>
                            <div className="border-base padding-all-30">
                                <Timer started={started} />
                            </div>
                        </Col>
                        <Col xs={12} className="mt-4">
                            <div className="border-base padding-all-30">
                                {started ? <Question /> : <StartMessage />}
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col xs={6}>
                    <div className="border-base question-frame">
                        <h5>Answers</h5>
                        <hr/>
                        <div className="max-height-20"></div>
                    </div>
                </Col>
            </Row>
        </>
    )

    
}

const Question = (): JSX.Element => {
    return(
        <>
            <h1 className="text-center">ありがおつ</h1>
            <Form.Control type="text" size="lg" placeholder="Enter the meaning of the word..." />
            <div className="mt-4 d-flex justify-content-between">
                <Button variant="danger"><FontAwesomeIcon icon={faTimesCircle} /> Pass</Button>
                <Button variant="warning"><FontAwesomeIcon icon={faQuestionCircle} /> Hint</Button>
                <Button variant="success"><FontAwesomeIcon icon={faCheckCircle} /> Answer</Button>
            </div>
            <Button variant="primary" className="mt-4" block><FontAwesomeIcon icon={faHandPaper} /> Stop the session</Button>
        </>
    )
}
    
export default PracticeWords
    
    