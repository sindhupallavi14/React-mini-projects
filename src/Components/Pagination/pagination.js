import React from "react";
import "./pagination.css";

export default function Pagination({ crntPage, totPages, onPageChange }) {
  function generateNoOfPages() {
    const pages = [];
    for (let i = 1; i <= totPages; i++) {
      pages.push(i);
    }
    return pages;
  }
  return (
    <div className="pagination">
      <button
        className="pagination-btn"
        onClick={() => onPageChange(crntPage - 1)}
        disabled={crntPage == 1}
      >
        Prev
      </button>
      {generateNoOfPages().map((pageNo) => (
        <button
          className="pagination-btn"
          key={pageNo}
          onClick={() => onPageChange(pageNo)}
        >
          {pageNo}
        </button>
      ))}
      <button
        className="pagination-btn"
        disabled={crntPage == totPages}
        onClick={() => onPageChange(crntPage + 1)}
      >
        Next
      </button>
    </div>
  );
}
