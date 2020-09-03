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
import PropTypes from "prop-types";
import TableFooter from "@material-ui/core/TableFooter";
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  table: {
    maxWidth: 900,
   marginLeft: '350px',
   [theme.breakpoints.down("md")]: {
    margin: '0 auto'
  },
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
    maxWidth: 900,
    marginLeft: '350px',
    [theme.breakpoints.down("md")]: {
        margin: '0 auto'
      },
      [theme.breakpoints.down("sm")]: {
        width: '95%'
      },
  },
  tableTitle: {
    alignSelf: "center",
    color: "white",
    textAlign: "center",
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
  const emptyRows =rowsPerPage - Math.min(rowsPerPage, props.checkedInStudents.length - page * rowsPerPage);
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [dense, setDense] = React.useState(false);
  const [checkedInStudents, setCheckedInStudents] = useState([])
  const [verifiedCheckedIn, setVerifiedCheckedIn] = useState(false)

  
  
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
                <TableCell className={classes.text} align="center">First Name</TableCell>
                <TableCell className={classes.text} align="center">Last Name</TableCell>
                <TableCell className={classes.text} align="center">Checked In By</TableCell>
                <TableCell className={classes.text} align="center">Checked In At</TableCell>
                <TableCell className={classes.text} align="center">Student ID</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {(rowsPerPage > 0 ? props.checkedInStudents.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage): props.checkedInStudents).map((row) => (

                <TableRow key={row.id}>
                  <TableCell className={classes.text} align="center">
                    {row.firstName}
                  </TableCell >
                  <TableCell className={classes.text} align="center">
                   {row.lastName}
                  </TableCell>
                  <TableCell className={classes.text} align="center">
                    Mom
                  </TableCell>
                  <TableCell className={classes.text} align="center">
                    {"9:00 AM"}
                  </TableCell>
                  <TableCell className={classes.text} align="center">
                    {row.id}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Table>
            <TableBody>
              <TableRow>
                <TablePagination
                  style={{ display: "grid", justifyContent: "center" }}
                  colSpan={3}
                  count={props.checkedInStudents.length}
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
  );
};

export default AddressTable;

/*

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

                <TableCell align="center">Last Name</TableCell>
                <TableCell align="center">Checked In By</TableCell>
                <TableCell align="center">Checked In At</TableCell>
                <TableCell align="center">Student ID</TableCell>

*/

/*

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
  
  function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }
  
  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

const headCells = [
    
    {id:"firstName",numeric: false, disablePadding: true, label: 'First Name'},
    {id:"lastName",numeric: false, disablePadding: true, label: 'Last Name'},
    {id:"checkedInBy",numeric: false, disablePadding: true, label: 'Checked In By'},
    {id:"CheckedInAt",numeric: false, disablePadding: true, label: 'Checked In At'},
    {id:"id",numeric: false, disablePadding: true, label: 'Student ID'},
  ]

const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const createSortHandler = (property) => (event) => {
    handleRequestSort(event, property);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = props.students.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

           <TableBody>
              {stableSort(props.students, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.firstName);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.firstName)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.firstName}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </TableCell>
                      <TableCell component="th" id={labelId} scope="row" align="right">{row.firstName}</TableCell>
                      <TableCell align="right">{row.lastName}</TableCell>
                      <TableCell align="right">test</TableCell>
                      <TableCell align="right">test</TableCell>
                      <TableCell align="right">{row.id}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
*/