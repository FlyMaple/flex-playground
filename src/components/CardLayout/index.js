import React, { Component } from 'react'

class CardLayout extends Component {
  render() {
    return (
      <div className="card-layout">
        <div className="card card-news wide">
          <div className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium iste delectus unde sint voluptatum, corporis harum et nihil praesentium fugit voluptate molestiae, soluta placeat possimus facilis qui nemo dolores eos.</div>
          <div>
            <button>123</button>
          </div>
        </div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card card-news wide">
          <div className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium iste delectus unde sint voluptatum, corporis harum et nihil praesentium fugit voluptate molestiae, soluta placeat possimus facilis qui nemo dolores eos.</div>
          <div>
            <button>123</button>
          </div>
        </div>
        <div className="card card-news">
          <div className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium iste delectus unde sint voluptatum, corporis harum et nihil praesentium fugit voluptate molestiae, soluta placeat possimus facilis qui nemo dolores eos.</div>
          <div>
            <button>123</button>
          </div>
        </div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card card-news">
          <div className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium iste delectus unde sint voluptatum, corporis harum et nihil praesentium fugit voluptate molestiae, soluta placeat possimus facilis qui nemo dolores eos.</div>
          <div>
            <button>123</button>
          </div>
        </div>
      </div>
    )
  }
}

export default CardLayout