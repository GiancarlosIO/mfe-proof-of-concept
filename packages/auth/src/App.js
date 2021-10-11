import * as React from 'react';
import {
  Switch,
  Route,
  Router,
} from 'react-router-dom'
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import SignUp from './components/Signup';
import SignIn from './components/Signin'

const generateClassName = createGenerateClassName({
  productionPrefix: 'au',
})

export default ({ history, onSignin }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/auth/signup">
              <SignUp onSignIn={onSignin} />
            </Route>
            <Route path="/auth/signin">
              <SignIn onSignIn={onSignin} />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  )
}