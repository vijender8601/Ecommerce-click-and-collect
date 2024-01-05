import Navbar from "../features/navbar/Navbar";
import ProductDetail from "../features/product/components/ProductDetail";
import Footer from "../common/Footer";

function ProductDetailPage() {
  return (
    <>
    <Navbar>
      <ProductDetail></ProductDetail>
    </Navbar>
    <Footer></Footer>
    </>
  );
}

export default ProductDetailPage;
