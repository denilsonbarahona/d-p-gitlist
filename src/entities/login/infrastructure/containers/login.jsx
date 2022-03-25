import React from "react";
import Button from "@shared/components/button";
import Form from "@shared/components/form";
import Input from "@shared/components/input";
import LoginLayout from "../layouts/login-layout";
import Helmet from "react-helmet";

const Login = () => {
  return (
    <LoginLayout>
      <Helmet>
        <title>Sign in to GitList - GitList</title>
        <meta
          name="description"
          content="GitList is the best hub in the word to store your projects"
        />
      </Helmet>
      <main>
        <div className="login-poster">
          <i className="login-icon icon-github" />
        </div>
        <h1 className="login-header">Sign in to GitHub</h1>
        <Form className="form form--isLogin">
          <label htmlFor="email_username">Username or email address</label>
          <Input name="email_username" id="email_username" type="text" />
          <label htmlFor="password">Password</label>
          <Input name="password" id="password" type="password" />
          <Button title="click to login" className="button button--isGreen">
            Sign in
          </Button>
        </Form>
        <div className="login-create">
          New to GitHub?{" "}
          <a className="login-anchor" href="#">
            Create an account.
          </a>
        </div>
      </main>
      <footer className="login-footer">
        <ul className="login-menu">
          <li className="login-menuItem">
            <a href="https://docs.github.com/en/site-policy/github-terms/github-terms-of-service">
              Terms
            </a>
          </li>
          <li className="login-menuItem">
            <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement">
              Privacy
            </a>
          </li>
          <li className="login-menuItem">
            <a href="https://github.com/security">Security</a>
          </li>
          <li className="login-menuItem">
            <a href="https://support.github.com/?tags=dotcom-direct">
              Contact GitHub
            </a>
          </li>
        </ul>
      </footer>
    </LoginLayout>
  );
};

export default Login;
