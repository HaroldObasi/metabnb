import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Contact from "./views/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
    return (
        <div className="mx-12">
            <Header />
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Router>
            <Footer />
        </div>
    );
}

export default App;
