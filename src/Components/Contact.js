import React from 'react';
import NavBar from './NavBar'

class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="contacts">
                <div className="navbar">
                <NavBar />
                </div>
                <h1>Contact</h1>

            </div>
         );
    }
}
 
export default Contacts;