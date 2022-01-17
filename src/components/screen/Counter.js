import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             counterData:0 ,
             percentage:0
        }
        this.demo = this.demo.bind(this)
    }
    
     demo = () => {
       
        console.log("demo function call")
        
        this.setState({
            counterData:this.state.counterData+1
            
        })
    }
    
    render() {
        return (
            <div>
                <button onClick={this.demo}>Click</button>
                {
                    this.state.counterData
                }
            </div>
        )
    }
}
