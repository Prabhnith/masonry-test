import React, { Component } from 'react';
import Tile from "../Tile/Tile";
import { Link } from 'react-router-dom';

import "./Masonry.css";

class Masonry extends Component {
    constructor() {
        super();
        this.state = {
            tiles: []
        }
    }

    componentDidMount() {
        this.setState({
            tiles: this.generateTiles()
        })
    }

    generateTiles() {
        let tileList = [];
        for (let i = 0; i < 30; i++) {
            tileList.push(
            <Link to={"/open/"+i}>
                <Tile id={i}/>
            </Link>
            )
        };
        return tileList;
    }

    render() {

        return (
            <div className="container">
                {
                    this.state.tiles
                }
            </div>

        )
    }
}

export default Masonry;