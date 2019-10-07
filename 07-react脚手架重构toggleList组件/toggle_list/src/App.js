import React,{Component} from 'react';
import Content from "./component/content/index.jsx";
import data from "./static/js/data.js";
import './static/css/App.css';

class App extends Component{
  state = {
    arr : [false,true,false]
  };

  getData = ()=>{
    return data
  };

  handleClick(i){
    const arr = this.state.arr.map((item,index)=>{
      if(index === i)  return true;
      return  false;
    });
    this.setState({
      arr
    });
  };

  render() {
    let data = this.getData();
    return (
        <div>
          {
            Object.keys(data).map((item,index)=>{
              return (
                  <Content
                      show = {this.state.arr[index]}
                      handleChange={this.handleClick.bind(this)}
                      key = {index}
                      index = {index}
                      {...data[item]}
                  ></Content>
              )
            })
          }
        </div>
    );
  }
}


export default App;
