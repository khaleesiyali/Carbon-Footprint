import logo from "../../assets/images/logo.png";
import logo_mini from "../../assets/images/logo-mini.png";
import {Dropdown} from 'react-bootstrap'
 
function Navbar() {

    const toggleOffCanvas = () => {
        document.querySelector('.sidebar-offcanvas').classList.toggle('active')
    }

    const toggleRightSidebar = () => {
        document.querySelector('.right-sidebar').classList.toggle('open')
    }

    // const handleToggle = () => {
    //     const body = document.body;
        
    //     if (body.classList.contains('sidebar-icon-only')) {
    //       body.classList.remove('sidebar-icon-only');
    //       body.classList.add('sidebar-fixed');
    //     } else {
    //       body.classList.add('sidebar-icon-only');
    //     }
    // };

  return (
    <>
    <nav className='navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row'>
        <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
            <a className="navbar-brand brand-logo" to="/dashboard"><img src={logo} alt="logo" /></a>
            <a className="navbar-brand brand-logo-mini" to="/dashboard"><img src={logo_mini} alt="logo" /></a>
        </div>
        <div className="navbar-menu-wrapper d-flex align-items-stretch">
            <button className="navbar-toggler navbar-toggler align-self-center" type="button" onClick={() => document.body.classList.toggle('sidebar-icon-only')}>
                <span className="fa fa-solid fa-bars"></span>
            </button>
            <div className="search-field d-none d-md-block">
                <form className="d-flex align-items-center h-100" action="#">
                    <div className="input-group mt-2">
                        <div className="input-group-prepend bg-transparent mb-3">
                            <i className="input-group-text border-0 fa fa-solid fa-magnifying-glass"></i>
                        </div>
                        <input type="text" className="form-control bg-transparent border-0" placeholder="Search projects"/>
                    </div>
                </form>
            </div>
            <ul className="navbar-nav navbar-nav-right">
                <li className="nav-item nav-profile">
                    <Dropdown align="end">
                        <Dropdown.Toggle className='nav-link'>
                            <div className="nav-profile-img">
                                <img src="/images/faces/face1.jpg" alt="user"/>
                                <span className="availability-status online"></span>
                            </div>
                            <div className="nav-profile-text">
                                <p className="mb-1">David Greymaax</p>
                            </div>
                        </Dropdown.Toggle>

                        <Dropdown.Menu className='navbar-dropdown'>
                            <Dropdown.Item href="!#" onClick={evt =>evt.preventDefault()}>
                                <i className="fa fa-solid fa-arrows-rotate me-2 text-success"></i>
                                Activity Log
                            </Dropdown.Item>
                            <Dropdown.Item href="!#" onClick={evt =>evt.preventDefault()}>
                                <i className="fa fa-solid fa-right-from-bracket me-2 text-primary"></i>
                                Signout
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </li>
                <li className='nav-item'>
                    <Dropdown align="end">
                        <Dropdown.Toggle className="nav-link count-indicator">
                            <i className="fa fa-solid fa-envelope"></i>
                            <span className="count-symbol bg-warning"></span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="preview-list navbar-dropdown">
                            <h6 className="p-3 mb-0">Messages</h6>
                            <div className="dropdown-divider"></div>
                            <Dropdown.Item className="dropdown-item preview-item" onClick={evt =>evt.preventDefault()}>
                                <div className="preview-thumbnail">
                                    <img src="/images/faces/face4.jpg" alt="user" className="profile-pic"/>
                                </div>
                                <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                                    <h6 className="preview-subject ellipsis mb-1 fw-normal">Mark send you a message</h6>
                                    <p className="text-gray mb-0">
                                        1 Minutes ago
                                    </p>
                                </div>
                            </Dropdown.Item>
                            <div className="dropdown-divider"></div>
                            <Dropdown.Item className="dropdown-item preview-item" onClick={evt =>evt.preventDefault()}>
                                <div className="preview-thumbnail">
                                    <img src="/images/faces/face3.jpg" alt="user" className="profile-pic"/>
                                </div>
                                <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                                    <h6 className="preview-subject ellipsis mb-1 fw-normal">Profile picture updated</h6>
                                    <p className="text-gray mb-0">
                                        18 Minutes ago
                                    </p>
                                </div>
                            </Dropdown.Item>
                            <div className="dropdown-divider"></div>
                            <h6 className="p-3 mb-0 text-center cursor-pointer">4 new messages</h6>
                        </Dropdown.Menu>
                    </Dropdown>
                </li>
                <li className='nav-item'>
                    <Dropdown align="end">
                        <Dropdown.Toggle className="nav-link count-indicator">
                            <i className="fa fa-regular fa-bell"></i>
                            <span className="count-symbol bg-danger"></span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu navbar-dropdown preview-list">
                            <h6 className="p-3 mb-0">Notifications</h6>
                            <div className="dropdown-divider"></div>
                            <Dropdown.Item className="dropdown-item preview-item" onClick={evt =>evt.preventDefault()}>
                                <div className="preview-thumbnail">
                                    <div className="preview-icon bg-success">
                                        <i className="fa fa-regular fa-calendar-days"></i>
                                    </div>
                                </div>
                                <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                                    <h6 className="preview-subject fw-normal mb-1">Event today</h6>
                                    <p className="text-gray ellipsis mb-0">
                                    Just a reminder that you have an event today
                                    </p>
                                </div>
                            </Dropdown.Item>
                            <div className="dropdown-divider"></div>
                            <Dropdown.Item className="dropdown-item preview-item" onClick={evt =>evt.preventDefault()}>
                                <div className="preview-thumbnail">
                                    <div className="preview-icon bg-warning">
                                        <i className="fa fa-solid fa-gear"></i>
                                    </div>
                                </div>
                                <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                                    <h6 className="preview-subject fw-normal mb-1">Settings</h6>
                                    <p className="text-gray ellipsis mb-0">
                                        Update dashboard
                                    </p>
                                </div>
                            </Dropdown.Item>
                            <div className="dropdown-divider"></div>
                            <Dropdown.Item className="dropdown-item preview-item" onClick={evt =>evt.preventDefault()}>
                                <div className="preview-thumbnail">
                                    <div className="preview-icon bg-info">
                                        <i className="fa fa-solid fa-link"></i>
                                    </div>
                                </div>
                                <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                                    <h6 className="preview-subject fw-normal mb-1">Launch Admin</h6>
                                    <p className="text-gray ellipsis mb-0">
                                    New admin wow!
                                    </p>
                                </div>
                            </Dropdown.Item>
                            <div className="dropdown-divider"></div>
                            <h6 className="p-3 mb-0 text-center cursor-pointer">See all notifications</h6>
                        </Dropdown.Menu>
                    </Dropdown>
                </li>
                <li className="nav-item nav-logout d-none d-lg-block">
                    <button className="nav-link" href="!#" onClick={event => event.preventDefault()}>
                        <i className="fa fa-solid fa-power-off"></i>
                    </button>
                </li>
                <li className="nav-item nav-settings d-none d-lg-block">
                    <button type="button" className="nav-link border-0" onClick={toggleRightSidebar} >
                        <i className="fa fa-solid fa-indent"></i>
                    </button>
                </li>
            </ul>
            <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" onClick={toggleOffCanvas}>
                <span className="fa fa-solid fa-bars"></span>
            </button>
        </div>
    </nav>
    </>
  )
}

export default Navbar