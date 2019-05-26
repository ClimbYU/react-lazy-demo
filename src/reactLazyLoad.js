import React from 'react'
import ReactDom from 'react-dom';

let listeners = []


//判断可视区域是否可见
function checkVisable(component){
    let visable = checkNormalVisable(component)

    if(visable){
        component.visable = true
        component.forceUpdate();
    }else{
        listeners.push(component)

    }

}
function checkNormalVisable(component){
    let node = ReactDom.findDOMNode(component)
    //获取元素位置
    let {top,height} = node.getBoundingClientRect()
    //获取可视区域高度
    let visableHeight = window.innerHeight || document.documentElement.clientHeight

    return top < visableHeight &&  top + height > 0

}

function handler(){
    listeners.map((item,index) => {
        checkVisable(item)
        // 懒加载完之后删除,否则页面会非常卡顿
        listeners.splice(index, 1);
    })
}


function getParent(component){
    return window
}

// function debonce

class LazyLoad extends React.Component{
    constructor(props){
        super(props)
        this.visable = false
    }
    componentDidMount(){
        checkVisable(this)
        let parent = getParent(this)
        parent.addEventListener("scroll",handler,true)
    }
    shouldComponentUpdate() {
        return this.visible;
      }
    render(){
        return this.visable ?  this.props.children : <div style={{height:'200px'}}>

        </div>
    }
}

export default LazyLoad