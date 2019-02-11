import React, { Component } from 'react';

class DisplayDiv extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id
        }
    }

    componentDidMount(){
        // console.log(this.state.id);
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default DisplayDiv;