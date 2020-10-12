import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import "./EmailInput.css";

export default function EmailInput(props) {
  const email = "quentin.vilchez@gmail.com";
  const [snackbar, setSnack] = useState("snackbar");
  const handleClick = (e) => {
    navigator.clipboard.writeText(email).then(
      function () {
        console.log("email has been copied to clipboard");
        setSnack("snackbar show");
      },
      function () {
        console.log("email not copied");
      }
    );
  };
  useEffect(() => {
    console.log(snackbar);
    if (snackbar.includes("show")) {
      setTimeout(() => {
        setSnack("snackbar");
      }, 3000);
    }
  }, [snackbar]);
  return (
    <div id='email-input'>
      <div id='email'>
        <div id='address'>
          <a href={`mailto:${email}`}>{email}</a>
        </div>
        {navigator.clipboard ? (
          <div id='copy-icon'>
            <FontAwesomeIcon icon={faCopy} onClick={handleClick} />
            <span id='copy-text'>Copy to Clipboard</span>
            <div className={snackbar}>Copied!</div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
