import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { APP, HOMEPAGE, LOGIN } from 'Routes/route';
import Application from 'pages/App/index'
import Login from 'pages/Auth/index'
import Homepage from 'pages/Home/index'
import ProtectedRoute from 'utilities/ProtectedRoute';

function App() {
  return (
    <BrowserRouter >
      <Switch>
        <Route exact path={HOMEPAGE} component={Homepage} />
        <Route exact path={LOGIN} component={Login} />
        <ProtectedRoute exact path={APP} component={Application} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
