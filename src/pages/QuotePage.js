import React from 'react'
import {Button} from 'reactstrap'
import { Spinner } from 'reactstrap';
import {Link} from 'react-router-dom'
class QuotePage extends React.Component  {

    state = {
        
    }

    componentDidMount(){
        const jobInfo = JSON.parse(localStorage.getItem('jobInfo'))
        this.setState({...jobInfo})
    }

    render(){
        if(this.props.state.loading){
            return (
                
                <div id="spinner-container">
                    <h1 className="loading-screen-text">Calculating Quote...</h1>
                    <Spinner/>
                </div>
                )
        }else{
            return(
            <div id='quote-container'>
                <div id='quote'>
                    <h1>Here Is Your Free Quote!</h1>
                    <h1 id='total' >Total: ${this.props.state.total}</h1>
                </div>
                <h2>BOOK NOW!</h2>
                <h3>CALL 209 818-2286</h3>
                <br />
                <Link to='/store/tables'><Button>Shop Tables</Button></Link>
            </div>
        )
    }
        }
        
}

export default QuotePage;