import { useState } from 'react';
import { ControlledMenu, MenuItem, SubMenu } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

function SubmenuContextMenu() {
    const [isOpen, setOpen] = useState(false)
    const [anchorPoint, setAnchorPoint] = useState({x: 0, y: 0})

  return (
    <>
    <div className='card'>
        <div className='card-body'>
            <h4 className='card-title'>Multi-Level Menu</h4>
            <p className="card-description"> Context menu with sub menu </p>
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
                <MenuItem >
                    Menu Item 1
                </MenuItem>
                <MenuItem  >
                    Menu Item 2
                </MenuItem>
                <SubMenu label="A Submenu">
                    <MenuItem >
                        SubItem 1
                    </MenuItem>
                    <SubMenu label="Another Submenu">
                        <MenuItem >
                            SubSubItem 1
                        </MenuItem>
                        <MenuItem >
                            SubSubItem 2
                        </MenuItem>
                    </SubMenu>
                    <SubMenu label="Yet Another Submenu">
                        <MenuItem >
                            SubSubItem 3
                        </MenuItem>
                        <MenuItem >
                            SubSubItem 4
                        </MenuItem>
                    </SubMenu>
                    <MenuItem>
                        SubItem2
                    </MenuItem>
                </SubMenu>
            </ControlledMenu>
        </div>
    </div>
    </>
  )
}

export default SubmenuContextMenu