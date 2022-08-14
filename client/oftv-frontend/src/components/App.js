import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import MainVideoCarousel from "./MainVideoCarousel";
import SubVideoCarousel from "./SubVideoCarousel";
import AddVideo from "./AddVideo";
import DeleteVideo from "./DeleteVideo";
import UpdateVideo from "./UpdateVideo";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <MainVideoCarousel />
                <SubVideoCarousel carouselNumber={1} />
                <SubVideoCarousel carouselNumber={2} />
                <SubVideoCarousel carouselNumber={3} />
              </>
            }
          />
          <Route
            path="/addVideo"
            element={
              <>
                <AddVideo />
                <UpdateVideo />
                <DeleteVideo />
              </>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
