import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Navbar } from './app/Navbar'
import PostsList from './app/features/posts/PostsList'
import AddPostForm from './app/features/posts/AddPostForm'
import SinglePostPage from './app/features/posts/SinglePostPage'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <section>
                <AddPostForm />
                <PostsList />
              </section>
            )}
          />
          <Route exact path="/posts/:postId" component={SinglePostPage} />

          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
