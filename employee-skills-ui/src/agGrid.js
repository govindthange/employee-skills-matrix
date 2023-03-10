import React, { useState, useEffect, useCallback, useRef, useMemo, } from 'react';
import { InputAdornment, TextField } from '@mui/material'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import * as XLSX from 'xlsx';
import { useSelector } from 'react-redux';
import { LIGHT_THEME } from './redux/theme/themeConstants';
import SearchIcon from '@mui/icons-material/Search';

import { connect } from 'react-redux';
import { fetchEmployeeData } from './redux';
import ChatOnTeams from './components/ChatOnTeams/ChatOnTeams';

function App({ employees, fetchEmployeeData }) {
  // const [rowData, setRowData] = useState([]);
  const gridRef = useRef();
  const [gridApi, setGridApi] = useState(null);
  const rowData = useSelector(state => state.employee.employees)

  const rows = [];
  rowData.forEach(row => {
    const r = { ...row };
    r.skills.forEach(skill => {
      if (r[skill.tag] === undefined) {
        r[skill.tag] = [];
        r[skill.tag].push(skill.skill)
      } else {
        r[skill.tag].push(skill.skill)
      }

    })
    rows.push(r);
  })
  let temp = [];

  useEffect(() => {
    fetchEmployeeData()
  }, []);

  const sideBar = useMemo(() => {
    return {
      toolPanels: ['columns'],
    };
  }, []);

  const defaultColDef = useMemo(() =>{
   return {
    flex: 1,
    filterParams: {
      buttons: ['apply', 'clear', 'reset']
    },
    sortable: true,
    resizable: true,
    filter: true,
   }
  },[]);

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
    {
      headerName: "Employee Details",
      children: [
        { field: 'Chat', cellRenderer: ChatOnTeams, valueGetter: (params) => ({ officeEmailId: params.data.officeEmailId }), maxWidth: 100,},
        { field: 'name', filter: 'agTextColumnFilter' },
        { field: 'code', maxWidth: 100, filter: 'agNumberColumnFilter', columnGroupShow: 'open' },
        { field: 'yearsOfExperience', headerName: 'Exp', maxWidth: 80, filter: 'agNumberColumnFilter', columnGroupShow: 'open' },
        { field: 'designation', filter: 'agTextColumnFilter', columnGroupShow: 'open' },
        { field: 'mobileNumber', filter: 'agTextColumnFilter', columnGroupShow: 'open' },
        { field: 'githubUrl', filter: 'agTextColumnFilter', columnGroupShow: 'open' },
        { field: 'linkedinUrl', filter: 'agTextColumnFilter', columnGroupShow: 'open' }
      ]
    },
    {
      headerName: "Skills",
      children: [
        { field: "Operating System", filter: 'agTextColumnFilter' },
        { field: "Architectural Styles", filter: 'agTextColumnFilter', },
        { field: "Version Control", filter: 'agTextColumnFilter' },
        { field: "Frameworks", filter: 'agTextColumnFilter' },
        { field: "Languages", filter: 'agTextColumnFilter' },
        { field: "Design Patterns", filter: 'agTextColumnFilter' },
        { field: "Certified", filter: 'agTextColumnFilter' },
        { field: "Course Completed", filter: 'agTextColumnFilter' },
        { field: "Devops Ops", filter: 'agTextColumnFilter' }
      ]
    },
    {
      headerName: "Social",
      columnGroupShow: 'open',
      children: [
       
      ]
    }


  ];

  const onSelectionChanged = useCallback(() => {
    const selectedRows = gridRef.current.api.getSelectedRows();
  }, []);

  const onFilterTextBoxChanged = useCallback(() => {
    gridRef.current.api.setQuickFilter(
      document.getElementById('filter-text-box').value
    );
  }, []);

  const onRowDoubleClicked = useCallback(() => {
    console.log("double click on row");
  });


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

      {/* <input
            type="text"
            id="filter-text-box"
            placeholder="Filter..."
            // onInput={onFilterTextBoxChanged}
          /> */}
      <div className={themeClassName} style={{ height: '74vh', width: '100%', marginBottom: '2rem' }} >
        <AgGridReact
          ref={gridRef}
          rowData={rows}
          onGridReady={onGridReady}
          columnDefs={columns}
          defaultColDef={defaultColDef}
          onRowDoubleClicked={onRowDoubleClicked}
          animateRows={true}
          rowSelection={'single'}
          pagination={true}
          onSelectionChanged={onSelectionChanged}
          paginationPageSize={50} />
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
