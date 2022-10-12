import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import AboutUs from "./AboutUs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./components/Blog";
import ContactUs from "./components/ContactUs";
import Getapp from "./components/Getapp";
// import { Link } from "react-router-dom";
import Merchantform from "./components/Merchantform";
import Login from "./Login";
import TC from "./components/TC";
import Privacypolicy from "./components/Privacypolicy";
import Training from "./components/Training";
import UserDashboard from "./components/login/UserDashboard";
import Registeration from "./components/login/Registeration";
import Otpver from "./components/login/Otpver";
import Password from "./components/login/Password";
import Joinas from "./components/login/Joinas";
import AfterJoin from "./components/login/AfterJoin";
// import playStoreIcon from "./images/playStoreIcon.png";

function App() {
    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route
                        path="/home"
                        element={[<Header />, <Home />, <Footer />]}
                    />
                    <Route
                        path="/getapp"
                        element={[<Header />, <Getapp />, <Footer />]}
                    />
                    <Route
                        path="/aboutUs"
                        element={[<Header />, <AboutUs />, <Footer />]}
                    />
                    <Route
                        path="/blog"
                        element={[<Header />, <Blog />, <Footer />]}
                    />
                    {/* <Route
                        path="/training"
                        element={[<Header />, <Training />, <Footer />]}
                    /> */}
                    <Route
                        path="/contactus"
                        element={[<Header />, <ContactUs />, <Footer />]}
                    />

                    <Route
                        path="/"
                        element={[<Header />, <Home />, <Footer />]}
                    />

                    <Route
                        path="/merchantform"
                        element={[<Header />, <Merchantform />, <Footer />]}
                    />
                    <Route
                        path="/registeration"
                        element={[<Header />, <Registeration />, <Footer />]}
                    />
                    <Route
                        path="/userlogin"
                        element={[<Header />, <Login />, <Footer />]}
                    />

                    <Route
                        path="/terms&conditions"
                        element={[<Header />, <TC />, <Footer />]}
                    />
                    <Route
                        path="/privacypolicy"
                        element={[<Header />, <Privacypolicy />, <Footer />]}
                    />

                    <Route path="/userdashboard" element={<UserDashboard />} />
                    <Route
                        path="/otpver"
                        element={[<Header />, <Otpver />, <Footer />]}
                    />
                    <Route
                        path="/createpass"
                        element={[<Header />, <Password />, <Footer />]}
                    />
                    <Route path="/joinas" element={<Joinas />} />
                    <Route path="/afterjoin" element={<AfterJoin />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
