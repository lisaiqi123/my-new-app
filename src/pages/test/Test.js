
import React, { Component } from 'react';
 
class Test extends Component {
    constructor (props) {
        super(props)
        console.log(props)
    }
 
   render() {
       return (
           <div id="test-container">
               <p>search:{this.props.location.search} </p>
               <p>state:{this.props.location.state.mold} </p>
               <p>state:{this.props.location.aa} </p>
               <div onClick={() =>  this.props.history.goBack()}>返回上一页</div>
               <div onClick={() => this.props.history.push('/member/12')}>message页面</div>
           </div>
       );
   }
}

export default Test;