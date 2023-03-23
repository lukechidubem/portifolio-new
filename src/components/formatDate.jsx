import { Box, Typography } from "@mui/material";
import React from "react";

const FormatDate = ({ date }) => {
  const postDate = new Date(date);

  console.log(postDate.getDate());

  const currentDate = new Date();

  const timeDiff = Math.abs(currentDate.getTime() - postDate.getTime());
  const diffDays = Math.floor(timeDiff / (1000 * 3600 * 24));

  let dateString = postDate.toLocaleString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  const postedDate = () => {
    if (diffDays === 0 && postDate.getDate() == new Date().getDate()) {
      return "Today";
    } else if (
      diffDays === 1 &&
      diffDays === 0 &&
      postDate.getDate() !== new Date().getDate()
    ) {
      return "Yesterday";
    } else if (diffDays <= 7) {
      return `${diffDays + 1} days ago`;
    } else if (diffDays <= 14) {
      return "A week ago";
    } else if (diffDays <= 30) {
      return `${Math.floor(diffDays / 7)} weeks ago`;
    } else if (diffDays <= 60) {
      return "A month ago";
    } else if (diffDays <= 365) {
      return `${Math.floor(diffDays / 30)} months ago`;
    } else {
      return `${Math.floor(diffDays / 365)} years ago`;
    }
  };

  //   };

  return (
    <Box
      sx={{
        mt: "10px",
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <Typography>{postedDate()}</Typography>
      <Typography>{dateString}</Typography>
    </Box>
  );
};

export default FormatDate;
