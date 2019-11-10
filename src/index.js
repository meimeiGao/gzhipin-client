/*
* 入口js
* */

import React from 'react';
import ReactDOM from 'react-dom';
import {Route,HashRouter,Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './redux/store'
import register from './containers/register/register'
import login from './containers/login/login'
import main from './containers/main/main'
ReactDOM.render((
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route path='/register' component={register}></Route>
        <Route path='/login' component={login}></Route>
        <Route component={main}></Route>{/*默认路由*/}
      </Switch>
    </HashRouter>
  </Provider>
  
  )
  ,document.getElementById('root'))