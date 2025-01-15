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
          <span className="text-p3"> win your Litigation</span>. If you lose,
          you owe us nothing
        </h2>

        <p className="mt-4 body-1 mb-10 max-w-md">
        Imagine being able to fight your legal battles without worrying about losing money if the outcome doesn’t favor you. With Trial Vest’s Litigation Finance, you eliminate the downside risk through non-recourse funding. This means that if you lose the case or fail to recover anything, you owe us absolutely nothing. It’s a risk-free way to pursue your claims, giving you the confidence and peace of mind to focus on what truly matters—achieving justice and securing your rightful dues.
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
          src={`${import.meta.env.BASE_URL}/images/workflow.jpg`}
          alt="dashboard"
          width={570}
          height={522}
          className="rounded-xl h-[400px] w-[700px]"
        />
      </div>
    </section>
  )
}

export default FourthSuperQuality