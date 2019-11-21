import React, { Component } from "react";


// With functional components there is no need for "this".
const SimplerComponent = props => <div onClick={props.handleClick}> I am just happy.</div>

export default SimplerComponent;


// export default class SimplerComponent extends Component {

    // changeText() {
    //     const sentence = document.getElementById("sentence")
    //     sentence.innerHTML = "I am just sad."
    // }

    // render() {
    //     console.log("Hit SimplerComponent")
    //     return (
    //         <div onClick={this.changeText.bind(this)}>
    //             <span id="sentence">"I am just happy."</span>
    //         </div>
    //     )
    // }
// }

