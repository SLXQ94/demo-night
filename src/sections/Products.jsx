import Button from "../components/Button"

const SuperQuality = () => {
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
            reduce legal stress
        </h2>
        <h2 className="font-palanquin text-4xl font-bold lg:max-w-lg">
          Enhance your In-House Legal Team by  
          <span className="text-p3"> Transferring</span><br />
          <span className="text-p3"> the Legal Burden</span> onto us
        </h2>

        <p className="mt-4 body-1 mb-10 max-w-md">
            We do not replace or undermine the role of your in-house legal 
            team. Rather, we empower them with access to external expertise, 
            risk sharing, and cash flow management. Litigation Financing can 
            help your in-house legal team focus on their strategic goals and 
            business activities, rather than spending time and money on 
            litigation.
        </p>

        {/* <p className="mt-6 body-1 mb-10 max-w-md">
          Our dedication to detail and excellence ensures your satisfaction.
        </p> */}

        <div className="mt-11 flex-wrap">
            <Button icon={`${import.meta.env.BASE_URL}/images/clock.svg`} containerClassName="mx-2 my-2">Get real time updates</Button>
            <Button icon={`${import.meta.env.BASE_URL}/images/search.svg`}>Find top lawyers</Button>
        </div>
        
      </div>
    </section>
  )
}

export default SuperQuality