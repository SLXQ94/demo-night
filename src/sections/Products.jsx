import Button from "../components/Button"

const SuperQuality = () => {
  return (
    
    <section
      id="about"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
        
      

      <div className="flex-1 flex justify-center items-center">
        <img
          src={`${import.meta.env.BASE_URL}/images/dashboard-main.jpg`}
          alt="dashboard"
          width={570}
          height={600}
          className="z-20 h-[600px] w-[650px] rounded-xl"
        />
      </div>

      <div className="flex flex-1 flex-col">
      <h2 className="caption">
            reduce legal stress
        </h2>
        <h2 className="font-palanquin text-4xl font-bold lg:max-w-lg">
        Empowering Your Business by Acting as   
          {/* <span className="text-p3"> Transferring</span><br /> */}
          <span className="text-p3"> Your In-House Legal Team </span> and Shouldering Your Legal Challenges Entirely
        </h2>

        <p className="mt-4 body-1 mb-10 max-w-md">
        For MSMEs and even large businesses, maintaining an in-house legal team can be a significant challenge due to the lack of expertise, knowledge, and financial resources. Dealing with lawyers on a personal level adds to the complexity and consumes valuable time. Trial Vest bridges this gap by acting as your extended or in-house legal team, shouldering your legal burdens and providing expert support tailored to your needs
        </p>

        <p className="mt-6 body-1 mb-10 max-w-md">
        Our services ensure that MSMEs can access professional legal help without the need for a dedicated internal team. For mid-sized and large businesses, we complement your existing in-house legal teams, offering additional expertise and resources to handle cases effectively.
        </p>

        <div className="mt-11 flex-wrap">
            <Button icon={`${import.meta.env.BASE_URL}/images/clock.svg`} containerClassName="mx-2 my-2">Get real time updates</Button>
            <Button icon={`${import.meta.env.BASE_URL}/images/search.svg`}>Find top lawyers</Button>
        </div>
        
      </div>
    </section>
  )
}

export default SuperQuality