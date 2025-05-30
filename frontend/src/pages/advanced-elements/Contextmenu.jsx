import { useState } from 'react';
import { ControlledMenu, MenuItem } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import SimpleConetextMenu from '../../components/contextmenu/SimpleContextMenu';
import AccessContextMenu from '../../components/contextmenu/AccessContextMenu';
import SubmenuContextMenu from '../../components/contextmenu/SubmenuContextMenu';

function Contextmenu() {
  const [isOpen, setOpen] = useState(false)
  const [anchorPoint, setAnchorPoint] = useState({x: 0, y: 0})

  return (
    <div>
      <div className="page-header">
          <h3 className="page-title">
            Context menu
          </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>UI Elements</a></li>
              <li className="breadcrumb-item active" aria-current="page">Context menu</li>
            </ol>
          </nav>
      </div>
      <div className='row'>
        <div className='col-md-6 grid-margin'>
          <SimpleConetextMenu />
        </div>
        <div className='col-md-6 grid-margin'>
          <AccessContextMenu />
        </div>
        <div className='col-md-12'>
          <SubmenuContextMenu/>
        </div>
      </div>
    </div>
  )
}

export default Contextmenu