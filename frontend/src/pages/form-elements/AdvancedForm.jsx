import Rating from 'react-rating';
import HookForm from '../../components/forms/HookForm';
import FormMask from '../../components/forms/FormMask';
import Dropzone from 'react-dropzone'
import DefaultDatepicker from '../../components/forms/DefaultDatepicker';
import DefaultTimePicker from '../../components/forms/DefaultTimePicker';
import InlineDatePicker from '../../components/forms/InlineDatePicker';
import DateRangePicker from '../../components/forms/DateRangePicker';
import FormRepeater from '../../components/forms/FormRepeater';
import TagsInput from '../../components/forms/TagsInput';
import Select from 'react-select'
import { Typeahead } from 'react-bootstrap-typeahead'; 
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function WeeklyTravelForm({ onSubmit }) {
  const [carDays, setCarDays] = useState(0);
  const [busDays, setBusDays] = useState(0);
  const [trainDays, setTrainDays] = useState(0);
  const [flightTrips, setFlightTrips] = useState(0);
  const [carMinutes, setCarMinutes] = useState(0);
  const [busMinutes, setBusMinutes] = useState(0);
  const [trainMinutes, setTrainMinutes] = useState(0);
  const [planeHours, setPlaneHours] = useState(0);
  // Comment states for each mode
  const [carComment, setCarComment] = useState("");
  const [busComment, setBusComment] = useState("");
  const [trainComment, setTrainComment] = useState("");
  const [planeComment, setPlaneComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      // Calculate emissions (dummy factors for example)
      const carEmission = carDays * carMinutes * 0.0002;
      const busEmission = busDays * busMinutes * 0.0001;
      const trainEmission = trainDays * trainMinutes * 0.00008;
      const planeEmission = flightTrips * planeHours * 0.09;
      // Build separate rows for each mode
      const today = new Date().toISOString().slice(0, 10);
      let travelRows = [];
      if (carDays > 0) {
        travelRows.push({
          date: today,
          emission: carEmission.toFixed(3),
          details: `Car: ${carDays} days, ${carMinutes} km`,
          comment: carComment
        });
      }
      if (busDays > 0) {
        travelRows.push({
          date: today,
          emission: busEmission.toFixed(3),
          details: `Bus: ${busDays} days, ${busMinutes} km`,
          comment: busComment
        });
      }
      if (trainDays > 0) {
        travelRows.push({
          date: today,
          emission: trainEmission.toFixed(3),
          details: `Train: ${trainDays} days, ${trainMinutes} km`,
          comment: trainComment
        });
      }
      if (flightTrips > 0) {
        travelRows.push({
          date: today,
          emission: planeEmission.toFixed(3),
          details: `Airplane: ${flightTrips} flights, ${planeHours} hours`,
          comment: planeComment
        });
      }
      onSubmit(travelRows);
      // Reset all input values after submit
      setCarDays(0);
      setBusDays(0);
      setTrainDays(0);
      setFlightTrips(0);
      setCarMinutes(0);
      setBusMinutes(0);
      setTrainMinutes(0);
      setPlaneHours(0);
      setCarComment("");
      setBusComment("");
      setTrainComment("");
      setPlaneComment("");
    }
  };

  return (
    <form className="card mb-4" onSubmit={handleSubmit}>
      <div className="card-body">
        {/* Car Section */}
        <div className="mb-3 border rounded p-3">
          <div className="d-flex justify-content-between align-items-center">
            <div style={{flex: 1}}>
              <label style={{ fontSize: "1.25rem" }} className="form-label">Days you used a car:</label>
              <input type="number" min={0} max={7} className="form-control mb-2" value={carDays} onChange={e => setCarDays(Number(e.target.value))} />
              <label className="form-label">Car trip length: {carMinutes} km</label>
              <input type="range" min={0} max={180} step={1} className="form-range green-range" value={carMinutes} onChange={e => setCarMinutes(Number(e.target.value))} style={{ accentColor: "#28a745" }} />
            </div>
            <div style={{width: 220, marginLeft: 24}}>
              <label className="form-label">Car comment/notes:</label>
              <textarea className="form-control" rows={2} value={carComment} onChange={e => setCarComment(e.target.value)} placeholder="Add comment..." />
            </div>
          </div>
        </div>
        {/* Bus Section */}
        <div className="mb-3 border rounded p-3">
          <div className="d-flex justify-content-between align-items-center">
            <div style={{flex: 1}}>
              <label style={{ fontSize: "1.25rem" }} className="form-label">Days you rode the bus:</label>
              <input type="number" min={0} max={7} className="form-control mb-2" value={busDays} onChange={e => setBusDays(Number(e.target.value))} />
              <label className="form-label">Bus trip length: {busMinutes} km</label>
              <input type="range" min={0} max={180} step={1} className="form-range green-range" value={busMinutes} onChange={e => setBusMinutes(Number(e.target.value))} style={{ accentColor: "#28a745" }} />
            </div>
            <div style={{width: 220, marginLeft: 24}}>
              <label className="form-label">Bus comment/notes:</label>
              <textarea className="form-control" rows={2} value={busComment} onChange={e => setBusComment(e.target.value)} placeholder="Add comment..." />
            </div>
          </div>
        </div>
        {/* Train Section */}
        <div className="mb-3 border rounded p-3">
          <div className="d-flex justify-content-between align-items-center">
            <div style={{flex: 1}}>
              <label style={{ fontSize: "1.25rem" }} className="form-label">Days you took the train:</label>
              <input type="number" min={0} max={7} className="form-control mb-2" value={trainDays} onChange={e => setTrainDays(Number(e.target.value))} />
              <label className="form-label">Train trip length: {trainMinutes} km</label>
              <input type="range" min={0} max={180} step={1} className="form-range green-range" value={trainMinutes} onChange={e => setTrainMinutes(Number(e.target.value))} style={{ accentColor: "#28a745" }} />
            </div>
            <div style={{width: 220, marginLeft: 24}}>
              <label className="form-label">Train comment/notes:</label>
              <textarea className="form-control" rows={2} value={trainComment} onChange={e => setTrainComment(e.target.value)} placeholder="Add comment..." />
            </div>
          </div>
        </div>
        {/* Airplane Section */}
        <div className="mb-3 border rounded p-3">
          <div className="d-flex justify-content-between align-items-center">
            <div style={{flex: 1}}>
              <label style={{ fontSize: "1.25rem" }} className="form-label">How many flights this week:</label>
              <input type="number" min={0} max={5} className="form-control mb-2" value={flightTrips} onChange={e => setFlightTrips(Number(e.target.value))} />
              <label className="form-label">Plane trip length: {planeHours} hours</label>
              <input type="range" min={0} max={24} step={1} className="form-range green-range" value={planeHours} onChange={e => setPlaneHours(Number(e.target.value))} style={{ accentColor: "#28a745" }} />
            </div>
            <div style={{width: 220, marginLeft: 24}}>
              <label className="form-label">Airplane comment/notes:</label>
              <textarea className="form-control" rows={2} value={planeComment} onChange={e => setPlaneComment(e.target.value)} placeholder="Add comment..." />
            </div>
          </div>
        </div>
        <hr />
        <button
          type="submit"
          className="btn mt-3"
          style={{ backgroundColor: "rgb(39, 185, 136)", borderColor: "rgb(39, 185, 136)", color: "#fff" }}
        >
          Calculate
        </button>
      </div>
      <style>{`
        .form-range.green-range::-webkit-slider-thumb {
          background:rgb(64, 164, 139) !important;
          border: 2px rgb(64, 164, 139) !important;
        }
        .form-range.green-range::-moz-range-thumb {
          background:rgb(64, 164, 139) !important;
          border: 2px rgb(64, 164, 139)!important;
        }
        .form-range.green-range::-ms-thumb {
          background:rgb(64, 164, 139)!important;
          border: 2px rgb(64, 164, 139) #218838 !important;
        }
      `}</style>
    </form>
  );
}

