import Footer from "../common/Footer";
import AdminProductList from "../features/admin/components/AdminProductList";
import Navbar from "../features/navbar/Navbar";

function AdminHome() {
    return ( 
        <>
            <Navbar>
                <AdminProductList></AdminProductList>
            </Navbar>
            <Footer></Footer>
        </>
     );
}

export default AdminHome;