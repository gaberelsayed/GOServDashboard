import React, { useState } from "react";
import "../../ProductCard.css";
import "../../ProductsRow.css";
import { MdPhoto } from "react-icons/md";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbtack } from "@fortawesome/free-solid-svg-icons";
import { Modal, Button, Form, Row, Col, Dropdown } from "react-bootstrap";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { MdDelete } from "react-icons/md";
import { FaTrash, FaUpload } from "react-icons/fa";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const AddNewPhotoModal = ({ isColumn }) => {
  const [showModal, setShowModal] = useState(false);
  const [showOptionsModal, setShowOptionsModal] = useState(false);
  const [isToggleOn, setIsToggleOn] = useState(false);

  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);

  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const [uploadedImage, setUploadedImage] = useState(null);
  const handleFiles = (files) => {
    const validFiles = files.filter((file) => file.type.startsWith("image/"));
    if (validFiles.length > 0) {
      const file = validFiles[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileInputChange = (e) => {
    const files = Array.from(e.target.files);
    handleFiles(files);
  };

  return (
    <>
      {isColumn ? (
        <button
          className="add-media-btn"
          style={{ color: "black" }}
          onClick={handleModalShow}
        >
          <i className="sicon-image add-icon"></i> إضافة صورة أو فيديو
        </button>
      ) : (
        <span className="spanPlusClass" onClick={handleModalShow}>
          +
        </span>
      )}
      <Modal
        show={showModal}
        onHide={handleModalClose}
        centered
        size="lg"
        style={{ zIndex: 9999999999 }}
        className="addnewphoto"
      >
        <div className="modal-header">
        
          <h4>صور وفيديوهات المنتج</h4>
          <Button
            variant="link"
            onClick={handleModalClose}
            className="close-button"
          >
            &times;
          </Button>
        </div>
        <Modal.Body className="photoPopup">
          <div className="head-section">
            <h4 style={{color:"black",marginBottom:"7px"}}>صور المنتج</h4>
            <p style={{fontSize:"14px"}}>
              لمقاس لا يقل عن (100px ارتفاع * 250px عرض) من نوع ( jpg, jpeg, png
              , gif ) ولا يتجاوز 5 ميجابيت لكل صوره بحد اقصي 10 صور
            </p>
          </div>
          <div
            className="image-upload-area"
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
          >
            <input
              type="file"
              accept="image/*"
              onChange={handleFileInputChange}
              style={{ display: "none" }}
              id="file-input"
            />
            <label htmlFor="file-input" style={{ cursor: "pointer" }}>
              <div className="upload-button">
                <p>اسحب الصورة وأفلتها هنا</p>
                <p> او تصفح من جهازك</p>
              </div>
            </label>
          </div>
          {uploadedImage && (
            <div className="uploaded-image">
              <img src={uploadedImage} alt="Uploaded" />
            </div>
          )}

          <div className="input-container">
            <button className="input-button">
              <i className="icon-class">اضافة</i>
            </button>
            <input
              type="text"
              className="text-input"
              placeholder="أضف تعليقاً أو فيديو من اليوتيوب"
            />
            <i className="sicon-media-player" style={{color:"#aaa", marginRight:"8px"}}></i>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleModalClose}
            className="close-btn"
          >
            اغلاق
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddNewPhotoModal;
