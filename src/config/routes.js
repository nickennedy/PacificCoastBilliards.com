import {Switch, Route} from 'react-router-dom'
import HomePage from '../pages/HomePage'
import JobFormPage from '../pages/JobFormPage'
import QuotePage from '../pages/QuotePage'

const Routes = (props) => (
    <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/job-form'><JobFormPage state={props.state} handleChange={props.handleChange} calculateQuote={props.calculateQuote} calculateDistance={props.calculateDistance}/></Route>
        <Route exact path='/quote'><QuotePage state={props.state} /></Route>
    </Switch>
)

export default Routes;