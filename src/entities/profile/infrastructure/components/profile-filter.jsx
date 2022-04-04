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
        <Dropdown
          label="Type"
          items={["All", "Sources", "Forks", "Archived", "Mirrors"]}
        />
        <Dropdown
          label="Language"
          items={["All", "CSS", "JavaScript", "HTML"]}
        />
        <Dropdown label="Sort" items={["Last updated", "Name", "Stars"]} />
      </div>
    </div>
  );
};

export default Filter;
