import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core'
import Header from './components/Header'
import Progress from './components/Progress'

const generateClassName = createGenerateClassName({
  productionPrefix: 'co'
})

const MarketingLazy = React.lazy(() => import('./components/MarketingApp'))
const AuthLazy = React.lazy(() => import('./components/AuthApp'))

export default () => {
  return <StylesProvider generateClassName={generateClassName}>
    <BrowserRouter>
      <div>
        <Header />
        <React.Suspense fallback={<Progress />}>
          <Switch>
            <Route path="/auth" component={AuthLazy} />
            <Route path="/" component={MarketingLazy} />
          </Switch>
        </React.Suspense>
      </div>
    </BrowserRouter>
  </StylesProvider>
}