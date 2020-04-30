import React, { Component } from 'react';
import {
    Link,
    BrowserRouter,
    Switch
} from "react-router-dom";
import { routeConfig } from '../router'
import { connect } from 'react-redux'
// import {addTodo} from '../redux/action'
import * as Actions from '../redux/action'
import store from '../redux/store'
const action = type => store.dispatch({ type })
class Page1 extends Component {

    constructor(props) {
        super(props)
    }

    async fn(){
        const {asyncAction,SetName} = this.props;
        // SetName('xiaoli')

        // thunk
        // asyncAction().then((res)=>{
        //     console.log('end')
        // })

        // promise 的使用方法
        const aa =  await asyncAction(234);
        aa.payload.then(()=>{
            console.log('eeeeee')
        })
    }

    saga(){
        action('USER_FETCH_REQUESTED')
    }

    addTodo(){
        const {addTodo,asyncAction,deleteTodo,SetName} = this.props;
        addTodo('form page') // { type: 'add-todo', payload: 'form page' }
    }

    deleteTodo(){
        const {addTodo,asyncAction,deleteTodo,SetName} = this.props;
        deleteTodo(1,2) // { type: 'add-todo', payload: 'form page' }
    }

    to(location) {
        // console.log(location)
        return '/page2'
        // return {
        //     ...location,
        //     pathname:'/page2'
        // }
    }

    render() {
        console.log(this.props)
        const {todoList=[],asyncNum} = this.props;
        return (
            <div>
                <div onClick={async ()=> await this.fn()}>page1 {asyncNum} </div>
                <div onClick={()=>this.addTodo()}>addTodo</div>
                <div onClick={()=>this.deleteTodo()}>deleteTodo</div>
                <ul>
                    <li>
                        <Link to={this.to} replace  >/page1/child</Link>
                    </li>
                    <li>
                        <Link to='/page1/child1' >/page1/child1</Link>
                    </li>
                </ul>
                {/* <Switch>
                    {routeConfig(routes)}
                </Switch> */}
                {
                    todoList.map(val=>{
                        return (<div>{val.addText}</div>)
                    })
                }
            </div>

        )
    }

}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch)=>{
    // debugger
    return {
        // addTodo:(text) => dispatch(addTodo(text))
        // ...Actions
    }
}

export default connect(
    mapStateToProps,
    Actions
)(Page1)