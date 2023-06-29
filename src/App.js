import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import Navbar from "./Components/Navbar";
import LogIn from "./Components/LogIn";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Courses from "./Components/Courses";
import ProtectedRoute from "./ProtectedRoute";
import About from "./Components/About";
import Getadmission from "./Components/Getadmission";
import React, { createContext, useContext } from "react";

export const MyContext = createContext();

function App() {
  let courses = [
    {
      img: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/b0/73c42fb4f443b0a802d5bed01add87/1325192.jpg?auto=format%2Ccompress&dpr=1&w=330&h=330&fit=fill&q=25",
      type: "Programing",
      cost: "FREE",
      coursename: "Data Science Foundations:Data Structures and Algorithms",
      rating: "4.7",
      time: "110 Hours",
      link: "view course",
    },
    {
      img: "https://cdn.educba.com/academy/wp-content/uploads/2019/09/Principles-of-Project-Management.jpg",
      type: "BUSINESS",
      cost: "FREE",
      coursename: "Project Management Principles and Practices",
      rating: "4.7",
      time: "99 Hours",
      link: "view course",
    },
    {
      img: "https://collab.templatekit.co/wp-content/uploads/sites/44/2022/04/web-developer-busy-working-2021-09-24-04-02-47-utc-800x534.jpg ",
      type: "Programing",
      cost: "$20.99",
      coursename: "Java Programming: Principles  of Software Design",
      rating: "4.7",
      time: "120 Hours",
      link: "view course",
    },
    {
      img: "https://collab.templatekit.co/wp-content/uploads/sites/44/2022/04/paper-stickers-with-words-idea-and-business-plan-2021-10-14-21-24-05-utc-800x533.jpg",
      type: "MARKETING",
      cost: "$19.99",
      coursename: "Marketing Channel Strategy & B2B2C Routes to Market",
      rating: "3.9 ",
      time: "120 Hours",
      link: "view course",
    },
  ];

  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={courses}>
          <Navbar />
          <Routes>
            <Route path="/LogIn" element={<LogIn />} />
            <Route path="/" element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="/Getadmission" element={<Getadmission />} />
            <Route
              path="/courses"
              element={
                <ProtectedRoute>
                  <Courses />
                </ProtectedRoute>
              }
            ></Route>
          </Routes>
        </MyContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
