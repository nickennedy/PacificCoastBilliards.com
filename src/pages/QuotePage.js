import React from 'react'
import {Button} from 'reactstrap'
import { Spinner } from 'reactstrap';

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

                <Button id='book-now-btn'>Book Now</Button>

                <h3>Or</h3>
                <br/>
                <h3>CALL 209 818-2286 </h3>
            </div>
        )
    }
        }
        
}

export default QuotePage;