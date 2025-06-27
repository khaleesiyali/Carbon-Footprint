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

function ResultTable({ title, data, onCommentChange, onDelete, onEdit, onSave, editingIdx, editingComment, setEditingComment }) {
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
              <th style={{ minWidth: 260, maxWidth: 320 }}>Details</th>
              <th>Comments</th>
              <th>Actions</th>
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
                <td>{row.date || '-'}</td>
                <td>{row.emission !== undefined && row.emission !== null && row.emission !== '' ? row.emission : '-'}</td>
                <td style={{ minWidth: 260, maxWidth: 320, whiteSpace: 'pre-wrap', wordBreak: 'break-word', verticalAlign: 'top' }}>
                  {row.details !== undefined && row.details !== null && row.details !== '' ? row.details : '-'}
                </td>
                <td style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word', maxWidth: 220, verticalAlign: 'top' }}>
                  {editingIdx === idx ? (
                    <input
                      type="text"
                      className="form-control"
                      value={editingComment}
                      onChange={e => setEditingComment(e.target.value)}
                    />
                  ) : (
                    <span style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{row.comment !== undefined && row.comment !== null && row.comment !== '' ? row.comment : '-'}</span>
                  )}
                </td>
                <td>
                  {editingIdx === idx ? (
                    <>
                      <button className="btn btn-success btn-sm me-2" onClick={() => onSave(idx, editingComment)}>
                        Save
                      </button>
                      <button className="btn btn-danger btn-sm" onClick={() => onDelete(idx)}>
                        Delete
                      </button>
                    </>
                  ) : (
                    <button
                      className="btn btn-sm"
                      style={{
                        backgroundColor: "rgb(39, 185, 180)",
                        borderColor: "rgb(39, 185, 180)",
                        color: "#fff"
                      }}
                      onClick={() => onEdit(idx, row.comment)}
                    >
                      Edit
                    </button>
                  )}
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
    { date: "2024-06-23", emission: 0.12, details: "Weekly Energy Consumption: 100kWh", comment: "" }
  ]);
  const [travel, setTravel] = useState([
    { date: "2024-06-23", emission: 0.25, details: "Car: 3 days, Bus: 2 days", comment: "" }
  ]);
  const [shopping, setShopping] = useState([
    { date: "2024-06-23", emission: 0.08, details: "Clothing: 2 items", comment: "" }
  ]);

  // Editing state
  const [editing, setEditing] = useState({ type: null, idx: null });
  const [editingComment, setEditingComment] = useState("");

  // Handlers for comment editing and delete
  const handleEdit = (type, idx, comment) => {
    setEditing({ type, idx });
    setEditingComment(comment);
  };

  const handleSave = (type, idx, comment) => {
    const setter = type === 'electricity' ? setElectricity : type === 'travel' ? setTravel : setShopping;
    const data = type === 'electricity' ? electricity : type === 'travel' ? travel : shopping;
    const updated = [...data];
    updated[idx].comment = comment;
    setter(updated);
    setEditing({ type: null, idx: null });
    setEditingComment("");
  };

  const handleDelete = (type, idx) => {
    const setter = type === 'electricity' ? setElectricity : type === 'travel' ? setTravel : setShopping;
    const data = type === 'electricity' ? electricity : type === 'travel' ? travel : shopping;
    const updated = data.filter((_, i) => i !== idx);
    setter(updated);
    setEditing({ type: null, idx: null });
    setEditingComment("");
  };

  return (
    <>
      <div className="page-header">
        <h1 className="page-title"> Results </h1>
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
                onCommentChange={() => {}}
                onDelete={idx => handleDelete('electricity', idx)}
                onEdit={(idx, comment) => handleEdit('electricity', idx, comment)}
                onSave={(idx, comment) => handleSave('electricity', idx, comment)}
                editingIdx={editing.type === 'electricity' ? editing.idx : null}
                editingComment={editing.type === 'electricity' ? editingComment : ""}
                setEditingComment={setEditingComment}
              />
              <ResultTable
                title="Travel"
                data={travel}
                onCommentChange={() => {}}
                onDelete={idx => handleDelete('travel', idx)}
                onEdit={(idx, comment) => handleEdit('travel', idx, comment)}
                onSave={(idx, comment) => handleSave('travel', idx, comment)}
                editingIdx={editing.type === 'travel' ? editing.idx : null}
                editingComment={editing.type === 'travel' ? editingComment : ""}
                setEditingComment={setEditingComment}
              />
              <ResultTable
                title="Shopping"
                data={shopping}
                onCommentChange={() => {}}
                onDelete={idx => handleDelete('shopping', idx)}
                onEdit={(idx, comment) => handleEdit('shopping', idx, comment)}
                onSave={(idx, comment) => handleSave('shopping', idx, comment)}
                editingIdx={editing.type === 'shopping' ? editing.idx : null}
                editingComment={editing.type === 'shopping' ? editingComment : ""}
                setEditingComment={setEditingComment}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CodeEditor