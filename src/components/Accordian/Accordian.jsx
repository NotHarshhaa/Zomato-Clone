import React, { useState } from "react";
import "./Accordin.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Accordian = ({ question }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="accordian">
      <div className="accordianContainer" onClick={() => setOpen(!open)}>
        <div className="accordianTitle">
          <h3>{question.title}</h3>
          {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </div>
        {open && <p>{question.infos}</p>}
      </div>
    </div>
  );
};

export default Accordian;
