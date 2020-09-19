import React from 'react';

class SubmitButton extends React.Component{
    state = {  }
    render() { 
        return ( 
            <div className="button">
                <button 
                    type={this.props.type}
                    placeholder={this.props.placeholder}
                    onClick={this.state.onClick}
                >{this.state.button}</button>
            </div>
         );
    }
}
 
export default SubmitButton;