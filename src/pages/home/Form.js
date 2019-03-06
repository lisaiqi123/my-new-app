import React, { Component } from 'react';
import './home.css';

class Home extends Component {
    constructor(props) { //构造函数
        super(props);
        this.state = { userInput: '' };
    }
    deleteLi(i) {
        delete this.props.fruits[i]
        this.setState({
            fruits: this.props.fruits[i]
        })
    }
    addLi() {
        var i = this.props.fruits.length;
        this.props.fruits[i]="child"+i;
        this.setState({
            fruits: this.props.fruits[i]
        })
    }
    clearAndFocusInput() {
        this.setState({ userInput: '' }, () => {
          this.refs.theInput.focus();
        });
    }
    handleChange(e) {
        this.setState({ userInput: e.target.value });
    }
    
    render() {
        return (
            <div>
                <button onClick={this.addLi.bind(this)}>添加</button>
                <ul>
                    {this.props.fruits.map((item, i) => {
                        return (
                            <li key={i}>
                                <span>{item}-{i}</span>
                                <span onClick={this.deleteLi.bind(this, i)}>删除</span>
                            </li>
                        );
                    })}
                </ul>
                <div onClick={this.clearAndFocusInput.bind(this)}>
                    Click to Focus and Reset
                </div>
                <input
                    ref="theInput"
                    value={this.state.userInput}
                    onChange={this.handleChange.bind(this)}
                />
            </div>
        );
    }
}

export default Home;