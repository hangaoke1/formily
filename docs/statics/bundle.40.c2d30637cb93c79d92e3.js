(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{136:function(e,r,t){var n={"./bash":122,"./bash.js":122,"./css":123,"./css.js":123,"./htmlbars":124,"./htmlbars.js":124,"./javascript":125,"./javascript.js":125,"./scss":126,"./scss.js":126,"./typescript":127,"./typescript.js":127};function a(e){var r=s(e);return t(r)}function s(e){if(!t.o(n,e)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=s,e.exports=a,a.id=136},88:function(e,r,t){"use strict";var n=t(132),a=(t(133),t(134)),s=(t(135),function(){return n.createElement(n.Fragment,{},n.createElement("h1",{id:"registerformfields",className:"react-demo-h1"},"registerFormFields"),n.createElement("h2",{id:"介绍",className:"react-demo-h2"},"介绍"),n.createElement("p",{className:"react-demo-p"},"批量注册一个表单字段组件"),n.createElement("h2",{id:"类型描述",className:"react-demo-h2"},"类型描述"),n.createElement(a,{code:"type registerFormField(\n   [name : String] : Function \n)\n",justCode:!0,lang:"typescript"}),n.createElement("h2",{id:"依赖",className:"react-demo-h2"},"依赖"),n.createElement(a,{code:"import {registerFormFields} from '@uform/react'\n",justCode:!0,lang:"javascript"}),n.createElement("h2",{id:"api",className:"react-demo-h2"},"API"),n.createElement("blockquote",{className:"react-demo-blockquote"},n.createElement("p",{className:"react-demo-p"},"注册的组件将会接收以下属性列表")),n.createElement(a,{code:"type FieldRenderProps {\n   name                : String,//字段数据路径\n   path                : Array<String>,//字段数组数据路径\n   value               : any,//字段值\n   errors              : Array<String>,//字段错误消息集合\n   editable            : Boolean | Function,//字段是否可编辑\n   locale              : Object,//国际化文案对象\n   loading             : Boolean,//是否处于加载态\n   schemaPath          : Array<String>,//schema path,考虑到有些schema其实是不占数据路径的，所以这个路径是真实路径\n   getSchema(path) : Object, //根据路径获取schema\n   renderField(childKey : String,reactKey : String | Number) : ReactElement,//根据childKey渲染当前字段的子字段\n   renderComponent(props : Object) : ReactElement,//渲染当前字段的组件，对于x-render来说，可以借助它快速实现渲染包装功能\n   getOrderProperties() : Array<Object>,//根据properties里字段的x-index值求出排序后的properties\n   mutators            : Mutators,//数据操作对象\n   schema              : Object   \n}\n\ntype Mutators {\n   change(value : any),//改变当前字段值\n   dispatch(name : String,payload : any),//触发effect事件\n   errors(errors : String | Array<String>,[...formatValue : String | Number]),//设置当前字段的错误消息\n   push(value : any),//对当前字段的值做push操作\n   pop(),//对当前字段的值做pop操作\n   insert(index : Number,value : any),//对当前字段的值做insert操作\n   remove(name : any),//对当前字段的值做remove操作\n   unshift(value : any),//对当前字段值做unshift操作\n   shift(),//对当前字段值做shift操作\n   move(fromIndex : Number, toIndex : Number)//对当前字段值做move操作\n}\n",justCode:!0,lang:"typescript"}),n.createElement("h2",{id:"用例",className:"react-demo-h2"},"用例"),n.createElement(a,{code:"import {registerFormFields,connect} from '@uform/react'\n\nregisterFormFields({\n  string:connect()(props => <input {...props} value={props.value || ''} />)\n})\n",justCode:!0,lang:"javascript"}))});s.meta={username:"zhili.wzl",email:"wangzhili56@126.com"},e.exports=s}}]);