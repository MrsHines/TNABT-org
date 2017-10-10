import React from 'react'

import './resources.css'

import Header from './components/header'
import TipOfMonth from './components/tip-of-the-month'


import NABTlogo from './img/NABT_logo.png'
import TSTAlogo from './img/TSTA_logo.png'
import ASBlogo from './img/ASB_logo.png'
import LandsEndLogo from './img/lands_end_logo.png'



const Resources = () => (
  <div>
    <Header />
    <TipOfMonth />

    <section className="section-resource-links">
      <h2>Links</h2>
      <div className="row flex-between resource-link-container">
        <a href="https://www.nabt.org/">
          <div className="resource-link">
            <img
              src={NABTlogo}
              alt="Link to National Association of Biology Teachers"
              />
          </div>
        </a>

        <a href="http://www.tsta.wildapricot.org/">
          <div className="resource-link">
            <img
              src={TSTAlogo}
              alt="Link to Tennessee Science Teachers Association"
            />
          </div>
        </a>

        <a href="http://www.sebiologists.org/">
          <div className="resource-link">
            <img
              src={ASBlogo}
              alt="Link to Association of Southeastern Biologists"
            />
          </div>
        </a>
      </div>
    </section>

    <section className="section-resource-gear">
      <h2>NABT Gear</h2>
      <div className="lands-end-container">
        <p className="copy">
          Lands' End offers clothing with the NABT logo.  You can shop for clothing
          with the option to add the NABT logo using the link provided:
        </p>
        <a href="https://business.landsend.com/store/nabt/">
          <div className="resource-link lands-end">
            <img
              src={LandsEndLogo}
              alt="Link to NABT Lands End Gear"
            />
          </div>
        </a>
      </div>
    </section>
  </div>
)

export default Resources
