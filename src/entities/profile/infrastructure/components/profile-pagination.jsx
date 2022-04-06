import React from "react";
import Button from "@shared/components/button";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../../core/actions";
import "../styles/profile-pagination.scss";

const Pagination = () => {
  const dispatch = useDispatch();
  var { page } = useSelector((state) => state.ProfileReducer);
  const { repos } = useSelector((state) => state.ProfileReducer);

  return (
    <div className="pagination">
      <Button
        onClick={(_) => dispatch(changePage(--page))}
        title={`previous repository's page`}
        disabled={page === 0}
        className="button button--isPagination"
      >
        Previous
      </Button>
      <Button
        disabled={page >= repos.length - 1}
        onClick={(_) => dispatch(changePage(++page))}
        title={`next repository's page`}
        className="button button--isPagination"
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
