import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Classes from "../Classes/Classes";
import InstructorsInfo from "../InstructorsInfo/InstructorsInfo";
import SportsInfo from "../SportsInfo/SportsInfo";
import FavoriteSports from "../FavoriteSports/FavoriteSports";
import Contact from "../Contact/Contact";
import Subscribe from "../Subscribe/Subscribe";
import CustomerReview from "../CustomerReview/CustomerReview";
import BestClass from "../BestClass/BestClass";
import TabCategory from "../TabCategory/TabCategory";
import Accordion from "../Accordion/Accordion";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Sports Today | Home</title>
             </Helmet>
            <Banner></Banner>
            <FavoriteSports></FavoriteSports>
            <Classes></Classes>
            <TabCategory></TabCategory>
            <InstructorsInfo></InstructorsInfo>
            <BestClass></BestClass>
            <CustomerReview></CustomerReview>
            <Accordion></Accordion>
            <Contact></Contact>
            <SportsInfo></SportsInfo>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;