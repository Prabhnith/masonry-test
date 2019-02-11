import React, { Component } from 'react';
import Tile from "../Tile/Tile";
import { Link } from 'react-router-dom';

import "./Masonry.css";

class Masonry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tiles: [],
            
        }
    }

    componentDidUpdate(){
        if (this.props.match.params.id !== undefined){
            console.log("CDU : ",this.props.match.params.id);
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
            <Link to={"/open/"+i} key={i}>
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