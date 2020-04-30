import React, { Component } from 'react';
import {
    Prompt,
    withRouter,
    generatePath
} from "react-router-dom";
class Page2 extends Component {

    componentDidMount() {
        const match = this.props.match
        console.log(match)
        let a = generatePath("/user/:id/:entity(posts|comments)", {
            id: 1,
            entity: "posts"
        });
        console.log(a)
    }

    render() {
        return (
            <div>page2
                <Prompt message="Are you sure you want to leave?" />
            </div>
        )
    }

}

export default withRouter(Page2)