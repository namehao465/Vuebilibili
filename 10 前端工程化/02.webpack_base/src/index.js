import $ from 'jquery'
import './css/1.css'
import './css/1.less'
import './css/1.scss'

$(function () {
    $('li:odd').css('backgroundColor','pink')
    $('li:even').css('backgroundColor','lightblue')
})

class Person {
    static info = 'aaa'
}

console.log(Person.info)



//导入Vue构造函数
import Vue from 'vue'
//导入App根组件
import App from './components/App.vue'

const vm = new Vue({
    //指定要控制的el区域
    el:"#app",
    //通过render函数渲染App根组件
    render:h=>h(App)
})