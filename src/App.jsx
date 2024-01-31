import './app.scss'
import Navbar from "./components/navbar/Navbar.jsx";
import Text from "./Text.jsx";
import Hero from "./components/hero/Hero.jsx";
import Parallax from "./components/parallax/Parallax.jsx";
import Services from "./components/services/Services.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Contact from "./components/contact/Contact.jsx";
import About from "./components/about/About.jsx";

const App = () => {
  return <div>
    <section id={'HomePage'}>
      <Navbar/>
      <Hero/>
    </section>
    <section id={'Services'}><Parallax type={'services'}/></section>
    <section><Services/></section>
    <section id={'Portfolio'}><Parallax type={'portofolio'}/></section>
    <Portfolio/>
    {/*<section id={'About'}><About/></section>*/}
    {/*<section id={'Contact'}><Contact/></section>*/}
    {/*<Text/>*/}
  </div>;
};

export default App;
