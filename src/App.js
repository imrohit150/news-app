import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {

  const [progress, setProgress] = useState(0)
  const [mode, setMode] = useState("Dark");

  const toggleMode = () => {
    if (mode === "Dark") {
      setMode("light")
      document.body.style.backgroundColor = "#2D3035"
    }
    else {
      setMode("Dark")
      document.body.style.backgroundColor = "white"
    }
  }

  return (
    <div>
      <Router>
        <Navbar toggleMode={toggleMode} mode={mode}/>
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
        <Switch>
          <Route exact path="/"><News setProgress={setProgress} key="general" pageSize={9} country="in" category="general" mode={mode} /></Route>
          <Route exact path="/business"><News setProgress={setProgress} key="businesss" pageSize={9} country="in" category="business" mode={mode} /></Route>
          <Route exact path="/science"><News setProgress={setProgress} key="science" pageSize={9} country="in" category="science" mode={mode} /></Route>
          <Route exact path="/entertainment"><News setProgress={setProgress} key="" pageSize={9} country="in" category="entertainment" mode={mode} /></Route>
          <Route exact path="/sports"><News setProgress={setProgress} key="entertainment" pageSize={9} country="in" category="sports" mode={mode} /></Route>
          <Route exact path="/health"><News setProgress={setProgress} key="health" pageSize={9} country="in" category="health" mode={mode} /></Route>
          <Route exact path="/technology"><News setProgress={setProgress} key="technology" pageSize={9} country="in" category="technology" mode={mode} /></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;

