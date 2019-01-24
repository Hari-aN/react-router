import * as React from 'react';
import { HashRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";
import { RouteComponentProps } from 'react-router';
import { jsonData } from '../constant';
import './../App.css';

class App extends React.Component<RouteComponentProps> {

  gotoRoute = (routePath:string) => {
    this.props.history.push(routePath);
  }
 setAllRoute = () => {
    
  }  

  render() {
    const routes = (
      jsonData.map((data,index) => {
        return (<Route key={index} path={data.path} exact component={data.component} />
        );
      })
    );
    return (
      <div>
        {
          jsonData.map((data,index) => {
            return (
              // <Link to={data.path}>
              //   <button>{data.name}</button>
              // </Link>
              <button key={index} onClick={() => this.gotoRoute(data.path)}>{data.name}</button>

            );
          })
        }
        <Switch>
          {
            routes
          }
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
