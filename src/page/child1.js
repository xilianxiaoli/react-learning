import React, { Component } from 'react';
import {
    useLocation
} from "react-router-dom";
export default class Child1 extends Component {

    useQuery() {
        return new URLSearchParams(useLocation().search);
    }

    componentDidMount(){
        // console.log(this.useQuery())
    }

    render() {
        // console.log(this.useQuery())
        return (
            <div>Child1</div>
        )
    }

}