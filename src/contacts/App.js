//import logo from "./logo.svg";
import React from "react";
import "./App.css";
import '../styles/style.css';
//import { useEffect } from "react";
import contact from "./contact";
import contactus from './contactus';
import Header from './Header';
//import { Header } from "semantic-ui-react";

function App() {
  // You can skip useEffect if you're not using TailwindCSS
  // Otherwise, for the production usage refer to https://tailwindcss.com/docs/installation
  // useEffect(() => {
  //   // if (document) {
  //   //   // const stylesheet = document.createElement("link");
  //   //   // stylesheet.rel = "stylesheet";
  //   //   // stylesheet.href = "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css";

  //   //   // document.head.appendChild(stylesheet);
  //   // }
  // }, []);

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div className="py-6">
          <Header />
          {/* <contact />
          <contactus /> */}
           <section className="page-content Alice-blue-bg">
        <div className="container">
            <div class="wraper-area box-bg-white margin-l-r-1">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="feedback-area grid-lg-margin-r-1">
                            <div class="">
                                
                                <span class="display-block margin-b-1-half margin-left-5">Message</span>
                                <textarea rows="2" cols="20" id="TextBoxMessage" class="margin-b-1 box-bg-white" placeholder="Your Message . . ."></textarea>

                                <div class="row margin-b-1">
                                    <div class="col-lg-3">
                                        <input type="submit" class="btn btn-custom-round" value="Send" onclick="SendMessage()" />
                                    </div>
                                    <div class="col-lg-9 text-right">
                                    </div>
                                </div>
                                <span id="lblOutputSuccess" class="text-success"></span>
                                <span id="lblOutputError" class="text-danger"></span>

                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    </section>
        </div>
      </header>
    </div>
  );
};

export default App;