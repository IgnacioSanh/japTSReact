import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import Timer from './timer'
import Question from './Question'
import baseObjects from '../../../Utils/baseObjects';
import './practiceWords.css'
import AnswerHistory from './AnswerHistory'

const PracticeWords = (): JSX.Element => {

    const [started, setStarted] = useState(true)
    const [currentWord, setCurrentWord] = useState(baseObjects.mockWords[0])
    const [words, setWords] = useState(baseObjects.mockWords)
    const [wordsHistory, setWordsHistory] = useState(baseObjects.baseWordHistory)

    const checkStarted = () => {
        setStarted(false)
    }

    const getNextWord = (): void => {
        if(words.length < 5) {
            //TODO Fetch more words from back
            console.log('Fetching words')

            if(words.length === 0 && started) {
                //No more words remaining in back. Stop the practice
                setStarted(false)
                return
            }
        }
        let poppingWords = words
        const word = poppingWords.pop()
        setCurrentWord((word?word:baseObjects.baseWord))
        setWords(poppingWords)
    }

    const answerTrigger = (answer: string, correct: boolean) => {
        const newAnswer: WordHistory = {
            word: currentWord,
            correct: correct,
            answer: answer,
        }
        setWordsHistory([newAnswer, ...wordsHistory])
        //Save word to stats
        getNextWord()
    }

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
                                {started ? <Question setStarted={checkStarted} word={currentWord} answerTrigger={answerTrigger} /> : <StartMessage />}
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col xs={6}>
                    <AnswerHistory wordHistory={wordsHistory}/>
                </Col>
            </Row>
        </>
    )

    
}
    
export default PracticeWords
    
    