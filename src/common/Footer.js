function Footer() {
  return (
    <div className=" bg-gray-900">
      <div className="max-w-2xl mx-auto text-white py-10">
        <div className="text-center">
          <h3 className="text-3xl mb-3"> Click and Collect </h3>
          <p> An ecommerce site. </p>
          <div className="flex justify-center my-10">
            <div className="flex items-center border  rounded-lg px-4 py-2 w-auto mx-2 cursor-pointer hover:text-black hover:bg-white">
              
              <div className="text-center">
                <a href="https://drive.google.com/file/d/13C4EP6SW_CreCpSZHMtfPg0Kr8ooWBW_/view?usp=sharing" target="_blank" className="text-sm md:text-base"> Hire Me </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
          <p className="order-2 md:order-1 mt-8 md:mt-0">
            {" "}
            © Vijender Srivastava, 2023.{" "}
          </p>
          <div className="order-1 md:order-2">
            <a href="https://vijender-srivastava-portfolio.netlify.app/" target="_blank" className="px-2 cursor-pointer hover:text-blue-400">About us</a>
            {/* <a className="px-2 border-l">Connect with me.</a> */}
            <a href="https://www.linkedin.com/in/vijender-srivastava-7ab476202/" target="_blank" className="px-2 cursor-pointer hover:text-blue-400 border-l">Connect with me.</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
