import { Element, Link as LinkScroll } from "react-scroll"
import Button from "../components/Button"

const Hero = () => {
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
        <Element name="hero">
            <div className="container">
                <div className="relative z-2 max-w-512 max-lg:max-w-388">
                    <div className="caption small-2 uppercase text-p3">
                        Your partner in justice
                    </div>

                    <h1 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
                        TrialVEst
                    </h1>

                    <p className="max-w-440 mb-14 body-1 max-md:mb-10">
                        
                        Payments you deserve, recover them now!
                    </p>

                    <LinkScroll to="features" offset={-100} spy smooth>
                        <Button>Start Recovering Now</Button>
                    </LinkScroll>
                </div>

                <div className="absolute -top-32 max-lg:left-[calc(50%-150px)] left-[calc(50%-200px)] w-[1230px] pointer-events-none hero-img_res">
                    <img
                        src={`${import.meta.env.BASE_URL}/images/hero-image.png`}
                        className="size-[1000px] max-lg:h-auto"
                        alt="hero"
                    />
                </div>
            </div>
        </Element>
    </section>
  )
}

export default Hero