import Footer from "../common/Footer";
import AdminProductDetail from "../features/admin/components/AdminProductDetail";
import Navbar from "../features/navbar/Navbar";


function AdminProductDetailPage() {
  return (
    <>
      <Navbar>
        <AdminProductDetail></AdminProductDetail>
      </Navbar>
      <Footer></Footer>
    </>
  );
}

export default AdminProductDetailPage;
