import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Select from 'react-select'; 

const SHOPPING_CATEGORIES = [
  {
    key: "clothing",
    label: "Clothing",
    emissionFactor: 15,
  },
  {
    key: "electronics",
    label: "Electronics",
    emissionFactor: 50,
  },
  {
    key: "household",
    label: "Household Goods",
    emissionFactor: 10,
  },
  {
    key: "streaming",
    label: "Streaming/Subscription Service",
    emissionFactor: 0.1,
  },
];

const METHOD_OPTIONS = [
  { value: "Online", label: "Online" },
  { value: "In-store", label: "In-store" }
];

function Validation() {
  const [validated, setValidated] = useState(false);
  const [shoppingInputs, setShoppingInputs] = useState({
    clothing: [],
    electronics: [],
    household: [],
    streaming: [],
  });
  const [currentInput, setCurrentInput] = useState({
    clothing: { quantity: "", price: "", weight: "", method: null },
    electronics: { quantity: "", price: "", weight: "", method: null },
    household: { quantity: "", price: "", weight: "", method: null },
    streaming: { quantity: "", price: "", weight: "", method: null },
  });
  const [shoppingResult, setShoppingResult] = useState(null);

  // Handle input change for each category
  const handleInputChange = (category, field, value) => {
    setCurrentInput(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [field]: value,
      },
    }));
  };

  // Add current input to the list and reset the input fields for that category
  const handleAddRow = (category) => {
    const input = currentInput[category];
    // Only add if at least quantity or price is filled
    if (!input.quantity && !input.price && !input.weight && !input.method) return;
    setShoppingInputs(prev => ({
      ...prev,
      [category]: [...prev[category], input],
    }));
    setCurrentInput(prev => ({
      ...prev,
      [category]: { quantity: "", price: "", weight: "", method: null },
    }));
  };

  // Remove an item row for a category
  const handleRemoveRow = (category, idx) => {
    setShoppingInputs(prev => ({
      ...prev,
      [category]: prev[category].filter((_, i) => i !== idx),
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setValidated(true);

    // Calculate total CO2e
    let total = 0;
    SHOPPING_CATEGORIES.forEach(cat => {
      shoppingInputs[cat.key].forEach(item => {
        const qty = parseFloat(item.quantity) || 0;
        total += qty * cat.emissionFactor;
      });
    });
    setShoppingResult(total);
  };

  return (
    <div>
      <div className='page-header'>
        <h1 style={{ fontSize: "2rem", color: "rgb(67, 209, 162)" }} className="page-title">Shopping Habits</h1>
      </div>
      <div className='row'>
        <div className='col-md-12 grid-margin'>
          <div className='card'>
            <div className='card-body'>
              <h4 className='card-title'>Shopping Input</h4>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                {SHOPPING_CATEGORIES.map(cat => (
                  <div className="mb-4" key={cat.key}>
                    <h5>{cat.label}</h5>
                    <div className="row mb-2 align-items-center">
                      <div className="col-md-3">
                        <Form.Control
                          type="number"
                          min={0}
                          placeholder="Quantity"
                          value={currentInput[cat.key].quantity}
                          onChange={e => handleInputChange(cat.key, "quantity", e.target.value)}
                        />
                      </div>
                      <div className="col-md-3">
                        <Form.Control
                          type="number"
                          min={0}
                          placeholder="Price"
                          value={currentInput[cat.key].price}
                          onChange={e => handleInputChange(cat.key, "price", e.target.value)}
                        />
                      </div>
                      <div className="col-md-3">
                        <Form.Control
                          type="number"
                          min={0}
                          placeholder="Weight (kg, optional)"
                          value={currentInput[cat.key].weight}
                          onChange={e => handleInputChange(cat.key, "weight", e.target.value)}
                        />
                      </div>
                      {cat.key !== "streaming" && (
                        <div className="col-md-3">
                          <Select
                            value={currentInput[cat.key].method}
                            onChange={option => handleInputChange(cat.key, "method", option)}
                            options={METHOD_OPTIONS}
                            placeholder="Method"
                          />
                        </div>
                      )}
                    </div>
                    <div className="row mb-2">
                      <div className="col">
                        <Button
                          variant="success"
                          size="sm"
                          style={{
                            color: "#fff",
                            backgroundColor: "rgb(67, 209, 162)",
                            borderColor: "rgb(67, 209, 162)"
                          }}
                          onClick={() => handleAddRow(cat.key)}
                        >
                          Add
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
                {shoppingResult !== null && (
                  <div className="alert alert-success mt-3" role="alert">
                    Estimated shopping emissions: {shoppingResult} kg CO₂e
                  </div>
                )}
                <Button
                  style={{
                    color: "#fff",
                    backgroundColor: "rgb(67, 209, 162)",
                    borderColor: "rgb(67, 209, 162)"
                  }}
                  type="submit"
                  className="mt-3"
                  variant="success"
                >
                  Submit shopping input
                </Button>
              </Form>

              {/* --- Show all inputted values at the bottom --- */}
              <div className="mt-5">
                <h5>All Items Added</h5>
                {SHOPPING_CATEGORIES.map(cat =>
                  shoppingInputs[cat.key].map((item, idx) => {
                    if (!item.quantity && !item.price && !item.weight && !item.method) return null;
                    return (
                      <div key={cat.key + idx} className="d-flex align-items-center mb-2" style={{ borderBottom: "1px solid #eee", paddingBottom: 6 }}>
                        <span style={{ minWidth: 110, fontWeight: 500 }}>{cat.label}:</span>
                        <span className="mx-2">Qty: {item.quantity || 0}</span>
                        <span className="mx-2">Price: {item.price || 0}</span>
                        <span className="mx-2">Weight: {item.weight || "-"}</span>
                        {cat.key !== "streaming" && (
                          <span className="mx-2">Method: {item.method ? item.method.label : "-"}</span>
                        )}
                        <Button
                          variant="danger"
                          size="sm"
                          className="ms-2"
                          onClick={() => handleRemoveRow(cat.key, idx)}
                        >
                          Remove
                        </Button>
                      </div>
                    );
                  })
                )}
              </div>
              {/* --- End show all inputted values --- */}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Validation;