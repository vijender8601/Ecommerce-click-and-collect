import Footer from "../common/Footer";
import Navbar from "../features/navbar/Navbar";
import ProductList from "../features/product/components/ProductList";

function Home() {
    return ( 
        <>
        <Navbar>
            <ProductList></ProductList>
        </Navbar>

        <Footer></Footer>
        </>
     );
}

export default Home;