import React, { Component } from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import Form from './Form';
class Home extends Component {
    
    constructor(props) { //构造函数
        super(props);
        console.log(props)
    }
    render() {
        return (
            <div>
                <div id="home-container">
                    <Link to={{ pathname: '/test', search: '?name=homename', state: { mold: 'add' }, aa:'dddd' }} className="home-link">
                        点击跳转到路由参数search，state使用
                    </Link>
                    <Form fruits={["child1","child2","child3"]}/>
                </div>
            </div>
        );
    }
}

export default Home;