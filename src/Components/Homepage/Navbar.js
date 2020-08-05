import React, { Component } from 'react'
import "./Navbar.css";

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <section class="navigation ">
  <div class="nav-container">
    <div class="brand">
      <a href="#!">Logo</a>
    </div>
    <nav>
      <div class="nav-mobile"><a id="nav-toggle" href="#!"><span></span></a></div>
      <ul class="nav-list">
        <li>
          <a  href="#tab-es6">Home</a>
        </li>
        <li>
          <a  href="#tab-es6">About</a>
        </li>
     
        <li>
          <a href="#tab-es6">Pricing</a>
        </li>
    
      
      </ul>
    </nav>
  </div>
</section>


            </div>
        )
    }
}
