### 路由学习
Switch 按照上到下的进行匹配，匹配到就不往下查找
Route exact : 满足 path 的匹配后，就仅仅渲染当前的路由
Route path="/:id" 带参数、获取参数
Route children 是函数 可用于条件判断，渲染不同的组件
Route render 接收一个函数，可以直接渲染组件
withRouter 是一个高阶函数，通过包装可以将 match, location, and history 这三个参数传递给组件

connected-react-router TODO 将router数据同步到redux 中

### redux 
`action` 描述一个动作，动作名称，及将要更新的数据
`reducer` 根action需要更新的数据，更新至 state 中
store.dispatch(action) 发起一个 action

- react-redux 两者互通
- redux-actions 简化写法
- redux-thunk 通过 promise 回调的方式来控制异步，不支持 async/await
- redux-promise promise 的处理方法，支持 async/await
- redux-saga 生成器的处理方法

待完成：
1. 文档整理和源码分析

### dva
如何对数据流的封装

