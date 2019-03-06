import React, { Component } from 'react';

class Member extends Component {
    constructor (props) {
        super(props)
        console.log(props)
    }
 
   render() {
       return (
            <div onClick={() =>  this.props.history.goBack()}>
                返回上一页
                <h3>Message{this.props.match.params.id}</h3>
            </div>
       );
   }
}

export default Member;