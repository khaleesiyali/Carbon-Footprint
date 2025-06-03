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

function ElectricityUsageForm() {
  const [hours, setHours] = useState(
    APPLIANCES.reduce((acc, a) => ({ ...acc, [a.name]: "" }), {})
  );
  const [showModal, setShowModal] = useState(false);
  const [totalKwh, setTotalKwh] = useState(0);

  const handleChange = (appliance, value) => {
    setHours({ ...hours, [appliance]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Calculate total kWh per day
    let totalWh = 0;
    APPLIANCES.forEach(a => {
      const h = parseFloat(hours[a.name]) || 0;
      totalWh += a.watt * h;
    });
    const totalKwhDay = totalWh / 1000;
    setTotalKwh(totalKwhDay);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

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
                  step={1}
                  className="form-control"
                  placeholder="Hours used per day"
                  value={hours[a.name]}
                  onChange={e => handleChange(a.name, e.target.value)}
                />
              </div>
            ))}
          </div>
          <button type="submit" className="btn btn-primary mt-3">Submit</button>
        </form>
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
  );
}


function BasicForm() {
  return (

    <div>
       <div className="page-header" >
        <h1  style={{ fontSize: "2rem" }} className="page-title">Weekly Electricity Usage Check-In</h1>
        
      </div>


    <div>
    
      {/* --- Electricity Usage Form --- */}
      <ElectricityUsageForm />
      {/* --- Existing forms below --- */}
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
    </div>


  {/*

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
  )
}

export default BasicForm