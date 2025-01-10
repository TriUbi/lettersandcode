import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import { ContentWrapper } from "./styles/components/ContentWrapper.styles";
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
import ProtectedRoute from "./Auth/ProtectedRoute";
import Signup from "./Auth/Signup";
import Login from "./Auth/Login";
import PublishBook from "./pages/Author/PublishBook";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebaseConfig";

function App() {
  const [user] = useAuthState(auth);

  return (
    <Router>
      <Header />
      <ContentWrapper>
        <Routes>
          {/* Rutas públicas */}
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reader" element={<ReaderPage />} />
          <Route path="/writer" element={<AuthorPage />} />
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/signup"
            element={!user ? <Signup /> : <Navigate to="/" />}
          />

          {/* Rutas protegidas */}
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route
            path="/writer-profile"
            element={
              <ProtectedRoute>
                <AuthorProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/reader-profile"
            element={
              <ProtectedRoute>
                <ReaderProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/publish"
            element={
              <ProtectedRoute>
                <PublishBook />
              </ProtectedRoute>
            }
          />

          {/* Ruta por defecto - redirige a home si no existe */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </ContentWrapper>
    </Router>
  );
}

export default App;
