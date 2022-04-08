import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useToggle } from "../../../hooks/useToggle";
export const DataTable = ({
  columns,
  rows,
  setValueTrue,
  setValueFalse,
  setEditTrue,
  setEditFalse,
  setItemToEdit,
  toDisplay
}) => {
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
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id}>{column.headerName}</TableCell>
              ))}
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    <TableCell>{row.id}</TableCell>
                    {toDisplay === "products" && (
                      <>
                        <TableCell>{row.title}</TableCell>
                        <TableCell>{row.price}</TableCell>
                        <TableCell>{row.description}</TableCell>
                        <TableCell>{row.category}</TableCell>
                      </>
                    )}
                    {toDisplay === "orders" && (
                      <>
                        <TableCell>{row.number}</TableCell>
                        <TableCell>{row.description}</TableCell>
                      </>
                    )}
                    <TableCell>
                      <Button
                        variant="contained"
                        onClick={() => {
                          setEditTrue();
                          setValueTrue();
                          setItemToEdit(row);
                        }}
                      >
                        <FontAwesomeIcon icon={faEdit} />
                      </Button>
                      <Button variant="contained" color="secondary">
                        <FontAwesomeIcon icon={faTimes} />
                      </Button>
                    </TableCell>
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
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
