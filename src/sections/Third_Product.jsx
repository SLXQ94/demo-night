import Button from "../components/Button"

const ThirdSuperQuality = () => {
  return (
    
    <section
      id="about"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
        
      

      <div className="flex-1 flex justify-center items-center">
        <img
          src={`${import.meta.env.BASE_URL}/images/rlg_legalpay.png`}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>

      <div className="flex flex-1 flex-col">
      <h2 className="caption">
            increase cash flow
        </h2>
        <h2 className="font-palanquin text-4xl font-bold lg:max-w-lg">
           Improve your Cash Flow 
          {/* <span className="text-p3"> Transferring</span><br /> */}
          <span className="text-p3"> by paying absolutely nothing</span> towards legal expenses
        </h2>

        <p className="mt-4 body-1 mb-10 max-w-md">
        Litigation can be very expensive and time-consuming. It can 
        drain you cash flow and limit your ability to invest in growth 
        opportunities. Litigation Finance can help you free up cash flow 
        by providing upfront capital for your legal disputes. This way, 
        you can use your cash for more productive purposes, such as 
        expanding your market share, launching new products, and acquiring 
        new customers.
        </p>

        {/* <p className="mt-6 body-1 mb-10 max-w-md">
          Our dedication to detail and excellence ensures your satisfaction.
        </p> */}

        <div className="mt-11 flex-wrap">
            <Button icon={`${import.meta.env.BASE_URL}/images/clock.svg`} containerClassName="mx-2 my-2">Transfer risk to 3rd party</Button>
            <Button icon={`${import.meta.env.BASE_URL}/images/search.svg`}>Focus on main business</Button>
        </div>
        
      </div>
    </section>
  )
}

export default ThirdSuperQuality