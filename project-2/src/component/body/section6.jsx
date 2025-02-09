import React from 'react'
import macbook from "../../assets/images/home/macbook-pro.jpg"
function section6() {
  return (
    <section className="main-wrapper-sixth container-fluid">
    <div className="row wrapper-sixth">
      <div className="col-12 col-md-6 left">
        <div className="wrapper-sixth-model">16-inch model</div>
        <div className="wrapper-sixth-mac">MacBook pro</div>
        <div className="wrapper-sixth-left-pharagraph">
          The best for the brightest.
        </div>
        <div className="link-wrapper">
          <ul>
            <li><a href="#"> Learn more</a></li>
            <li><a href="#">Buy</a></li>
          </ul>
          <div className="macimage">
            <img src={macbook} />
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 right">
        <div className="wrapper-sixth-newlogo">
          <img src="./images/icons/new-ipad-logo.png" alt="" />
        </div>
        <div className="wrapper-sixth-right-pharagraph">
          Like a computer. Unlike any computer
        </div>
        <div className="link-wrapper">
          <ul>
            <li><a href="#"> Learn more</a></li>
            <li><a href="#">Buy</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  )
}

export default section6