import { Col, Row, Nav, Tab } from 'react-bootstrap';

function TabVertical() {
  return (
    <>
        <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Vertical Tabs</h4>
                <p className="card-description">Vertical bootstrap tab</p>
                <div className="tab-vertical">
                  <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                      <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                          <Nav.Item>
                            <Nav.Link eventKey="first" className="d-flex align-items-center">
                              <i className="mdi mdi-home-outline text-primary pe-2"></i>
                              Home
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="second" className="d-flex align-items-center">
                              <i className="mdi mdi-account-outline text-danger pe-2"></i>
                              Profile
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="third" className="d-flex align-items-center">
                              <i className="mdi mdi-email-open-outline text-success pe-2"></i>
                              Mail
                            </Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </Col>
                      <Col sm={9}>
                        <Tab.Content>
                          <Tab.Pane eventKey="first">
                            <div className="text-center">
                              <img className="me-3 w-25 mb-4" src="/images/samples/300x300/12.jpg" alt="sample"/>
                            </div>
                            <p>
                              Inhabiting discretion the her dispatched decisively boisterous joy. So form were wish open is able of mile of. Waiting express
                              if prevent it we an musical. Especially reasonable travelling
                            </p>
                          </Tab.Pane>
                          <Tab.Pane eventKey="second">
                            <div className="text-center">
                              <img className="mb-3 w-25 rounded" src="/images/faces/face1.jpg" alt="sample"/>
                              <h5 className="mt-0">Adam John</h5>
                              <p className="mb-0">UX specialist</p>
                              <p className="mb-0">Florida</p>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="third">
                            <h4>Contact us </h4>
                            <p>
                              Feel free to contact us if you have any questions!
                            </p>
                            <p>
                              <i className="mdi mdi-phone text-info me-2"></i>
                              +123456789
                            </p>
                            <p>
                              <i className="mdi mdi-email-outline text-success me-2"></i>
                              contactus@example.com
                            </p>
                          </Tab.Pane>
                        </Tab.Content>
                      </Col>
                    </Row>
                  </Tab.Container>
                </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default TabVertical