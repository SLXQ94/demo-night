import clsx from "clsx";
import { useEffect } from "react";
import { useState } from "react";
import { Link as LinkScroll } from "react-scroll";

const Header = () => {
    const [hasScrolled, setHasScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 32);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const NavLink = ({title}) => (
        <LinkScroll
            onClick={() => setIsOpen(false)}
            to={title}
            offset={-100}
            spy
            smooth
            activeClass="nav-active"
            className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5"
        >
            {title}
        </LinkScroll>
    )

  return (
    <header className={clsx(
        "fixed top-0 left-0 z-50 w-full py-10 transition-all duration-500 max-lg:py-4",
        hasScrolled && "py-2 backdrop-blur-[8px] max-lg:bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white-500 to-black"
        )}>
        <div className="container flex h-14 items-center max-lg:px-5">
            <a href="/" className={`lg:hidden ${hasScrolled ? '' : 'rounded-xl bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-white-500 to-black'} flex-1 cursor-pointer z-2 mt-12`}>
                <img src={`${import.meta.env.BASE_URL}/images/trial_not_visible.png`} alt="logo" width={115} height={55} />
            </a>

            <div className={
                clsx("w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0", isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none")
            }>
                <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
                    <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
                        <ul className="flex max-lg:block max-lg:px-12">
                            <li className="nav-li">
                                <NavLink title="services"/>
                                {/* <div className="dot"/> */}
                                <NavLink title="about"/>
                            </li>

                            <li className="nav-logo">
                                <LinkScroll
                                    to="hero"
                                    offset={-250}
                                    spy
                                    smooth
                                    className={clsx("max-lg:hidden mt-4 transition-transform duration-500 cursor-pointer")}
                                >
                                    {/* {`/images/trial${hasScrolled ? '_not' : ''}_visible.png`} */}
                                    <img src={`${import.meta.env.BASE_URL}/images/trial_not_visible.png`} alt="logo" width={160} height={55} />
                                </LinkScroll>
                            </li>

                            <li className="nav-li">
                                <NavLink title="faq"/>
                                {/* <div className="dot"/> */}
                                <NavLink title="contact, +91 81785 07328"/>
                            </li>
                        </ul>
                    </nav>

                    <div className="lg:hidden block absolute top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90">
                        <img
                            src={`${import.meta.env.BASE_URL}/images/bg-outlines.svg`}
                            width={960}
                            height={380}
                            alt="outline"
                            className="relative z-2"
                        />

                        <img
                            src={`${import.meta.env.BASE_URL}/images/bg-outlines-fill.png`}
                            width={960}
                            height={380}
                            alt="outline"
                            className="absolute inset-0 mix-blend-soft-light opacity-5"
                        />
                    </div>
                </div>
            </div>

            <button 
                className="lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center"
                onClick={() => setIsOpen((prevState) => !prevState)}
            >
                <img 
                    src={`${import.meta.env.BASE_URL}/images/${isOpen ? "new-cross" : "law-auction"}.svg`} 
                    alt="hamburger" 
                    className="object-contain"
                />
            </button>
        </div>
    </header>
  )
}

export default Header