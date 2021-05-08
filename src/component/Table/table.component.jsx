import React from "react";
import PropTypes from "prop-types";
import { withStyles, makeStyles, useTheme } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";

const useStyles1 = makeStyles((theme) => ({
    root: {
        flexShrink: 0,
        marginLeft: theme.spacing(2.5),
    },
}));

function TablePaginationactions(props) {
    const classes = useStyles1();
    const theme = useTheme();
    const { count, page, rowsPerPage, onChangePage } = props;

    const handleFirstPageButtonClick = (event) => {
        onChangePage(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onChangePage(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onChangePage(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <div className={classes.root}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
            >
                {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                ) : (
                    <KeyboardArrowLeft />
                )}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                ) : (
                    <KeyboardArrowRight />
                )}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </div>
    );
}

TablePaginationactions.propTypes = {
    count: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};

const useStyles2 = makeStyles({
    table: {
        minWidth: 500,
    },
});

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

export default function CTable() {
    const [rows] = React.useState([
        {
            id: 1,
            supdetails: "Sakshi",
            resouce: "bed",
            subitem: "oxygen",
            status: "available",
            action: "??",
        },
        {
            id: 2,
            supdetails: "Sakshi",
            resouce: "bed",
            subitem: "oxygen",
            status: "available",
            action: "??",
        },
        {
            id: 3,
            supdetails: "Sakshi",
            resouce: "bed",
            subitem: "oxygen",
            status: "available",
            action: "??",
        },
        {
            id: 4,
            supdetails: "Sakshi",
            resouce: "bed",
            subitem: "oxygen",
            status: "available",
            action: "??",
        },
        {
            id: 5,
            supdetails: "Sakshi",
            resouce: "bed",
            subitem: "oxygen",
            status: "available",
            action: "??",
        },
        {
            id: 6,
            supdetails: "Sakshi",
            resouce: "bed",
            subitem: "oxygen",
            status: "available",
            action: "??",
        },
        {
            id: 7,
            supdetails: "Sakshi",
            resouce: "bed",
            subitem: "oxygen",
            status: "available",
            action: "??",
        },
        {
            id: 8,
            supdetails: "Sakshi",
            resouce: "bed",
            subitem: "oxygen",
            status: "available",
            action: "??",
        },
        {
            id: 9,
            supdetails: "Sakshi",
            resouce: "bed",
            subitem: "oxygen",
            status: "available",
            action: "??",
        },
        {
            id: 10,
            supdetails: "Sakshi",
            resouce: "bed",
            subitem: "oxygen",
            status: "available",
            action: "??",
        },
        {
            id: 11,
            supdetails: "Sakshi",
            resouce: "bed",
            subitem: "oxygen",
            status: "available",
            action: "??",
        },
        {
            id: 12,
            supdetails: "Sakshi",
            resouce: "bed",
            subitem: "oxygen",
            status: "available",
            action: "??",
        },
    ]);
    const classes = useStyles2();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const emptyRows =
        rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="custom pagination table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">S.No.</StyledTableCell>
                        <StyledTableCell align="center">Supplier's Details</StyledTableCell>
                        <StyledTableCell align="center">Resource</StyledTableCell>
                        <StyledTableCell align="center">Sub Item</StyledTableCell>
                        <StyledTableCell align="center">Status</StyledTableCell>
                        <StyledTableCell align="center">action</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {(rowsPerPage > 0
                        ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : rows
                    ).map((row) => (
                        <TableRow key={row.id}>
                            <TableCell style={{ width: 50 }} align="center">
                                {row.id}
                            </TableCell>
                            <TableCell style={{ width: 160 }} align="center">
                                {row.supdetails}
                            </TableCell>
                            <TableCell style={{ width: 160 }} align="center">
                                {row.resouce}
                            </TableCell>
                            <TableCell style={{ width: 160 }} align="center">
                                {row.subitem}
                            </TableCell>
                            <TableCell style={{ width: 160 }} align="center">
                                {row.status}
                            </TableCell>
                            <TableCell style={{ width: 160 }} align="center">
                                {row.action}
                            </TableCell>
                        </TableRow>
                    ))}

                    {emptyRows > 0 && (
                        <TableRow style={{ height: 53 * emptyRows }}>
                            <TableCell colSpan={6} />
                        </TableRow>
                    )}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                            colSpan={window.screen.width >= 768 ? 7 : 5}
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            SelectProps={{
                                inputProps: { "aria-label": "rows per page" },
                                native: true,
                            }}
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                            actionsComponent={TablePaginationactions}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    );
}
