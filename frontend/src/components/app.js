import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import LiveChat from './livechat/livechat';
import PostsContainer from './posts/posts_container';
import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import InboxContainer from '../components/inbox/inbox_container';
import PostComposeContainer from './posts/post_compose_container';
import PostShow from './posts/post_show';
import Player from './player/player';
import Resources from './resources/resources';
import About from './aboutUs/about_container'

const App = () => (
  <div>
    {/* <Player /> */}
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />

      <ProtectedRoute exact path="/posts" component={PostsContainer} />
      <ProtectedRoute exact path="/inbox" component={InboxContainer} />
      <ProtectedRoute exact path="/new_post" component={PostComposeContainer} />
      <ProtectedRoute exact path= "/posts/:postId" component={PostShow} />
      <Route path="/resources" component={Resources} />
      <Route path="/about_us" component={About} />
      {/* <ProtectedRoute exact path="/posts" component={Player} /> */}
    </Switch>
    <LiveChat />
  </div>
);

export default App;