import React, { Fragment } from 'react';

import {
    BrowserRouter,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import loadable from '@loadable/component'

// import Page from './page/page'
// import Page1 from './page/page1'
// import Page2 from './page/page2'
import Child from './page/child'
import Child1 from './page/child1'
import NoMatch from './page/noMatch'

const Page = loadable(() => import('./page/page'))
const Page1 = loadable(() => import('./page/page1'))
const Page2 = loadable(() => import('./page/page2'))

const Loadable = loadable((props) => import(`${props.path}`))

const AsyncPage = loadable(props => import(`${props.page}`))



export default function () {
    return (
        <Switch>
            <Redirect exact from='/' to='/page' />
            <Route path='/page'> <AsyncPage page='./page/page' /></Route>
            {/* <Route exact path='/page/11'><Page name='11' /></Route> */}
            <Route exact path='/page1'><Loadable path='./page/page1' /></Route>
            <Route path='/page2' component={(props)=> { return <AsyncPage {...props} page='./page/page2' />}}></Route>
            <Route path='/page3' render={(...param) => {
                console.log(param)
                return (<div>xxxx</div>)
            }} ></Route>
            {/* <Switch>
                <Route path="/:id" children={<Child></Child>}></Route>
            </Switch> */}
            <Route path="*">
                <NoMatch />
            </Route>
        </Switch>
    )
}

const routes = [
    {
        path: '/page',
        component: Page
    },
    {
        path: '/page1',
        component: Page1,
        routes: [
            {
                path: '/page1/child',
                component: Child
            },
            {
                path: '/page1/:id',
                component: Child1
            }
        ]
    }
]

function routeConfig(routes) {
    return routes.map((route, index) => {
        return (
            <Route
                key={index}
                path={route.path}
                render={props => {
                    return <route.component {...props} routes={route.routes} />
                }}
            ></Route>
        )
    })
}

export {
    routeConfig,
    routes
}