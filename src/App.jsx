import { useEffect, useState } from "react";
import "./App.css";
import MyAbout from "./Component/About/MyAbout";
import MyHeader from "./Component/Header/MyHeader";
import MyNavbar from "./Component/Navbar/MyNavbar";
import MySkills from "./Component/Skills/MySkills";
import MyProjrct from "./Component/Project/MyProject";
import MyGallery from "./Component/Gallery/MyGallery";
import MyResume from "./Component/Resume/MyResume";
import MyFooter from "./Component/Footer/MyFooter";
import ScrollToTopButton from "./Component/ScrollToTop/ScrollToTopButton";
import CustomCursor from "./Component/CustomCursor/CustomCursor";
import Scrollbar from "./Component/customScrollbar/Scrollbar";
import SocialBar from "./Component/SocialBar/SocialBar";
import ContactForm from "./Component/ContactForm/ContactForm";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedProjectImages, setSelectedProjectImages] = useState([]);
  return (
    <>
      <CustomCursor />
      <SocialBar />
      <Scrollbar />
      <MyHeader />
      <MyNavbar />
      <main>
        <MyAbout />
        <MySkills />
        <MyProjrct setSelectedProjectImages={setSelectedProjectImages} />
        <MyGallery images={selectedProjectImages} />
        <MyResume />
        <ContactForm />
      </main>
      <MyFooter />
      <ScrollToTopButton />
    </>
  );
}

export default App;
