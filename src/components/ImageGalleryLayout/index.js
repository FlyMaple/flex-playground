import React, { Component } from 'react'

class ImageGalleryLayout extends Component {
  render() {
    return (
      <div className="image-gallery-layout">
        <div>
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/jeremiah-wilson-1.jpg" alt="" />
        </div>
        <div>
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/jeremiah-wilson-2.jpg" alt="" />
        </div>
        <div>
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/jeremiah-wilson-3.jpg" alt="" />
        </div>
        <div>
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/jeremiah-wilson-4.jpg" alt="" />
        </div>
        <div>
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/jeremiah-wilson-5.jpg" alt="" />
        </div>
      </div>
    )
  }
}

export default ImageGalleryLayout