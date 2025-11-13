import React, { useState, useEffect } from "react";

const Navbar = () => {
    const [active, setActive] = useState("home");
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            let scrollPos = window.scrollY + window.innerHeight / 2;
            sections.forEach((sec) => {
                if (
                    scrollPos >= sec.offsetTop &&
                    scrollPos < sec.offsetTop + sec.offsetHeight
                ) {
                    setActive(sec.id);
                }
            });
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { id: "hero", linkName: "hero" },
        { id: "about", linkName: "about" },
        { id: "products", linkName: "products" },
        { id: "highlights", linkName: "highlights" },
        { id: "contact", linkName: "contact" },
    ];

    return (
        <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 z-[999] bg-gradient-to-t from-black/90 to-black/80 backdrop-blur-custom  border-dashed px-2 pt-8 pb-2 xl:px-6 xl:pt-16 xl:pb-5 w-full after:absolute after:content-[''] after:w-full after:border-t-[17px] after:border-military-green after:-top-2 after:border-dashed after:left-0 tracking-widest select-none">
            <div className="w-full h-full relative">
                {/* logo */}
                <div className="absolute -top-[100px] xl:-top-[154px] left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
                    <img className="size-20 xl:size-28" src="https://img.icons8.com/?size=100&id=DwQljUGqOi7K&format=png&color=000000" alt="logo" />
                    <div className="font-bold uppercase text-military-orange tracking-widest text-sm xl:text-base">&#91; <span className="text-military-green">VyomGarud</span> &#93;</div>
                </div>
                <div className="flex justify-center items-center xl:hidden">
                    {/* menu button */}
                    <button
                        className="xl:hidden text-white hover:text-military-orange transition-all duration-300 mt-2"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Menu toggle button"
                    >
                        {menuOpen ? (
                            <img className="size-7" src="https://img.icons8.com/?size=100&id=8112&format=png&color=ff7b00" alt="menu close button" />
                        ) : (
                            <img className="size-7" src="https://img.icons8.com/?size=100&id=Y9aaMCohZ2Md&format=png&color=ff7b00" alt="menu open button"/>
                        )}
                    </button>
                </div>
                {/* menu */}
                <div
                    className={`fixed bottom-0 left-0 w-full bg-military-green backdrop-blur-md border-t-8 border-military-green border-dashed  z-40 transform transition-transform duration-500 ease-in-out ${menuOpen ? "-translate-y-[76px]" : "translate-y-full"
                        } xl:hidden`}
                >
                    <div className="flex flex-col items-center justify-center py-3 space-y-2 text-sm">
                        {navItems.map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                className={`transition-all duration-300 font-semibold ${active === item.id ? "border-military-orange text-white" : "text-black hover:text-military-orange border-transparent "} p-2 border-8 border-dashed uppercase`}
                            >
                                {item.linkName}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="hidden items-center justify-center text-lg space-x-20 xl:flex">
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className={`transition-all duration-300 font-semibold ${active === item.id ? "border-military-orange text-white" : "text-military-charcoal hover:text-military-orange border-transparent "} p-3 border-8 border-dashed uppercase`}
                        >
                            {item.linkName}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
