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
                    <h1 className='quote-text' id='quote-title'>Here Is Your Free Quote!</h1>
                    <h1 className='quote-text' id='total' >Total: ${this.props.state.total}</h1>
                </div>
                <h2 id='book-now' className='quote-text'>BOOK NOW!</h2>
                <h3 id='call-number' className='quote-text'>CALL 209 818-2286</h3>"
                <a href="tel:209-818-2286"><Button id="call-now-btn">Call Now</Button></a>
                <br />
                {/* <Link to='/store/tables'><Button id='shop-tables-btn'>Shop Tables</Button></Link> */}
            </div>
        )
    }
        }
        
}

export default QuotePage;