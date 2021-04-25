import React, {useEffect, useState} from 'react'
import Table from 'react-bootstrap/Table'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import { toast, Flip } from 'react-toastify';

const AnswerHistory = ({lastWord, started}: AnswerHistoryProps) => {

    useEffect(() => {
        if(started && lastWord) {
            setWordsHistory([lastWord, ...wordsHistory])
            if(lastWord.correct) setScore(score + 1)
        }
        if(started && !lastWord) {
            setWordsHistory([])
            setScore(0)
        }
        if(!started && lastWord) {
            toast.info(`🏁 The session is over! Final Score: ${score}`, {
                transition: Flip 
                });
        }
    }, [lastWord, started])

    const [wordsHistory, setWordsHistory] = useState<WordHistory[]>([])
    const [score, setScore] = useState(0)

    const getIcon = (correct: boolean): JSX.Element => {
        if(correct) return <FontAwesomeIcon icon={faCheck} className="text-success"/>
        else return <FontAwesomeIcon icon={faTimes} className="text-danger"/>
    }

    const formatAnswer = (correct: boolean, answer: string, realAnswer=''): JSX.Element => {
        const answerClass = correct ? '' : 'line-through'
        return (
            <>
                <span className={`${answerClass}`}>{answer}</span> 
                {!correct && <span> {realAnswer}</span>}
            </>
        )
    }

    if(!started) {
        return (
            <div className="border-base answers-frame">
                <h4>Last score: {score}</h4>
                <h5>Top Scores</h5>
                <div className="answer-frame-max-height">
                    <Table hover>
                        <thead>
                            <tr>
                                <th>Score</th>
                                <th>Timed?</th>
                                <th>Streak</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>3</td>
                                <td>No</td>
                                <td>1</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
    return (
        <div className="border-base answers-frame">
            <h5 className="text-left">Answers <small className="float-right">Score: {score}</small></h5>
            <div className="answer-frame-max-height">
                <Table className="text-left">
                {wordsHistory.map((wordHistory, idx) => {
                    const {word, correct, answer} = wordHistory
                    return (
                        <tr key={idx}>
                            <td>{getIcon(correct)}</td>
                            <td>
                                <span>{word?.original} <FontAwesomeIcon icon={faLongArrowAltRight} /> {formatAnswer(correct, answer, word?.meaning)}</span>
                            </td>
                        </tr>
                    )
                })}
                </Table>
            </div>
        </div>
    )
}

export default AnswerHistory