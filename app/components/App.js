var React = require('react');
var Popular = require('./Popular');
var Home = require('./Home');
var Battle = require('./Battle');
var Results = require('./Results');

var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter; // because we're on the web
var Route = ReactRouter.Route;
var Nav = require('./Nav');
var Switch = ReactRouter.Switch;

// modern way to create a react component
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/battle" component={Battle} />
            <Route path='/battle/results' component={Results} />
            <Route path="/popular" component={Popular} />
            <Route render={function () {
              return <p>Not Found</p>
            }} />
          </Switch>
        </div>
      </Router>
    )
  }
}

module.exports = App;