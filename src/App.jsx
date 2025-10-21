import { useEffect, useState } from "react";
import "./App.css";
import MyAbout from "./Component/About/MyAbout";
import MyHeader from "./Component/Header/MyHeader";
import MyNavbar from "./Component/Navbar/MyNavbar";
import MySkills from "./Component/Skills/MySkills";
import MyProjrct from "./Component/Project/MyProject";
import MyGallery from "./Component/Gallery/MyGallery";
import MyResume from "./Component/Resume/MyResume";
import MyContact from "./Component/Contact/MyContact";
import MyFooter from "./Component/Footer/MyFooter";
import ScrollToTopButton from "./Component/ScrollToTop/ScrollToTopButton";

function App() {
  useEffect(() => {
    // وقتی کامپوننت لود شد، صفحه رو به بالا ببر
    window.scrollTo(0, 0);
  }, []);

  const [selectedProjectImages, setSelectedProjectImages] = useState([]);
  return (
    <>
      <MyHeader />
      <MyNavbar />
      <main>
        <MyAbout />
        <MySkills />
        <MyProjrct setSelectedProjectImages={setSelectedProjectImages} />
        <MyGallery images={selectedProjectImages} />
        <MyResume />
        <MyContact />
      </main>
      <MyFooter />
      <ScrollToTopButton />
    </>
  );
}

export default App;
