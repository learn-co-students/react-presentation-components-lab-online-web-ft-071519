import React, { Component } from "react";

export default class SimpleComponent extends Component {
    constructor() {
        super();
        this.state = {
            mood: "happy"
        }
    }

    handleClick() {
        console.log("Hit handleClick")
        console.log(this)
        if (this.state.mood === "happy") {
            return this.setState({
                mood: "sad"
            })
        } else if (this.state.mood === "sad") {
            return this.setState({
                mood: "happy"
            })
        }
    }

    render() {
        console.log("Hit SimpleComponent")
        console.log(this.state.mood)
        return (
            <div onClick={this.handleClick.bind(this)}>
                <button>{this.state.mood}</button>
            </div>
        )
    }
}