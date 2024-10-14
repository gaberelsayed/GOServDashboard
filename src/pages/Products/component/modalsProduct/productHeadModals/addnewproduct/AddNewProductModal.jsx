import React, { useState } from "react";
import '../../../ProductHead.css';
import { Modal, Button } from "react-bootstrap";
const AddNewProductModal = () => {
  const [showAddProductModal, setshowAddProductModal] = useState(false);

  const handleShowModal = () =>  setshowAddProductModal(true);
  const handleCloseModal = () =>  setshowAddProductModal(false);
  return (
    <>
        <Button className="btn-newadd-product" onClick={handleShowModal}>
          <span className="spanIcon">
            <i className="sicon-add mx-3"></i>
             إضافة منتج جديد
             <span className="caret-icon me-2 mx-3" style={{color:"#fff"}}>{showAddProductModal? <i className="sicon-keyboard_arrow_down"></i> : <i className="sicon-keyboard_arrow_up"></i>}</span>
          </span>
    
        </Button>
        <Modal
          show={showAddProductModal}
          onHide={handleCloseModal}
          dialogClassName="left-aligned"
        >
          <Modal.Body>
            <div className="dropdown-item">
              <div className="text-container">
                <h6>منتج جاهز</h6>
                <p>المنتجات الملموسة والقابلة للشحن</p>
              </div>
              <div className="icon-container-drop">
                <i className="sicon-packed-box"></i>
              </div>
            </div>
            <div className="dropdown-item">
              <div className="text-container">
                <h6>خدمة حسب الطلب</h6>
                <p>التصميم، الطباعة، البحوث، الكتابة</p>
              </div>
              <div className="icon-container-drop">
                <i className="sicon-fabric-swatch"></i>
              </div>
            </div>
            <div className="dropdown-item">
              <div className="text-container">
                <h6>أكل</h6>
                <p>المأكولات والمشروبات التي تطلبها حسب خاص</p>
              </div>
              <div className="icon-container-drop">
                <i className="sicon-cake"></i>
              </div>
            </div>
            <div className="dropdown-item">
              <div className="text-container">
                <h6>منتج رقمي</h6>
                <p>الكتب الإلكترونية، الدورات، ملفات التحميل</p>
              </div>
              <div className="icon-container-drop">
                <i className="sicon-game-controller-alt"></i>
              </div>
            </div>
            <div className="dropdown-item">
              <div className="text-container">
                <h6>بطاقة رقمية</h6>
                <p>بطاقات الإهداء، حسابات للبيع</p>
              </div>
              <div className="icon-container-drop">
                <i className="sicon-barcode-scan"></i>
              </div>
            </div>
            <div className="dropdown-item">
              <div className="text-container">
                <h6>مجموعة منتجات</h6>
                <p>أكثر من منتج في منتج واحد</p>
              </div>
              <div className="icon-container-drop">
                <i className="sicon-inbox-full"></i>
              </div>
            </div>

            <div className="dropdown-item">
              <div className="text-container">
                <h6>حجوزات</h6>
                <p>دورات، استشارات، خدمات طبية وسياحية</p>
              </div>
              <div className="icon-container-drop">
                <i className="sicon-calendar-date"></i>
              </div>
            </div>

            <div className="dropdown-item new-item">
              <span className="badge">جديد</span>
              <div className="text-container">
                <h6>استخدام نماذج جاهزة</h6>
                <p>إضافة منتج بسرعة وسهولة</p>
              </div>
              <div className="icon-container-drop">
                <i className="sicon-layout-grid"></i>
              </div>
            </div>
          </Modal.Body>
        </Modal>
    </>
  
  );
};

export default AddNewProductModal;
