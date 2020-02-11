/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";

export default class Header extends Component {
    render() {
        return(
            <div>
                <div id = "delicious">
                    <img id="logo" src={this.props.logo}/>
                    <div id= "Title">
                        <p id="del">Delicious</p>
                        <p class="gray" id="description">The best food blog on the web</p>
                    </div>
                </div>
                <div id = "navigation">
                    <img src="fb-icon.png"/>
                    <img src="twit-icon.png"/>
                    <img src="gp-icon.png"/>
                    <img src="insta-icon.png"/>
                    <img src="flic-icon.png"/>
                    <img src="pint-icon.png"/>
                    
                    <img src="rss-icon.png"/>
                    <img src="mail-icon.png"/>
                </div>
            </div>
         
        );
    }
}