import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { APP, HOMEPAGE, LOGIN } from 'Routes/route';
import Application from 'pages/App/index'
import Login from 'pages/Auth/index'
import Homepage from 'pages/Home/index'
import AlgoraCall from 'agora';
import Call from 'agora/call';

function App() {
  return (
    <BrowserRouter >
      <Switch>
        <Route exact path={HOMEPAGE} component={Homepage} />
        <Route exact path={LOGIN} component={Login} />
        <Route exact path={APP} component={Application} />
        <Route exact path='/algora' component={AlgoraCall} />
        <Route exact path='/call' component={Call} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
