import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Profile from "./pages/profile";
import { PrivateRouter } from "./components/router/privateRouter";
import {useSelector, useDispatch} from "react-redux"
import { apiSlice } from "./redux/apiSlice/userslice";
import Layout from "./components/layout";
import { UserSelector } from "./redux/apiSlice/userslice";
import { TweetDetails } from "./pages/tweetdetails";
import { CommentDetails } from "./pages/commentdetails";
import { Following } from "./pages/following";
import { Followers } from "./pages/followers";

function App() {

  const dispatch = useDispatch()
  const Auth = useSelector(state => state.userReducer.isAuthenticated)
  const { data, isLoading } = useSelector(UserSelector)

  if(Auth) dispatch(apiSlice.endpoints.loadUser.initiate())
  if(data) dispatch(apiSlice.endpoints.userProfile.initiate(data.username))

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <PrivateRouter path="/" exact component={Home} />
          <PrivateRouter path="/tweet/:id" exact component={TweetDetails} />
          <PrivateRouter path="/comment/:id" exact component={CommentDetails} />
          <PrivateRouter exact path="/profile/:username"  component={Profile} />
          <PrivateRouter path="/:username/:following" exact component={Following} />
          <PrivateRouter path="/:username/followers" exact component={Followers} />
          <Route exact path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
