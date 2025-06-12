import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function Validation() {
  const [validated, setValidated] = useState(false);

  // Shopping snapshot state
  const [shopping, setShopping] = useState({
    boughtNewClothes: false,
    orderedOnline: false,
    subscribedSvc: false,
    noShopping: false,
  });
  const [shoppingResult, setShoppingResult] = useState(null);

  const handleShoppingChange = (e) => {
    const { name, checked } = e.target;
    // If "noShopping" is checked, uncheck all others
    if (name === "noShopping" && checked) {
      setShopping({
        boughtNewClothes: false,
        orderedOnline: false,
        subscribedSvc: false,
        noShopping: true,
      });
    } else {
      setShopping(prev => ({
        ...prev,
        [name]: checked,
        noShopping: name === "noShopping" ? checked : false,
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    setValidated(true);

    // Calculate shopping emissions
    let total = 0;
    if (shopping.boughtNewClothes) total += 5; // 5 kg CO₂e
    if (shopping.orderedOnline) total += 0.5;  // 0.5 kg CO₂e
    if (shopping.subscribedSvc) total += 0.1;  // 0.1 kg CO₂e
    if (shopping.noShopping) total = 0;
    setShoppingResult(total);
  };

  return (
    <div>
      <div className='page-header'>
        <h1  style={{ fontSize: "2rem", color: "rgb(67, 209, 162)" }} className="page-title">Shopping Habits</h1>
      </div>
      <div className='row'>
        <div className='col-md-12 grid-margin'>
          <div className='card'>
            <div className='card-body'>
              <h4 className='card-title'>Basic Form Validation</h4>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
  {/* --- Shopping Snapshot --- */}
  <div className="mb-4">
    <h5>Shopping Snapshot</h5>
    <p>Which of these did you do this week? (Select all that apply.)</p>
    <div>
      <Form.Check
        type="checkbox"
        id="boughtNewClothes"
        name="boughtNewClothes"
        label="Bought new clothing or shoes"
        checked={shopping.boughtNewClothes}
        onChange={handleShoppingChange}
        disabled={shopping.noShopping}
      />
      <Form.Check
        type="checkbox"
        id="orderedOnline"
        name="orderedOnline"
        label="Ordered something online (any category)"
        checked={shopping.orderedOnline}
        onChange={handleShoppingChange}
        disabled={shopping.noShopping}
      />
      <Form.Check
        type="checkbox"
        id="subscribedSvc"
        name="subscribedSvc"
        label="Paid or renewed a streaming/subscription service"
        checked={shopping.subscribedSvc}
        onChange={handleShoppingChange}
        disabled={shopping.noShopping}
      />
      <Form.Check
        type="checkbox"
        id="noShopping"
        name="noShopping"
        label="I didn’t buy anything this week"
        checked={shopping.noShopping}
        onChange={handleShoppingChange}
        disabled={
          shopping.boughtNewClothes ||
          shopping.orderedOnline ||
          shopping.subscribedSvc
        }
      />
    </div>
    {shoppingResult !== null && (
      <div className="alert alert-success mt-3" role="alert">
        {shopping.noShopping
          ? "No shopping emissions this week!"
          : `Estimated shopping emissions: ${shoppingResult} kg CO₂e`}
      </div>
    )}
    <Button
        style={{ color: "#fff", backgroundColor: "rgb(39, 185, 136)", borderColor: "rgb(39, 185, 136)" }}
        type="submit"
        className="mt-3"
        variant="success"
      >
        Submit
      </Button>
  </div>
  {/* --- End Shopping Snapshot --- */}

  {/* 
  <Row className="mb-3">
    <Form.Group as={Col} md="4" controlId="validationCustom01">
      <Form.Label>First name</Form.Label>
      <Form.Control
        required
        type="text"
        placeholder="First name"
        defaultValue="Mark"
      />
      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
    </Form.Group>
    <Form.Group as={Col} md="4" controlId="validationCustom02">
      <Form.Label>Last name</Form.Label>
      <Form.Control
        required
        type="text"
        placeholder="Last name"
        defaultValue="Otto"
      />
      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
    </Form.Group>
    <Form.Group as={Col} md="4" controlId="validationCustomUsername">
      <Form.Label>Username</Form.Label>
      <InputGroup hasValidation>
        <div className='input-group-prepend'>
          <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
        </div>
        <Form.Control
          type="text"
          placeholder="Username"
          aria-describedby="inputGroupPrepend"
          required
        />
        <Form.Control.Feedback type="invalid">
          Please choose a username.
        </Form.Control.Feedback>
      </InputGroup>
    </Form.Group>
  </Row>
  <Row className="mb-3">
    <Form.Group as={Col} md="6" controlId="validationCustom03">
      <Form.Label>City</Form.Label>
      <Form.Control type="text" placeholder="City" required />
      <Form.Control.Feedback type="invalid">
        Please provide a valid city.
      </Form.Control.Feedback>
    </Form.Group>
    <Form.Group as={Col} md="3" controlId="validationCustom04">
      <Form.Label>State</Form.Label>
      <Form.Control type="text" placeholder="State" required />
      <Form.Control.Feedback type="invalid">
        Please provide a valid state.
      </Form.Control.Feedback>
    </Form.Group>
    <Form.Group as={Col} md="3" controlId="validationCustom05">
      <Form.Label>Zip</Form.Label>
      <Form.Control type="text" placeholder="Zip" required />
      <Form.Control.Feedback type="invalid">
        Please provide a valid zip.
      </Form.Control.Feedback>
    </Form.Group>
  </Row>
  <Form.Group className="mb-3">
    <Form.Check
      required
      label="Agree to terms and conditions"
      feedback="You must agree before submitting."
      feedbackType="invalid"
      className='form-check-label'
    />
  </Form.Group>
  <Button type="submit">Submit form</Button>
  */}
</Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Validation