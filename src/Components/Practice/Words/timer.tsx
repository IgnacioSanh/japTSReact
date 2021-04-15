import React, {useState, useEffect} from 'react'
import Form from 'react-bootstrap/Form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStopwatch, faHourglass } from '@fortawesome/free-solid-svg-icons'

interface TimerProps {
    started: boolean
}

const Timer = (props: TimerProps): JSX.Element => {
    
    const [useTimer, setUseTimer] = useState(false)
    const [secs, setSecs] = useState(10)
    const [finished, setFinished] = useState(false)

    useEffect(() => {
        var timer: any;

        const startTimer = (): void => {
            timer = setTimeout(() => {
                setSecs(secs - 1)
            }, 1000)
        }

        const stopTimer = ():void => {
            clearTimeout(timer)
            setFinished(true)
        }
        
        if(props.started) {
            startTimer()
            setFinished(false)
        }

        if(secs === 0) stopTimer()

    },[secs, props.started])
    
    const BeforeStart = (): JSX.Element => {
        return (
        <>
            <Form.Check 
                type="switch"
                id="custom-switch"
                label="Want to clock your time?"
                onChange={() => setUseTimer(!useTimer)}
                checked={useTimer}
            />
            <small>{useTimer?"Yes. Let's see how many correct answers I do in 1 minute.":"No thank you. I want a free practice"}</small>
        </>
        )
    }

    const AfterStart = (): JSX.Element => {
        return (
            <>
                {useTimer?
                    (<h5><FontAwesomeIcon icon={faStopwatch} size="lg" /> Time remaining: {secs}</h5>):
                    (<h5><FontAwesomeIcon icon={faHourglass} size="lg" /> No pressure, answer as many as you can!</h5>)
                }
                
            </>
        )
    }

    return(
        <>
            {props.started? (<AfterStart />) : (<BeforeStart />)}
        </>
    )
}

export default Timer