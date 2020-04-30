import { combineReducers } from 'redux'
import { handleActions, handleAction, combineActions } from 'redux-actions';

import {
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER,
    VisibilityFilters
} from './action'
const { SHOW_ALL } = VisibilityFilters

function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo
            })
        case 'add-todo':
            return [
                ...state,
                {
                    addText: action.payload
                }
            ]
        default:
            return state
    }
}



// let reducer = handleAction(  //简化了 action 的多个判断写法
//     'add-todo',
//     (state, action) => {
//         console.log(state, action)  // state 只是当前 reducer 关联的对象，没法获取到其他的state
//         return [
//             ...state,
//             {
//                 addText: action.payload
//             }
//         ]
//     },
//     []
// )

let name = handleAction(
    'set-name',
    (state,action)=>{
        console.log('into setName')
        return {
            name:action.payload
        }
    },
    ''
)

let asyncNum = handleAction(
    'asyncAction',
    (state,action)=>{
        console.log(state,action)
        state++
        return state
    },
    0
)

let reducer = handleActions(
    {
        'addTodo':(state, action) => {
            console.log(state, action)
            return [
                ...state,
                {
                    addText: action.payload
                }
            ]
        },
        'deleteTodo':(state,action)=>{
            let pre = state.slice(0);
            pre.pop()
            return pre
        }
    },[]    
)

const todoApp = combineReducers({
    //   visibilityFilter,
    //   todoList:todos
    todoList:reducer,
    name,
    asyncNum
})

export default todoApp