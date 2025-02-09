import React from 'react'
import appletv from "../../assets/images/icons/apple-tv-logo.png"
import servant from "../../assets/images/icons/servant-logo.png"
function section5() {
  return (
    <section className="main-wrapper-fifth container-fluid">
      <div className="row">
        <div className="col-12 col-md-6 left">
          <div className="tvlogo">
            <img src={appletv} />
          </div>
          <div className="wrapper-fifth-servant">
            <img src={servant} />
          </div>
          <div className="wrapper-fifth-watch">
            <a href="#">Watch the trailer</a>
          </div>
        </div>
        <div className="col-12 col-md-6 right">
          <div className="wrapper-fifth-Airpad">AirPods Pro</div>
          <div className="wrapper-fifth-right-pharagraph">
            Magic like you've never heard.
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

export default section5