import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Button from "@material-ui/core/button";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Route, NavLink, HashRouter } from "react-router-dom";

const columns = [

  { id: 'firstName', label: 'First Name', minWidth: 170 },
  { id: 'lastName', label: 'Last Name', minWidth: 100 },
  {
    id: 'id',
    label: 'id',
    minWidth: 100,
    align: 'right',
  },
  { id: 'check-in', label: '', minWidth: 100 },
  { id: 'check-out', label: '', minWidth: 100 }/*
  {
    id: 'guardianOne',
    label: 'Guardian 1',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'guardianTwo',
    label: 'Guardian 2',
    minWidth: 170,
    align: 'right',
  },*/
];



const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
  checkButton: {
    width: '85px',
    height: '50px',
    fontSize: '9px'
  },
  buttonCell: {
    width: '120px'
  }
});

const StudentsTable = (props) => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const [rows, setRows] = useState([])
  const [key, setKey] = useState(1)



  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const checkoutHandler = (e) => {
    props.handleCheckOutClick(e)
    setKey(Date.now())
  }




  return (
    <div>
      <Paper className={classes.root}>
        <TableContainer key={key} className={classes.container}>
          <Table key={key} stickyHeader aria-label="sticky table">
            <TableHead key={key}>
              <TableRow key={key}>
                {columns.map((column) => (
                  <TableCell
                    key={key}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody key={key}>
              {props.rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={key}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      if ((column.id == "check-in") && (row.checkedIn == false)) {
                        console.log(row)
                        return (
                          <TableCell key={key} className={classes.buttonCell} align={column.align}>
                            <Button onClick={props.handleCheckInClick} className={classes.checkButton} variant="contained">Check-In</Button>
                          </TableCell>
                        )
                      } else if ((column.id == "check-out") && (row.checkedIn == true)) {
                        return (
                          <TableCell className={classes.buttonCell} key={key} align={column.align}>
                            <Button onClick={checkoutHandler} className={classes.checkButton} variant="contained">Check-Out</Button>
                          </TableCell>
                        );
                      } else if (value == row.id) {

                        return (
                          <TableCell id={value} key={key} align={column.align}>
                            {column.format && typeof value === 'number' ? column.format(value) : value}
                          </TableCell>
                        )
                      } else {
                        return (
                          <TableCell key={key} align={column.align}>
                            {column.format && typeof value === 'number' ? column.format(value) : value}
                          </TableCell>
                        )
                      }

                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          key={props.key}
        />
      </Paper>
    </div>
  );
}

export default StudentsTable
/*
<Button onClick={props.handleCheckOutClick} className={classes.checkButton} variant="contained">Check-Out</Button>
*/