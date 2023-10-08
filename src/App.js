import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Faq from "./components/Faq/faq";

import Contact from "./components/Contact/contact";

import Footer from "./components/footer/footer";
import Form from "./components/Form/form";


function App() {
    return ( 
        < div className = "App" >

        <Navbar/>
        <Intro/>
        <Faq/>
        <Contact/>
        <Form />
        <Footer />
        </div>
    );
}

export default App;