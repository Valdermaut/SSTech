import React, { Component } from "react";
import "./product.css";
import bottom from './assets/bottom.png';
import {Footer,FooterDropDownSection,FooterLinkList,FooterSection} from 'react-mdl';
import park1 from './assets/park1.png';


class Product extends Component {
  render(){
    return(
      <div>
        <img src={bottom}></img>
        <div style={HeadStyle}><h1>Products</h1></div>

        <div>
          <h1><span style={parkStyle}>Smart Parking System</span></h1>
          <div class="park">
           <img src={park1}  class="park1"></img>
           <img src={park1}  class="park1"></img>
           <img src={park1} class="park1"></img>
           <img src={park1} class="park1"></img>

          </div>

        </div>

        <div>
        <h1><span style={parkStyle}>Home automation system </span></h1>
          <div class="home">
           
          </div>

        </div>

        <div>
        <h1><span style={parkStyle}>IOT enabled agriculture system</span></h1>
          <div class="farm">
           
          </div>

        </div>

        <div>
        <h1><span style={parkStyle}>Smart security & alarmed system </span></h1>
          <div class="secure">
           
          </div>

        </div>
        <Footer size="mega" id="foot">
    <FooterSection type="middle" >
        <FooterDropDownSection title="Services"  >
            <FooterLinkList>
                <a href="#">IOT Solutions</a>
                <a href="#">Web Solution</a>
                <a href="#">GUI Java Application</a>
                <a href="#">Technical Support</a>
            </FooterLinkList>
        </FooterDropDownSection>
        <FooterDropDownSection title="Products" >
            <FooterLinkList>
                <a href="#">Home automation system</a>
                <a href="#">Smart Parking System</a>
                <a href="#">IOT enabled agriculture system</a>
                <a href="#">Smart security & alarmed system</a>
            </FooterLinkList>
        </FooterDropDownSection>
        <FooterDropDownSection title="Discover Us">
        </FooterDropDownSection>
        <FooterDropDownSection title="Contact Us">
        </FooterDropDownSection>
    </FooterSection>
    <FooterSection type="bottom" logo="SS Tech">
    </FooterSection>
</Footer>

      </div>
    );
  }
}

const HeadStyle={
  color:'whitesmoke',
  margin:'-150px 0 0 50px ',
  fontfamily:'roboto'
}

const parkStyle={
  color:'whitesmoke',
  margin:'90px 0 0 50px ',
  position:'relative',
  top:'30px',
  fontfamily:'roboto',
  background:'#98EECF',
  boxshadow: '0px 4px 4px #00000040',
  opacity:'.9'
}
export default Product;
