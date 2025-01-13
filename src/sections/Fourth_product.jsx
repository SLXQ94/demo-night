import Button from "../components/Button"

const FourthSuperQuality = () => {
  return (
    
    <section
      id="about"
      className="flex justify-between items-center max-lg:flex-col gap-5 w-full max-container"
    >
        
      

      

      <div className="mx-12 flex flex-10 flex-col">
        <h2 className="caption">
            pay only if you win
        </h2>
        <h2 className="font-palanquin text-4xl font-bold lg:max-w-lg">
           Pay us Only if you 
          {/* <span className="text-p3"> Transferring</span><br /> */}
          <span className="text-p3"> win your Litigations</span>. In case you lose,
          pay us nothing
        </h2>

        <p className="mt-4 body-1 mb-10 max-w-md">
        Litigations can be unpredictable and risky. You may face 
        unexpected delays, setbacks, or losses. You may also face 
        adverse costs orders if you lose the case or fail to beat 
        an offer. Litigation Finance can help you eliminate downside 
        risk by providing non-recourse funding. This means that if 
        you lose the case or fail to recover anything, you owe nothing 
        to the funder. This way, you can pursue your claims with 
        confidence and peace of mind.
        </p>

        {/* <p className="mt-6 body-1 mb-10 max-w-md">
          Our dedication to detail and excellence ensures your satisfaction.
        </p> */}

        <div className="mt-11 flex-wrap gap-2.5">
            <Button icon={`${import.meta.env.BASE_URL}/images/clock.svg`} containerClassName="mx-2 my-2">Increase your top line</Button>
            <Button icon={`${import.meta.env.BASE_URL}/images/search.svg`}>pay only if you win</Button>
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

export default FourthSuperQuality