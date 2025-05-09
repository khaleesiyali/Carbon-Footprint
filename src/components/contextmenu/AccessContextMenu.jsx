import {useState} from 'react'
import { ControlledMenu, MenuItem } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

function AccessContextMenu() {
    const [isOpen, setOpen] = useState(false)
    const [anchorPoint, setAnchorPoint] = useState({x: 0, y: 0})
    
    const handleClick =  (e) => {
        alert('clicked: '+ e.value );
    }

  return (
    <>
    <div className='card'>
        <div className='card-body'>
            <h4 className='card-title'>Access Keys</h4>
            <p className='card-description'>
                Context menu with actions
            </p>
            <div className='card card-inverse-success' onContextMenu={(e) => {
                if (typeof document.hasFocus === 'function' && !document.hasFocus()) return
                e.preventDefault();
                setAnchorPoint({ x: e.clientX, y: e.clientY });
                setOpen(true)
            }}>
                <div className="card-body">
                    <p className="card-text">Right click somewhere in this colored area for simple context menu</p>
                </div>
            </div>
            <ControlledMenu anchorPoint={anchorPoint} state={isOpen ? 'open': 'closed'} direction='right' onClose={() => setOpen(false)} >
                <MenuItem value='Edit'onClick={handleClick}>
                    Edit
                </MenuItem>
                <MenuItem value='Cut' onClick={handleClick}>
                    Cut
                </MenuItem>
                <MenuItem value='Copy' onClick={handleClick}>
                    Copy
                </MenuItem>
                <MenuItem value='Paste' onClick={handleClick}>
                    Paste
                </MenuItem>
                <MenuItem value='Delete' onClick={handleClick}>
                    Delete
                </MenuItem>
                <MenuItem value='Quit' onClick={handleClick}>
                    Quit
                </MenuItem>
            </ControlledMenu>
        </div>
    </div>
    </>
  )
}

export default AccessContextMenu