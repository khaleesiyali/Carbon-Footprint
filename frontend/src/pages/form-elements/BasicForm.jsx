import BasicFormElements from "../../components/forms/BasicFormElements"
import BasicInputGroups from "../../components/forms/BasicInputGroups"
import CheckboxControls from "../../components/forms/CheckboxControls"
import ColoredCheckboxControls from "../../components/forms/ColoredCheckboxControls"
import DefaultForm from "../../components/forms/DefaultForm"
import HorizontalForm from "../../components/forms/HorizontalForm"
import InlineForm from "../../components/forms/InlineForm"
import InputSizes from "../../components/forms/InputSizes"
import SelectSizes from "../../components/forms/SelectSizes"
import TwoColumnForm from "../../components/forms/TwoColumnForm"
import { useState } from "react";
import applianceService from "../../services/appliance";

// This is a mock data for appliances, you can replace it with your own data or fetch from an API
// Uncomment the following lines if you want to use mock data instead of fetching from an API

const APPLIANCES = [
  { name: "Air conditioner", watt: 580 },
  { name: "IH cooking heater", watt: 2500 },
  { name: "Refrigerator", watt: 250 },
  { name: "Rice cooker", watt: 1300 },
  { name: "Light LED", watt: 10 },
  { name: "Gadgets", watt: 20 },
  { name: "Dryer", watt: 1200 },
  { name: "Washing machine", watt: 450 },
  { name: "Tumbler dryer", watt: 1300 },
];

/*
// Fetch appliances from the service
// Comment this line if you want to use mock data instead
const APPLIANCES = []
applianceService.getAll().then(appliances => appliances.forEach(appliance => APPLIANCES.push({name: appliance.name, watt: appliance.watt_hour_per_hour}))); 
*/

