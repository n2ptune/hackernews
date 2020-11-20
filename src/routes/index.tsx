import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ViewLayout from '../views'

const Router: React.FC = ({ children }) => (
  <BrowserRouter>
    {children}
    <Switch>
      <Route path="/" exact>
        <ViewLayout target="newStories" />
      </Route>
      <Route path="/news" exact>
        <ViewLayout target="newStories" />
      </Route>
      <Route path="/news/:id">
        <ViewLayout target="newStories" />
      </Route>
      <Route path="/top" exact>
        <ViewLayout target="topStories" />
      </Route>
      <Route path="/top/:id">
        <ViewLayout target="topStories" />
      </Route>
      <Route path="/best" exact>
        <ViewLayout target="bestStories" />
      </Route>
      <Route path="/best/:id">
        <ViewLayout target="bestStories" />
      </Route>
      <Route path="/ask" exact>
        <ViewLayout target="askStories" />
      </Route>
      <Route path="/ask/:id">
        <ViewLayout target="askStories" />
      </Route>
      <Route path="/job" exact>
        <ViewLayout target="jobStories" />
      </Route>
      <Route path="/job/:id">
        <ViewLayout target="jobStories" />
      </Route>
      <Route path="/show" exact>
        <ViewLayout target="showStories" />
      </Route>
      <Route path="/show/:id">
        <ViewLayout target="showStories" />
      </Route>
    </Switch>
  </BrowserRouter>
)

interface TypeRoute {
  path: string
  name: string
  exact?: boolean
}

const routes: TypeRoute[] = [
  {
    path: '/',
    name: 'Main',
    exact: true
  },
  {
    path: '/top',
    name: 'Top'
  },
  {
    path: '/best',
    name: 'Best'
  },
  {
    path: '/ask',
    name: 'Ask'
  },
  {
    path: '/job',
    name: 'Job'
  },
  {
    path: '/show',
    name: 'Show'
  }
]

export { routes }

export default Router
