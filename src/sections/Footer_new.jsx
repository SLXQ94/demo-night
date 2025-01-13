// import { copyrightSign } from "../assets/icons"
// import { footerLogo } from "../assets/images"
import { footerLinks, socials } from "../constants"

const Footer_new = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img
              src={`${import.meta.env.BASE_URL}/images/trial_visible.png`}
              width={150}
              height={46}
            />
          </a>



          <div className="flex items-center gap-5 mt-1">
            <ul className="flex flex-1 justify-center gap-3 max-md:mt-10 md:justify-end">
              {socials.map(({id, title, icon, url}) => (
                  <li key={id}>
                      <a href={url} target="_blank" className="social-icon">
                          <img 
                              src={icon} 
                              alt={title} 
                              className="size-[40%] object-contain"
                          />
                      </a>
                  </li>
              ))}
          </ul>
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                {section.title}
              </h4>

              <ul>
                {section.links.map((link) => (
                  <li key={link.name} className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer">
                    <a href={link.link} target="_blank">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        
      </div>

      <p className="mt-8">
        
      TrialVest is not a registered broker-dealer, lender, law firm, and/or money transfer service and does not conduct any activity 
      that would require such registration. TrialVest does not provide any kind of legal consultation or legal services. please read 
      this document carefully before you access or use the service. by accessing, registering at the site, and or using TrialVest services 
      you agree to be bound by the terms and conditions set forth below. if you do not wish to be bound by these terms and conditions, 
      please do not access or register for our site and/or engage in any activity conducted by TrialVest. if you violate any of these terms 
      of service (which include by reference TrialVest's privacy policy), or otherwise violate an agreement between you and us, TrialVest 
      may, apart from initiating any legal proceedings, terminate your privileges, delete your profile and any content or information that 
      you have posted on the site and/or prohibit you from using or accessing the service or the site (or any portion, aspect or feature 
      of the service or the site), at any time in its sole discretion, with or without notice. It is stated that 'TrialVest' and 'LLP (created 
      for Special Purpose Vehicle)' are two separate legal entities. The Investors will become limited Partners to the said LLP. LLP provides 
      case management services to its clients. The Investors are requested to read the Risk Disclosure &amp; Consent Agreement, LLP Agreement 
      and Non-Disclosure Agreement thoroughly before making the investment in the listed Opportunities.
          
        </p>

      <div className="flex justify-between text-white-400 mt-8 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">

          <p> © 2024 by TrialVest</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer_new