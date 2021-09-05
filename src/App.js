import React, { useState } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {

  const [progress, setProgress] = useState(0);
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;

  return (

    <Router>

      <div>

        <LoadingBar
          color='#16a085'
          progress={progress}
          height={3}
        />

        <Navbar />

        <Switch>

          <Route exact path="/business"><News apiKey={apiKey} setProgress={setProgress} key='business' catagory='Business' /></Route>
          <Route exact path="/entertainment"><News apiKey={apiKey} setProgress={setProgress} key='entertainment' catagory='Entertainment' /></Route>
          <Route exact path="/health"><News apiKey={apiKey} setProgress={setProgress} key='health' catagory='Health' /></Route>
          <Route exact path="/science"><News apiKey={apiKey} setProgress={setProgress} key='science' catagory='Science' /></Route>
          <Route exact path="/sports"><News apiKey={apiKey} setProgress={setProgress} key='sports' catagory='Sports' /></Route>
          <Route exact path="/technology"><News apiKey={apiKey} setProgress={setProgress} key='technology' catagory='Technology' /></Route>
          <Route exact path="/"><News apiKey={apiKey} setProgress={setProgress} /></Route>

        </Switch>

      </div>

    </Router>

  )

}

export default App