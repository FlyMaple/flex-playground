import React, { Component } from 'react'

import DiceLayout from './components/DiceLayout'
import ImageGalleryLayout from './components/ImageGalleryLayout'
import CardLayout from './components/CardLayout'
import MadnessLayout from './components/MadnessLayout'
import ColorPaletteLayout from './components/ColorPaletteLayout'
import SideMenuLayout from './components/SideMenuLayout'
import Playground from './components/Playground'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* header */}
        <div className="pg-header">
          Flexbox Playground
        </div>

        <Playground />

        {/* footer */}
        <div className="pg-footer">
          CTF Studio
        </div>
      </div>
    )
  }
}

export default App
