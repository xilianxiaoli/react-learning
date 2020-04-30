import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
    useParams, // 函数组件
    useRouteMatch // 函数组件
} from "react-router-dom";
export default class Page extends Component {

    componentDidMount() {
        
    }

    fn = ()=>{
    }

    render() {

        return ( 
            <div onClick={this.fn()} >page {this.props.name}</div>
        )
    }

}