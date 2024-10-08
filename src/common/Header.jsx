    import React, { useEffect, useState } from 'react';
    import pometryLogo from "../assets/image/webp/pometry-logo.webp";
    import { NAV_ITEMS_DATA } from './Helper';
    import CommonButton from './CommonButton';

    const Header = () => {
        const [show, setShow] = useState(true);
        useEffect(() => {
            const handleResize = () => {
                if (window.innerWidth < 768) {
                    document.body.style.overflow = show ? "" : "hidden";
                } else {
                    document.body.style.overflow = "";
                    setShow(true);
                }
            };
            handleResize();
            window.addEventListener("resize", handleResize);
            return () => {
                window.removeEventListener("resize", handleResize);
                document.body.style.overflow = "";
            };
        }, [show]);
        const handleClick = (e, id) => {
            e.preventDefault();
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
                const newUrl = `/${id}`;
                window.history.pushState({ path: newUrl }, '', newUrl);
            }
            if (window.innerWidth < 768) {
                setShow(!show);
            }
        };
        return (
            <div className='pb-[23px] pt-2'>
                <div className="container">
                    <nav className='flex items-center justify-between'>
                        <a href="/" className='max-w-[157px] flex'><img src={pometryLogo} alt="pometryLogo" className='w-full' /></a>
                        <div className={`flex md:flex-row duration-300 justify-center ease-linear bg-white z-50 flex-col items-center gap-4 lg:gap-8 absolute top-0 -right-full w-full min-h-screen md:w-fit md:bg-transparent md:relative md:min-h-fit md:right-auto md:top-auto ${show ? "" : " !right-0"}`}>
                            {NAV_ITEMS_DATA.map((items, index) => (
                                <a key={index} href={`/${items.url}`} onClick={(e) => handleClick(e, items.url.substring(1))} className='font-normal text-lg md:text-base text-offBlack opacity-90 duration-300 ease-linear hover:bg-darkRed-gradient hover:text-transparent hover:bg-clip-text after:[] after:absolute after:bg-darkRed-gradient after:h-px after:w-0 after:right-0 after:bottom-0 after:rounded after:duration-300 after:ease-linear hover:after:w-full hover:after:right-auto hover:after:left-0 relative'>{items.text}</a>
                            ))}
                            <CommonButton text="Start Building" className="border-darkRed text-darkRed hover:text-white md:hidden hover:border-transparent hover:shadow-darkRed" hoverClass="bg-darkRed-gradient" />
                        </div>
                        <CommonButton text="Start Building" className="border-darkRed text-darkRed hover:text-white md:block hidden hover:border-transparent hover:shadow-darkRed" hoverClass="bg-darkRed-gradient" />
                        <button
                            aria-label="Toggle Navigation Menu"
                            className={`cursor-pointer relative z-[90] md:hidden ${show ? "" : "cross"}`}
                            onClick={() => setShow(!show)}>
                            <span className="w-8 h-[3px] rounded-xl bg-offBlack block duration-300 ease-linear"></span>
                            <span className="w-8 h-[3px] rounded-xl bg-offBlack block duration-300 ease-linear my-[7px]"></span>
                            <span className="w-8 h-[3px] rounded-xl bg-offBlack block duration-300 ease-linear"></span>
                        </button>
                    </nav>
                </div>
            </div>
        );
    };

    export default Header;