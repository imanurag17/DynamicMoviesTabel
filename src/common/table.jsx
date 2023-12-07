import React from "react";
import TableHeader from "../components/tableHeader";
import TableBody from "../components/tableBody";

const Table = (props) => {
  const { column, onSort, sortColumn, data } = props;
  return (
    <table className="table">
      <TableHeader
        column={column}
        onSort={onSort}
        sortColumn={sortColumn}
      />
      <TableBody data={data} columns={column} />
    </table>
  );
};

export default Table;
