import * as React from 'react';
import { BrowserRouter, Route, Switch, Router, Redirect } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core'
import {createBrowserHistory} from 'history'
import Header from './components/Header'
import Progress from './components/Progress'

const generateClassName = createGenerateClassName({
  productionPrefix: 'co'
})

const MarketingLazy = React.lazy(() => import('./components/MarketingApp'))
const AuthLazy = React.lazy(() => import('./components/AuthApp'))
const DashboardLazy = React.lazy(() => import('./components/DashboardApp'))

const history = createBrowserHistory()
export default () => {
  const [isSignin, setIsSignin] = React.useState(false);

  React.useEffect(() => {
    if (isSignin) {
      history.push('/dashboard')
    }
  }, [isSignin])

  return <StylesProvider generateClassName={generateClassName}>
    <Router history={history}>
      <div>
        <Header isSignin={isSignin} onSignOut={() => setIsSignin(false)} />
        <React.Suspense fallback={<Progress />}>
          <Switch>
            <Route path="/auth">
              <AuthLazy onSignin={() => setIsSignin(true)} />
            </Route>
            <Route path="/dashboard" >
              {!isSignin ? <Redirect to="/" /> : null}
              <DashboardLazy />
            </Route>
            <Route path="/" component={MarketingLazy} />
          </Switch>
        </React.Suspense>
      </div>
    </Router>
  </StylesProvider>
}