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
                    <br/>
                    <hr/>
                </article>

        
                
            </div>
        );
    }
}