import React from 'react';

const Pagination = ({ rowsPerPage, totalRows, currentPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRows / rowsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">      
        {pageNumbers.map(number => (
            <a
              key={number}
              href='#0'
              className={ number === currentPage ? "active" : ""}
              onClick={() => paginate(number)}
             >
              {number}
            </a>
        ))}
    </div>
  );
};

export default Pagination;