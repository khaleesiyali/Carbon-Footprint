import { useState } from 'react';
import { ControlledMenu, MenuItem } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

function SimpleContextMenu() {
    const [isOpen, setOpen] = useState(false)
    const [anchorPoint, setAnchorPoint] = useState({x: 0, y: 0})

  return (
    <>
    <div className='card'>
        <div className='card-body'>
            <h4 className='card-title'>simple</h4>
            <p className='card-description'>A simple context menu</p>
            <div className='card card-inverse-info' onContextMenu={(e) => {
                if (typeof document.hasFocus === 'function' && !document.hasFocus()) return
                    e.preventDefault();
                    setAnchorPoint({ x: e.clientX, y: e.clientY });
                    setOpen(true)
            }}>
                <div className="card-body">
                    <p className="card-text">Right click somewhere in this colored area for simple context menu</p>
                </div>
            </div>
            <ControlledMenu anchorPoint={anchorPoint} state={isOpen ? 'open': 'closed'} direction='right' onClose={() => setOpen(false)}>
                <MenuItem>
                    Edit
                </MenuItem>
                <MenuItem>
                    Cut
                </MenuItem>
                <MenuItem>
                    Copy
                </MenuItem>
                <MenuItem>
                    Paste
                </MenuItem>
                <MenuItem>
                    Delete
                </MenuItem>
                <MenuItem>
                    Quit
                </MenuItem>
            </ControlledMenu>
        </div>
    </div>
    </>
  )
}

export default SimpleContextMenu