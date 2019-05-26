import React, { Component } from 'react';
import LazyLoad from './src/reactLazyLoad'

class App extends Component {
  constructor(){
    super()
    this.state = {
      val:0
    }
  }
  render() {
    let arr = Array.apply(null, Array(200))
    const content = arr.map((item,index) => {
      return <LazyLoad key={index}>
      <div   onClick={this.onclick} className="box">
      </div>
    </LazyLoad>
    })
    return (
      <div>
        {content}
      </div>
    );
  }
}

export default App;
