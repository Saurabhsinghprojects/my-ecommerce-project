import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:mymailforabhi@gmail.com">
        <Button>Contact: 20JE0881@me.iitism.ac.in</Button>
      </a>
    </div>
  );
};

export default Contact;
