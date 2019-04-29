import React from 'react';
import { Switch, Route } from 'react-router-dom'
import PostsList from './containers/PostsList'
import About from './components/About'
import PostContainer from './containers/PostContainer';

const Main = () => {
    return (
        <Switch>
            <Route exact path="/" component={PostsList} />
            <Route path="/about" component={About} />
            <Route path='/posts/:id' component={PostContainer} />
        </Switch>
    )
}

export default Main;