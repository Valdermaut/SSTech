import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "react-mdl/extra/material.css";
import "react-mdl/extra/material.js";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/Main";
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className="demo-big-content"  >
      <Layout >
        <Header title="SS TECH" scroll style={{background:'#98EECF',position:'sticky',top:'0'}}>
          <Navigation>
          <Link to="/Landing">Home</Link>
          <Link to="/Product">Products</Link>
          <Link to="/Services">Services</Link>
          <a href="#">Discover SS Tech</a>
          </Navigation>
        </Header>
        <Drawer title="SS TECH">
          <Navigation>
          <Link to="/Landing">Home</Link>
          <Link to="/Product">Products</Link>
          <Link to="/Services">Services</Link>
          <a href="#">Discover SS Tech</a>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>

      
    </div>
  );
}

export default App;