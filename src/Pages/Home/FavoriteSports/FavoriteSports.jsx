import { Slide } from "react-awesome-reveal";
import banner from '../../../assets/images/bannar.jpg'


const FavoriteSports = () => {
    return (
        <Slide className="my-20">
            <h2 className="text-5xl text-center font-bold my-20">My Favorite Sports</h2>
            <div className="lg:flex gap-8">
                <img className="rounded-xl h-[600px] lg:ml-8 object-cover" src={banner} alt="" />
                <div className="lg:w-1/2 mx-4">
                    <h4 className="text-3xl text-center font-semibold mb-4">Badminton History</h4>
                    <p className="text-xl lg:leading-loose">The beginnings of badminton can be traced to the mid-1800s, where it was created by British military officers stationed in British India. Originally called (battledore) rather than badminton, its use of a shuttlecock, rather than a ball, has remained constant over the years.</p>
                    <p className="text-xl lg:leading-loose">Badminton is a racquet sport played using racquets to hit a shuttlecock across a net. Although it may be played with larger teams, the most common forms of the game are singles (with one player per side) and doubles (with two players per side). Badminton is often played as a casual outdoor activity in a yard or on a beach; formal games are played on a rectangular indoor court. Points are scored by striking the shuttlecock with the racquet and landing it within the other teams half of the court.</p>
                </div>
            </div>
        </Slide>
    );
};

export default FavoriteSports;