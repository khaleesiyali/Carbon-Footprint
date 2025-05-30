import { Tabs, Tab } from 'react-bootstrap';


function TabBasic() {
  return (
    <>
        <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Basic Tab</h4>
                <p className="card-description">Horizontal bootstrap tab</p>
                <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                  <Tab eventKey="home" title="Home" className="test-tab">
                    <div className="media">
                      <img className="me-3 w-25 rounded" src="/images/samples/300x300/13.jpg" alt="sample"/>
                      <div className="media-body">
                        <h4 className="mt-0">Why choose us?</h4>
                        <p>
                          Far curiosity incommode now led smallness allowance. Favour bed assure son things yet. She consisted consulted elsewhere
                          happiness disposing household any old the. Widow downs you new shade drift hopes small. So otherwise
                          commanded sweetness we improving. Instantly by daughters resembled unwilling principle so middleton.
                        </p>
                      </div>
                    </div>
                  </Tab>
                  <Tab eventKey="profile" title="Profile">
                    <div className="media">
                      <img className="me-3 w-25 rounded" src="/images/faces/face12.jpg" alt="sample"/>
                      <div className="media-body">
                        <h4 className="mt-0">John Doe</h4>
                        <p>
                          Fail most room even gone her end like. Comparison dissimilar unpleasant six compliment two unpleasing any add. Ashamed my
                          company thought wishing colonel it prevent he in. Pretended residence are something far engrossed old
                          off.
                        </p>
                      </div>
                    </div>
                  </Tab>
                  <Tab eventKey="contact" title="Contact">
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
                  </Tab>
                </Tabs>
              </div>
            </div>
        </div>
    </>
  )
}

export default TabBasic