function AdvancedForm() {
  const [travelResults, setTravelResults] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  // Accepts array of rows
  const handleTravelSubmit = (rows) => {
    setTravelResults(prev => [
      ...rows,
      ...prev
    ]);
    setShowModal(true);
  };

  // Handler for deleting a row
  const handleDelete = (idx) => {
    setTravelResults(prev => prev.filter((_, i) => i !== idx));
  };

  // Close modal
  const closeModal = () => setShowModal(false);

  return (

    
    <div>

      <div className='page-header'>
        <h1  style={{ fontSize: "2rem", color: "rgb(67, 209, 162)" }} className="page-title">Weekly Travel Check-In</h1>
      </div>

      {/* Pass handleTravelSubmit to your form component */}
      <WeeklyTravelForm onSubmit={handleTravelSubmit} />

      {/* Results Table */}
      <div className="mt-5">
        <h4 style={{ fontWeight: 600 }}>Travel Results</h4>
        <div className="table-responsive">
          <table className="table table-bordered align-middle">
            <thead style={{ backgroundColor: "rgb(39, 185, 136)", color: "#fff" }}>
              <tr>
                <th>Date Added</th>
                <th>Emissions (tCO2e)</th>
                <th>Details</th>
                <th>Comments</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {travelResults.length === 0 && (
                <tr>
                  <td colSpan={5} className="text-center text-muted">No data</td>
                </tr>
              )}
              {travelResults.map((row, idx) => (
                <tr key={idx}>
                  <td>{row.date}</td>
                  <td>{row.emission}</td>
                  <td>{row.details}</td>
                  <td>{row.comment}</td>
                  <td>
                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(idx)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

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
            color: "#222", minWidth: "250px"
          }}>
            <h4 style={{ color: "#222", fontSize: "1.3rem" }}>Data has been recorded</h4>
            <button className="btn btn-success mt-3" onClick={closeModal} style={{ fontSize: "1.1rem" }}>OK</button>
          </div>
        </div>
      )}

      <div className="d-flex justify-content-between mt-4">
        <button type="button" className="btn btn-secondary" style={{ backgroundColor: '#e0e0e0', color: '#222', border: 'none' }} onClick={() => navigate('/dashboard')}>
          Previous
        </button>
        <button type="button" className="btn btn-success" onClick={() => navigate('/form-elements/basic-elements')}>
          Next
        </button>
      </div>
    </div>

    
  )

  
}


export default AdvancedForm