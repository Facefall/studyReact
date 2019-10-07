import React, {Component} from 'react';
import './App.css';

class App extends Component {
    state = {
        name: '',
        gender: '0',
        city: '',
        citylist: ['杭州', '北京', '上海', '长沙'],
        hobby: [
            {
                title: '吃饭',
                checked: true
            },
            {
                title: "睡觉",
                checked: false
            },
            {
                title: "打豆豆",
                checked: false
            }
        ],
        text:''
    };

    handleUserName = (e) => {
        this.setState({
            name: e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    };

    handleGender = (e) => {

        this.setState({
            gender: e.target.value
        })
    };

    handleCity = (e) => {
        console.log(e.target.value);
        this.setState({
            city: e.target.value
        })
    };

    handleHobby = (index, e) => {
        // console.log(e, index);
        let hobby = this.state.hobby;
        hobby[index].checked = !hobby[index].checked;
        this.setState({
            hobby
        });

    };
    handleInfo = (e) =>{
        this.setState({
            text:e.target.value
        })
    };

    render() {
        return (
            <div>
                {/*
                                受控表单组件
                                让react管理表单的数据,监视表单空间
                                非受控(非约束性)表单组件
                                react不知道表单中用户输入的内容,没有管理
                                不知道用户输入的值

                                开发时不会用表单进行提交
                                一般用ajax,axios,fetch jquery
                        */}
                {/*<input type="text" defaultValue={"asd"} onChange={this.handleChange}/>*/}

                <form action="http://baidu.com" onSubmit={this.handleSubmit}>
                    <h2>Form</h2>
                    <br/>
                    <hr/>
                    <br/>
                    用户名:<input type="text" onChange={this.handleUserName}/>
                    <br/>
                    <hr/>
                    <br/>
                    性别:
                    <input type="radio" value={'0'} checked={this.state.gender === '0'} onChange={this.handleGender}/>男
                    <input type="radio" value={'1'} checked={this.state.gender === '1'} onChange={this.handleGender}/>女
                    <br/>
                    {
                        this.state.citylist.length > 0 && (
                            <select value={this.state.city} onChange={this.handleCity}>
                                {
                                    this.state.citylist.map((item, index) => {
                                        return <option key={index} value={item}>{item}</option>
                                    })
                                }
                            </select>
                        )
                    }
                    <br/>
                    <hr/>
                    <br/>
                    爱好:
                    {
                        this.state.hobby.length > 0 && (
                            this.state.hobby.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <input
                                            key={index}
                                            type="checkbox"
                                            checked={item.checked}
                                            value={item.title}
                                            onChange={this.handleHobby.bind(this, index)}
                                        />
                                        {item.title}
                                    </div>

                                )
                            })
                        )
                    }
                    <br/>
                    <textarea value={this.state.text} onChange={this.handleInfo}></textarea>
                    <input type="submit" value={"提交"}/>
                </form>
            </div>
        )
    }

}

export default App;
