/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";

export default class Bio extends Component {
    render() {
        return(
        <div id="bio">
            <img id="bioPic" src="van-pic.png"/>
            <div>
                <h3 id="vanessa">Vanessa Stevenson</h3>
                <p id="bioInfo">Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am</p>
            </div>
            <div id="button">
                <button>SHARE RECIPE</button>
            </div>
        </div>
        );
    }
}