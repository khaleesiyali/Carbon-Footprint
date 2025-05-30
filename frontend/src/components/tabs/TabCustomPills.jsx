import { Col, Row, Nav, Tab } from 'react-bootstrap';

function TabCustomPills() {
  return (
    <>
        <div className="col-md-12 stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Custom Pills</h4>
                <p className="card-description">Horizontal custom nav pills</p>
                <div className="tab-custom-pills-horizontal">
                  <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                      <Col xs={12}>
                        <Nav variant="pills" className="flex-column">
                          <Nav.Item>
                            <Nav.Link eventKey="first" className="d-flex align-items-center">
                              Health
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="second" className="d-flex align-items-center">
                              Career
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="third" className="d-flex align-items-center">
                              Music
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="fourth" className="d-flex align-items-center">
                              Vibes
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="fifth" className="d-flex align-items-center">
                              Energy
                            </Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </Col>
                      <Col xs={12}>
                        <Tab.Content>
                          <Tab.Pane eventKey="first">
                            <div className="d-flex mb-4">
                              {/* <img src={require("../../assets/images/samples/300x300/12.jpg")} className="w-25 h-100 rounded" alt="sample"/>
                              <img src={require("../../assets/images/samples/300x300/1.jpg")} className="w-25 h-100 ms-4 rounded" alt="sample"/>
                              <img src={require("../../assets/images/samples/300x300/2.jpg")} className="w-25 h-100 ms-4 rounded" alt="sample"/> */}
                            </div>
                            <p> I'm not the monster he wants me to be. So I'm neither man nor beast. I'm something new entirely. With my own set of rules. I'm Dexter. Boo. Only you could make those words cute. I'm thinking two circus clowns dancing. You? </p>
                            <p> Under normal circumstances, I'd take that as a compliment. Tell him time is of the essence. I'm really more an apartment person. Finding a needle in a haystack isn't hard when every straw is computerized. </p>
                          </Tab.Pane>
                          <Tab.Pane eventKey="second">
                            <div className="media">
                              {/* <img className="me-3 w-25 rounded" src={require("../../assets/images/samples/300x300/11.jpg")} alt="sample"/> */}
                              <div className="media-body">
                                <p>I'm thinking two circus clowns dancing. You? Finding a needle in a haystack isn't hard when every straw
                                  is computerized. Tell him time is of the essence. Somehow, I doubt that. You have a good heart, Dexter.</p>
                              </div>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="third">
                            <div className="media">
                              {/* <img className="me-3 w-25 rounded" src={require("../../assets/images/samples/300x300/14.jpg")} alt="sample"/> */}
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
                          <Tab.Pane eventKey="fourth">
                            <div className="media">
                              {/* <img className="me-3 w-25 rounded" src={require("../../assets/images/samples/300x300/15.jpg")} alt="sample"/> */}
                              <div className="media-body">
                                <p> This man is a knight in shining armor. I feel like a jigsaw puzzle missing a piece. And I'm not even sure what the picture should be. Somehow, I doubt that. You have a good heart, Dexter. Keep your mind limber. </p>
                              </div>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="fifth">
                            <div className="media">
                              {/* <img className="me-3 w-25 rounded" src={require("../../assets/images/samples/300x300/11.jpg")} alt="sample" /> */}
                              <div className="media-body">
                                <p> Finding a needle in a haystack isn't hard when every straw is computerized. You're a killer. I catch killers. I will not kill my sister. I will not kill my sister. I will not kill my sister. Rorschach would say you have a hard time relating to others. </p>
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

export default TabCustomPills