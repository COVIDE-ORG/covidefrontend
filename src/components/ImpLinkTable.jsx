import React from 'react';
import { withStyles,makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    opacity: "1"
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);





const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable(props) {
  const classes = useStyles();
    const rows = props.data
      
    
    const columns = 
      props.headers?
      props.headers.map((header,i) => {
        return({id:i,label:header,minWidth: 100});
      }):[];
      // { id: '2', label: 'Name', minWidth: 100 },
      // { id: '3', label: 'Contact', minWidth: 100 },
      // { id: '1', label: 'City', minWidth: 100 },
      // { id: '0', label: 'State', minWidth: 100 },
      // { id: '4', label: 'Criteria', minWidth: 100 },
      // { id: '5', label: 'Link', minWidth: 100 },
    
    



  
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
      
    <Paper className={classes.root}>
      
        {/* {JSON.stringify(rows)} */}
      <TableContainer className={classes.container}>
        <Table className={classes.table} stickyHeader aria-label="customized table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <StyledTableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth,background:"#11698D" }}
                >
                  {column.label}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    if(column.id === 3){
                    return (
                      <TableCell key={column.id} align={column.align} >
                        <a target="_blank" rel="noopener noreferrer" href={column.format && typeof value === 'number' ? column.format(value) : value}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                        </a>
                      </TableCell>
                    );}
                    else{
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number' ? column.format(value) : value}
                        </TableCell>
                      );
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
      />
    </Paper>
  );
}
