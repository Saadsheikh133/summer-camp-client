import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Classes from "../Classes/Classes";
import InstructorsInfo from "../InstructorsInfo/InstructorsInfo";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Sports Today | Home</title>
            </Helmet>
            <Banner></Banner>
            <Classes></Classes>
            <InstructorsInfo></InstructorsInfo>
        </div>
    );
};

export default Home;