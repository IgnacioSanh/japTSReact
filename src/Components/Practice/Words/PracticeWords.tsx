import React, {useState, useEffect} from 'react'
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
import { getWords } from '../../../Services/wordService'
import constants from '../../../Configuration/constants';

const PracticeWords = (): JSX.Element => {
    const [started, setStarted] = useState<boolean>(false)
    const [iteration, setIteration] = useState<number>(0)
    const [currentWord, setCurrentWord] = useState<Word | undefined>(undefined)
    const [words, setWords] = useState<Word[]>(getWords(0))
    const [lastWordHistory, setLastWordHistory] = useState<WordHistory | undefined>(undefined)

    useEffect(() => {
        if(!started) setLastWordHistory(undefined)
        else if(!currentWord) getNextWord()

    }, [started, currentWord])

    const checkStarted = () => {
        setStarted(false)
    }

    const stopPractice = () => {
        setStarted(false)
        setIteration(0)
        setLastWordHistory(undefined)
    }

    const getNextWord = (): void => {
        if(words.length < constants.WORDS_BY_BATCH) {
            setWords([...words, getWords(iteration)] as Word[])
            setIteration(iteration + 1)
            if(words.length === 0 && started) {
                //No more words remaining in back. Stop the practice
                stopPractice()
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
        setLastWordHistory(newAnswer)
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
                    <AnswerHistory lastWord={lastWordHistory} started={started}/>
                </Col>
            </Row>
        </>
    )

    
}
    
export default PracticeWords
    
    