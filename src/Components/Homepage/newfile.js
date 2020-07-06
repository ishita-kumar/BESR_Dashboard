import React, { Component } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
 
export default class Page extends Component {
  render() {
    return (
      <div>
         <section class='statis text-center'>
          
      
         <div class="container-fluid">
        <div class="row" style={{padding:"40px"}}>
          <div class="col-md-3">
            <div class="box " style={{"backgroundColor":"#bebcc4"}}>
              <i class="fa fa-eye"></i>
             
              <a href='#section1'><p class="lead" style={{"color":"#000000"}}>Check A</p>  </a>
              
            </div>
          </div>
          <div class="col-md-3">
            <div class="box " style={{"backgroundColor":"#bebcc4"}}>
              <i class="fa fa-eye"></i>
            
              <a href='#section1'><p class="lead" style={{"color":"#000000"}}>Check A</p>  </a>
              
            </div>
          </div>
          <div class="col-md-3">
            <div class="box" style={{"backgroundColor":"#bebcc4"}}>
              <i class="fa fa-user-o"></i>
             
              <a href='#section2'><p class="lead" style={{"color":"#000000"}}>Check B</p>  </a>
            </div>
          </div>
          <div class="col-md-3">
            <div class="box" style={{"backgroundColor":"#bebcc4"}}>
              <i class="fa fa-user-o"></i>
             
              <a href='#section2'><p class="lead" style={{"color":"#000000"}}>Check B</p>  </a>
            </div>
          </div>
        
        
        </div>
        </div>
        
       
        <ScrollableAnchor id={'section1'}>
          <div> Hello World </div>
        </ScrollableAnchor>
        <ScrollableAnchor id={'section2'}>
          <div> How are you world? </div>
        </ScrollableAnchor>
        </section>
      </div>
    )
  }
}