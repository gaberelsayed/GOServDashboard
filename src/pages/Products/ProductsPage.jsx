import React, { useState, useEffect } from "react";
import HeaderComponent from "./component/HeaderComponent";
import ProductHead from "./component/ProductHead";
import ProductList from "./component/Products";
import ProductListRow from "./component/ProductsListRow";
import "./ProductPage.css";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
// import Helper from "../../components/Helper";
import axios from "axios"; 

const ProductsPage = (props) => {
  const [isProductListVisible, setProductListVisible] = useState(true);

  const showProductList = () => {
    setProductListVisible(true);
  };

  const hideProductList = (props) => {
    setProductListVisible(false);
  };
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState([]);
  useEffect(() => {
    axios
    .get("https://goservback.alyoumsa.com/api/dashboard/products", {
      timeout: 5000,
    })
    .then((response) => {
      console.log("Fetched Products Data:", response.data);
      const fetchedProducts = response.data.map((product) => ({
        imageUrl: product.all_photos[0]
          ? `https://goservback.alyoumsa.com/public/storage/${product.all_photos[0]}`
          : "https://cdn.assets.salla.network/prod/admin/cp/assets/images/placeholder.png",
        Prductname: product.name,
        id:product.id,
        placeholder: "خدمة حسب الطلب",
        CategoryName:product.category_name,
        newprd: false,
      }));

      const productQuantities = response.data.flatMap((product) =>
        product.color_photos.map((colorItem) => ({
          color: colorItem.color,
          available: colorItem.sizes.reduce(
            (acc, size) => acc + size.quantity,
            0
          ),
        }))
      );
      setProducts(fetchedProducts);
      setQuantities(productQuantities);
    })
    .catch((error) => {
      console.error("Error fetching products:", error.message);
    });
  }, []);

  const updateProductImage = (id, newImageUrl) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, imageUrl: newImageUrl } : product
      )
    );
  };
  // const addNewProduct = (newProduct) => {
  //   setProducts((prevProducts) => [newProduct, ...prevProducts]);
  // };

  const addNewProduct = (newProductData) => {
    setProducts((prevProducts) => [newProductData, ...prevProducts]);
    axios.post("https://goservback.alyoumsa.com/api/dashboard/products", newProductData)
      .then(response => {
        setProducts([response.data, ...products]);
      })
      .catch(error => console.error("Error adding product:", error.message));
  };

  const deleteProduct = (index) => {
    setProducts((prevProducts) => prevProducts.filter((_, i) => i !== index));
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
          marginTop: "80px",
          marginRight: "250px",
          height: "100%",
          width: "calc(100% - 260px)",
          minHeight: "100vh",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        <div className="headerComponent" style={{width:"98%"}}>
          <HeaderComponent/>
          <ProductHead
            showProductList={showProductList}
            hideProductList={hideProductList}
            addNewProduct={addNewProduct}
          />
          {isProductListVisible ? (
            <ProductList
              products={products}
              onDelete={(index) => deleteProduct(index)}
              onImageUpload={updateProductImage}
              quantities={quantities} 
            />
          ) : (
            <ProductListRow
              products={products}
              onDelete={(index) => deleteProduct(index)}
              onImageUpload={updateProductImage}
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default ProductsPage;
