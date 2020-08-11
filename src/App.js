import React from 'react';
import Navigation from './Components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Resume from './Pages/Resume';
import Container from 'react-bootstrap/Container';
import { TitleComponent } from './Components/TitleComponent'



class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <TitleComponent title="Shawn Stawiarski | Software Engineer" />
        <Container>
          <div>
            <Navigation />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/contact" component={About} />
              <Route path="/projects" component={Projects} />
              <Route path="/resume" component={Resume} />
            </Switch>
          </div>
          <footer>
            <p>Copyright &copy; 2020 Shawn Stawiarski</p>
          </footer>
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;
