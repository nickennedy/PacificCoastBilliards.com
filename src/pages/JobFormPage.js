import React from 'react';
import JobForm from '../components/JobForm'
class JobFormPage extends React.Component{

    render(){
        return(
            <div>
                <JobForm state={this.props.state} handleChange={this.props.handleChange} calculateQuote={this.props.calculateQuote}/>
            </div>
        )
    }
}

export default JobFormPage;