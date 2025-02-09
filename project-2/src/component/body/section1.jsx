import React from 'react'
import macpro from "../../assets/images/home/macbook-pro.jpg"
function section1() {
  return (
    
<section className="container-fluid">
<div className="row main-wrapper-frist mt-5">
  <div className="col-12">
    <div className="wrapper-one-model mt-5 pt-4">16-inch model</div>
    <div className="wrapper-one-mac">MacBook pro</div>
    <div className="wrapper-one-pharagraph">The best for the brightest.</div>
    <div className="link-wrapper">
      <ul>
        <li><a href="#"> Learn more</a></li>
        <li><a href="#">Buy</a></li>
      </ul>
    </div>
    <div className="wrapper-one-macimage">
      <img src={macpro} />
    </div>
  </div>
</div>
</section>
  );
}

export default section1;