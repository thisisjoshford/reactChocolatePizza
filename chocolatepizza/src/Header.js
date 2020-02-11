/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import './Header.css'


export default class Header extends Component {
    render() {
        // create a variable containing the array of objects (url and alt)
        const linksArray = this.props.links
        //make a new array with .map that returns <img> tags for each object in array
        const linksElements = linksArray.map(object => {
            return <img alt={object.alt_text} src={object.url}/>
        });

        return(
            <div>
                <div id = "delicious">
                    <img id="logo" src={this.props.mainLogo}/>
                    <div id= "Title">
                        <p id="del">Delicious</p>
                        <p className="gray" id="description">The best food blog on the web</p>
                    </div>
                </div>
                <div id = "navigation"> {linksElements}
                    
                </div>
            </div>
         
        );
    }
}