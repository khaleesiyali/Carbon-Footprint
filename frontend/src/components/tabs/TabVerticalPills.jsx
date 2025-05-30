import { Col, Row, Nav, Tab } from 'react-bootstrap';


function TabVerticalPills() {
  return (
    <>
        <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Vertical Pills</h4>
                <p className="card-description">Vertical nav pills
                </p>
                <div className="tab-pills-vertical">
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
                      <Col sm={8}>
                        <Tab.Content>
                          <Tab.Pane eventKey="first">
                            <div className="media">
                              <img className="me-3 w-25 rounded" src="/images/samples/300x300/12.jpg" alt="sample"/>
                              <div className="media-body">
                                <h5 className="mt-0">I'm doing mental jumping jacks.</h5>
                                <p>Only you could make those words cute. Oh I beg to differ, I think we have a lot to discuss. After all,
                                  you are a client. I am not a killer. I feel like a jigsaw puzzle missing a piece. And I'm not even sure
                                  what the picture should be.</p>
                              </div>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="second">
                            <div className="media">
                              <img className="me-3 w-25 rounded" src="/images/samples/300x300/11.jpg" alt="sample"/>
                              <div className="media-body">
                                <p>I'm thinking two circus clowns dancing. You? Finding a needle in a haystack isn't hard when every straw
                                  is computerized. Tell him time is of the essence. Somehow, I doubt that. You have a good heart, Dexter.</p>
                              </div>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="third">
                            <div className="media">
                              <img className="me-3 w-25 rounded" src="/images/samples/300x300/14.jpg" alt="sample"/>
                              <div className="media-body">
                                <p>
                                  I'm really more an apartment person. This man is a knight in shining armor. Oh I beg to differ, I think we have a lot to
                                  discuss. After all, you are a client. You all right, Dexter?
                                </p>
                                <p>
                                  I'm generally confused most of the time. Cops, another community I'm not part of. You're a killer. I catch killers. Hello,
                                  Dexter Morgan.
                                </p>
                              </div>
                            </div>
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

export default TabVerticalPills