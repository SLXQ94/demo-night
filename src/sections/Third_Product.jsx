import Button from "../components/Button"

const ThirdSuperQuality = () => {
  return (
    
    <section
      id="about"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
        
      

      <div className="flex-1 flex justify-center items-center">
        <img
          src={`${import.meta.env.BASE_URL}/images/dashboard-1.jpg`}
          alt="dashboard"
          width={570}
          height={522}
          className="object-contain rounded-xl"
        />
      </div>

      <div className="flex flex-1 flex-col">
      <h2 className="caption">
            increase cash flow
        </h2>
        <h2 className="font-palanquin text-4xl font-bold lg:max-w-lg">
           Improve your Cash Flow 
          {/* <span className="text-p3"> Transferring</span><br /> */}
          <span className="text-p3"> without paying a rupee</span> in legal expenses
        </h2>

        <p className="mt-4 body-1 mb-10 max-w-md">
        Legal battles can drain your cash reserves, leaving you with less capital to invest in growth opportunities. TrialVest eliminates this burden by covering all legal expenses upfront, ensuring you pursue justice without financial strain. By unlocking the capital tied up in unresolved disputes, we empower you to reinvest in your business and drive its expansion. Let us handle the legal costs while you focus on utilizing your resources where they matter most.
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