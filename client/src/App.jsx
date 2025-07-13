import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PracticeQuestions from "./pages/PracticeQuestions";
import ImportantTopics from "./pages/ImportantTopics";
import Notes from "./pages/Notes";
import StudyPlan from "./pages/StudyPlan";
import Reviews from "./pages/Reviews";
import Auth from "./pages/Auth";
import Footer from "./components/Footer";

function App() {
  return (
   <Router>
    <div className=" "></div>
    <Navbar />
    <Routes>
      <Route path="//CampusCrack" element={<Home />} />
      <Route path="/practice-questions" element={<PracticeQuestions />} />
      <Route path="/important-topics" element={<ImportantTopics />} />
      <Route path="/notes" element={<Notes />} />
      <Route path="/study-plan" element={<StudyPlan />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
    <Footer/>
  </Router>
   
    
 //      <Router>
 //     <div className="min-h-screen bg-gray-100">
 //       <Navbar />
 //       <Routes>
 //         <Route path="/" element={<Home />} />
 //         <Route path="/practice-questions" element={<PracticeQuestions />} />
 //         <Route path="/important-topics" element={<ImportantTopics />} />
 //         <Route path="/notes" element={<Notes />} />
 //         <Route path="/study-plan" element={<StudyPlan />} />
 //         <Route path="/reviews" element={<Reviews />} />
 //         <Route path="/login" element={<Login />} />
 //         <Route path="/register" element={<Register />} />
 //       </Routes>
 //     </div>
 //   </Router>
  );
}

export default App;