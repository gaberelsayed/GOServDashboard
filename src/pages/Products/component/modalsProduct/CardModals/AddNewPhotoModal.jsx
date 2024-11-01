import React, { useState } from "react";
import "../../ProductCard.css";
import "../../ProductsRow.css";
import { Modal, Button } from "react-bootstrap";
import "react-quill/dist/quill.snow.css";

const AddNewPhotoModal = ({ isColumn, onImageUpload }) => {
  const [showModal, setShowModal] = useState(false);
  const [uploadedImages, setUploadedImages] = useState([]);

  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);

  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFiles = (files) => {
    const validFiles = files.filter((file) => file.type.startsWith("image/"));
    const imageUrls = []; 

    const readFilePromises = validFiles.map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const imageUrl = reader.result;
          if (imageUrl) {
            imageUrls.push(imageUrl); 
            resolve(); 
          } else {
            reject(new Error("File reading failed"));
          }
        };
        reader.onerror = () => reject(new Error("File reading error"));
        reader.readAsDataURL(file);
      });
    });

    Promise.all(readFilePromises)
      .then(() => {
        setUploadedImages((prevImages) => [...prevImages, ...imageUrls]);
        if (onImageUpload) {
          onImageUpload(imageUrls);
        }
        
        console.log("Uploaded Image URLs:", imageUrls);
      })
      .catch((error) => {
        console.error("Error reading files:", error);
      });
  };;

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
            <h4 style={{ color: "black", marginBottom: "7px" }}>صور المنتج</h4>
            <p style={{ fontSize: "14px" }}>
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
          <div className="input-container">
            <button className="input-button">
              <i className="icon-class">اضافة</i>
            </button>
            <input
              type="text"
              className="text-input"
              placeholder="أضف تعليقاً أو فيديو من اليوتيوب"
            />
            <i className="sicon-media-player" style={{ color: "#aaa", marginRight: "8px" }}></i>
          </div>
          <div className="uploaded-images-container d-flex">
            {uploadedImages.map((image, index) => (
              <div key={index} className="uploaded-image">
                <img src={image} alt={`Uploaded ${index + 1}`} />
              </div>
            ))}
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