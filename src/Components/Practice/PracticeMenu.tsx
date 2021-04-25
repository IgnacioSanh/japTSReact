import {FunctionComponent} from "react"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'

const PracticeMenu: FunctionComponent = () => {
    
    return(
        <>
            <h3>There are 4 modalities to practice</h3>
            <div className="row">
                <div className="col-6 mt-4">
                    <Card>
                        <Card.Body>
                            <Card.Title>Words</Card.Title>
                            <Card.Text>
                                Practice some random words in japanese and write it's meaning or viceversa, you choose!
                            </Card.Text>
                            <Link to="/practice/words/japanese" className="btn btn-info">にほんご to English</Link>
                            <Button variant="warning" className="float-right">English to にほんご</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-6 mt-5">
                    <Card>
                        <Card.Body>
                            <Card.Title>Numbers</Card.Title>
                            <Card.Text>
                                Guess the correct number written either in english or japanese, and try to write it as fast as you can!
                            </Card.Text>
                            <Button variant="info">にほんご to English</Button>
                            <Button variant="warning" className="float-right">English to にほんご</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-6 mt-5">
                    <Card>
                        <Card.Body>
                            <Card.Title>Counters</Card.Title>
                            <Card.Text>
                                In japanese there are special counters particles. Learn which one to use in each ocation 
                            </Card.Text>
                            <Button variant="info">にほんご to English</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-6 mt-5">
                    <Card>
                        <Card.Body>
                            <Card.Title>{"Date & Time"}</Card.Title>
                            <Card.Text>
                            Write down dates in japanese and it's translation. Also practice how to say what hour is it.
                            </Card.Text>
                            <Button variant="info">にほんご to English</Button>
                            <Button variant="warning" className="float-right">English to にほんご</Button>
                        </Card.Body>
                    </Card>
                </div>
                
            </div>
        </>

    )
}

export default PracticeMenu