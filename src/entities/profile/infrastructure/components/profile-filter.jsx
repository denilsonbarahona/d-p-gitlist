import React from "react";
import Dropdown from "@shared/components/dropdown";
import Input from "@shared/components/input";
import Form from "@shared/components/form";
import "../styles/profile-filter.scss";

const Filter = () => {
  return (
    <div className="filter">
      <Form className="form" role="search">
        <Input
          type="text"
          name="search"
          id="search"
          placeholder="find a repository"
        />
      </Form>
      <div className="filter__actions">
        <Dropdown items={["All", "Sources", "Forks", "Archived", "Mirrors"]} />
        <Dropdown items={["All", "Sources", "Forks", "Archived", "Mirrors"]} />
        <Dropdown items={["All", "Sources", "Forks", "Archived", "Mirrors"]} />
      </div>
    </div>
  );
};

export default Filter;
