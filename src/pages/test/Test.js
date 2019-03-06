
import React, { Component } from 'react';
class Test extends Component {
    constructor (props) {
        super(props)
        console.log(props)
        this.state={count:0}
    }
 
    minus(i){
        i--;
        this.setState({
            count:i
        })
    }
    add(i){
        i++
        this.setState({
            count:i
        })
        
    }
    render() {
        return (
            <div id="test-container">
                    <p>search:{this.props.location.search} </p>
                    <p>state:{this.props.location.state.mold} </p>
                    <p>state:{this.props.location.aa} </p>
                    <div onClick={() =>  this.props.history.goBack()}>返回上一页</div>
                    <div onClick={() => this.props.history.push('/member/12')}>message页面</div>
                    <div>  
                        <button onClick={this.minus.bind(this,this.state.count)}>减</button>
                        <span>{this.state.count}</span>
                        <button onClick={this.add.bind(this,this.state.count)}>加</button>
                    </div>
            </div>
        );
    }
}

export default Test;