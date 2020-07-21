/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";

export default class Ingredients extends Component {
    render() {

        return(
            <div id="ingredients">

                <div id="column1">
                    <ul>
                        <li>1 1/2 cups milk</li>
                        <li>1/2 cup mascarpone</li>
                        <li>1/2 tsp pink salt</li>
                        <li>1 lb Black Mission Figs</li>
                        <li>1/2 cup brown sugar</li>
                        <li>2-4 tbs water</li>
                    </ul>
                </div>

                <div id="column2"> 
                    <ul>
                        <li>1 1/2 cups heavy cream</li>
                        <li><s>1/3 granulated sugar</s></li>
                        <li><s>2 egg yolks</s></li>
                        <li>1 lemon, juiced</li>
                        <li>2 tb butter</li>
                        <li>1 cup honey roasted pecans, roughly chopped</li>           
                    </ul>
                </div>
            </div>
         
        );
    }
}