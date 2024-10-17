import React, { useState } from "react";
import HeaderComponent from "./component/HeaderComponent";
import ProductHead from "./component/ProductHead";
import ProductList from "./component/Products";
import ProductListRow from "./component/ProductsListRow";
import "./ProductPage.css";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
// import Helper from "../../components/Helper";

const ProductsPage = (props) => {
  const [isProductListVisible, setProductListVisible] = useState(true);

  const showProductList = () => {
    setProductListVisible(true);
  };

  const hideProductList = (props) => {
    setProductListVisible(false);
  };
  const [products, setProducts] = useState([
    {
      imageUrl:
        "https://cdn.assets.salla.network/prod/admin/cp/assets/images/placeholder.png",
      price: "120",
      Prductname:"netflix",
      placeholder:"منتج رقمي - ادخل اسم المنتج",
      newprd:false,
    },
    {
      imageUrl:
        "https://cdn.salla.sa/EZZNYp/4ioBtAzqiI02qmDCocNVOOEGxBZuqwmaKud2wLdm.jpg",
      price: "120",
      Prductname:"طباعة علي الملابس",
      placeholder:"خدمة حسب الطلب",
      newprd:false,
    },
    {
      imageUrl:
        "https://cdn.salla.sa/EZZNYp/7CsgOx4DC34rcY5mPlqKjZIsaCYDRqYbGDZcmZOF.png",
      price: "150",
      Prductname:"طباعة علي الحقائب",
      placeholder:"",
      newprd:false,
    },
    {
      imageUrl:
        "https://cdn.salla.sa/EZZNYp/7MB6vrvhhdzT5d50ZWeXircnJxR0oQbv8MHR9pRW.jpg",
      price: "120",
      Prductname:"طباعة علي الكوب",
      placeholder:"خدمة حسب الطلب",
      newprd:false,
    },
    {
      imageUrl:
        "https://cdn.salla.sa/EZZNYp/7m9WvWv1M9RFu3ehPgx3dKAYz8UnnsjDsHNiKIiG.jpg",
      price: "150",
      Prductname:"عطر العود",
      placeholder:"خدمة حسب الطلب",
      newprd:false,
    },
    {
      imageUrl:
        "https://cdn.salla.sa/EZZNYp/61f14335-c5de-483c-8d5f-3ed64074cf17-500x500-ow7PEdvPbvenlyyI1PkU37w2WdsrONvcS1vhfGsW.jpg",
      price: "120",
      Prductname:"عطر الخوخ",
      placeholder:"خدمة حسب الطلب",
      newprd:false,
    },
    {
      imageUrl:
        "https://cdn.salla.sa/EZZNYp/D5QVPx3cjw7ksoQIfTowAiVZZeBYqHFKJb8nVsUl.jpg",
      price: "150",
      Prductname:"عطر التوليب",
      placeholder:"خدمة حسب الطلب",
      newprd:false,
    },
    {
      imageUrl:
        "https://cdn.salla.sa/EZZNYp/PkSe9oUyRBb34Xv2cA5aFmlzKSfzv5pRIC3cZqFo.jpg",
      price: "150",
      Prductname:"عطر الموسم",
      placeholder:"خدمة حسب الطلب",
      newprd:false,
    },
    {
      imageUrl:
        "https://cdn.salla.sa/EZZNYp/Sb0dzSc2XzBDJdCHZP6oDe3VdhdvjBBv3d080HEa.png",
      price: "150",
      Prductname:"اشتراك توصيل ورد ",
      placeholder:"خدمة حسب الطلب",
      newprd:false,
    },
  ]);
  const addNewProduct = (newProduct) => {
    setProducts((prevProducts) => [newProduct, ...prevProducts]); 
  };
  const deleteProduct = (index) => {
    setProducts((prevProducts) =>
      prevProducts.filter((_, i) => i !== index)
    );
  };

  return (
    <div
      className={`slidePage flex flex-wrap' ${props.darkMode ? "dark" : ""}`}
      style={{ backgroundColor: props.darkMode ? "#282828" : "transparent" }}
    >
      <Sidebar />
      <Navbar darkMode={props.darkMode} setDarkMode={props.setDarkMode} />
      <main
        className="w-full h-full lg:w-[calc(100%-260px)] pt-0 px-0 lg:px-10 pb-[60px]"
        style={{
          flexGrow: 2,
          marginTop: "90px",
          marginRight: "250px",
          height: "100%",
          width: "calc(100% - 260px)",
          minHeight: "100vh",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        <div className="headerComponent">
          <HeaderComponent />
           <ProductHead
            showProductList={showProductList}
            hideProductList={hideProductList}
            addNewProduct={addNewProduct} 
          />
          {isProductListVisible ? <ProductList  products={products}  onDelete={(index) => deleteProduct(index)}/> : <ProductListRow  products={products}  onDelete={(index) => deleteProduct(index)}/>}
        </div> 
      </main>
    </div>
  );
};

export default ProductsPage;
