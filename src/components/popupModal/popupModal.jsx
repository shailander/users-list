import React from "react";
import "./popupModal.scss";

function PopupModal({ selectedUser, setIsModalVisible }) {
  return (
    <div className="modal-background" onClick={() => setIsModalVisible(false)}>
      <div
        className="popup-modal"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="header">
          <h3>User Information</h3>
          <button
            className="close-button"
            onClick={() => setIsModalVisible(false)}
          >
            X
          </button>
        </div>
        <div className="user-card">
          <div className="user-info">
            <img src={selectedUser.avatar} alt="userimage" />
          </div>
          <div className="user-info">Id : {selectedUser.id}</div>
          <div className="user-info">
            Name : {selectedUser.first_name} {selectedUser.last_name}
          </div>
          <div className="user-info">Email : {selectedUser.email}</div>
        </div>
      </div>
    </div>
  );
}

export default PopupModal;
