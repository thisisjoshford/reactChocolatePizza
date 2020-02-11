/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";

export default class Body extends Component {
    render() {
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
                    <p className="instructions">
                        For the fig swirl: Melt butter over medium heat in a saucepan. Add brown sugar and stir to dissolve. Halve all of the figs and toss in the saucepan with water and lemon juice. Cook over medium heat, stirring frequently, until you have a chunky-jammy mixture.  Add Salt with one or two stirs, set aside and let cool completely. 
                    </p>
                    <p className="instructions">
                        Ice cream: In a small pot over medium heat, combine milk, and granulated sugar until sugar is completely dissolved and the milk is just barely luke warm. Whisk in the egg yolks.  Set mixture in the fridge and wait until the fig mixture is cooled. 
                    </p>
                    <p className="instructions">
                        Using an ice cream machine, pour liquids into the frozen basin and process according to manufacturer instructions, ie. let spin and thicken for 20 minutes before adding mascarpone, fig jam mixture, and the nuts. Continue to process for +/- 10 minutes. Pour semi-frozen mixture into a pyrex dish or glass tupperware. Freeze for at least two hours before serving.
                    </p>
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