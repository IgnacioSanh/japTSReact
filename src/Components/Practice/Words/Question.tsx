import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'
import { toast, Flip } from 'react-toastify';
import Form from 'react-bootstrap/Form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faHandPaper, faQuestionCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

const Question = ({setStarted, word, answerTrigger}: QuestionProps): JSX.Element => {
    
    const [answer, setAnswer] = useState('')
    const original = word?.original

    const onAnswer = () => {
        const correct = answer.toLowerCase() === word?.meaning.toLowerCase()
        if(correct) {
            toast.success(`🎉 yay! that's correct!`, {
                transition: Flip 
             });
        }
        else {
            toast.error('🙅‍♂️ Nope! wrong answer', {
                transition: Flip 
             });
             
        }    
        answerTrigger(answer, correct)
        setAnswer('')
        //Call next word
        
    }

    const onChange = ({currentTarget: input}: React.ChangeEvent<HTMLInputElement>) => {
        setAnswer(input.value)
    }

    return(
        <>
            <h1 className="text-center">{original}</h1>
            <Form.Control type="text" size="lg" placeholder="Enter the meaning of the word..." value={answer} onChange={onChange} autoFocus={true}/>
            <div className="mt-4 d-flex justify-content-between">
                <Button variant="danger"><FontAwesomeIcon icon={faTimesCircle} /> Pass</Button>
                <Button variant="warning"><FontAwesomeIcon icon={faQuestionCircle} /> Hint</Button>
                <Button variant="success" onClick={onAnswer}><FontAwesomeIcon icon={faCheckCircle} /> Answer</Button>
            </div>
            <Button variant="primary" className="mt-4" block onClick={setStarted}><FontAwesomeIcon icon={faHandPaper} /> Stop the session</Button>
        </>
    )
}

export default Question