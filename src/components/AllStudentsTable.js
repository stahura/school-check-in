import React, { Fragment, useState,useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TablePagination from "@material-ui/core/TablePagination";
import { MuiThemeProvider } from "@material-ui/core/styles";
import checkInTheme from "../styles/checkInTheme"
import blackButton from "../styles/blackButton"
import {NavLink} from "react-router-dom";



const useStyles = makeStyles((theme) => ({
  table: {
    maxWidth: 900,
   //marginLeft: '350px',
    margin: '0 auto',
  [theme.breakpoints.down("sm")]: {
    width: '95%'
  },
  },
  test: {
    overflow: "auto",
    
  },
  headerCell: {
    colspan: "2",
  },
  tableTitleBackground: {
    height: "67px",
    display: "grid",
    backgroundColor: "#212121",
    width: "100%",
  },
  tableTitle: {
    alignSelf: "center",
    color: "white",
    textAlign: "center",
    width: '100%',
    
  },
  text: {
    [theme.breakpoints.down("sm")]: {
      fontSize: '10px'
    },
  }
}));

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
  },
}));

const AddressTable = (props) => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(8);


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 8));
    setPage(0);
  };

  return (
    <MuiThemeProvider theme={checkInTheme}>
      <Fragment>
        <Paper elevation={10} className={classes.table}>
        
          <TableContainer className={classes.test}>
          <div className={classes.tableTitleBackground}>
            <h4 className={classes.tableTitle}>All Enrolled Students</h4>
          </div>
          <MuiThemeProvider theme={blackButton}>
            <NavLink to="/addStudents">
              <Button 
                variant="contained" 
                color="primary" 
                style={{marginLeft: '20px',marginTop: '5px'}}> 
                Add Student
              </Button>
            </NavLink>
          </MuiThemeProvider>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className={classes.text} align="center">firstName</TableCell>
                  <TableCell className={classes.text} align="center">Last Name</TableCell>
                  <TableCell className={classes.text} align="center">Checked In By</TableCell>
                  <TableCell className={classes.text} align="center">Checked In At</TableCell>
                  <TableCell className={classes.text} align="center">Student ID</TableCell>
                  <TableCell className={classes.text} align="center">Change Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              {(rowsPerPage > 0 ? props.students.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage): props.students).map((row) => {
                  if(row.checkedIn == false) {
                      return (
                          <TableRow >
                          <TableCell className={classes.text} align="center">
                              {row.firstName}
                          </TableCell>
                          <TableCell className={classes.text} align="center">
                              {row.middleName}
                          </TableCell>
                          <TableCell className={classes.text} align="center">
                              {row.lastName}
                          </TableCell>
                          <TableCell className={classes.text} align="center">
                              {"9:00 AM"}
                          </TableCell>
                          <TableCell id={row.id} className={classes.text} align="center">
                              {row.id}
                          </TableCell>
                          <TableCell className={classes.text} align="center">
                              <Button onClick={props.handleCheckin} variant="outlined" color="secondary">Check In</Button>
                          </TableCell>
                          </TableRow>
                  )
                  } else {
                      return (
                          <TableRow >
                          <TableCell className={classes.text} align="center">
                              {row.firstName}
                          </TableCell>
                          <TableCell className={classes.text} align="center">
                              {row.middleName}
                          </TableCell>
                          <TableCell className={classes.text} align="center">
                              {row.lastName}
                          </TableCell>
                          <TableCell className={classes.text} align="center">
                              {"9:00 AM"}
                          </TableCell>
                          <TableCell id={row.id} className={classes.text} align="center">
                              {row.id}
                          </TableCell>
                          <TableCell className={classes.text} align="center">
                              <Button onClick={props.handleCheckout} variant="contained" color="secondary">Check Out</Button>
                          </TableCell>
                          </TableRow>
                      )
                  }
              })}
              </TableBody>
            </Table>
            <Table>
              <TableBody>
                <TableRow>
                  <TablePagination
                    style={{ display: "grid", justifyContent: "center" }}
                    colSpan={3}
                    count={props.students.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    SelectProps={{
                      inputProps: { "aria-label": "rows:" },
                      native: true,
                    }}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                    rowsPerPageOptions={[]}
                  />
                
              </TableRow>
              </TableBody>
            </Table>
            
          </TableContainer>
        </Paper>
      </Fragment>
    </MuiThemeProvider>
  );
};

export default AddressTable;
