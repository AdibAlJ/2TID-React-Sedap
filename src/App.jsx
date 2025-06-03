import React from "react";
// import Dashboard from "./pages/Dashboard";
// import Orders from './pages/Orders';
// import Customers from './pages/Customers';
// import MainLayout from "./layouts/MainLayout";
// import AuthLayout from "./layouts/AuthLayout";
// import Login from "./pages/Auth/Login";
// import Register from "./pages/Auth/Register";
// import Forgot from "./pages/Auth/Forgot";
// import NotFound from "./pages/NotFound";
import "./assets/tailwind.css";
import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import TestimonialSection from "./components/Guest/OtherMenu";
// import OtherMenu from "./components/Guest/OtherMenu";

const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
const Login = React.lazy(() => import("./pages/Auth/Login"));
const Register = React.lazy(() => import("./pages/Auth/Register"));
const Forgot = React.lazy(() => import("./pages/Auth/Forgot"));
const ErrorPage = React.lazy(() => import("./pages/ErrorPage"));
const Loading = React.lazy(() => import("./components/Loading"));
const UserList = React.lazy(() => import("./components/UserList"));
const GuestLayout = React.lazy(() => import("./layouts/GuestLayout"));
const HomeGuest = React.lazy(() => import("./pages/Guest/HomeGuest"));
const CheckProduct = React.lazy(() => import("./pages/Guest/CheckProduct"));
const AboutPage = React.lazy(() => import("./components/Guest/AboutSection"));
const Products = React.lazy(() => import("./pages/Products"));
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"));
const Notes = React.lazy(() => import("./pages/Notes"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/users" element={<UserList />} />
          <Route path="products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/notes" element={<Notes/>} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

        <Route element={<GuestLayout />}>
          <Route path="/guest" element={<HomeGuest />} />
          <Route path="/guest/check-product" element={<CheckProduct />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/testimonial" element={<TestimonialSection />} />
          {/* <Route path="/product" element={<OtherMenu />} /> */}

        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
