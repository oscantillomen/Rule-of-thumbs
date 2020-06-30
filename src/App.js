import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./components/fontAwesomeIcons";
import { render } from "react-dom";
import Footer from "./components/Footer";
import PreviousTrials from "./components/PreviousTrials";
import Main from "./components/Main";
import Header from "./components/Header";
import { Router } from "@reach/router";
import "./style.scss";

const App = () => {
  const Home = () => (
    <>
      <Main />
      <PreviousTrials />
    </>
  );

  const PastTrials = () => <h1 className="title">Past Trials</h1>;
  const HowItWorks = () => <h1 className="title">How It Works</h1>;
  const LogIn = () => <h1 className="title">Log in</h1>;
  const Search = () => <h1 className="title">Search</h1>;
  const Terms = () => <h1 className="title">Terms and Conditions</h1>;
  const PrivacyPolicy = () => <h1 className="title">PrivacyPolicy</h1>;
  const Contact = () => <h1 className="title">Contact US</h1>;

  return (
    <Provider store={store}>
      <React.StrictMode>
        <Header />
        <Router>
          <Home path="/" />
          <PastTrials path="/past_trials" />
          <HowItWorks path="/how_it_works" />
          <LogIn path="/login" />
          <Search path="/search" />
          <Terms path="/terms" />
          <PrivacyPolicy path="/privacy" />
          <Contact path="/contact" />
        </Router>
        <Footer />
      </React.StrictMode>
    </Provider>
  );
};

render(<App />, document.getElementById("root"));
