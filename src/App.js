/* App, Zeinelabdin Salih, ID:301446462, 02/02/2024 */


import Navbar from "./components/NavBar/navbar";
import Home from "./components/Home/home ";
import Intro from './components/Intro/intro';
import Services from "./components/Services/services";
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";


function App() {
    return (
        <div className="App">
            <Navbar />
            <Home />
            <Intro />
            <Services />
            <Works />
            <Contact />
             
        </div>
    );
}
export default App;
