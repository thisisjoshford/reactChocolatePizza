/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";

export default class Body extends Component {

   
    render() {

        const infoArray = this.props.text
        const infoElements = infoArray.map(object => {
        return <p className="instructions">{object.info}</p>
        });

        return(
            <div>
                <article>
                    <div>
                        <h1>Chocolate Pizza</h1>
                        <h6 className = "gray">POSTED ON 15 DEC 2013 / DESSERTS      <span id="print"><img src="print-icon.png"/>PRINT</span></h6>
                    </div>
                    <div>
                        <img src="choco-pizza.png"/>
                    </div>
                    <div>{infoElements}</div>
                    <div id="ingredients">
                        <div>
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
                    <br/>
                    <hr/>
                </article>

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
                
            </div>
        );
    }
}