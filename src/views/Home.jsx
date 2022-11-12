import Searchbar from "../components/Searchbar";
import Fourboxes from "../components/Fourboxes";

const Home = () => {
    return (
        <main className="flex flex-col xl:flex-row">
            <div className="basis-1/2 space-y-1 md:space-y-5 mb-10">
                <div className="text-4xl xl:text-[56px]">
                    Rent a <span className="text-[#a02279]">Place</span> away
                    from <span className="text-[#a02279]">Home</span> in the{" "}
                    <span className="text-[#a02279]">Metaverse</span>
                </div>
                <div className="text-xl xl:text-[24px] md:w-3/4 xl:w-full">
                    we provide you access to luxury and affordable houses in the
                    metaverse, get a chance to turn your imagination to reality
                    at your comfort zone
                    <Searchbar />
                </div>
            </div>
            <Fourboxes />
        </main>
    );
};

export default Home;
