import { useEffect, useState } from "react";
import MyAbout from "./Component/About/MyAbout";
import MyHeader from "./Component/Header/MyHeader";
import MyNavbar from "./Component/Navbar/MyNavbar";
import MySkills from "./Component/Skills/MySkills";
import MyProject from "./Component/Project/MyProject";
import MyGallery from "./Component/Gallery/MyGallery";
import MyResume from "./Component/Resume/MyResume";
import MyFooter from "./Component/Footer/MyFooter";
import ScrollToTopButton from "./Component/ScrollToTop/ScrollToTopButton";
import CustomCursor from "./Component/CustomCursor/CustomCursor";
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
      <MyHeader />
      <MyNavbar />
      <main className="mx-auto max-w-[1100px] px-4 py-12 sm:px-6 lg:px-8">
        <MyAbout />
        <MySkills />
        <MyProject setSelectedProjectImages={setSelectedProjectImages} />
        <MyResume />
        <ContactForm />
      </main>
      <MyFooter />
      <ScrollToTopButton />
      <MyGallery
        images={selectedProjectImages}
        onClose={() => setSelectedProjectImages([])}
      />
    </>
  );
}

export default App;
