// import "../dist/assets/index-DiOlVIoh.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // If you need JavaScript functionality
import "./css/styles.css";
import 'font-awesome/css/font-awesome.min.css';
import Header from "./component/Header/Header.jsx";
import Section1 from "./component/body/section1";
import Section2 from "./component/body/section2";
import Section3 from "./component/body/section3";
import Section4 from "./component/body/section4";
import Section5 from "./component/body/section5";
import Section6 from "./component/body/section6";
import Footer from "./component/Footer/footer";
function App() {
  return (
    <>
    <Header />,
   <Section1 />,
   <Section2 />,
   <Section3 />,
   <Section4 />,
   <Section5 />,
   <Section6 />,
   <Footer />
   </>
  );
}

export default App;