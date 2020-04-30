import { createAction, createActions, combineActions } from 'redux-actions';

/*
 * action 类型
 */

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 * 其它的常量
 */

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action 创建函数
 */

// export function addTodo(text) {
//     return { type: ADD_TODO, text }
// }

// 最原始的使用方法
export function toggleTodo(index) {
    return { type: TOGGLE_TODO, index }
}

export function setVisibilityFilter(filter) {
    return { type: SET_VISIBILITY_FILTER, filter }
}

// thunk 的使用方法
// export function asyncAction() {
//     return (dispath, getState) => {
//         const state = getState();
//         return sleep(1000).then(res=>{
//             dispath({type:'set-name'}) // 触发reducer
//             console.log('then')
//         })

//         console.log('end fetch')
//     }
// }

const sleep = time => new Promise(res=>setTimeout(res,time))


// promise 的使用方法
export const asyncAction = createAction('asyncAction',async (param)=>{
    console.log(param)
    // await fetch(`http://www.reddit.com/r/react.json`)
    console.time()
    await sleep(2000)
    console.timeEnd()
    console.log('async end')
    return 12
})


// redux-actions 简化action
export const {addTodo,deleteTodo} = createActions({
    'addTodo': payload => (payload ),
    'deleteTodo': payload => ( payload )
}) // action 的 type 就是 add-todo

export const SetName = createAction('set-name')