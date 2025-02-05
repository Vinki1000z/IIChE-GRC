import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
// import Events from './components/Events';
// import IndustrialVisit from './components/events/IndustrialVisit';
// import EducationalVisit from './components/events/EducationalVisit';
// import InvitedTalk from './components/events/InvitedTalk';
// import Workshops from './components/events/Workshops';
// import OtherEvents from './components/events/OtherEvents';
// import Committee from './components/Committee';
// import StudentsChapter from './components/committee/StudentsChapter';
// import Members from './components/committee/Members';
// import Gallery from './components/Gallery';
// import Notice from './components/Notice';
// import NewsLetters from './components/NewsLetters';
// import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/events" element={<Events />} />
          <Route path="/events/industrial-visit" element={<IndustrialVisit />} />
          <Route path="/events/educational-visit" element={<EducationalVisit />} />
          <Route path="/events/invited-talk" element={<InvitedTalk />} />
          <Route path="/events/workshops" element={<Workshops />} />
          <Route path="/events/other-events" element={<OtherEvents />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="/committee/students-chapter" element={<StudentsChapter />} />
          <Route path="/committee/members" element={<Members />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/newsletters" element={<NewsLetters />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
