import React from "react";
import { Link } from "react-router-dom";
import { range } from "lodash";

const Pagination = ({ objLength, currentPage, perPage, onPageChange }) => {
    const pageCount = Math.ceil(objLength / perPage);
    if (pageCount === 1) return null;
    const pages = range(1, pageCount + 1);
    return (
      <div style={{direction:"ltr"}}> 
        <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center">
                {pages.map(page => (
                    <li
                        key={page}
                        className={
                            page === currentPage
                                ? "page-item active"
                                : "page-item"
                        }
                    >
                        <Link
                            className="page-link"
                            style={{ cursor: "pointer" }}
                            onClick={() => onPageChange(page)}
                        >
                            {page}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
        </div>
    );
};

export default Pagination;
