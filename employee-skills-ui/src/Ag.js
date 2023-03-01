import React, { useState, useEffect, } from 'react';
import { Button } from '@mui/material'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import * as XLSX from 'xlsx';

function App() {
  const [rowData, setRowData] = useState([]);
  const [gridApi, setGridApi] = useState(null);
  let temp = [];

  useEffect(() => {
    fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
    .then(result => result.json())
    .then(rowData => setRowData(rowData))
  }, []);

  const defaultColDef = {
    flex: 1,
    filterParams: {
      buttons: ['apply','clear','reset']
    }
  }

  const onGridReady = (params) => {
    setGridApi(params.api);
  };

function dataAfterFilter() {
  gridApi.forEachNodeAfterFilter((rowNode) => {
    temp.push(rowNode.data)
  });
}

  const exportFilteredData = () => {
    dataAfterFilter();
    const filteredData = temp;
    const worksheet = XLSX.utils.json_to_sheet(filteredData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Filtered Data');
    XLSX.writeFile(workbook, 'filtered-data.xlsx');
  };

  const columns = [
    { field: 'athlete', minWidth: 150, filter: 'agTextColumnFilter'},
    { field: 'age', filter: 'agNumberColumnFilter'},
    { field: 'country', filter: 'agTextColumnFilter' },
    { field: 'year', filter: 'agNumberColumnFilter' },
    { field: 'sport', filter: 'agTextColumnFilter' },
    { field: 'gold', filter: 'agNumberColumnFilter' },
    { field: 'silver', filter: 'agNumberColumnFilter' },
    { field: 'bronze', filter: 'agNumberColumnFilter' },
  ];

  return (
    <div>
      <div className="ag-theme-alpine" style={{ height: '70vh', width: '100%'}}>
        <AgGridReact
        rowData = {rowData}
        onGridReady = {onGridReady}
        columnDefs = {columns}
        defaultColDef = {defaultColDef}
        animateRows = {true}
        rowSelection={'single'}
        pagination = {true} 
        paginationPageSize={50} />
      </div>
      {/* <button onClick={exportFilteredData} style={{marginBottom: '40px', marginTop: '15px'}}>Download Data</button> */}
      <Button variant="outlined" onClick = { exportFilteredData }>Download Data</Button>
    </div>
  );
}

export default App;