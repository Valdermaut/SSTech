import React, { Component } from "react";
import "./main.css";
import "./product.css";
import bottom from './assets/bottom.png';
import {Footer,FooterDropDownSection,FooterLinkList,FooterSection} from 'react-mdl';
import {  Card, CardTitle, CardActions, Button ,CardMenu, CardText, IconButton} from "react-mdl";



class Services extends Component {
  render() {
    return(
     <div style={{backgroundImage: "assets/19366.jpg"}}> 
     <img src={bottom}></img>
        <div style={HeadStyle}><h1>Services</h1></div>
    <div class="ban1">
      <div class="ctext1">Web Solution</div>
      <div class="text1" >We create the best web solutions that are really <br></br>easy to manage, own complete stability and covered<br></br> with hard to break security.</div>
      <div class="text2">PHP | React JS | Node.JS | Bootstrap</div>
      <div><Button class="but1">Get Details</Button></div>
      <div class="card1">
    <Card shadow={8} style={{width: '512px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.technotification.com/wp-content/uploads/2018/04/learn-web-development-770x515.jpg) center / cover'}}>Web Solutions</CardTitle>
    <CardText>
        Best Web Solution based on clients needs.
    </CardText>
    <CardActions border>
        <Button colored>Get Started</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>
</div>
</div>

<div class="ban2">
      <div class="ctext2">Cloud Services</div>
      <div class="text3" >We create the best web solutions that are really <br></br>easy to manage, own complete stability and covered<br></br> with hard to break security.</div>
      <div class="text4">Azure | AWS | Google Clouds</div>
      <div class="card2">
      <div><Button class="but2">Coming Soon</Button></div>
    <Card shadow={8} style={{width: '512px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://blog.learningtree.com/wp-content/uploads/2017/05/FaaS-300x222.jpg) center / cover'}}>Cloud Service</CardTitle>
    <CardText>
        Cloud Service coming soon!
    </CardText>
    <CardActions border>
        <Button colored>Get Started</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>
</div>
</div>

<div class="ban3">
      <div class="ctext3">IOT Products</div>
      <div class="text5" >We create the best web solutions that are really <br></br>easy to manage, own complete stability and covered<br></br> with hard to break security.</div>
      <div class="text6">PHP | React JS | Node.JS | Bootstrap</div>
      <div><Button class="but1">Get Details</Button></div>
      <div class="card3">
    <Card shadow={8} style={{width: '512px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1600/1*lVfJFrxmv5WYXnfm7Tbf3A.png) center / cover'}}>IOT Products</CardTitle>
    <CardText>
        Best Web Solution based on clients needs.
    </CardText>
    <CardActions border>
        <Button colored>Get Started</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>
</div>
</div>

<div class="ban4">
      <div class="ctext4">AI & Machine Learning</div>
      <div class="text7" >We create the best web solutions that are really <br></br>easy to manage, own complete stability and covered<br></br> with hard to break security.</div>
      <div class="text8">Azure | AWS | Google Clouds</div>
      <div><Button class="but1">Coming Soon</Button></div>
      <div class="card4">
    <Card shadow={8} style={{width: '512px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1600/1*M9le42saJxWlOYyYvhKtPA.jpeg) center / cover'}}>AI & ML</CardTitle>
    <CardText>
        Cloud Service coming soon!
    </CardText>
    <CardActions border>
        <Button colored>Get Started</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>
</div>
</div>

<div class="ban5">
      <div class="ctext5">Technical Support</div>
      <div class="text9" >We create the best web solutions that are really <br></br>easy to manage, own complete stability and covered<br></br> with hard to break security.</div>
      <div class="text10">PHP | React JS | Node.JS | Bootstrap</div>
      <div><Button class="but1">Get Details</Button></div>
      <div class="card5">
    <Card shadow={8} style={{width: '512px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.aubertduval.com/wp-media/uploads/2017/05/TechnicalSupport.png) center / cover'}}>Technical Support</CardTitle>
    <CardText>
        Best Web Solution based on clients needs.
    </CardText>
    <CardActions border>
        <Button colored>Get Started</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>
</div>
</div>

<div class="ban6">
      <div class="ctext6">GUI Java Application</div>
      <div class="text11" >We create the best web solutions that are really <br></br>easy to manage, own complete stability and covered<br></br> with hard to break security.</div>
      <div class="text12">Azure | AWS | Google Clouds</div>
      <div><Button class="but1">Get Details</Button></div>
      <div class="card6">
    <Card shadow={8} style={{width: '512px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://s24255.pcdn.co/wp-content/uploads/2014/05/oracle-java.jpg) center / cover'}}>GUI Java Application</CardTitle>
    <CardText>
        Cloud Service coming soon!
    </CardText>
    <CardActions border>
        <Button colored>Get Started</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>
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


export default Services;

const HeadStyle={
    color:'whitesmoke',
    margin:'-150px 0 0 50px ',
    fontfamily:'roboto'
  }