import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.scss';
import './search.scss';
import App from '@/components/App';
import Detail from '@/components/detail';
import Login from '@/components/login';
import Register from '@/components/register';
import Search from '@/components/search';
import registerServiceWorker from '@/registerServiceWorker';


ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/search" component={Search} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      {/* <Route path="/detail" component={Detail} /> */}
      <Route path="/detail/:goodsID" component={Detail} />
      <Route path="/" component={App} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
