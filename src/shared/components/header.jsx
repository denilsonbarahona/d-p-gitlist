import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteSession } from "../../entities/login/core/actions";
import Button from "@shared/components/button";
import Label from "@shared/components/label";
import "@styles/header.scss";

const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.LoginReducer);
  const [showPanel, setShowPanel] = useState(false);

  return (
    <header className="header">
      <div className="header__icon">
        <i className="icon-github" />
      </div>
      <figure
        className="header__figure"
        onClick={(_) => setShowPanel(!showPanel)}
      >
        <img
          src={user.avatar_url}
          className="header__image"
          alt={`Profile's image`}
          width="30"
          height="30"
        />
      </figure>
      <div
        className={`header__panel ${
          showPanel ? "header__panel--isVisible" : "header__panel--isHidden"
        }`}
      >
        <div className="header__panel__user">
          <Label className="label">Signed in as: </Label>
          <Label className="label label__isBold">{user.login}</Label>
        </div>
        <Button
          onClick={(_) => dispatch(deleteSession())}
          className="button button--isBase header__panel__button"
        >
          Sign out
        </Button>
      </div>
    </header>
  );
};

export default Header;
