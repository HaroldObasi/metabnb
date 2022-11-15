import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Places from "./views/Places";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
    return (
        <div className="font-RedRose ">
            <Header />
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/places" element={<Places />} />
                </Routes>
            </Router>
            <Footer />
        </div>
    );
}

export default App;
