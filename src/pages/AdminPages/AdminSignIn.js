import React from 'react'
import { withRouter} from 'react-router-dom'

class AdminLogin extends React.Component{
    state = {
        username: '',
        password: '',
        isAuthed: false
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(`http://trustytrimmers-api.herokuapp.com/api/user/login`, {
            method: 'POST',
            credentials: 'include',
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify({username: this.state.username, password: this.state.password})
        })
        .then((response) => {

            return response.json()
        })
        .then((data) => {
            if(data.isAuthed){
                this.props.handleLogin()
                this.props.history.push('/profile')
            }
        })
        .catch((err) => console.log(err))
    }


    render(){
        
        return(
            
            <div id="login-container" className="valign-wrapper row login-box">
                <div id="login-div" className="col s10 pull-s1 m6 pull-m3 l4 pull-l4">
                    <div  className="card center-align">
                        <div className="card-content">
                            <img id="login-logo" src="images/leaflogo.png" alt=""/>
                            <h2 id="login-text">Login</h2>
                            <form onSubmit={this.handleSubmit}>
                                <label className="form-label" htmlFor="username">Username</label>
                                <div className="input-field">
                                <input id="username" name="username" type="text" required value={this.state.username} onChange={this.handleChange} placeholder="Enter Username..."/>
                                </div>
                                <label className="form-label" htmlFor="username">Password</label>
                                <div className="input-field">
                                <input  id="password" name="password" type="password" required value={this.state.password} onChange={this.handleChange} placeholder="Enter Password..."/>
                                </div>
                                <div className="card-action">
                                <button className="btn black hoverable" type="submit">Login</button>
                                </div>
                            </form>
                        </div>
                            

                    </div>
                </div>
            </div>
        
        )
    }

}

export default withRouter(AdminLogin);