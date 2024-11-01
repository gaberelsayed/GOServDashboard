import React, { useState, useEffect } from "react";
import "./ProductCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbtack } from "@fortawesome/free-solid-svg-icons";
import "react-quill/dist/quill.snow.css";
import AddNewPhotoModal from "./modalsProduct/CardModals/AddNewPhotoModal";
import OptionsModal from "./modalsProduct/CardModals/OptionsModal";
import CategoryModal from "./modalsProduct/CardModals/CategoryModal";
import DetailsModal from "./modalsProduct/CardModals/DetailsModal";
import ProductNotificationModal from "./modalsProduct/CardModals/ProductNotificationModal";
import axios from "axios";
function ToggleCheckButton() {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <button
      onClick={handleToggle}
      className={`toggle-button ${isChecked ? "checked" : ""}`}
    >
      {isChecked ? "✔" : " "}
    </button>
  );
}

const ProductCard = ({
  addNewProduct,
  imageUrl,
  price,
  Prductname,
  placeholder,
  CategoryName,
  newprd,
  onDelete,
  onImageUpload,
  quantities,
}) => {

  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState("");


  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://goservback.alyoumsa.com/api/dashboard/categories"
        );
        setCategories(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const [isRed, setIsRed] = useState(false);
  const handleColorClick = () => {
    setIsRed((prev) => !prev);
  };


  const [language, setLanguage] = useState("AR");
  const [newnameAR, setNewNameAR] = useState("");
  const [newnameEn, setNewNameEN] = useState("");

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (language === "AR") {
      setNewNameAR(value);
    } else {
      setNewNameEN(value);
    }
  };

  const [mainPrice, setMainPrice] = useState(0);
  const handleMainPriceChange = (e) => {
    setMainPrice(e.target.value);
};
const [images, setImages] = useState([]);
const handleImageUpload = (newImages) => {
  setImages((prevImages) => [...prevImages, ...newImages]);
};


  const handleProductSubmit = async () => {
    const newProductData = {
      category_id: selectedCategoryId,
      brand_id:"",
      name: {
        en: newnameEn,
        ar: newnameAR,
      },
      description: {
        en: "description",
        ar: "وصف",
      },
      weight:"50",
      price: mainPrice,
      details: {
        en: "details",
        ar: "تفاصيل",
      },
      photos: images,
      colors: [
        {
          color_id: "2", 
          photo:[],
          sizes: [
            {
              size_id: 1,
              quantity: "15", 
              price: "150", 
              cost: "100" ,
            }
          ]
        }
      ],

    };
    try {
      await addNewProduct(newProductData); 
      console.log("Product submitted successfully");
    } catch (error) {
      console.error("Error submitting product:", error);
    }
  };

  return (
    <>
     <div className="product-container">
     {newprd ? (
          <div className="product-card">
            <div className="product-image">
              <img src={imageUrl} alt=""  onChange={handleImageUpload}/>
                <button className="upload-icon deleteCardButton" onClick={onDelete}>
                  X
                </button>
              <div className="media-buttons">
                <div className="right">
                  <div
                    className="icon-container"
                    style={{ backgroundColor: isRed ? "red" : "white" }}
                    onClick={handleColorClick}
                  >
                    <FontAwesomeIcon icon={faThumbtack} />
                  </div>
                </div>
                <div className="left">
                  <AddNewPhotoModal isColumn={true} onImageUpload={onImageUpload} />
                </div>
              </div>
            </div>
            <div className="product-details">
              <div className="field">
                <div className="input-select-container">
                  <div className="input-wrapper">
                    <i
                      className="sicon-packed-box"
                      style={{ marginRight: "8px" }}
                    ></i>
                
                      <input
                        type="text"
                        placeholder={
                          language === "AR"
                            ? "اسم المنتج"
                            : "Product Name"
                        }
                        value={language === "AR" ? newnameAR : newnameEn}
                        onChange={handleInputChange}
                        required
                        style={{
                          direction: language === "AR" ? "rtl" : "ltr",
                          textAlign: language === "AR" ? "right" : "left",
                        }}
                      />
            
                  </div>
                </div>
                <div className="select-wrapper">
                  <select
                    name="language"
                    value={language}
                    onChange={handleLanguageChange}
                    className="language-select"
                  >
                    <option value="AR">AR</option>
                    <option value="EN">EN</option>
                  </select>
                </div>
              </div>
              <div className="field">
                <div className="InputNumberClass">
                  <i className="sicon-dollar-coin-stack"></i>
                  <input
                    type="text"
                    placeholder="السعر"
                    value={mainPrice} 
                    onChange={handleMainPriceChange}
                  />
            
                </div>
                <div className="labelPriceClass">
                  <label style={{ marginTop: "7px" }}>ر.س</label>
                </div>
              </div>
              <div className="field" style={{ padding: "10px" }}>
                <div className="numberOfQuantity">
                  <p style={{ color: "black", fontSize: "10px" }}>
                    كمية غير محدودة
                  </p>
                </div>
                <ProductNotificationModal isColumn={true} />
    
                <div className="icon-2" style={{ position: "relative" }}>
                  <div
                    style={{ position: "absolute", left: 10, right: 14, top: -10 }}
                  >
                    <svg
                      data-v-4ed85b4c=""
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 30 30"
                      width="20px"
                      height="20px"
                    >
                      <path
                        data-v-4ed85b4c=""
                        d="M 8 8 C 3.6102416 8 0 11.595515 0 16 C 0 20.400585 3.599415 24 8 24 C 10.646 24 12.420344 22.745203 13.777344 21.033203 C 13.147344 20.063203 12.616672 19.057234 12.138672 18.115234 C 10.996672 19.940234 9.828 21 8 21 C 5.220585 21 3 18.779415 3 16 C 3 13.224485 5.2377584 11 8 11 C 9.4265669 11 10.267624 11.520682 11.15625 12.525391 C 12.044876 13.530099 12.834942 15.048526 13.652344 16.673828 C 14.469745 18.29913 15.315394 20.031983 16.585938 21.464844 C 17.85648 22.897705 19.696851 24 22 24 C 26.362802 24 30 20.414234 30 16 C 30 11.599415 26.400585 8 22 8 C 19.35 8 17.576703 9.2652813 16.220703 10.988281 C 16.849703 11.961281 17.379422 12.969109 17.857422 13.912109 C 19.003422 12.069109 20.172 11 22 11 C 24.779415 11 27 13.220585 27 16 C 27 18.765766 24.719198 21 22 21 C 20.566649 21 19.72091 20.477295 18.830078 19.472656 C 17.939247 18.468017 17.14913 16.95087 16.332031 15.326172 C 15.514933 13.701474 14.671546 11.969901 13.404297 10.537109 C 12.137048 9.1043186 10.298933 8 8 8 z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <OptionsModal isColumn={true}  quantities={quantities} />
              </div>
              <div className="field">
                <div className="selectClassificationClass">
              
                    <select 
                    value={selectedCategoryId}
                    onChange={(e) => setSelectedCategoryId(e.target.value)}
                    >
                      <option value="">اختر تصنيف المنتج</option>
                      {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
              
                </div>
                <CategoryModal isColumn={true} />
              </div>
              <div className="field">
                <DetailsModal isColumn={true} />
                <div className="selectDetailsClass">
                  <select name="" placeholder="اختر تصنيف المنتج">
                    <option value="">المزيد</option>
                    <option value="">الشتاء (مخفي)</option>
                    <option value="">الصيف (مخفي)</option>
                    <option value="">الربيع (مخفي)</option>
                    <option value="">كفر جوال هدية</option>
                  </select>
                </div>
              </div>
              <button className="save-button" onClick={handleProductSubmit}>حفظ</button>
            </div>
          </div>
    
     ) :(
           <div className="product-card">
             <div className="product-image">
               <img src={imageUrl} alt="" />
            
                 <button className="upload-icon">
                   <ToggleCheckButton />
                 </button>
              
               <div className="media-buttons">
                 <div className="right">
                   <div
                     className="icon-container"
                     style={{ backgroundColor: isRed ? "red" : "white" }}
                     onClick={handleColorClick}
                   >
                     <FontAwesomeIcon icon={faThumbtack} />
                   </div>
                 </div>
                 <div className="left">
                   <AddNewPhotoModal isColumn={true} onImageUpload={onImageUpload} />
                 </div>
               </div>
             </div>
             <div className="product-details">
               <div className="field">
                 <div className="input-select-container">
                   <div className="input-wrapper">
                     <i
                       className="sicon-packed-box"
                       style={{ marginRight: "8px" }}
                     ></i>
                       <input
                         type="text"
                         placeholder={placeholder}
                         Value={Prductname}
                         className="product-input"
                       />
                   </div>
                 </div>
                 <div className="select-wrapper">
                   <select
                     name="language"
                     value={language}
                     onChange={handleLanguageChange}
                     className="language-select"
                   >
                     <option value="AR">AR</option>
                     <option value="EN">EN</option>
                   </select>
                 </div>
               </div>
               <div className="field">
                 <div className="InputNumberClass">
                   <i className="sicon-dollar-coin-stack"></i>
                   <input
                   type="text"
                   Value={price}
                   placeholder="السعر"
                 />
                 </div>
                 <div className="labelPriceClass">
                   <label style={{ marginTop: "7px" }}>ر.س</label>
                 </div>
               </div>
               <div className="field" style={{ padding: "10px" }}>
                 <div className="numberOfQuantity">
                   <p style={{ color: "black", fontSize: "10px" }}>
                     كمية غير محدودة
                   </p>
                 </div>
                 <ProductNotificationModal isColumn={true} />
     
                 <div className="icon-2" style={{ position: "relative" }}>
                   <div
                     style={{ position: "absolute", left: 10, right: 14, top: -10 }}
                   >
                     <svg
                       data-v-4ed85b4c=""
                       xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 30 30"
                       width="20px"
                       height="20px"
                     >
                       <path
                         data-v-4ed85b4c=""
                         d="M 8 8 C 3.6102416 8 0 11.595515 0 16 C 0 20.400585 3.599415 24 8 24 C 10.646 24 12.420344 22.745203 13.777344 21.033203 C 13.147344 20.063203 12.616672 19.057234 12.138672 18.115234 C 10.996672 19.940234 9.828 21 8 21 C 5.220585 21 3 18.779415 3 16 C 3 13.224485 5.2377584 11 8 11 C 9.4265669 11 10.267624 11.520682 11.15625 12.525391 C 12.044876 13.530099 12.834942 15.048526 13.652344 16.673828 C 14.469745 18.29913 15.315394 20.031983 16.585938 21.464844 C 17.85648 22.897705 19.696851 24 22 24 C 26.362802 24 30 20.414234 30 16 C 30 11.599415 26.400585 8 22 8 C 19.35 8 17.576703 9.2652813 16.220703 10.988281 C 16.849703 11.961281 17.379422 12.969109 17.857422 13.912109 C 19.003422 12.069109 20.172 11 22 11 C 24.779415 11 27 13.220585 27 16 C 27 18.765766 24.719198 21 22 21 C 20.566649 21 19.72091 20.477295 18.830078 19.472656 C 17.939247 18.468017 17.14913 16.95087 16.332031 15.326172 C 15.514933 13.701474 14.671546 11.969901 13.404297 10.537109 C 12.137048 9.1043186 10.298933 8 8 8 z"
                       ></path>
                     </svg>
                   </div>
                 </div>
                 <OptionsModal isColumn={true}  quantities={quantities} />
               </div>
               <div className="field">
                 <div className="selectClassificationClass">
                     <select>
                       <option value="">{CategoryName}</option>
                     </select>
                 </div>
                 <CategoryModal isColumn={true} />
               </div>
               <div className="field">
                 <DetailsModal isColumn={true} />
                 <div className="selectDetailsClass">
                   <select name="" placeholder="اختر تصنيف المنتج">
                     <option value="">المزيد</option>
                     <option value="">الشتاء (مخفي)</option>
                     <option value="">الصيف (مخفي)</option>
                     <option value="">الربيع (مخفي)</option>
                     <option value="">كفر جوال هدية</option>
                   </select>
                 </div>
               </div>
               <button className="save-button">حفظ</button>
             </div>
           </div>
    
     )}
      </div>
    </>

  );
};

export default ProductCard;
