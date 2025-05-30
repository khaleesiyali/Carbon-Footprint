import { Col, Row, Nav, Tab } from 'react-bootstrap';


function TabVerticalCustom() {
  return (
    <>
        <div className="col-md-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Custom Vertical Tabs</h4>
                <p className="card-description">Custom vertical bootstrap tab</p>
                <div className="tab-custom-vertical">
                  <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                      <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                          <Nav.Item>
                            <Nav.Link eventKey="first" className="d-flex align-items-center">
                              Playing Video Games With Imagination
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="second" className="d-flex align-items-center">
                              Getting Free Publicity For Your Business
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="third" className="d-flex align-items-center">
                              Tips For Designing An Effective Business Card
                            </Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </Col>
                      <Col sm={9} lg={6}>
                        <Tab.Content>
                          <Tab.Pane eventKey="first">
                            <h6 className="fw-normal">Profiles Of The Powerful Advertising Exec Steve Grasse</h6>
                            <h3 className="fw-normal">How To Write Better Advertising Copy</h3>
                            <div className="d-flex mt-4">
                              <img src="/images/samples/300x300/3.jpg" className="w-25 h-100 rounded" alt="sample" />
                              <img src="/images/samples/300x300/4.jpg" className="w-25 h-100 ms-2 rounded" alt="sample" />
                            </div>
                            <p className="mt-4"> The key to victory is discipline, and that means a well made bed. You will practice until you can make your bed in your sleep. You don't know how to do any of those. Then throw her in the laundry room, which will hereafter be referred to as "the brig". </p>
                          </Tab.Pane>
                          <Tab.Pane eventKey="second">
                            <div className="media">
                              <img className="align-self-center me-3 w-25 rounded" src="/images/samples/300x300/15.jpg" alt="sample"/>
                              <div className="media-body">
                                <p> And until then, I can never die? I'm a thing. Fry, you can't just sit here in the dark listening to classical music. Is today's hectic lifestyle making you tense and impatient? Is today's hectic lifestyle making you tense and impatient? </p>
                                <p> Robot 1-X, save my friends! And Zoidberg! Aww, it's true. I've been hiding it for so long. Fry, we have a crate to deliver. Yes! In your face, Gandhi! Interesting. No, wait, the other thing: tedious. </p>
                                <p> Five hours? Aw, man! Couldn't you just get me the death penalty? Yes! In your face, Gandhi! We're rescuing ya. Yeah, I do that with my stupidness. With gusto. </p>
                              </div>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="third">
                            <div className="media">
                              <div className="media-body">
                                <h5 className="mt-0 mb-1">You've swallowed a planet!</h5> 
                                <p> 
                                  Did I mention we have comfy chairs? You hate me; you want to kill me! Well, go on! Kill me! KILL ME! I'm the Doctor, I'm worse than everyone's aunt. *catches himself* And that is not how I'm introducing myself.
                                </p>
                              </div>
                              <img className="ms-3 w-25" src="/images/samples/300x300/5.jpg" alt="sample"/>
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

export default TabVerticalCustom