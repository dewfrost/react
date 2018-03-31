import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.scss';
import './login.scss'
import './register.scss'
import App from '@/components/App';
import Detail from '@/components/detail';
import Login from '@/components/login';
import Register from '@/components/register';
import registerServiceWorker from '@/registerServiceWorker';


/*function render() {
    ReactDOM.render(
        <Router>
            <Switch>
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                {/!* <Route path="/detail" component={Detail} /> *!/}
                <Route path="/detail/:goodsID" component={Detail} />
                <Route path="/" component={App} />
            </Switch>
        </Router>,
        document.getElementById('root')
    )
}
render();
store.subscribe(render);*/

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/detail" component={Detail} />
      <Route path="/detail/:goodsID" component={Detail} />
      <Route path="/" component={App} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();

