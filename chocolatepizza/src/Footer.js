/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";

export default class Footer extends Component {
    render() {
        return(

        <footer>
            <hr className="styleHr"/>
            <p className="gray">Delicious © 2013 • All Rights Reserved.</p>
            <p className="gray">Proudly Published with Ghost.</p>
        </footer>
        );
    }
}