import React, { useState } from "react";
import "../styles/TimeModal.css";

const TimeModal = ({ isOpen, onClose, onSave }) => {
  const [time, setTime] = useState("");

  const handleChange = event => {
    setTime(event.target.value);
  };

  const handleSave = () => {
    if (time > 0) {
      onSave(time);
      onClose();
    }
  };

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}></span>
        <h3 className="modal-title">Enter the execution time</h3>
        <input
          type="number"
          value={time}
          onChange={handleChange}
          placeholder="Time (in minutes)"
        />
        <button className="modal-btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default TimeModal;
