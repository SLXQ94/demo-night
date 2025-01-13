import Button from "../components/Button"

const SecondSuperQuality = () => {
  return (
    
    <section
      id="about"
      className="flex justify-between items-center max-lg:flex-col gap-5 w-full max-container"
    >
        
      

      

      <div className="mx-12 flex flex-10 flex-col">
      <h2 className="caption">
            manage litigation risk
        </h2>
        <h2 className="font-palanquin text-4xl font-bold lg:max-w-lg">
          Monitor, Analyse and Report on  
          {/* <span className="text-p3"> Transferring</span><br /> */}
          <span className="text-p3"> Litigation Risk</span> across your Cases
        </h2>

        <p className="mt-4 body-1 mb-10 max-w-md">
            Discover a comprehensive solution for assessing and visualizing 
            risk in litigation, empowering you to make informed decisions in 
            real-time. Monitor case progress with performance indicators and 
            effortlessly manage litigation at scale. Leverage data-driven 
            insights to continuously enhance performance and analyze disputes 
            with confidence. Elevate your legal practice with our platform and 
            experience a new era of strategic excellence.
        </p>

        {/* <p className="mt-6 body-1 mb-10 max-w-md">
          Our dedication to detail and excellence ensures your satisfaction.
        </p> */}

        <div className="mt-11 flex-wrap gap-2.5">
            <Button icon={`${import.meta.env.BASE_URL}/images/clock.svg`} containerClassName="mx-2 my-2">Assess & analyse risk</Button>
            <Button icon={`${import.meta.env.BASE_URL}/images/search.svg`}>Check win probability</Button>
        </div>
        
      </div>

      <div className="flex-1 flex justify-center items-start">
        <img
          src={`${import.meta.env.BASE_URL}/images/legalpay_2.png`}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  )
}

export default SecondSuperQuality