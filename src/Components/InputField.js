import React from 'react';

class InputField extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div className="input">
                <input 
                    type={this.props.type}
                    placeholder={this.props.placeholder}
                    onChange={(e) => this.props.onChange(e.target.value)}
                    />
            </div>
         );
    }
}
 
export default InputField;