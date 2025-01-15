import Contact from "./sections/Contact";
import Download from "./sections/Download";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import Videos from "./sections/Videos";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route
          path={import.meta.env.BASE_URL}
          element={<main className="overflow-hidden select-none" onContextMenu={(e) => e.preventDefault()}>
            <Header/>
            <Hero/>
            <Features/>
            <Pricing/>
            
            <section className="padding">
              <SuperQuality/>
            </section>
            {/* <section className="padding">
              <SecondSuperQuality/>
            </section> */}
            
            <section className="padding">
              <FourthSuperQuality/>
            </section>
            <section className="padding">
              <ThirdSuperQuality/>
            </section>
            
            
            {/* <Download/> */}
            {/* <Testimonials/> */}
            {/* <Videos/> */}
            <Faq/>
            <Contact/>
            <section className="padding-x padding-t bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-black-500 to-black relative pt-12 max-lg:pb-24 max-md:py-8">
              <Footer_new/>
            </section>
            {/* <Footer/> */}
          </main>}
        />

        {/* Privacy Policy Page */}
        <Route
          path={`${import.meta.env.BASE_URL}/privacy-policy`}
          element={
            <PrivacyPolicy/>
          }
        />

        {/* Terms and Conditions Page */}
        <Route
          path={`${import.meta.env.BASE_URL}/terms-and-conditions`}
          element={
            <TermsConditions/>
          }
        />
      </Routes>
    </Router>
  )
}

export default App