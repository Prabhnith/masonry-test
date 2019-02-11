import React, { Component } from 'react';
import "./Tile.css";

class Tile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxheight: Math.floor(Math.random() * 200) + 100,
            bgColor: this.getRandomColor(),
            active: false,
            id: this.props.id
        }
    }
    getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    componentDidMount() {

    }

    render() {
        const divStyle = {
            height: this.state.boxheight,
            backgroundColor: this.state.bgColor,
            width: "200px",

        };
        return (
            <div className="rectangle" style={divStyle} ></div>
        )
    }
}

export default Tile;