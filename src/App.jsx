import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Cookies from "./layouts/main_component/Cookies";

const AuthLayout = lazy(() => import("./layouts/AuthLayout"));
const MainLayout = lazy(() => import("./layouts/MainLayout"));

// Main Pages
const HomePage = lazy(() => import("./pages/Main/HomePage/HomePage"));
const AboutPage = lazy(() => import("./pages/Main/AboutPage/AboutPage"));
const TrustbodyPage = lazy(() =>
  import("./pages/Main/TrustbodyPage/TrustbodyPage")
);
const AcademicsPage = lazy(() =>
  import("./pages/Main/AcademicsPage/AcademicsPage")
);
const GalleryPage = lazy(() => import("./pages/Main/GalleryPage/GalleryPage"));
const EventsPage = lazy(() => import("./pages/Main/EventsPage/EventsPage"));
const CareerPage = lazy(() => import("./pages/Main/CareerPage/CareerPage"));
const ContactPage = lazy(() => import("./pages/Main/ContactPage/ContactPage"));
const AdmissionPage = lazy(() =>
  import("./pages/Main/AdmissionPage/AdmissionPage")
);
const AdmissionFormPage = lazy(() =>
  import("./pages/Main/AdmissionFormPage/AdmissionFormPage")
);
const AlumniPage = lazy(() => import("./pages/Main/AlumniPage/AlumniPage"));

// Auth Pages
const LoginPage = lazy(() => import("./pages/Auth/Login/LoginPage"));
const RegisterPage = lazy(() =>
  import("./pages/Auth/RegisterPage/RegisterPage")
);

// Not Found
const NotFoundPage = lazy(() => import("./layouts/_default/NotFoundPage"));

function App() {
  console.log("App is running in", import.meta.env.VITE_NODE_ENV);

  return (
    <Suspense fallback={<div className="text-center p-8">Loading...</div>}>
      <Cookies />
      <Routes>
        {/* Public Routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/trust-body" element={<TrustbodyPage />} />
          <Route path="/academics" element={<AcademicsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/admission" element={<AdmissionPage />} />
          <Route path="/admission-form" element={<AdmissionFormPage />} />
          <Route path="/alumni" element={<AlumniPage />} />
        </Route>

        {/* Auth Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>

        {/* 404 Route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
