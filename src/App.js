import { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import MainNavigation from "./components/layout/MainNavigation";
import AllQuotes from "./components/pages/AllQuotes";
import NewQuote from "./components/pages/NewQuote";
import QuoteDetails from "./components/pages/QuoteDetails";
function App() {
  return (
      <Layout>
      <Switch>
      {/* <Route path="/" exact>
        <Redirect to="/quotes"/>
      </Route> */}
      <Route path="/quotes" exact>
        <AllQuotes />
      </Route>
      <Route path="/quotes/:quoteid">
        <QuoteDetails />
      </Route>
      <Route path="/new-quote">
        <NewQuote />
      </Route>
    </Switch>
    </Layout>    
  );
}

export default App;
