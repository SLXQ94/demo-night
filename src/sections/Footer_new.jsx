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
              src={`${import.meta.env.BASE_URL}/images/trial_not_visible.png`}
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
        
      TrialVest is not a registered broker-dealer, lender, law firm, 
      or money transfer service and does not provide legal consultation 
      or services. By accessing or using TrialVest’s services, you agree 
      to be bound by the terms and conditions below. If you do not agree, 
      do not use the site or services. TrialVest reserves the right to 
      terminate your access, delete your profile, and remove content at 
      its sole discretion if you breach these terms or any agreements 
      with TrialVest.'TrialVest' and 'LLP (Special Purpose Vehicle)' are 
      separate entities. Investors will become limited partners in the 
      LLP, which provides case management services. Investors must read 
      and understand the Risk Disclosure & Consent Agreement, LLP 
      Agreement, and Non-Disclosure Agreement before making any investments.

          
        </p>

      <div className="flex justify-between text-white-400 mt-8 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">

          <p> © 2025 by VKG Asset Private Limited</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer_new