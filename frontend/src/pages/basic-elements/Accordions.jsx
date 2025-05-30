import {Accordion} from 'react-bootstrap'

function Accordions() {
  return (
    <>
      <div className="page-header">
         <h3 className="page-title"> Accordions </h3>
         <nav aria-label="breadcrumb">
           <ol className="breadcrumb">
             <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>UI Elements</a></li>
             <li className="breadcrumb-item active" aria-current="page">Accordions</li>
           </ol>
         </nav>
       </div>
       <div className="row">
        <div className="col-lg-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Default accordion</h4>
              <p className="card-description">Basic accordion</p>
              <div className="mt-4">
              <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>How can I pay for an order I placed?</Accordion.Header>
                      <Accordion.Body>
                        <div className="row">
                          <div className="col-3">
                            <img src="/images/samples/300x300/10.jpg" className="mw-100" alt="sample" />
                          </div>
                          <div className="col-9"> You can pay for the product you have purchased using credit cards, debit cards, or via online banking. We also provide cash-on-delivery services. </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>I can’t sign in to my account</Accordion.Header>
                      <Accordion.Body>
                        If while signing in to your account you see an error message, you can do the following 
                        <ol className="ps-3 mt-4">
                          <li>Check your network connection and try again</li>
                          <li>Make sure your account credentials are correct while signing in</li>
                          <li>Check whether your account is accessible in your region</li>
                        </ol>
                        <br/>
                        <p className="text-success"><i className="ti-alert me-2"></i>If the problem persists, you can contact our support. </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>Can I add money to the wallet?</Accordion.Header>
                      <Accordion.Body>
                        You can add money to the wallet for any future transaction from your bank account using net-banking, or credit/debit card transaction. The money in the wallet can be used for an easier and faster transaction.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Bordered Accordions</h4>
              <p className="card-description">Use class <code>.accordion-bordered</code> for bordered accordions</p>
              <div className="mt-4">
              <Accordion defaultActiveKey="0" className="accordion-bordered">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>How can I pay for an order I placed?</Accordion.Header>
                  <Accordion.Body>
                  You can pay for the product you have purchased using credit cards, debit cards, or via online banking. We also provide cash-on-delivery services for most of our products. You can also use your account wallet for payment.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>I can’t sign in to my account</Accordion.Header>
                  <Accordion.Body>
                    <p> If while signing in to your account you see an error message, you can do the following </p>
                      <ol className="ps-3">
                        <li>Check your network connection and try again</li>
                        <li>Make sure your account credentials are correct while signing in</li>
                        <li>Check whether your account is accessible in your region</li>
                      </ol>
                      <br/>
                      <i className="ti-alert me-2"></i>If the problem persists, you can contact our support.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>How can I deactivate my account?</Accordion.Header>
                  <Accordion.Body>
                    If you wish to deactivate your account, you can go to the Settings page of your account. Click on Account Settings and then click on Deactivate. You can join again as and when you wish.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Solid Content Accordion</h4>
              <p className="card-description">Use class <code>.accordion-solid-content</code> for basic accordion</p>
              <div className="mt-4">
              <Accordion defaultActiveKey="0"  className="accordion-solid-content">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>How can I pay for an order I placed?</Accordion.Header>
                      <Accordion.Body>
                        <div className="row">
                          <div className="col-3">
                            <img src="/images/samples/300x300/10.jpg" className="mw-100" alt="sample" />
                          </div>
                          <div className="col-9"> You can pay for the product you have purchased using credit cards, debit cards, or via online banking. We also provide cash-on-delivery services. </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>I can’t sign in to my account</Accordion.Header>
                      <Accordion.Body>
                        If while signing in to your account you see an error message, you can do the following 
                          <ol className="ps-3 mt-4">
                            <li>Check your network connection and try again</li>
                            <li>Make sure your account credentials are correct while signing in</li>
                            <li>Check whether your account is accessible in your region</li>
                          </ol>
                          <br/>
                          <p className="text-success"><i className="ti-alert me-2"></i>If the problem persists, you can contact our support. </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>Can I add money to the wallet?</Accordion.Header>
                      <Accordion.Body>
                        You can add money to the wallet for any future transaction from your bank account using net-banking, or credit/debit card transaction. The money in the wallet can be used for an easier and faster transaction.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Multi Colored Accordion</h4>
              <p className="card-description">Use class <code>.accordion-multi-colored</code> for basic accordion</p>
              <div className="mt-4">
              <Accordion defaultActiveKey="0" className="accordion-multi-colored">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>How can I pay for an order I placed?</Accordion.Header>
                      <Accordion.Body>
                        <div className="row">
                          <div className="col-3">
                            <img src="/images/samples/300x300/10.jpg" className="mw-100" alt="sample" />
                          </div>
                          <div className="col-9"> You can pay for the product you have purchased using credit cards, debit cards, or via online banking. We also provide cash-on-delivery services. </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>I can’t sign in to my account</Accordion.Header>
                      <Accordion.Body>
                        If while signing in to your account you see an error message, you can do the following 
                          <ol className="ps-3 mt-4">
                            <li>Check your network connection and try again</li>
                            <li>Make sure your account credentials are correct while signing in</li>
                            <li>Check whether your account is accessible in your region</li>
                          </ol>
                          <br/>
                          <p className="text-success"><i className="ti-alert me-2"></i>If the problem persists, you can contact our support. </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>Can I add money to the wallet?</Accordion.Header>
                      <Accordion.Body>
                        You can add money to the wallet for any future transaction from your bank account using net-banking, or credit/debit card transaction. The money in the wallet can be used for an easier and faster transaction.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
              </div>
            </div>
          </div>
        </div>
       </div>
    </>
  )
}

export default Accordions