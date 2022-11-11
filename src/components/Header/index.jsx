import logo from "../../assets/logo.svg";
import menu from "../../assets/icons/list.svg";
import { links } from "./constants";
import SideNav from "./SideNav";

const index = () => {
    const open = () => {
        const sideMenu = document.getElementsByClassName("sideMenu")[0];
        const invisibleBackground =
            document.getElementsByClassName("invisibleBack")[0];
        sideMenu.classList.remove("hidden");
        invisibleBackground.classList.remove("hidden");
    };

    const close = () => {
        const sideMenu = document.getElementsByClassName("sideMenu")[0];
        const invisibleBackground =
            document.getElementsByClassName("invisibleBack")[0];
        sideMenu.classList.add("hidden");
        invisibleBackground.classList.add("hidden");
    };

    return (
        <header className="font-RedRose flex items-center py-10 justify-between">
            <img src={logo} alt="" />
            <nav className="hidden xl:flex">
                <ul className="list-none space-x-8">
                    {links.map((item) => (
                        <li className="inline-block px-4 text-xl">
                            <a href={item.url}>{item.name}</a>
                        </li>
                    ))}
                </ul>
            </nav>
            <img
                alt="burger menu"
                onClick={open}
                src={menu}
                className="bi bi-list text-2xl cursor-pointer xl:hidden transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
            />
            <SideNav />

            <button className="hidden xl:flex rounded-md py-4 px-4 purpleGradient text-white">
                Connect Wallet
            </button>
            <div
                onClick={close}
                className="invisibleBack md:hidden z-10 h-full hidden w-full fixed top-0 left-0"
            ></div>
        </header>
    );
};

export default index;
