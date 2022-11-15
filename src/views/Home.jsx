import Searchbar from "../components/Searchbar";
import Banner from "../components/Banner";
import HomeListing from "../components/HomeListing";
import threeWay from "../assets/images/3way.png";
import Modal from "../components/Modal";
import fourboxes from "../assets/images/fourboxes.png";

const Home = () => {
    return (
        <div>
            <div className="flex justify-center ">
                <Modal />
            </div>
            <main className="mx-6 md:mx-12 flex flex-col xl:flex-row">
                <div className="basis-1/2 space-y-1 md:space-y-5 mb-10">
                    <div className="text-4xl xl:text-[56px] xl:leading-[5rem]">
                        Rent a <span className="text-[#a02279]">Place</span>{" "}
                        away from <span className="text-[#a02279]">Home</span>{" "}
                        in the <span className="text-[#a02279]">Metaverse</span>
                    </div>
                    <div className="text-xl xl:text-[24px] md:w-3/4 xl:w-full">
                        we provide you access to luxury and affordable houses in
                        the metaverse, get a chance to turn your imagination to
                        reality at your comfort zone
                        <Searchbar />
                    </div>
                </div>
                <img src={fourboxes} alt="" />
            </main>
            <Banner />
            <HomeListing />
            <div className="px-6 py-8 md:py-16 md:px-12 space-y-16 xl:space-y-0 purpleGradient flex flex-col xl:flex-row">
                <div className="flex flex-col justify-center space-y-5 xl:space-y-16 basis-1/2">
                    <div className="text-4xl xl:text-[56px] text-white">
                        Metabnb NFTs
                    </div>
                    <div className="text-md xl:text-lg md:w-3/4 xl:w-full text-white">
                        Discover our NFT gift cards collection. Loyal customers
                        gets amazing gift cards which are traded as NFTs. These
                        NFTs gives our cutomer access to loads of our exclusive
                        services.
                    </div>
                    <button className="bg-white rounded-md py-4 px-4 text-[#a02279] w-[156px]">
                        Learn more
                    </button>
                </div>
                <img
                    src={threeWay}
                    className="w-[300px] md:w-[400px] lg:w-full basis-1/2 self-center"
                    alt="3 images"
                />
            </div>
        </div>
    );
};

export default Home;
