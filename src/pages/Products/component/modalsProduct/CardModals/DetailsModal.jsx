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
import {
  faSlidersH,
  faChevronDown,
  faInfinity,
} from "@fortawesome/free-solid-svg-icons";

const DetailsModal = ({ isColumn }) => {
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
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  const handleDetailsModalClose = () => setShowDetailsModal(false);
  const handleDetailsModalShow = () => setShowDetailsModal(true);

  const [activeButton, setActiveButton] = useState("productDetails");

  const [showCustomFields, setShowCustomFields] = useState(false);
  const [showProductDetailsSection, setShowProductDetailsSection] =
    useState(true);

  const handleCustomFieldsToggle = () => {
    setShowCustomFields(true);
    setShowFilesSection(false);
    setShowProductDetailsSection(false);
    setActiveButton("customFields");
  };

  const [showFilesSection, setShowFilesSection] = useState(false);
  const handleFilesToggle = () => {
    setShowFilesSection(true);
    setShowCustomFields(false);
    setShowProductDetailsSection(false);
    setActiveButton("files");
  };

  const handleProductDetailsSectionToggle = () => {
    setShowFilesSection(false);
    setShowCustomFields(false);
    setShowProductDetailsSection(true);
    setActiveButton("productDetails");
  };

  const [fileAction, setFileAction] = useState("upload");
  const [fileLink, setFileLink] = useState("");

  const handleFileActionChange = (id, action) => {
    setFileSections((prevSections) =>
      prevSections.map((section) =>
        section.id === id ? { ...section, action } : section
      )
    );
  };

  const [fileSections, setFileSections] = useState([
    { id: Date.now(), action: "upload", link: "" },
  ]);

  const handleDeleteFile = (id) => {
    setFileSections((prevSections) =>
      prevSections.filter((section) => section.id !== id)
    );
  };

  const handleAddFileSection = () => {
    setFileSections((prevSections) => [
      ...prevSections,
      { id: Date.now(), action: "upload", link: "" },
    ]);
  };

  const [description, setDescription] = useState("");

  return (
    <>
      {isColumn ? (
        <div
          className="DetailsClass"
          onClick={handleDetailsModalShow}
          style={{ cursor: "pointer" }}
        >
          <p style={{ color: "black" }}>
            <i className="sicon-tune-alt mx-2"></i>بيانات المنتج{" "}
          </p>
        </div>
      ) : (
        <div className="tab-item active" onClick={handleDetailsModalShow}>
          <FontAwesomeIcon icon={faSlidersH} />
          <span>بيانات المنتج</span>
        </div>
      )}
      <Modal
        show={showDetailsModal}
        onHide={handleDetailsModalClose}
        centered
        size="lg"
        style={{ zIndex: 9999999999, maxWidth: "80%", width: "80%" }}
        className="DetailsModalClass"
      >
        <div className="modal-header">
          <h4>(netflix) بيانات المنتج</h4>
          <Button
            variant="link"
            onClick={handleDetailsModalClose}
            className="close-button"
          >
            &times;
          </Button>
        </div>
        <div className="modal-subheader">
          <Button
            style={{
              backgroundColor:
              activeButton === "files" ? "#005379" : "transparent",
              color: activeButton === "files" ? "white" : "#000",
            }}
            onClick={handleFilesToggle}
            className="subheader-button"
          >
            الملفات المرفقة
            <i className="sicon-list position-left ml-3" ></i>
          </Button>
          <Button
            style={{
              backgroundColor:
              activeButton === "customFields" ? "#005379" : "transparent",
              color: activeButton === "customFields" ? "white" : "#000",
            }}
            variant="outline-secondary"
            onClick={handleCustomFieldsToggle}
            className="subheader-button"
          >
            الحقول المخصصة
            <i className="sicon-list-add position-left ml-3 mt-2"></i>
          </Button>
          <Button
          style={{
            backgroundColor:
            activeButton === "productDetails" ? "#005379" : "transparent",
            color: activeButton === "productDetails" ? "white" : "#000",
            borderRadius:activeButton === "productDetails" ? "none" : "none",
          }}
            variant="outline-secondary"
            className="subheader-button"
            onClick={handleProductDetailsSectionToggle}
          >
            بيانات المنتج
            <i className="sicon-page-content position-left ml-3"></i>
          </Button>
        </div>
        <Modal.Body className="DetailsBodyClass">
          {showProductDetailsSection && (
            <div className="product-details-section">
              <div className="form-group">
                <label
                  className="form-productDetails-label-class"
                  style={{ marginRight: "43px" }}
                >
                  سعر التكلفة
                </label>
                <div className="form-control" style={{ marginRight: "40px" }}>
                  <i
                    className="sicon-coin-dollar"
                    style={{ color: "#aaa", marginTop: "2px" }}
                  ></i>
                  <input
                    type="text"
                    placeholder="سعر التكلفة"
                    style={{
                      border: "none",
                      marginRight: "5px",
                      padding: "0px",
                    }}
                  />
                </div>
              </div>
              <div className="form-group-flex">
                <div className="form-group-flex-one">
                  <label className="form-productDetails-label-class">
                    السعر المخفض
                  </label>
                  <div className="form-control d-flex " style={{marginRight:"10px"}}>
                     <i className="sicon-special-discount" style={{ color: "#aaa", marginTop: "5px" }}></i>
                      <input
                      type="text"
                      placeholder="السعر المخفض"
                      style={{
                        border: "none",
                        padding: "0px",
                        marginRight:"4px",
                      }}
                    />
                  </div>
                </div>
                <div className="form-group-flex-one">
                  <label className="form-productDetails-label-class">
                    نهاية التخفيض
                  </label>
                
                      <div className="form-control d-flex">
                     <i className="sicon-calendar" style={{ color: "#aaa", marginTop: "5px" }}></i>
                      <input
                      type="text"
                      placeholder="نهاية التخفيض (اختباري)"
                      style={{
                        border: "none",
                        padding: "0px",
                        marginRight:"4px",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group-flex-3col">
                <div className="form-group-flex-col" >
                  <label className="form-productDetails-label-class">
                    رمز التخزين
                  </label>
                      <div className="form-control d-flex" style={{marginRight:"10px"}}>
                     <i className="sicon-barcode" style={{ color: "#aaa", marginTop: "5px" }}></i>
                      <input
                      type="text"
                      placeholder="SUK رمز التخزين"
                      style={{
                        border: "none",
                        padding: "0px",
                        marginRight:"3px",
                      }}
                    />
                  </div>
                </div>
                <div className="form-group-flex-col">
                  <label className="form-productDetails-label-class">
                    GTIN
                  </label>
                      <div className="form-control d-flex">
                     <i className="sicon-barcode" style={{ color: "#aaa", marginTop: "5px" }}></i>
                      <input
                      type="text"
                        placeholder="GTIN"
                      style={{
                        border: "none",
                        padding: "0px",
                        marginRight:"3px",
                      }}
                    />
                  </div>
                </div>
                <div className="form-group-flex-col">
                  <label className="form-productDetails-label-class">MPN</label>
          
                      <div className="form-control d-flex">
                     <i className="sicon-barcode" style={{ color: "#aaa", marginTop: "4px"}}></i>
                      <input
                      type="text"
                      placeholder="MPN"
                      style={{
                        border: "none",
                        padding: "0px",
                        marginRight:"3px",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group" style={{ marginBottom: "20px" }}>
                <label
                  className="form-productDetails-label-class"
                  style={{ marginRight: "43px" }}
                >
                  تحديد الماركة التجارية
                </label>
                <div style={{border:"1px solid #ddd", width: "calc(98% - 50px)", marginRight:"30px",padding:"7px",borderRadius:"5px"}}>
                  <i className="sicon-award-ribbon" style={{color:"#aaa"}}></i>
                  <select style={{border:"none",marginRight:"0px",padding:"0px"}}>
                    <option>البحث عن الماركة</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label
                  className="form-productDetails-label-class"
                  style={{ marginRight: "43px" }}
                >
                  العنوان الفرعي
                </label>

                <div
                  className="field-productDetails"
                  style={{ width: "calc(98% - 50px)" }}
                >
                  <div
                    className="InputproductDetailsClass form-control"
                    style={{ border: "none" }}
                  >
                    <i
                      className="sicon-type-square"
                      style={{ color: "#aaa", marginTop: "2px" }}
                    ></i>
                    <input
                      type="text"
                      placeholder="العنوان الفرعي"
                      style={{
                        border: "none",
                        marginRight: "5px",
                        padding: "0px",
                      }}
                    />
                  </div>

                  <div className="selectproductDetailsClass">
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

                <p style={{ marginRight: "30px", marginTop: "-20px" }}>
                  العنوان الفرعي يظهر تحت اسم المنتج في المتجر، بحد اقصى 35 حرف.
                  نسبة الخصم:
                  <span className="spanProductDetailsClass">percent</span>
                  مبلغ الخصم
                  <span className="spanProductDetailsClass">discount</span>
                  ماركة
                  <span className="spanProductDetailsClass">brand</span>
                </p>
              </div>
              <div className="form-group">
                <label
                  className="form-productDetails-label-class"
                  style={{ marginRight: "43px" }}
                >
                  العنوان الترويجي
                </label>
                <div className="form-control" style={{ marginRight: "40px" }}>
                  <i
                    className="sicon-image-carousel"
                    style={{ color: "#aaa", marginTop: "2px" }}
                  ></i>
                  <input
                    type="text"
                    placeholder="العنوان الترويجي"
                    style={{
                      border: "none",
                      marginRight: "5px",
                      padding: "0px",
                    }}
                  />
                </div>

                <p style={{ marginRight: "40px" }}>
                  يظهر العنوان الترويجي على صورة المنتج بحد أقصى 25 حرف. نسبة
                  الخصم:
                  <span className="spanProductDetailsClass">percent</span>
                  مبلغ الخصم
                  <span className="spanProductDetailsClass">discount</span>
                  ماركة
                  <span className="spanProductDetailsClass">brand</span>
                </p>
              </div>
              <div className="form-group">
                <label
                  className="form-productDetails-label-class"
                  style={{ marginRight: "43px" }}
                >
                  تحديد كمية المنتج
                </label>
                <div style={{border:"1px solid #ddd", width: "calc(98% - 50px)", marginRight:"30px",padding:"7px",borderRadius:"5px"}}>
                  <i className="sicon-box" style={{color:"#aaa"}}></i>
                  <select style={{border:"none",marginRight:"0px",padding:"0px"}}>
                  <option value="">تحديد كمية المنتج</option>
                  <option value="enabled">تفعيل خيار تحديد الكمية</option>
                  <option value="rules">قوانين تحديد الكمية</option>
                  <option value="disable">تعطيل خيار تحديد الكمية</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label
                  className="form-productDetails-label-class"
                  style={{ marginRight: "41px", marginTop: "15px" }}
                >
                  قنوات عرض المنتج
                </label>
                <div style={{border:"1px solid #ddd", width: "calc(98% - 50px)", marginRight:"30px",padding:"7px",borderRadius:"5px"}}>
                  <i className="sicon-devices" style={{color:"#aaa"}}></i>
                  <select style={{border:"none",marginRight:"0px",padding:"0px"}}>
                  <option value="">قم بتحديد قنوات عرض المتجر</option>
                  <option value="enabled">اظهار في موقع المتجر</option>
                  <option value="rules">اظهار في تطبيق المتجر</option>
                  </select>
                </div>
              </div>
              <form
                className=""
                style={{ marginRight: "43px", marginTop: "15px" }}
              >
                <div style={{ textAlign: "right" }}>
                  <label>
                    <input
                      type="checkbox"
                      name="ارفاق ملف عند الطلب"
                      style={{ marginLeft: "10p" }}
                    />
                    ارفاق ملف عند الطلب{" "}
                  </label>
                </div>
                <div style={{ textAlign: "right" }}>
                  <label>
                    <input
                      type="checkbox"
                      name="امكانية كتابة الملاحظة"
                      style={{ marginLeft: "10p" }}
                    />
                    امكانبة كتابة الملاحظة{" "}
                  </label>
                </div>
                <div style={{ textAlign: "right" }}>
                  <label>
                    <input
                      type="checkbox"
                      name="المنتج خاضع لضريبة"
                      style={{ marginLeft: "10p" }}
                    />
                    المنتج خاضع لضريبة{" "}
                  </label>
                </div>
              </form>
              <div className="form-group" style={{ marginRight: "43px" }}>
                <ReactQuill
                  value={description}
                  onChange={setDescription}
                  placeholder="وصف المنتج"
                  style={{
                    width: "calc(98% - 50px)",
                    border: "1px solid rgb(225 218 218)",
                    marginTop: "10px",
                    textAlign: "right",
                  }}
                  className="ql-container"
                />
              </div>

              <style jsx>{`
                .ql-editor {
                  direction: rtl;
                  text-align: right;
                }
                .ql-placeholder {
                  text-align: right;
                  padding: 10px;
                }
              `}</style>

              <label
                className="form-productDetails-label-class"
                style={{ marginRight: "41px", marginTop: "15px" }}
              >
                ادخل الوسوم هنا
              </label>
              <div
                className="input-container"
                style={{
                  width: "90%",
                  marginRight: "40px",
                  marginTop: "-2px",
                  
                }}
              >
                <div style={{width:"90%"}}>
                  <i className="sicon-tag" style={{marginRight:"13px",color:"#aaa"}}></i>
                  <input
                    type="text"
                    className="text-input"
                    placeholder=" ادخل الوسيم هنا ,ثم اضغط زر اضافة او اضغط Enter"
                  />
                </div>
              
                <button className="input-button">
                  <i className="icon-class">اضافة</i>
                </button>
              </div>

              <label
                className="form-productDetails-label-class"
                style={{ marginRight: "41px", marginTop: "15px" }}
              >
                لا توجد رسوم لهذا المنتج
              </label>
              <div
                style={{
                  margin: "20px",
                  backgroundColor: "rgb(235 232 232 / 59%)",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <label
                  className="form-productDetails-label-class"
                  style={{
                    marginRight: "43px",
                    marginTop: "15px",
                    color: "black",
                  }}
                >
                  تحسينات SEO
                </label>
                <br />
                <label
                  className="form-productDetails-label-class"
                  style={{
                    marginRight: "43px",
                    marginTop: "15px",
                    color: "black",
                  }}
                >
                  عنوان صفحة المنتج (Page Title)
                </label>
                <div style={{ marginRight: "41px", marginTop: "15px" }}>
                  <div style={{
                      width: "90%",
                      border: "1px solid rgb(225 218 218)",
                      padding: "2px 8px",
                      backgroundColor:"#fff",
                    }}> 
                  <i className="sicon-image-carousel text-gray-500"></i>
                  <input
                    type="text"
                    placeholder="عنوان صفحة المنتج"
                    style={{
                      border: "none",
                    }}
                  />
                  </div>
                  <p style={{ marginRight: "40px" }}>
                    اسم المنتج :
                    <span className="spanProductDetailsClass">Name</span>
                    التصنيف :
                    <span className="spanProductDetailsClass">Category</span>
                    الماركه :
                    <span className="spanProductDetailsClass">brand</span>
                  </p>
                </div>
                <label
                  className="form-productDetails-label-class"
                  style={{
                    marginRight: "43px",
                    marginTop: "15px",
                    color: "black",
                    padding: "5px",
                  }}
                >
                  رابط صفحة المنتج (SEO Page URL)
                </label>
                <div style={{ marginRight: "41px", marginTop: "15px" }}>
                    <div style={{
                      width: "90%",
                      border: "1px solid rgb(225 218 218)",
                      padding: "2px 8px",
                      backgroundColor:"#fff",
                    }}> 
                  <i className="sicon-link text-gray-500"></i>
                  <input
                    type="text"
                    placeholder="رابط صفحة المنتج"
                    style={{
                      border: "none",
                    }}
                  />
                  </div>
                  <p style={{ marginRight: "40px" }}>
                    اسم المنتج :
                    <span className="spanProductDetailsClass">Name</span>
                    التصنيف :
                    <span className="spanProductDetailsClass">Category</span>
                    الماركه :
                    <span className="spanProductDetailsClass">brand</span>
                  </p>
                </div>
                <br />
                <label
                  className="form-productDetails-label-class"
                  style={{
                    marginRight: "43px",
                    marginTop: "15px",
                    color: "black",
                  }}
                >
                  وصف صفحة المنتج (Page Description)
                </label>
                <div style={{ marginRight: "41px", marginTop: "15px" }}>
                    <div style={{
                      width: "90%",
                      border: "1px solid rgb(225 218 218)",
                      padding: "8px",
                      backgroundColor:"#fff",
                      display:"flex",
                
                    }}> 
                  <i className="sicon-content text-gray-500" style={{marginTop:"7px",marginLeft:"5px"}}></i>
                  <textarea
                    placeholder="وصف صفحة المنتج"
                    style={{
                      border: "none",
                      height: "100px",
                      width:"100%",
                      outline: "none",
                    }}
                  />
                  </div>
                  <p style={{ marginRight: "20px" }}>
                    اسم المنتج :
                    <span className="spanProductDetailsClass">Name</span>
                    التصنيف :
                    <span className="spanProductDetailsClass">Category</span>
                    الماركه :
                    <span className="spanProductDetailsClass">brand</span>
                  </p>
                </div>
                <br />
                <label
                  className="form-productDetails-label-class"
                  style={{
                    marginRight: "43px",
                    marginTop: "15px",
                    color: "black",
                  }}
                >
                  netflix
                </label>
                <div style={{ marginRight: "41px", marginTop: "15px" }}>
                  <a
                    href="https://salla.sa/giftshop2024/netflix/p1744624860"
                    style={{ color: "green", textDecoration: "none" }}
                  >
                    https://salla.sa/giftshop2024/netflix/p1744624860
                  </a>
                </div>
              </div>
            </div>
          )}
          {showFilesSection && (
            <div>
              <div style={{ color: "#aaa", fontSize: "13px" }}>
                <p>هناك طريقتين لرفع الملفات الرقمية:</p>
                <p>
                  1. رفع الملف: والذي يتيح لك رفع الملفات من جهازك حتى حجم 100
                  ميجا
                </p>
                <p>
                  2. رابط الملف: بامكانك رفع الملفات الكبيرة على خدمات التخزين
                  السحابية ثم اضافة الرابط
                </p>
              </div>

              {fileSections.map((section) => (
                <div key={section.id} className="file-upload-section">
                  <div
                    className="form-group"
                    style={{
                      display: "flex",
                      backgroundColor: "white",
                      borderRadius: "10px",
                    }}
                  >
                    <div className="InputDetailsClass" style={{ width: "80%"}}>
                      <div style={{display:"flex"}}>
                      <i className="sicon-type-square mt-3 mr-4"></i>
                      <input
                        type="text"
                        placeholder="اسم الملف"
                        required
                        style={{
                          width: "100%",
                          outline: "none",
                          border: "none",
                        }}
                      />
                      </div>
                    
                    </div>
                    <div
                      className="selectDetailsClass"
                      style={{ width: "15%" }}
                    >
                      <select
                        name="language"
                        value={productDetails.language}
                        onChange={handleChange}
                        style={{
                          width: "100%",
                          outline: "none",
                          border: "none",
                          marginTop: "3px",
                        }}
                      >
                        <option value="AR">AR</option>
                        <option value="EN">EN</option>
                      </select>
                    </div>
                  </div>

                  <div
                    className="form-group d-flex"
                    style={{
                      display: "flex",
                      backgroundColor: "white",
                      marginTop: "10px",
                      height: "50px",
                      borderRadius: "10px",
                    }}
                  >
                    <div style={{ width: "30%" }}>
                      <div style={{display:"flex"}}>
                      <i className="sicon-cloud-upload selected-method-icon mt-3 mr-5"></i>
                      <select
                        value={section.action}
                        onChange={(e) =>
                          handleFileActionChange(section.id, e.target.value)
                        }
                        style={{
                          width: "70%",
                          height: "50px",
                          borderRadius: "10px",
                          outline: "none",
                          border: "none",
                      
                        }}
                      >
                        <option value="upload">رفع الملف</option>
                        <option value="link">رابط الملف</option>
                      </select>
                      </div>
                    
                    </div>

                    {section.action === "upload" && (
                      <>
                        <div
                          style={{
                            width: "15%",
                            outline: "none",
                            border: "none",
                          }}
                        >
                          <Form.Label
                            variant=""
                            className="mr-2"
                            style={{
                              width: "100%",
                              outline: "none",
                              border: "none",
                              marginTop: "15px",
                              paddingRight: "14px",
                            }}
                          >
                          اختر ملف   .....
                          </Form.Label>
                        </div>
                        <div
                          style={{
                            width: "40%",
                            outline: "none",
                            border: "none",
                            backgroundColor: "rgb(4 147 227 / 94%)",
                            width: "100px",
                            position: "absolute",
                            left: 30,
                            height: "50px",
                            borderRadius: "10px",
                          }}
                        >
                          <Form.Control
                            type="file"
                            style={{ display: "none" }}
                            id="fileUpload"
                          />
                          <Form.Label
                            htmlFor="fileUpload"
                            className="file-upload-label"
                            style={{
                              width: "100%",
                              outline: "none",
                              border: "none",
                              marginTop: "5px",
                              backgroundColor: "rgb(4 147 227 / 94%)",
                              color:"#fff",
                            }}
                          >
                          <i className="glyphicon glyphicon-folder-open"></i>
                            استعراض
                          </Form.Label>
                        </div>
                      </>
                    )}

                    {section.action === "link" && (
                      <div>
                        <div
                          style={{
                            width: "100%",
                            outline: "none",
                            border: "none",
                            marginTop: "5px",
                          }}
                        >
                          <input
                            type="text"
                            placeholder="أدخل رابط الملف"
                            value={fileLink}
                            onChange={(e) => setFileLink(e.target.value)}
                            style={{
                              width: "100%",
                              borderRadius: "10px",
                              outline: "none",
                              border: "none",
                              padding: "10px",
                            }}
                          />
                        </div>

                        <p
                          style={{
                            color: "orange",
                            margin: "7px 0",
                            width: "90%",
                            position: "absolute",
                            right: "35px",
                          }}
                        >
                          إضافة رابط ملف (PDF) قد يعرّض المنتج للنسخ، لذا تأكّد
                          من رفع الملف مباشرةً من جهازك لحماية محتواه.
                        </p>
                      </div>
                    )}
                  </div>
                  <Button
                    variant="danger"
                    className="delete-button mt-5"
                    onClick={() => handleDeleteFile(section.id)}
                  >
                    <i className="sicon-trash-2 ml-3"></i>حذف الملف
                  </Button>
                </div>
              ))}
              <button onClick={handleAddFileSection} className="addNewOptionDetails">
                <span className="plus-icon">+</span>
              </button>
            </div>
          )}
          {showCustomFields && (
            <div className="form-group">
              <select className="custom-select">
                <option value="">اضافة قسم</option>
                <option value="">لا يوجد حقول متاحة</option>
              </select>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "rgb(170 170 170 / 13%)" }}>
          <div className="footerDetailsClass">
            <div>
              <Button variant="secondary" onClick={handleDetailsModalClose}>
                إلغاء
              </Button>
            </div>
            <div>
              <Button variant="primary">حفظ بيانات المنتج</Button>
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DetailsModal;
