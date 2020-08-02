import React, { Component } from 'react'

import ParticlesBg from 'particles-bg'

export default class Particles extends Component {
  render () {
    return (
      <div>
            <ParticlesBg type="circle" bg={true} />
      </div>
    
    )
  }
}