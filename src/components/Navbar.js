import React from "react";
import { Switch, Link } from "react-router-dom";

function navbar() {
  return (
    <div className="position-absolute navbar-component">
      <nav class="navbar navbar-expand-lg navbar-light">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto">
            <Switch>
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                }}
              >
                <li class="nav-item active horizontal-margin-30">
                  <a
                    className="nav-link active hover-nav-item"
                    aria-current="page"
                  >
                    Home <span class="sr-only">(current)</span>
                  </a>
                </li>
              </Link>
            </Switch>
            <li class="nav-item active horizontal-margin-30">
              <a className="nav-link active hover-nav-item" aria-current="page">
                Portfolio <span class="sr-only">(current)</span>
              </a>
            </li>
            <Switch>
              <Link
                to="/skills"
                style={{
                  textDecoration: "none",
                }}
              >
                <li class="nav-item active horizontal-margin-30">
                  <a
                    className="nav-link active hover-nav-item"
                    aria-current="page"
                  >
                    Skills <span class="sr-only">(current)</span>
                  </a>
                </li>
              </Link>
            </Switch>
          </ul>
        </div>
        <div className="dropdown-divider position-absolute navbar-divider"></div>
      </nav>
    </div>
  );
}

export default navbar;
