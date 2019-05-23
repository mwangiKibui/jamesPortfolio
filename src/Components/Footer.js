import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    const year = new Date().getFullYear();
    return (
      <div>
        <hr />
        <div className="text-center mb-0 mt-0">
          &copy;James Mwathi - {year}
        </div>
      </div>
    )
  }
}

export default Footer
