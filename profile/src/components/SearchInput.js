import React from 'react';
import {Well, FormControl} from 'react-bootstrap';

export default class SearchInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          value: props.value
        }
    }
    onChange(e){
        this.setState({
            value: e.target.value
        });
        this.props.onChange(this.state.value);
    }

    render(){
        return(
            <div>
                <FormControl
                    type="text"
                    value={this.state.value}
                    placeholder="Search books"
                    onChange={this.onChange.bind(this)}
                    />
            </div>
        )
    }
}