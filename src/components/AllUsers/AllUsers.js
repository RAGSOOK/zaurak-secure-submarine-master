import React, { Component } from 'react';
import axios from 'axios';

class AllUsers extends Component{
    constructor(props){
        super(props);
        this.state = {
            users: [],
        }
    }

    componentDidMount = () => {
        this.getUsers();
    }

    getUsers = () => {
        axios.get('/api/user/all')
        .then((response) => {
            this.setState({
                users: response.data,
            })
        }).catch((error) => {
            console.log(error);
        });
    }

    render(){
        return(
            <div>
                <p>YoYoYo everybody these are the users</p>
                <ul>
                    {this.state.users.map((user) => 
                        <li> {user.username} </li>)}
                </ul>
            </div>
        );
    }
}

export default AllUsers;