function ElectricityUsageForm() {
  const [hours, setHours] = useState(
    APPLIANCES.reduce((acc, a) => ({ ...acc, [a.name]: "" }), {})
  );
  const [showModal, setShowModal] = useState(false);
  const [totalKwh, setTotalKwh] = useState(0);
  // Results table state
  const [electricityResults, setElectricityResults] = useState([]);

  // For custom appliances
  const [customAppliances, setCustomAppliances] = useState([]);
  const [customName, setCustomName] = useState("");
  const [customKwh, setCustomKwh] = useState("");
  const [customHours, setCustomHours] = useState("");

  const handleChange = (appliance, value) => {
    setHours({ ...hours, [appliance]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Calculate total kWh per day for default appliances
    let totalWh = 0;
    let newRows = [];
    APPLIANCES.forEach(a => {
      const h = parseFloat(hours[a.name]) || 0;
      if (h > 0) {
        const kwh = (a.watt * h) / 1000;
        totalWh += a.watt * h;
        newRows.push({
          date: new Date().toISOString().slice(0, 10),
          category: a.name,
          emission: kwh,
          details: `${a.name}: ${h} hours × ${a.watt}W`,
          comment: ""
        });
      }
    });
    // Custom appliances
    let customTotalKwh = 0;
    if (customAppliances.length > 0) {
      customAppliances.forEach(a => {
        const h = parseFloat(a.hours) || 0;
        const kwh = parseFloat(a.kwh) || 0;
        if (h > 0 && kwh > 0) {
          const total = kwh * h;
          customTotalKwh += total;
          newRows.push({
            date: new Date().toISOString().slice(0, 10),
            category: a.name,
            emission: total,
            details: `${a.name}: ${h} hours × ${kwh} kWh/hour`,
            comment: ""
          });
        }
      });
    }
    const totalKwhDay = totalWh / 1000 + customTotalKwh;
    setTotalKwh(totalKwhDay);
    setElectricityResults(prev => [
      ...newRows,
      ...prev
    ]);
    setShowModal(true);
    // Reset all input fields after calculation
    setHours(APPLIANCES.reduce((acc, a) => ({ ...acc, [a.name]: "" }), {}));
    setCustomAppliances([]);
    setCustomName("");
    setCustomKwh("");
    setCustomHours("");
  };

  const closeModal = () => setShowModal(false);

  const handleAddCustom = (e) => {
    e.preventDefault();
    if (!customName || !customKwh || !customHours) return;
    setCustomAppliances(prev => [
      ...prev,
      { name: customName, kwh: customKwh, hours: customHours }
    ]);
    setCustomName("");
    setCustomKwh("");
    setCustomHours("");
  };

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h4 className="card-title">Electricity Usage Calculator</h4>
        <form onSubmit={handleSubmit}>
          <div className="row">
            {APPLIANCES.map((a, idx) => (
              <div className="col-md-6 mb-3" key={a.name}>
                <label className="form-label">
                  {a.name} ({a.watt}W)
                </label>
                <input
                  type="number"
                  min={0}
                  max={24}
                  step={1}
                  className="form-control"
                  placeholder="Hours used per day"
                  value={hours[a.name]}
                  onChange={e => handleChange(a.name, e.target.value)}
                />
              </div>
            ))}
          </div>
          <hr />
          <h5>Add Your Own Appliance</h5>
          <div className="row align-items-center">
            <div className="col-md-4 mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Appliance name"
                value={customName}
                onChange={e => setCustomName(e.target.value)}
              />
            </div>
            <div className="col-md-3 mb-2">
              <input
                type="number"
                min={0}
                step="any"
                className="form-control"
                placeholder="kWh per hour"
                value={customKwh}
                onChange={e => setCustomKwh(e.target.value)}
              />
            </div>
            <div className="col-md-3 mb-2">
              <input
                type="number"
                min={0}
                max={24}
                step={1}
                className="form-control"
                placeholder="Hours used per day"
                value={customHours}
                onChange={e => setCustomHours(e.target.value)}
              />
            </div>
            <div className="col-md-2" style={{ alignSelf: 'flex-start' }}>
              <button
                type="button"
                className="btn w-100"
                style={{
                  backgroundColor: "rgb(39, 185, 136)",
                  borderColor: "rgb(39, 185, 136)",
                  color: "#fff"
                }}
                onClick={handleAddCustom}
              >
                Add
              </button>
            </div>
          </div>
          {/* Show custom appliances */}
          {customAppliances.length > 0 && (
            <div className="mt-3">
              <h6>Custom Appliances Added:</h6>
              <ul>
                {customAppliances.map((a, idx) => (
                  <li key={idx}>
                    {a.name} - {a.kwh} kWh/hour × {a.hours} hours/day
                  </li>
                ))}
              </ul>
            </div>
          )}
          <button
            type="submit"
            className="btn mt-3"
            style={{
              backgroundColor: "rgb(39, 185, 136)",
              borderColor: "rgb(39, 185, 136)",
              color: "#fff"
            }}
          >
            Calculate
          </button>
        </form>
        {/* Results Table */}
        <div className="mt-5">
          <h4 style={{ fontWeight: 600 }}>Electricity Results</h4>
          <div className="table-responsive">
            <table className="table table-bordered align-middle">
              <thead style={{ backgroundColor: "rgb(39, 185, 136)", color: "#fff" }}>
                <tr>
                  <th>Date Added</th>
                  <th>Category</th>
                  <th>Emissions (kWh)</th>
                  <th>Details</th>
                  <th>Comments</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {electricityResults.length === 0 && (
                  <tr>
                    <td colSpan={6} className="text-center text-muted">No data</td>
                  </tr>
                )}
                {electricityResults.map((row, idx) => (
                  <tr key={idx}>
                    <td>{row.date}</td>
                    <td>{row.category}</td>
                    <td>{row.emission}</td>
                    <td>{row.details}</td>
                    <td>{row.comment}</td>
                    <td>
                      <button className="btn btn-danger btn-sm" onClick={() => setElectricityResults(prev => prev.filter((_, i) => i !== idx))}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* Modal */}
        {showModal && (
          <div
            style={{
              position: "fixed",
              top: 0, left: 0, right: 0, bottom: 0,
              background: "rgba(0,0,0,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 9999
            }}
          >
            <div style={{
              background: "#fff",
              padding: "2rem 3rem",
              borderRadius: "8px",
              boxShadow: "0 2px 16px rgba(0,0,0,0.2)",
              textAlign: "center",
              color: "#222",
              minWidth: "250px"
            }}>
              <h4 style={{color: "#222"}}>Data has been recorded</h4>
              <p>
                Total daily electricity usage: <b>{totalKwh.toFixed(2)} kWh</b>
              </p>
              <button className="btn btn-success mt-3" onClick={closeModal}>OK</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


function BasicForm() {
  return (
    <div>
      <div className='page-header'>
        <h1  style={{ fontSize: "2rem", color: "rgb(67, 209, 162)" }} className="page-title">Weekly Electricity Usage Check-In</h1>
      </div>
      <div>
        {/* --- Electricity Usage Form --- */}
        <ElectricityUsageForm />
        
        {/* --- Existing forms below --- 


        <div className="row">
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Default Form</h4>
                <p className="card-description"> Basic form layout</p>
                <form className="form-sample">
                  <DefaultForm /> 
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Horizontal Form</h4>
                <p className="card-description"> Horizontal From Layout</p>
                <form className="form-sample">
                  <HorizontalForm />
                </form>
              </div>
            </div>
          </div>
          <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Basic Form Elements</h4>
                <p className="card-description"> Basic form elements</p>
                <form className="form-sample">
                  <BasicFormElements />
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Input size</h4>
                <p className="card-description">Add attributes <code>size="lg"</code> or <code>size="sm"</code></p>
                <InputSizes />
              </div>
            </div>
          </div>
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Select size</h4>
                <p className="card-description">Add attributes <code>size="lg"</code> or <code>size="sm"</code></p>
                <SelectSizes />
              </div>
            </div>
          </div>
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Basic Input Groups</h4>
                  <p className="card-description"> Basic bootstrap input groups </p>
                  <BasicInputGroups />
              </div>
            </div>
          </div>
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Checkbox Controls</h4>
                  <p className="card-description">Checkbox and radio controls (default appearance is in primary color)</p>
                  <CheckboxControls />
              </div>
              <div className="card-body">
                <h4 className="card-title">Colored Checkbox Controls</h4>
                  <p className="card-description">Add className <code>.form-check-&#123;color&#125;</code> for checkbox and radio controls in theme colors</p>
                  <ColoredCheckboxControls />
              </div>
            </div>
          </div>
          <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Inline Forms</h4>
                  <p className="card-description"> Use the <code>.form-inline</code> className to display a series of labels, form controls, and buttons on a single horizontal row </p>
                  <InlineForm />
              </div>
            </div>
          </div>
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Horizontal Two Column</h4>
                  <TwoColumnForm />
              </div>
            </div>
          </div>
        </div>
    */}

      </div>
      <div className="d-flex justify-content-between mt-4">
        <button type="button" className="btn btn-secondary" style={{ backgroundColor: '#e0e0e0', color: '#222', border: 'none' }} onClick={() => window.location.href = '/form-elements/advanced-elements'}>
          Previous
        </button>
        <button type="button" className="btn btn-success" style={{ backgroundColor: '#27b988', borderColor: '#27b988', color: '#fff' }} onClick={() => window.location.href = '/form-elements/validation'}>
          Next
        </button>
      </div>
    </div>
  )
}

export default BasicForm