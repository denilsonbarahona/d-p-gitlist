import React from "react";
import Button from "@shared/components/button";
import "../styles/profile-pagination.scss";

const Pagination = () => {
  return (
    <div className="pagination">
      <Button
        title={`previous repository's page`}
        disabled={true}
        className="button button--isPagination"
      >
        Previous
      </Button>
      <Button
        title={`next repository's page`}
        className="button button--isPagination"
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
