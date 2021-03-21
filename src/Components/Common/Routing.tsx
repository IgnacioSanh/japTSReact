import {FunctionComponent} from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import LibraryMenu from '../Library/LibraryMenu'
import PracticeMenu from "../Practice/PracticeMenu";

const Routing: FunctionComponent = (): JSX.Element => {
    return(
        <Switch>
            <Route exact path="/library"><LibraryMenu /></Route>
            <Route exact path="/practice"><PracticeMenu /></Route>
            <Route exact path="/"><Home /></Route>
        </Switch>
    )
}

export default Routing