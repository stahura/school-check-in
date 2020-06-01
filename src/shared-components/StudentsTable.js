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

const columns = [
  { id: 'firstName', label: 'First Name', minWidth: 170 },
  { id: 'lastName', label: 'Last Name', minWidth: 100 },
  {
    id: 'id',
    label: 'id',
    minWidth: 170,
    align: 'right',
  },
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
  },
];



const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

const StudentsTable = (props) => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const createData = (firstName, lastName, studentID, guardianOne, guardianTwo) => {
    //testfunc()
    return { firstName, lastName, studentID, guardianOne, guardianTwo };
  }
  const rows = [

  ];
  /*
    const testfunc = () => {
      console.log("props.students: => ")
      let i = 0
      for (i in props.students) {
        let firstName = props.students[i].firstName
        let middleName = props.students[i].middleName
        let lastName = props.students[i].lastName
        let id = props.students[i].id
        let guardianOne = "Jeff"
        let guardianTwo = "Jen"
  
        rows.push({ firstName, lastName, id, guardianOne, guardianTwo })
      }
      console.log("rows", rows)
    }
  
    useEffect(() => {
      testfunc()
      console.log("useEffect()")
    }, [])*/

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
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
      />
    </Paper>
  );
}

export default StudentsTable
/*

*/