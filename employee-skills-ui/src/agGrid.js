import React, { useState, useEffect, useCallback, useRef, useMemo, } from 'react';
import { Link, TextField } from '@mui/material'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import * as XLSX from 'xlsx';
import { useDispatch, useSelector } from 'react-redux';
import { LIGHT_THEME } from './redux/theme/themeConstants';
import { progressbarAction } from './redux';

import { connect } from 'react-redux';
import { fetchEmployeeData } from './redux';
import EmployeeDetailContainer from './components/employee-detail/EmployeeDetailContainer';

function App({employees, fetchEmployeeData}) {
  // const [rowData, setRowData] = useState([]);
  const gridRef = useRef();
  const [gridApi, setGridApi] = useState(null);
  const dispatch = useDispatch();
  const rowData = useSelector(state => state.employee.employees)
  let temp = [];

  useEffect(() => {
    // fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
    // .tap(() => dispatch(progressbarAction()))
    // .then(result => result.json())
    // .then(rowData => setRowData(rowData))
    fetchEmployeeData()
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
    { field: 'id', maxWidth: 70},
    { field: 'code', maxWidth: 100, filter: 'agNumberColumnFilter'},
    { field: 'name', filter: 'agTextColumnFilter' },
    { field: 'localtion', maxWidth: 150, filter: 'agTextColumnFilter' },
    { field: 'designation', filter: 'agTextColumnFilter' },
    { field: 'mobileNumber', filter: 'agTextColumnFilter' },
    { field: 'githubUrl', filter: 'agTextColumnFilter' },
    { field: 'linkedinUrl', filter: 'agTextColumnFilter' },
  ];

  const onSelectionChanged = useCallback(() => {
    const selectedRows = gridRef.current.api.getSelectedRows();
    console.log("row selected", selectedRows)
  }, []);

  const onFilterTextBoxChanged = useCallback(() => {
    gridRef.current.api.setQuickFilter(
      document.getElementById('filter-text-box').value
    );
  }, []);


  const theme = useSelector(state => state.theme.theme);
  const themeClassName = (theme === LIGHT_THEME) ?' ag-theme-alpine' : 'ag-theme-alpine-dark'

  return employees.loading ? (
    <h2>Loading</h2>
  ) : employees.error ? (
    <h2> {employees.error} </h2>
  ) : (

    <div>
      <div style={{ padding: '1rem 0em',}} >
      <TextField fullWidth id="filter-text-box" label="search" variant="outlined" onInput={onFilterTextBoxChanged}/>
      </div>
     
      {/* <input
            type="text"
            id="filter-text-box"
            placeholder="Filter..."
            // onInput={onFilterTextBoxChanged}
          /> */}
      <div className={themeClassName} style={{ height: '80vh', width: '100%', marginBottom: '2rem' }}>
        <AgGridReact
        ref={gridRef}
        rowData = {rowData}
        onGridReady = {onGridReady}
        columnDefs = {columns}
        defaultColDef = {defaultColDef}
        animateRows = {true}
        rowSelection={'single'}
        pagination = {true} 
        onSelectionChanged={onSelectionChanged}
        paginationPageSize = {50} />
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    employees: state.employee
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchEmployeeData: () => dispatch(fetchEmployeeData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
