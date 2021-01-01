import React, { useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import customstyles from 'shared/tableWithPagination/style.css';

const styles: Stylesheet = {
  paperStyles: {
    // marginLeft: "10px",
    // marginRight: "10px",
    // width: '100vw',
    // border: "1px solid #C4C5C4",
  },
};

interface Props<T> {
  allItems: Array<T>;
  tableConfig: TableConfigurationsI<T>;
  className?: string;
}

const rowsPerPage = 10;

const TableWithPagination = <T extends { id?: string }>(props: Props<T>) => {
  const { allItems, className, tableConfig } = props;

  const [pageItems, setPageItems] = React.useState<Array<T>>(
    allItems ? allItems.slice(0, rowsPerPage) : [],
  );
  const [currentPage, setCurrentPage] = React.useState<number>(0);

  useEffect(() => {
    setPageItems(props.allItems ? props.allItems.slice(0, rowsPerPage) : []);
    setCurrentPage(0);
  }, [allItems]);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    const startIndex = newPage * rowsPerPage;
    setPageItems(props.allItems.slice(startIndex, startIndex + rowsPerPage));
    if (newPage > currentPage) {
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <Paper style={styles.paperStyles} elevation={2}>
      <Table
        id="tableWithPagination"
        aria-label="simple table"
        className={`${customstyles} ${className}`}
      >
        <TableHead>
          <TableRow>
            {tableConfig.columns.map((column, key) => (
              // eslint-disable-next-line react/no-array-index-key
              <TableCell key={key}>{column.columnTitle}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {pageItems.map((item: T) => (
            <TableRow key={item.id}>
              {props.tableConfig.columns.map((column, key) => (
                // eslint-disable-next-line react/no-array-index-key
                <TableBodyCell<T> key={key} column={column} item={item} />
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {pageItems.length > 1 && (
        <TablePagination
          id="tablePagination"
          component="div"
          count={allItems ? allItems.length : 0}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[rowsPerPage]}
          page={currentPage}
          backIconButtonProps={{ 'aria-label': 'Previous Page' }}
          nextIconButtonProps={{ 'aria-label': 'Next Page' }}
          onChangePage={handleChangePage}
          className={className}
        />
      )}
    </Paper>
  );
};

interface TableBodyCellProps<T> {
  item: T;
  column: ColumnI<T>;
}

const TableBodyCell = <T extends { id?: string }>(
  props: TableBodyCellProps<T>,
) => {
  const { column, item } = props;
  return <TableCell>{column.renderFunction(item)}</TableCell>;
};

export default TableWithPagination;
