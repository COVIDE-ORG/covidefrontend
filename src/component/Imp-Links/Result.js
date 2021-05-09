import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import LinkIcon from '@material-ui/icons/Link';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
  const useStyles = makeStyles({
    table: {
      minWidth: 300,
    },
  });

function Result({State,Data}) {
    const classes = useStyles();
    return (
        <div>
            <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>State</StyledTableCell>
            <StyledTableCell align="right">City</StyledTableCell>
            <StyledTableCell align="right">Service</StyledTableCell>
            <StyledTableCell align="right">Links</StyledTableCell>
            <StyledTableCell align="right">Other Infos</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Data.filter((data)=>{
              return State===data.State
          }).map((data) => (
            <StyledTableRow key={data.id}>
              <StyledTableCell component="th" scope="row">
                {data.State}
              </StyledTableCell>
              <StyledTableCell align="right">{data.City}</StyledTableCell>
              <StyledTableCell align="right">{data.Service}</StyledTableCell>
              <StyledTableCell align="right"><a href={data.Links}><LinkIcon/></a></StyledTableCell>
              <StyledTableCell align="right">{data.Other}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    )
}

export default Result
