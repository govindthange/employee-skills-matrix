import React, { useState, useEffect, useCallback, useRef, useMemo, } from 'react';
import { Drawer, InputAdornment, SpeedDial, SpeedDialAction, SpeedDialIcon, TextField } from '@mui/material'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { useDispatch, useSelector } from 'react-redux';
import { LIGHT_THEME } from '../../redux/theme/themeConstants';
import SearchIcon from '@mui/icons-material/Search';
import SaveIcon from '@mui/icons-material/Save';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { connect } from 'react-redux';
import { fetchEmployeeData, selectEmployee, uploadEmployeeData } from '../../redux';
import DetailRender from '../employee-detail/DetailRenderer';
import { useNavigate } from 'react-router-dom';

import { columns, defaultColDefConst, mappSkillsToRow } from './config';

function App({ employees, fetchEmployeeData }) {
  const navigate = useNavigate();
  const gridRef = useRef();
  const fileUploadRef = useRef();
  const dispatch = useDispatch();

  const [drawerState, setDrawerState] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerState(open);
  };


 

  const [gridApi, setGridApi] = useState(null);
  
  const rowData = useSelector(state => state.employee.employees)
  const rows = mappSkillsToRow(rowData);
  

  useEffect(() => {
    fetchEmployeeData()
  }, []);



  const handleFileChange = (e) => {
    if (e.target.files) {
      dispatch(uploadEmployeeData(e.target.files[0]))
    }
  }

  const handleFileUpload = () => {
    this.fileUploadRef.current.click();
  };

  function onDataExport() {
    this.gridRef.current.api.exportDataAsCsv();
  }

  const actions = [
    { icon: <FileUploadIcon />, onClick: handleFileUpload, name: 'Upload CSV' },
    { icon: <SaveIcon />, onClick: onDataExport, name: 'Download' },
  ];



  const defaultColDef = useMemo(() => defaultColDefConst, []);

  const onGridReady = (params) => {
    setGridApi(params.api);
  };



  const onFilterTextBoxChanged = useCallback(() => {
    gridRef.current.api.setQuickFilter(
      document.getElementById('filter-text-box').value
    );
  }, []);

  const onRowDoubleClicked = useCallback(() => {
    const selectedRows = gridRef.current.api.getSelectedRows();
    dispatch(selectEmployee(selectedRows[0]));
    navigate("/employee-details")
  });


  const onRowClicked = useCallback(() => {
    const selectedRows = gridRef.current.api.getSelectedRows();
    dispatch(selectEmployee(selectedRows[0]));
    setDrawerState(true);
  });

  const timer = useRef()
  const handleClick = ({ event }) => {
    clearTimeout(timer.current);
    switch (event.detail) {
      case 1:
        timer.current = setTimeout(onRowClicked, 200)
        break;
      case 2:
        onRowDoubleClicked()
        break;
    }
  };




  const theme = useSelector(state => state.theme.mode);
  const themeClassName = (theme === LIGHT_THEME) ? ' ag-theme-alpine' : 'ag-theme-alpine-dark'

  return employees.loading ? (
    <h2>Loading</h2>
  ) : employees.error ? (
    <h2> {employees.error} </h2>
  ) : (

    <div>
      <div style={{ padding: '1rem 0em' }} >
        <TextField
          fullWidth
          id="filter-text-box"
          label="search"
          variant="outlined"
          onInput={onFilterTextBoxChanged}
          InputProps={{
            startAdornment: <InputAdornment position="start">
              <SearchIcon color="secondary" />
            </InputAdornment>,
          }}
        />
      </div>


      <div className={themeClassName} style={{ height: '74vh', width: '100%', marginBottom: '2rem' }} >
        <AgGridReact
          ref={gridRef}
          rowData={rows}
          onGridReady={onGridReady}
          columnDefs={columns}
          defaultColDef={defaultColDef}
          onRowClicked={handleClick}
          animateRows={true}
          rowSelection={'single'}
          pagination={true}
          paginationPageSize={50} />
        <Drawer
          anchor="right"
          open={drawerState}
          onClose={toggleDrawer(false)}
        >
          <DetailRender />
        </Drawer>

        <SpeedDial
          ariaLabel="Quick Actions"
          sx={{ position: 'absolute', bottom: 16, right: 16, '& .MuiFab-primary': { backgroundColor: 'secondary.main' } }}
          icon={<SpeedDialIcon />}

        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              onClick={action.onClick}
              tooltipTitle={action.name}
            />
          ))}
        </SpeedDial>
        <input ref={fileUploadRef} type="file" accept=".csv" hidden onChange={handleFileChange} />
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
