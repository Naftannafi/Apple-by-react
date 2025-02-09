import React from 'react'
import watchs from "../../assets/images/icons/watch-series5-logo.png";
function section4() {
  return (
    <section className="main-wrapper-fourth container-fluid">
      <div className="row ">
        <div className="col-12 col-md-6  left">
          <div className="wrapper-fourth-watchlogo">
            <div>
              <img src= {watchs} />
            </div>
            <div className="wrapper-fourth-pharagraph-left">
              With the new Always-on Retina display.You've never seen a watch
              like this.
            </div>
            <div className="link-wrapper">
              <ul>
                <li><a href="#"> Learn more</a></li>
                <li><a href="#">Buy</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6  right">
          <div className="wrapper-fourth-cardlogo">
            <div><img src="./images/icons/apple-card-logo.png" alt="" /></div>
            <div className="wrapper-fourth-pharagraph-right">
              Get 3% Daily Cash on purchase from Apple using Apple card
            </div>
            <div className="link-wrapper">
              <ul>
                <li><a href="#"> Learn more</a></li>
                <li><a href="#">Buy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default section4