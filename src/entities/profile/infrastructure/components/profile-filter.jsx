import React from "react";
import { searchRepos } from "../../core/actions";
import { useDispatch } from "react-redux";
import {
  filterTypeRepos,
  filterLanguageRepos,
  sortRepos,
} from "../../core/actions";
import Dropdown from "@shared/components/dropdown";
import Input from "@shared/components/input";
import Form from "@shared/components/form";
import "../styles/profile-filter.scss";

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <div className="filter">
      <Form className="form" role="search">
        <Input
          onChange={(event) => dispatch(searchRepos(event.target.value))}
          type="text"
          name="search"
          id="search"
          placeholder="find a repository"
        />
      </Form>
      <div className="filter__actions">
        <Dropdown
          label="Type"
          onSelected={(event) =>
            dispatch(filterTypeRepos(event.target.id.toLowerCase()))
          }
          items={["All", "Forks", "Archived"]}
        />
        <Dropdown
          label="Language"
          onSelected={(event) =>
            dispatch(filterLanguageRepos(event.target.id.toLowerCase()))
          }
          items={["All", "CSS", "JavaScript", "HTML"]}
        />
        <Dropdown
          label="Sort"
          onSelected={(event) =>
            dispatch(sortRepos(event.target.id.toLowerCase()))
          }
          items={["Name", "Last updated", "Stars"]}
        />
      </div>
    </div>
  );
};

export default Filter;
