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

const CategoryModal = ({ isColumn }) => {
  const [productDetails, setProductDetails] = useState({
    language: "AR",
    price: 150,
    quantity: 26,
    description: "هدايا حسب الحدث",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const [showCategoryModal, setShowCategoryModal] = useState(false);

  const handleCategoryModalClose = () => setShowCategoryModal(false);
  const handleCategoryModalShow = () => setShowCategoryModal(true);

  const [isMainCategory, setIsMainCategory] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const toggleMainCategory = () => {
    setIsMainCategory((prev) => !prev);
  };

  return (
    <>
      {isColumn ? (
        <div
          className="classificationNameClass"
          onClick={handleCategoryModalShow}
        >
          <p style={{ color: "black" }}>تصنيف</p>
        </div>
      ) : (
        <span style={{ fontSize: "12px" }} onClick={handleCategoryModalShow}>
          اضف تصنيف
        </span>
      )}
      <Modal
        show={showCategoryModal}
        onHide={handleCategoryModalClose}
        centered
        size="lg"
        style={{ zIndex: 9999999999 }}
        className="CategoryModal"
      >
        <div className="modal-header">
          <h4>إضافة تصنيف جديد</h4>
          <Button
            variant="link"
            onClick={handleCategoryModalClose}
            className="close-button"
          >
            &times;
          </Button>
        </div>
        <Modal.Body>
          <form style={{ direction: "rtl" }}>
            <div>
              <label style={{ marginRight: "16px" }}>اسم التصنيف</label>
              <br />
              <div className="field-category">
                <div className="InputCategoryClass">
                  <input type="text" placeholder="ادخل اسم التصنيف" required />
                </div>
                <div className="selectCategoryClass">
                  <select
                    name="language"
                    value={productDetails.language}
                    onChange={handleChange}
                  >
                    <option value="AR">AR</option>
                    <option value="EN">EN</option>
                  </select>
                </div>
              </div>
            </div>
            <div style={{ marginRight: "16px" }}>
              <label>
                <input
                  type="checkbox"
                  checked={isMainCategory}
                  onChange={toggleMainCategory}
                />
                إضافة الي التصنيف رئيسي
              </label>
            </div>
            {isMainCategory && (
              <div style={{ marginRight: "16px", marginTop: "10px" }}>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="">تحديد التصنيف الرئيسي</option>
                  <option value="هدية موسمية">هدية موسمية</option>
                  <option value="الشتاء">الشتاء</option>
                  <option value="الصيف">الصيف</option>
                  <option value="الربيع">الربيع</option>
                  <option value="كفر جوال هدية">كفر جوال هدية</option>
                </select>
              </div>
            )}
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCategoryModalClose}>
            إلغاء
          </Button>
          <Button
            variant="primary"
            type="submit"
            onClick={handleCategoryModalClose}
          >
            إضافة التصنيف
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CategoryModal;
