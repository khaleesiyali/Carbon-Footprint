import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    key: "groceries",
    label: "Groceries",
    emissionFactor: 10,
    subOptions: [
      { value: "food", label: "Food & Drinks" },
      { value: "household_goods", label: "Household Goods" }
    ]
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
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [shoppingInputs, setShoppingInputs] = useState({
    clothing: [],
    electronics: [],
    groceries: [],
    streaming: [],
  });
  const [currentInput, setCurrentInput] = useState({
    clothing: { quantity: "", price: "", method: null, comment: "" },
    electronics: { quantity: "", price: "", method: null, comment: "" },
    groceries: { quantity: "", price: "", method: null, subType: null, comment: "" },
    streaming: { quantity: "", price: "", method: null, comment: "" },
  });
  const [shoppingResult, setShoppingResult] = useState(null);
  const [shoppingResultsTable, setShoppingResultsTable] = useState([]);

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
    if (!input.quantity && !input.price && !input.method) return;
    setShoppingInputs(prev => ({
      ...prev,
      [category]: [...prev[category], input],
    }));
    setCurrentInput(prev => ({
      ...prev,
      [category]: { quantity: "", price: "", method: null, comment: "" },
    }));
  };

  // Remove an item row for a category
  const handleRemoveRow = (category, idx) => {
    setShoppingInputs(prev => ({
      ...prev,
      [category]: prev[category].filter((_, i) => i !== idx),
    }));
  };

  // Remove from results table
  const handleDeleteResult = (idx) => {
    setShoppingResultsTable(prev => prev.filter((_, i) => i !== idx));
  };

  // Handle comment edit in table
  const handleCommentEdit = (idx, value) => {
    setShoppingResultsTable(prev => {
      const updated = [...prev];
      updated[idx].comment = value;
      return updated;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setValidated(true);

    // Add one row per item, per category, with the same date
    const today = new Date().toISOString().slice(0, 10);
    let newRows = [];
    SHOPPING_CATEGORIES.forEach(cat => {
      shoppingInputs[cat.key].forEach(item => {
        if (!item.quantity && !item.price && !item.method) return;
        const qty = parseFloat(item.quantity) || 0;
        const emission = qty * cat.emissionFactor;
        let details = `${cat.label}: Qty ${item.quantity || 0}`;
        if (item.price) details += `, Price ${item.price}`;
        if (cat.key === 'groceries' && item.subType) details += `, Type ${item.subType.label}`;
        if (item.method) details += `, Method ${item.method.label}`;
        newRows.push({
          date: today,
          category: cat.label,
          emission: emission,
          details: details,
          comment: item.comment || '',
        });
      });
    });
    setShoppingResult(newRows.reduce((acc, row) => acc + row.emission, 0));
    setShoppingResultsTable(prev => [
      ...newRows,
      ...prev
    ]);
    // Reset all input fields after calculation
    setShoppingInputs({
      clothing: [],
      electronics: [],
      groceries: [],
      streaming: [],
    });
    setCurrentInput({
      clothing: { quantity: "", price: "", method: null, comment: "" },
      electronics: { quantity: "", price: "", method: null, comment: "" },
      groceries: { quantity: "", price: "", method: null, subType: null, comment: "" },
      streaming: { quantity: "", price: "", method: null, comment: "" },
    });
  };

  return (
    <div>
      <div className='page-header'>
        <h1 style={{ fontSize: "2rem", color: "rgb(67, 209, 162)" }} className="page-title">Weekly Shopping</h1>
      </div>
      <div className='row'>
        <div className='col-md-12 grid-margin'>
          <div className='card'>
            <div className='card-body'>
              <h4 className='card-title'>Shopping Input</h4>
              <Form noValidate validated={validated} onSubmit={e => e.preventDefault()}>
                <div className="row">
                  {SHOPPING_CATEGORIES.map(cat => (
                    <div className="col-md-6 mb-4" key={cat.key}>
                      <div className="card h-100">
                        <div className="card-body">
                          <h5>{cat.label}</h5>
                          <div className="row mb-2 align-items-center">
                            <div className="col-6">
                              <Form.Control
                                type="number"
                                min={0}
                                placeholder="Quantity"
                                value={currentInput[cat.key].quantity}
                                onChange={e => handleInputChange(cat.key, "quantity", e.target.value)}
                              />
                            </div>
                            <div className="col-6">
                              <Form.Control
                                type="number"
                                min={0}
                                placeholder="Price"
                                value={currentInput[cat.key].price}
                                onChange={e => handleInputChange(cat.key, "price", e.target.value)}
                              />
                            </div>
                          </div>
                          {cat.key === "groceries" && (
                            <div className="row mb-2 align-items-center">
                              <div className="col-12">
                                <Select
                                  value={currentInput[cat.key].subType}
                                  onChange={option => handleInputChange(cat.key, "subType", option)}
                                  options={cat.subOptions}
                                  placeholder="Type"
                                />
                              </div>
                            </div>
                          )}
                          {cat.key !== "streaming" && (
                            <div className="row mb-2 align-items-center">
                              <div className="col-12">
                                <Select
                                  value={currentInput[cat.key].method}
                                  onChange={option => handleInputChange(cat.key, "method", option)}
                                  options={METHOD_OPTIONS}
                                  placeholder="Method"
                                />
                              </div>
                            </div>
                          )}
                          <div className="row mb-2 align-items-center">
                            <div className="col-12">
                              <Form.Control
                                as="textarea"
                                rows={1}
                                placeholder="Comment/notes"
                                value={currentInput[cat.key].comment}
                                onChange={e => handleInputChange(cat.key, "comment", e.target.value)}
                              />
                            </div>
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
                      </div>
                    </div>
                  ))}
                </div>
              </Form>

              {/* --- Show all inputted values at the bottom --- */}
              <div className="mt-5">
                <h5>All Items Added</h5>
                {SHOPPING_CATEGORIES.map(cat =>
                  shoppingInputs[cat.key].map((item, idx) => {
                    if (!item.quantity && !item.price && !item.method && !item.comment) return null;
                    return (
                      <div key={cat.key + idx} className="d-flex align-items-center mb-2" style={{ borderBottom: "1px solid #eee", paddingBottom: 6 }}>
                        <span style={{ minWidth: 110, fontWeight: 500 }}>{cat.label}:</span>
                        <span className="mx-2">Qty: {item.quantity || 0}</span>
                        <span className="mx-2">Price: {item.price || 0}</span>
                        {cat.key === "groceries" && (
                          <span className="mx-2">Type: {item.subType ? item.subType.label : "-"}</span>
                        )}
                        {cat.key !== "streaming" && (
                          <span className="mx-2">Method: {item.method ? item.method.label : "-"}</span>
                        )}
                        <span className="mx-2">Comment: {item.comment || "-"}</span>
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

              <Button
                style={{
                  color: "#fff",
                  backgroundColor: "rgb(67, 209, 162)",
                  borderColor: "rgb(67, 209, 162)"
                }}
                type="button"
                className="mt-3"
                variant="success"
                onClick={handleSubmit}
              >
                Calculate
              </Button>

              {/* Results Table: one row per item, separated by category, with same date if calculated at once */}
              <div className="mt-5">
                <h4 style={{ fontWeight: 600 }}>Shopping Results</h4>
                <div className="table-responsive">
                  <table className="table table-bordered align-middle">
                    <thead style={{ backgroundColor: "rgb(39, 185, 136)", color: "#fff" }}>
                      <tr>
                        <th>Date Added</th>
                        <th>Category</th>
                        <th>Emissions (tCO2e)</th>
                        <th>Details</th>
                        <th>Comments</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {shoppingResultsTable.length === 0 && (
                        <tr>
                          <td colSpan={6} className="text-center text-muted">No data</td>
                        </tr>
                      )}
                      {shoppingResultsTable.map((row, idx) => (
                        <tr key={idx}>
                          <td>{row.date}</td>
                          <td>{row.category}</td>
                          <td>{row.emission}</td>
                          <td>{row.details}</td>
                          <td>{row.comment}</td>
                          <td>
                            <button className="btn btn-danger btn-sm" onClick={() => handleDeleteResult(idx)}>
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="d-flex justify-content-between mt-4">
                <button type="button" className="btn btn-secondary" style={{ backgroundColor: '#e0e0e0', color: '#222', border: 'none' }} onClick={() => navigate('/form-elements/advanced-elements')}>
                  Previous
                </button>
                <button type="button" className="btn" style={{ backgroundColor: '#27b988', borderColor: '#27b988', color: '#fff' }} onClick={() => navigate('/code-editor')}>
                  Next
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Validation;