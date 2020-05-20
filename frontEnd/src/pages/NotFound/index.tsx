import React from 'react'

import './styles.css'
import { MDBIcon } from 'mdbreact'

const NotFound: React.FC = () => {
  return (
    <div id="notfound">
      <MDBIcon icon='exclamation-circle' className='icon-notfound'/>
      <h3>Page Not Found</h3>
    </div>
  )
}

export default NotFound