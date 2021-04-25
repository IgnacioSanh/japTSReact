import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'
import { toast, Flip } from 'react-toastify';
import Form from 'react-bootstrap/Form'
import Badge from 'react-bootstrap/Badge'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faHandPaper, faQuestionCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

const Question = ({setStarted, word, answerTrigger}: QuestionProps): JSX.Element => {
    
    const [answer, setAnswer] = useState('')
    const [hints, setHints] = useState<string[]>([])
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
        setHints([])
        //Call next word
        
    }

    const onChange = ({currentTarget: input}: React.ChangeEvent<HTMLInputElement>) => {
        setAnswer(input.value)
    }

    const showHint = () => {
        if(!word) return
        if(word?.tags.length > 0) {
            if(word?.tags.length > hints.length) {
                setHints([word?.tags[hints.length], ...hints])
                toast.info('A hint in form of tag was showed! 🤗', {
                    transition: Flip
                })
                return
            } 
            toast.error('No tags left to show! 😱', {
                transition: Flip
            })
            return
        }

        
        if(hints.length > 0) {
            toast.error('I have already gave you a hint 🤫', {
                transition: Flip
            })
            return
        }
        const firstLetter = word?word.meaning[0]:''
        setHints([`Starts with the letter ... ${firstLetter}`])
        return
    }

    return(
        <>
            <h1 className="text-center">{original}</h1>
            <Form.Control type="text" size="lg" placeholder="Enter the meaning of the word..." value={answer} onChange={onChange} autoFocus={true}/>
            <div>
                { hints.map((hint, idx) => {
                    return (<><Badge variant="primary">{hint}</Badge>{' '}</>)
                 })}
            </div>
            <div className="mt-4 d-flex justify-content-between">
                <Button variant="danger" onClick={onAnswer}><FontAwesomeIcon icon={faTimesCircle} /> Pass</Button>
                <Button variant="warning" onClick={showHint}><FontAwesomeIcon icon={faQuestionCircle} /> Hint</Button>
                <Button variant="success" onClick={onAnswer}><FontAwesomeIcon icon={faCheckCircle} /> Answer</Button>
            </div>
            <Button variant="primary" className="mt-4" block onClick={setStarted}><FontAwesomeIcon icon={faHandPaper} /> Stop the session</Button>
        </>
    )
}

export default Question