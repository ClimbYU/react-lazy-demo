### react实现简单的懒加载
 使用react实现懒加载，元素进入可视区内进行加载
### 原理
    getBoundingClientRect()方法。这个方法返回会一个矩形对象，包含 4 个属性：left、top、right 和 bottom。这些属性给出了
    元素在页面中相对于视口的位置，进而可以判断当前元素是否在可视区内
```javascript 
    let {top,height} = node.getBoundingClientRect()
    //获取可视区域高度
    let visableHeight = window.innerHeight || document.documentElement.clientHeight

    return top < visableHeight &&  top + height > 0
```
##### TODO：
* 父元素（不止windows）的滚动也可实现
* 做成可配置，如：是否只进行一次懒加载
* 节流
