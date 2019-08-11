import React from 'react'
import {Redirect, Switch, Route} from 'react-router-dom'

import Home from '../components/home/Home'
import UserCrud from '../components/user/UserCrud'

export default props =>
<Switch>
    <Route exact path='/' component={Home} />
    <Route path='/users' component={UserCrud} />
    <Redirect from='*' to='/' />
</Switch>
