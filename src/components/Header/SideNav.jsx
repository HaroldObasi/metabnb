import { links } from "./constants";

const SideNav = () => {
    return (
        <div className="sideMenu hidden z-20 w-[270px] xl:right-[-270px] h-full purpleGradient fixed top-0 right-0 transition">
            <ul className="mt-7 text-white">
                {links.map((item) => (
                    <li
                        key={item.name}
                        className="mx-2 px-5 py-4 hover:bg-blue-500 rounded-md"
                    >
                        <a className="" href={item.url}>
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SideNav;
