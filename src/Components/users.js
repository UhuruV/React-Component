import React from 'react';
import NavBar from './NavBar'
import {createBrowserHistory} from 'history'

class Users extends React.Component {
    redirectUser = () => {
        const history = createBrowserHistory();
        history.push('/contact')
    }
    render() { 
        return (
            <div>
                <NavBar />
                <h1>Users</h1>
                <button onClick={this.redirectUser}> redirect trial </button>
                </div>
         );
    }
}
 
export default Users;