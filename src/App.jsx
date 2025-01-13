import Contact from "./sections/Contact";
import Download from "./sections/Download";
import Faq from "./sections/Faq";
import Features from "./sections/Features";
import Footer_new from "./sections/Footer_new";
import FourthSuperQuality from "./sections/Fourth_product";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Pricing from "./sections/Pricing";
import SuperQuality from "./sections/Products";
import SecondSuperQuality from "./sections/Sec_Product";
import Testimonials from "./sections/Testimonials";
import ThirdSuperQuality from "./sections/Third_Product";

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header/>
      <Hero/>
      <Features/>
      <Pricing/>
      
      <section className="padding">
        <SuperQuality/>
      </section>
      <section className="padding">
        <SecondSuperQuality/>
      </section>
      <section className="padding">
        <ThirdSuperQuality/>
      </section>
      <section className="padding">
        <FourthSuperQuality/>
      </section>
      
      
      <Download/>
      <Testimonials/>
      <Faq/>
      <Contact/>
      <section className="padding-x padding-t g7 relative pt-12 max-lg:pb-24 max-md:py-8">
        <Footer_new/>
      </section>
      {/* <Footer/> */}
    </main>
  )
}

export default App