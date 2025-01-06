import "../App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./CSS module/400page.module.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
// import Home from "./Screens/Home";
import LoginForm from "./Screens/LoginForm";
import SignUp from "./Screens/Signup";
import NavTab from "./Components/NavTabs";
import ObjectsofPuja from "./Screens/ObjectsofPuja";
import IdolsObjectsLoop from "./Screens/IdolsObjectsLooping";
import TalktoAstroguru from "./Screens/TalktoAstroguru";
import Lottie from "lottie-react";
import scroll from "./gifjson/top.json";
import { useState, useEffect } from "react";

import whatsapp from "./gifjson/whatsapp.json";

import ImageDisplay from "./Screens/ImageDisplay";
import Subscribe from "./Screens/subscribeList";
import TestComponent from "./Screens/TestComponent";
// import Testimonials2 from "./Screens/Testimonials2";
// import TestimonialsMasonry from "./Screens/TestimonialCard";
// import TestimonialsMasonry2 from "./Screens/TestimonialsMasonry2";
import Devotees from "./Screens/Devotees";
import IdolObjectDetails from "./Screens/IdolObjectDetails";
import Home2 from "./Screens/Home2";
import Footer2 from "./Components/Footer2";
import Test from "./Screens/Test";
import Homams from "./Screens/Homam";
import PujaDetails from "./Screens/pujaDetails";
import IdolDetails from "./Screens/IdolDetails";
import ClientDashboard from "./Screens/ClientDashboard";
import CartScreen from "./Screens/CartScreen";
import SubScribePujaDetails from "./Screens/SubscribePujaDetails";
import Login from "./Screens/Login"
import Register from "./Screens/Register"


const NotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footerbody}>
        <div className={styles.errorMessage}>
          <h1 className={styles.errorCode}>404</h1>
          <p className={styles.errorText}>Page not found.</p>
          <p className={styles.errorDescription}>
            The URL you requested does not exist.
          </p>
          <a href="/" className={styles.homeButton}>
            Go to Home
          </a>
        </div>
      </div>
    </div>
  );
};

const ChatIcon = ({ onclick }) => (
  <div
    className="position-fixed p-3 rounded-circle text-white scrollupsindex"
    style={{
      zindex:"100" ,
      bottom: "13px",
      right: "4px",
      cursor: "pointer",
     
      transition: "transform 0.2s",
    }}
    onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.25)")}
    onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
  >
    <div style={{ width: "70px" }}>
      <Lottie animationData={whatsapp} onClick={onclick} />
    </div>
  </div>
);

const ScrollToTopIcon = ({ onClick }) => (
  <div
    onClick={onClick}
    className="position-fixed p-3 text-white rounded-circle shadow-lg scrollupsindex"
    style={{
      bottom: "80px",
      right: "8px",
      cursor: "pointer",
      
      transition: "transform 0.2s",
    }}
    onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.25)")}
    onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
  >
    <div style={{ width: "50px" }}>
      <Lottie animationData={scroll} />
    </div>
  </div>
);

function UserApp() {
  const [showIcons, setShowIcons] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowIcons(true);
      } else {
        setShowIcons(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [showChatbot, setShowChatbot] = useState(false);

  return (
    <div>
      <>
        <Header />
        <NavTab />

        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Home2 />} />
          {/* <Route path="/loginform" element={<LoginForm />} />
          <Route path="/signup" element={<SignUp />} /> */}
          <Route path="/objectsofpuja" element={<ObjectsofPuja />} />
          <Route path="/idolsobjectsloop" element={<IdolsObjectsLoop />} />
          <Route path="/talktoastroguru" element={<TalktoAstroguru />} />
          <Route path="/imagedisplay" element={<ImageDisplay />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/testcomponent" element={<TestComponent />} />
          {/* <Route path="/Testimonials2" element={<Testimonials2 />} /> */}
          <Route path="/cartscreen" element={<CartScreen />} />
          {/* <Route path="/TestimonialsMasonry" element={<TestimonialsMasonry />} /> */}

          {/* <Route
            path="/TestimonialsMasonry2"
            element={<TestimonialsMasonry2 />}
          /> */}
          <Route path="/Devotees" element={<Devotees />} />
          <Route path="/IdolObjectDetails" element={<IdolObjectDetails />} />
          <Route path="/pujadetails" element={<PujaDetails />} />
          <Route path="/IdolDetails" element={<IdolDetails />} />
          <Route path="/clientdashboard" element={<ClientDashboard />} />
          <Route path="/SubScribePujaDetails" element={<SubScribePujaDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
      
         
         
          {/* <Route path="/test" element={<Test />} /> */}

          <Route path="*" element={<NotFound />} />
        </Routes>
        {showIcons && (
          <>
            <ScrollToTopIcon onClick={scrollToTop} />
          </>
        )}
        <>
          <ChatIcon />
        </>

        {/* <div className="fixed z-50 p-4 bg-white rounded shadow-lg bottom-40 right-4"> */}
          {/* <ChatBot setShowChatbot={setShowChatbot}/> */}
        {/* </div> */}

        {/* <Footer /> */}
        <Footer2 />
      </>
    </div>
  );
}

export default UserApp;
