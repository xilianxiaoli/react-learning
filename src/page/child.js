
import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";

export default class Child extends Component {

    componentDidMount(){
        // let param = useParams()
        // console.log(param)
    }

    render(){
        return (
            <div>Child</div>
        )
    }
}

// export default function Child() {
//     // We can use the `useParams` hook here to access
//     // the dynamic pieces of the URL.
//     let param = useParams();
//     let match = useRouteMatch()
//     console.log(param, match)

//     return (
//         <div>
//             <h3>ID:</h3>
//         </div>
//     );
// }