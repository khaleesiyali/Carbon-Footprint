import { useState, useMemo, useCallback } from 'react';
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

function AGGrid() {
  const [rowData, setRowData] = useState([]);

  const columnDefs = useMemo(() => [
    { field: "athlete", sortingOrder: ["asc", "desc"] },
    { field: "age", width: 90, sortingOrder: ["desc", "asc"] },
    { field: "country", sortingOrder: ["desc", null] },
    { field: "year", width: 90, sortingOrder: ["asc"] },
    { field: "date" },
    { field: "sport" },
    { field: "gold" },
    { field: "silver" },
    { field: "bronze" },
    { field: "total" },
  ], []);

  const defaultColDef = useMemo(() => ({
    width: 170,
  }), []);

  const sortingOrder = useMemo(() => ["desc", "asc", null], []);

  const onGridReady = useCallback(() => {
    fetch("https://www.ag-grid.com/example-assets/olympic-winners.json")
      .then((resp) => resp.json())
      .then((data) => setRowData(data));
  }, []);

  return (
    <>
      <div className="page-header">
        <h3 className="page-title">AG Grid Table</h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="!#" onClick={(event) => event.preventDefault()}>
                Tables
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              AG Grid
            </li>
          </ol>
        </nav>
      </div>
      <div className="row grid-margin">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Basic Sortable Table</h4>
              <div
                className="ag-theme-quartz-dark"
                style={{ height: "500px", width: "100%" }}
              >
                <AgGridReact
                  rowData={rowData}
                  columnDefs={columnDefs}
                  defaultColDef={defaultColDef}
                  sortingOrder={sortingOrder}
                  onGridReady={onGridReady}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AGGrid;