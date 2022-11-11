import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Contact from "./views/Contact";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Router>
            <Footer />
        </>
    );
}

export default App;
