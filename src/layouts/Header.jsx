import React from 'react';


const navMenuData = [
    {
        title: "Home",
        link: "#",
    },
    {
        title: "Company",
        link: "#",
    },
    {
        title: "About",
        link: "#",
    },
    {
        title: "Pricing",
        link: "#",
    },
    {
        title: "Team",
        link: "#",
    },
    {
        title: "Contact",
        link: "#",
    },
    {
        title: "Blog",
        link: "#",
    },
];
const Header = () => {
    return (
<header className="h-[100px] ">
<div className="wrapper flex justify-between h-full items-center">
    <a href='#' title='logo' className="mr-10">
        <img srcSet="/logo.png 1.5x" alt="logo" />
    </a>
    <div className="flex items-center gap-x-[30px]"> 
        <ul className="flex items-center gap-x-[50px]">
            {navMenuData.map((item) =>(
                <li key={item.title}>
                    <a href={item.link} className="text-[24px]">{item.title}</a>
                </li>
            ))}
        </ul>
        <button className="rounded-full flex items-center gap-x-3 px-8 py-3 bg-bodyColor border-2 border-orangeColor hover:text-orangeColor transition duration-300 ml-auto" >Trade Now</button>
    </div>
   </div>
</header>
    );
};

export default Header;
