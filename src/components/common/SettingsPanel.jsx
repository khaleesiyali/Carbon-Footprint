import { Tabs, Tab } from "react-bootstrap";
import ToDoApp from '../../components/apps/TodoApp'

function SettingsPanel() {


  const closeRightSidebar = () => {
    document.querySelector('.right-sidebar').classList.remove('open');
  };


  return (
    <div>
        <div id='right-sidebar' className='settings-panel right-sidebar'>
            <i className='settings-close mdi mdi-close' onClick={closeRightSidebar}></i>
            <Tabs defaultActiveKey="TODOLIST" className="bg-gradient-primary" id="uncontrolled-tab-example">
                <Tab eventKey="TODOLIST" title="TO DO LIST" className='test-tab' style={{backgroundColor: 'transparent'}}>
                    <div>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div className='px-3'>
                                    <div>
                                        <h4 className='card-title'>Todo List</h4>
                                        <ToDoApp />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='events py-4 border-bottom px-3'>
                            <div className='wrapper d-flex mb-2'>
                                <i className='mdi mdi-circle-outline text-primary me-2'></i>
                                <span>Feb 11 2018</span>
                            </div>
                            <p className='mb-0 fw-thin text-gray'>Creating Component Page</p>
                            <p className='text-gray mb-0'>build a js based app</p>
                        </div>
                        <div className="events pt-4 px-3">
                            <div className="wrapper d-flex mb-2">
                                <i className="mdi mdi-circle-outline text-primary me-2"></i>
                                <span>Feb 7 2018</span>
                            </div>
                            <p className="mb-0 fw-thin text-gray">Meeting with Alisa</p>
                            <p className="text-gray mb-0 ">Call Sarah Graves</p>
                        </div>
                    </div>
                </Tab>
                <Tab eventKey='CHATS' title="CHATS" className="test-tab" style={{backgroundColor: 'transparent'}}>
                    <div>
                        <div className="d-flex align-items-center justify-content-between border-bottom">
                        <p className="settings-heading border-top-0 mb-3 ps-3 pt-0 border-bottom-0 pb-0">FRIENDS</p>
                        <small className="settings-heading border-top-0 mb-3 pt-0 border-bottom-0 pb-0 pe-3 fw-normal">See All</small>
                        </div>
                        <ul className="chat-list">
                        <li className="list active">
                            <div className="profile"><img src="/images/faces/face1.jpg" alt="profile" /><span className="online"></span></div>
                            <div className="info">
                            <p>Thomas Douglas</p>
                            <p>Available</p>
                            </div>
                            <small className="text-muted my-auto">19 min</small>
                        </li>
                        <li className="list">
                            <div className="profile"><img src="/images/faces/face2.jpg" alt="profile" /><span className="offline"></span></div>
                            <div className="info">
                            <div className="wrapper d-flex">
                                <p>Catherine</p>
                            </div>
                            <p>Away</p>
                            </div>
                            <div className="badge badge-success badge-pill my-auto mx-2">4</div>
                            <small className="text-muted my-auto">23 min</small>
                        </li>
                        <li className="list">
                            <div className="profile"><img src="/images/faces/face3.jpg" alt="profile" /><span className="online"></span></div>
                            <div className="info">
                            <p>Daniel Russell</p>
                            <p>Available</p>
                            </div>
                            <small className="text-muted my-auto">14 min</small>
                        </li>
                        <li className="list">
                            <div className="profile"><img src="/images/faces/face4.jpg" alt="profile" /><span className="offline"></span></div>
                            <div className="info">
                            <p>James Richardson</p>
                            <p>Away</p>
                            </div>
                            <small className="text-muted my-auto">2 min</small>
                        </li>
                        <li className="list">
                            <div className="profile"><img src="/images/faces/face5.jpg" alt="profile" /><span className="online"></span></div>
                            <div className="info">
                            <p>Madeline Kennedy</p>
                            <p>Available</p>
                            </div>
                            <small className="text-muted my-auto">5 min</small>
                        </li>
                        <li className="list">
                            <div className="profile"><img src="/images/faces/face6.jpg" alt="profile" /><span className="online"></span></div>
                            <div className="info">
                            <p>Sarah Graves</p>
                            <p>Available</p>
                            </div>
                            <small className="text-muted my-auto">47 min</small>
                        </li>
                        </ul>
                    </div>
                </Tab>
            </Tabs>
        </div>
    </div>
  )
}

export default SettingsPanel