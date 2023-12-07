import React, { Component } from "react";
import {Link} from 'react-router-dom'
import Table from "../common/table";

class MoviesTable extends Component {
  column = [
    {
      path: "title",
      lable: "Title",
      content: (movie) => (
        <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
      ),
    },
    { path: "genre.name", lable: "Genre" },
    { path: "numberInStock", lable: "Stock" },
    { path: "dailyRentalRate", lable: "Rate" },
    {
      key: "delete",
      content: (movie) => (
        <button
          className="btn btn-danger btn-sm"
          onClick={() => {
            this.props.onDelete(movie);
          }}
        >
          Delete
        </button>
      ),
    },
  ];
  render() {
    const { movies, onDelete, onSort, sortColumn } = this.props;
    return (
      <React.Fragment>
        <Table
          column={this.column}
          onSort={onSort}
          sortColumn={sortColumn}
          data={movies}
        />
      </React.Fragment>
    );
  }
}

export default MoviesTable;
