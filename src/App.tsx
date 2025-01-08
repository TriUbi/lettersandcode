import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { ContentWrapper } from "./styles/components/ContentWrapper.styles"; // Importa el nuevo componente
import Home from "./pages/Home";
import Books from "./pages/Books";
import HowItWorks from "./pages/HowItWorks";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import ReaderPage from "./pages/Reader/ReaderPage";
import AuthorPage from "./pages/Author/AuthorPage";
import AuthorProfile from "./pages/Author/AuthorProfile";
import ReaderProfile from "./pages/Reader/ReaderProfile";
import Cart from "./components/Cart";

function App() {
  return (
    <Router>
      <Header />
      <ContentWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reader" element={<ReaderPage />} />
          <Route path="/writer" element={<AuthorPage />} />
          <Route path="/writer-profile" element={<AuthorProfile />} />
          <Route path="/reader-profile" element={<ReaderProfile />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </ContentWrapper>
    </Router>
  );
}

export default App;
