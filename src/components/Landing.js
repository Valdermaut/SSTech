import React, { Component } from "react";
import "./main.css";
import "./landing.css";
import {Footer,FooterDropDownSection,FooterLinkList,FooterSection} from 'react-mdl';


class Landing extends Component {
  render() {
    return (
      <div>
        <div class="h1">
        <div class="title">
        <div class="head">S</div>
        <div class="head2">S</div>
        </div>
        <div class="tag">Smart Solution Technology </div>
        <a href="#h2"><div class="exp_btn">
          <div class="btn_txt">Explore More!</div>
          </div></a>
          <a href="#h2">
          <div class="exp_2">
          <div class="exp_3"></div>
          <div class="exp_4"></div>
          </div></a></div>
          <div id="h2">
          <div class="img1"><button class="iot_btn">Learn More</button>
          </div>
          <div class="img2"><button class="web_btn">Find About It</button></div></div>
          <div class="h3">
           <div class="img3">
             <div class="txt3">Technical Support</div>
             <div class="txt4">write some detail</div>
             <button class="jav_btn">Learn More</button>
           </div>
          </div>
          <div class="img4">
            <div class="txt5">
              More Services
            </div>
            <div class="album">
             <div class="img5">
             <p id="ml">Machine Learning</p>
             <p id="ml2">This service is Coming Soon!</p>  
             </div>

             <div class="img6"><p id="ts">Cloud Service</p>
             <p id="ml2">This service is Coming Soon!</p>  
</div>
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

export default Landing;
