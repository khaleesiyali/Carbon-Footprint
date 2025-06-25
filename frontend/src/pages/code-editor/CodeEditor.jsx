import AceEditor from 'react-ace'

// import modes (language)
import "ace-builds/src-noconflict/mode-javascript"
import "ace-builds/src-noconflict/mode-html"
import "ace-builds/src-noconflict/mode-sass"
import "ace-builds/src-noconflict/mode-json"
import "ace-builds/src-noconflict/mode-php"

// import themes
import "ace-builds/src-noconflict/theme-github"
import "ace-builds/src-noconflict/theme-monokai"
import { useState } from 'react';

const aceHeight = {
  minHeight: "300px"
}

function onChange(newValue) {
  console.log("change", newValue);
}

function ResultTable({ title, data, onCommentChange, onDelete }) {
  return (
    <div className="mb-5">
      <h4 style={{ fontWeight: 600 }}>{title}</h4>
      <div className="table-responsive">
        <table className="table table-bordered align-middle">
          <thead style={{
                            backgroundColor: "rgb(39, 185, 136)",
                            borderColor: "rgb(39, 185, 136)",
                            color: "#fff",  
                          
                        }}>
            <tr>
              <th>Date Added</th>
              <th>Emission (tCO2E)</th>
              <th>Details</th>
              <th>Comments</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 && (
              <tr>
                <td colSpan={5} className="text-center text-muted">No data</td>
              </tr>
            )}
            {data.map((row, idx) => (
              <tr key={row.id || idx}>
                <td>{row.date}</td>
                <td>{row.emission}</td>
                <td>{row.details}</td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    value={row.comment}
                    onChange={e => onCommentChange(idx, e.target.value)}
                  />
                </td>
                <td>
                  <button className="btn btn-danger btn-sm" onClick={() => onDelete(idx)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function CodeEditor() {
  // Example state for each input type
  const [electricity, setElectricity] = useState([
    { date: "2024-06-23", emission: 0.12, details: "Monthly bill: 100kWh", comment: "" }
  ]);
  const [travel, setTravel] = useState([
    { date: "2024-06-23", emission: 0.25, details: "Car: 3 days, Bus: 2 days", comment: "" }
  ]);
  const [shopping, setShopping] = useState([
    { date: "2024-06-23", emission: 0.08, details: "Clothing: 2 items", comment: "" }
  ]);

  // Handlers for comment editing and delete
  const handleCommentChange = (type, idx, value) => {
    const setter = type === 'electricity' ? setElectricity : type === 'travel' ? setTravel : setShopping;
    const data = type === 'electricity' ? electricity : type === 'travel' ? travel : shopping;
    const updated = [...data];
    updated[idx].comment = value;
    setter(updated);
  };

  const handleDelete = (type, idx) => {
    const setter = type === 'electricity' ? setElectricity : type === 'travel' ? setTravel : setShopping;
    const data = type === 'electricity' ? electricity : type === 'travel' ? travel : shopping;
    const updated = data.filter((_, i) => i !== idx);
    setter(updated);
  };

  return (
    <>
      <div className="page-header">
        <h3 className="page-title"> Results </h3>
        <nav aria-label="breadcrumb">
          
        </nav>
      </div>


      <div className="row">
        <div className="col-12 grid-margin">
          <div className="card">
            <div className="card-body">
              <ResultTable
                title="Electricity"
                data={electricity}
                onCommentChange={(idx, val) => handleCommentChange('electricity', idx, val)}
                onDelete={idx => handleDelete('electricity', idx)}
              />
              <ResultTable
                title="Travel"
                data={travel}
                onCommentChange={(idx, val) => handleCommentChange('travel', idx, val)}
                onDelete={idx => handleDelete('travel', idx)}
              />
              <ResultTable
                title="Shopping"
                data={shopping}
                onCommentChange={(idx, val) => handleCommentChange('shopping', idx, val)}
                onDelete={idx => handleDelete('shopping', idx)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CodeEditor