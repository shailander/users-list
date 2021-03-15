import React from "react";
import "./pagination.scss";

function Pagination({
  users,
  userPerPage,
  currentPage,
  handleGetUsers,
  filteredTotal,
  searchValue,
}) {
  if (users && users.length === 0) {
    return null;
  }
  return (
    <div className="pagination">
      <button
        className="pagination-button"
        disabled={currentPage === 1 ? true : false}
        onClick={() => handleGetUsers(currentPage - 1, searchValue)}
      >
        {"<<"}
      </button>
      <span>
        &nbsp;&nbsp;{currentPage}&nbsp;&nbsp;-&nbsp;&nbsp;
        {Math.ceil(filteredTotal / userPerPage)}&nbsp;&nbsp;
      </span>
      <button
        className="pagination-button"
        disabled={
          currentPage === Math.ceil(filteredTotal / userPerPage) ? true : false
        }
        onClick={() => handleGetUsers(currentPage + 1, searchValue)}
      >
        {">>"}
      </button>
    </div>
  );
}

export default Pagination;
