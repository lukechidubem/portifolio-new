import { Button } from "@mui/material";
import React, { useState } from "react";

// Pagination Component

const Pagination = ({ postsPerPage, totalPosts, currentPage, paginate }) => {
  const pageNumbers = [];
  const [currentBlock, setCurrentBlock] = useState(1);

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const firstPage = (currentBlock - 1) * 3 + 1;
  const lastPage = Math.min(currentBlock * 3, pageNumbers.length);

  const handleClick = (number) => {
    paginate(number);
    setCurrentBlock(Math.ceil(number / 3));
  };

  return (
    <nav>
      <ul
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "30px",
          listStyle: "none",
        }}
      >
        {firstPage > 1 && (
          <li>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => handleClick(firstPage - 3)}
              style={{ margin: "0 5px" }}
            >
              &laquo;
            </Button>
          </li>
        )}
        {pageNumbers.slice(firstPage - 1, lastPage).map((number) => (
          <li key={number}>
            <Button
              variant={currentPage === number ? "contained" : "outlined"}
              // color="secondary"
              onClick={() => handleClick(number)}
              style={{ margin: "0 5px", color: "#0099ff" }}
            >
              {number}
            </Button>
          </li>
        ))}
        {lastPage < pageNumbers.length && (
          <li>
            <Button
              variant="outlined"
              // color="#0099ff"
              onClick={() => handleClick(lastPage + 1)}
              style={{ margin: "0 5px", color: "#0099ff" }}
            >
              &raquo;
            </Button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
