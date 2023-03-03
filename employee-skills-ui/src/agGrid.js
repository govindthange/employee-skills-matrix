import React, { useState, useEffect, } from 'react';
import { Link } from '@mui/material'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
// import 'ag-grid-community/styles/ag-theme-alpine-dark.css';
import * as XLSX from 'xlsx';
import { useSelector } from 'react-redux';
import { LIGHT_THEME } from './redux/theme/themeConstants';

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
    console.log("RowData", rowData);
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

  const theme = useSelector(state => state.theme);
  const themeClassName = (theme === LIGHT_THEME) ?' ag-theme-alpine' : 'ag-theme-alpine-dark'

  return (
    <div>
      <div style={{marginTop: '-30px', marginBottom: '20px'}}>
        <Link variant="outlined" onClick = { exportFilteredData } style={{ float: 'right', cursor: 'pointer' }}>Export</Link><br/><br/>
      </div>
      <div className={themeClassName} style={{ height: '70vh', width: '100%', marginBottom: '5rem' }}>
        <AgGridReact
        rowData = {rowData}
        onGridReady = {onGridReady}
        columnDefs = {columns}
        defaultColDef = {defaultColDef}
        animateRows = {true}
        rowSelection={'single'}
        pagination = {true} 
        paginationPageSize = {50} />
      </div>
    </div>
  );
}

export default App;
