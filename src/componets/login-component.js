import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';


export default class PersonList extends React.Component {

    state = {
        username: '',
        password: ''
      }
    
      handleChange = event => {

        this.setState({ 
            username: event.target.value,
           
        });
        
      }

      handleChangeP = event => {

        this.setState({ 
            password: event.target.value,
           
        });
        
      }
    
      handleSubmit = event => {
        event.preventDefault();
    
        const data = {
            
            password: this.state.password,
            username: this.state.username,
         
        };

        console.log(data);
    
        axios.post(`https://api-base-project.herokuapp.com/api/auth/signin/`, { data })
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
      }
      render() {
        return (
            <>  
                <form onSubmit={this.handleSubmit}>

                <h3>Login</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input className="form-control" name="username" placeholder="Enter email" onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" className="form-control" placeholder="Enter password" onChange={this.handleChangeP} />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <div className="button-sign-in">
                    <button type="submit" className="btn btn-dark btn-small btn-block">send</button>
                </div>
                
                <Link  to={"/sign-up"}>
                    <div className="button-link-register">
                        <button className="btn btn-outline-dark">
                        register
                        </button> 
                    </div>
                </Link> 
                </form> 
            </>  
        );
    }
}

