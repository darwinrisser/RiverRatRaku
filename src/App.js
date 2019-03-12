import React, { Component } from 'react';
import './App.css';
import AppBar from './AppBar.js'
import ImageGridList from './ImageGridList.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="home">
        <AppBar/>
          <h1>River Rat Raku</h1>
        </div>
        <div id="about" role="main">
          <h1>Father, Husband, Potter</h1>
          <div id="bio">
            <p>
              Jeffrey Lowrance currently works out of his studio in New Braunfels, Texas. He has a passion for designing unique and interesting pieces and loves to share his talent with family and friends.
            </p>
            <p>
              Jeff has over four decades of experience working with ceramics. Much of his more recent work has explored <a href="https://en.wikipedia.org/wiki/Raku_ware">Raku</a> pottery. Originally a Japanese method, Western Raku became popular in the 1950s and quickly developed into a unique and distinctive style.
            </p>
            <p>
              Raku involves the use of various waxes and glazes. Horse hair is often used to create fine lines and textures that give each piece a distinct look. You can see these styles in Jeff’s work.
            </p>
            <p>
              Please take a look at our the gallery and if you are interested in purchasing any of Jeff's pieces, you can <a href = "mailto: risser.darwin@gmail.com">contact</a> Jeff directly.
            </p>
        </div>
        </div>
        <div id="gallery">
          <h1>Gallery</h1>
          <ImageGridList/>
        </div>
        <footer id="footer">
          © Darwin Risser 2019
          <br></br>
        </footer>
      </div>
    );
  }
}

export default App;
