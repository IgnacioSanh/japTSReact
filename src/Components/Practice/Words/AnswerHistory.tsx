import React from 'react'
import Table from 'react-bootstrap/Table'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

const AnswerHistory = ({wordHistory}: AnswerHistoryProps) => {

    const getIcon = (correct: boolean): JSX.Element => {
        if(correct) return <FontAwesomeIcon icon={faCheck} className="text-success"/>
        else return <FontAwesomeIcon icon={faTimes} className="text-danger"/>
    }

    const formatAnswer = (correct: boolean, answer: string, realAnswer: string): JSX.Element => {
        const answerClass = correct ? '' : 'line-through'
        return (
            <>
                <span className={`${answerClass}`}>{answer}</span> 
                {!correct && <span> {realAnswer}</span>}
            </>
        )

    }

    return (
        <div className="border-base answers-frame">
            <h5 className="text-left">Answers <small className="float-right">Score: 0/{wordHistory.length}</small></h5>
            <div className="answer-frame-max-height">
                <Table className="text-left">
                {wordHistory.map((wordHist, idx) => {
                    const {word, correct, answer} = wordHist
                    return (
                        <tr key={idx}>
                            <td>{getIcon(correct)}</td>
                            <td>
                                <span>{word.original} <FontAwesomeIcon icon={faLongArrowAltRight} /> {formatAnswer(correct, answer, word.meaning)}</span>
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