import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/BackButton.css";

function BackButton() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };
  return (
    <>
      <button className="back-button" onClick={handleBack}>
        <i className="fa-solid fa-chevron-left"></i> Back
      </button>
    </>
  );
}

export default BackButton;
