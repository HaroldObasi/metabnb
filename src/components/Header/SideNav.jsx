import { links } from "./constants";

const SideNav = () => {
    const handleConnectWallet = () => {
        const modal = document.getElementsByClassName("coinModal")[0];
        const invisibleBackground =
            document.getElementsByClassName("invisibleBack")[0];
        invisibleBackground.classList.remove("hidden");
        modal.classList.remove("hidden");
    };
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
                <button
                    className="rounded-md py-4 px-4 mx-6 bg-white text-[#a02279]"
                    onClick={handleConnectWallet}
                >
                    Connect Wallet
                </button>
            </ul>
        </div>
    );
};

export default SideNav;
