import React, { Fragment, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TablePagination from "@material-ui/core/TablePagination";
import PropTypes from "prop-types";
import TableFooter from "@material-ui/core/TableFooter";
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";

const useStyles = makeStyles((theme) => ({
  table: {
    maxWidth: 900,
   marginLeft: '350px',
   [theme.breakpoints.down("md")]: {
    maxWidth: 600,
    margin: '0 auto'
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
    maxWidth: 900,
    marginLeft: '350px',
    [theme.breakpoints.down("md")]: {
        maxWidth: 600,
        margin: '0 auto'
      },
  },
  tableTitle: {
    alignSelf: "center",
    color: "white",
    textAlign: "center",
  },
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
  const emptyRows =rowsPerPage - Math.min(rowsPerPage, props.students.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 8));
    setPage(0);
  };

  return (
    <Fragment>
      <div className={classes.tableTitleBackground}>
        <h4 className={classes.tableTitle}>Checked In Students</h4>
      </div>
      <Paper elevation={10} className={classes.table}>
        <TableContainer className={classes.test}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">First Name</TableCell>
                <TableCell align="center">Last Name</TableCell>
                <TableCell align="center">Checked In By</TableCell>
                <TableCell align="center">Checked In At</TableCell>
                <TableCell align="center">Student ID</TableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
            {(rowsPerPage > 0
                ? props.students.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : props.memory
              ).map((row) => (
                <TableRow key={row.id}>
                  <TableCell align="center">
                    {row.firstName}
                  </TableCell>
                  <TableCell align="center">
                    {row.middleName}
                  </TableCell>
                  <TableCell align="center">
                    {row.lastName}
                  </TableCell>
                  <TableCell align="center">
                    {"9:00 AM"}
                  </TableCell>
                  <TableCell align="center">
                    {row.id}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

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
      </Paper>
    </Fragment>
  );
};

export default AddressTable;