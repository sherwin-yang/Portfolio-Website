import React from "react";
import GitLogo from "../../assets/git.png";
import MySQLLogo from "../../assets/mysql.png";
import PostgreSQLLogo from "../../assets/postgresql.png";
import ReactTooltip from "react-tooltip";

function Other() {
  return (
    <div className="margin-bottom-25px">
      <h5 className="bold-text skills-subtitle">Other Skills : </h5>
      <img
        data-tip
        alt="Git"
        data-for="git-tooltip"
        className="tech-used-logo"
        src={GitLogo}
      />
      <ReactTooltip id="git-tooltip" place="top" effect="solid">
        Git
      </ReactTooltip>
      <img
        data-tip
        alt="MySQL"
        data-for="mysql-tooltip"
        className="tech-used-logo"
        src={MySQLLogo}
      />
      <ReactTooltip id="mysql-tooltip" place="top" effect="solid">
        MySQL
      </ReactTooltip>
      <img
        data-tip
        alt="PostgreSQL"
        data-for="postgresql-tooltip"
        className="tech-used-logo"
        src={PostgreSQLLogo}
      />
      <ReactTooltip id="postgresql-tooltip" place="top" effect="solid">
        PostgreSQL
      </ReactTooltip>
    </div>
  );
}

export default Other;
