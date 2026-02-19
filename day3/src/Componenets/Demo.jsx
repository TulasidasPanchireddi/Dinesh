import { Component } from "react";

class Demo extends Component{
    render(){
        return(
            <>
            <h4>Im from Demo class Component - {this.props.username}</h4>
            age is {this.props.age}
            </>
        )
    }
}
export default Demo

Demo.defaultProps = {
    username : "username",
    age : 0
}
