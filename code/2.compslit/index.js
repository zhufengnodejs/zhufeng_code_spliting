import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from './components/Loading';
const AsyncHome = Loadable({
  loader: () => import('./components/Home'),
  loading: Loading
})
const AsyncUser = Loadable({
  loader: () => import('./components/User'),
  loading: Loading
})

ReactDOM.render(
  <Router>
    <div>
      <Link to="/">首页</Link>
      <Link to="/user">用户页</Link>
      <Route exact path='/' component={AsyncHome}/>
      <Route exact path='/user' component={AsyncUser}/>
    </div>
  </Router>
  , document.getElementById('root'));

//http://blog.csdn.net/beijiyang999/article/details/78591398
//http://www.jianshu.com/p/697669781276