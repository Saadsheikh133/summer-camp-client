import { Link } from 'react-router-dom';
import recket from '../../../assets/images/racket2.jpg'

const BestClass = () => {
    return (
        <div>
            <div className="container mx-auto my-20">
                <div className='text-center'>
                    <h2 className="text-4xl font-bold">Do Not Miss!!</h2>
                </div>
                <div className='bg-gray-300 py-16 mt-10 rounded-xl lg:flex justify-evenly items-center gap-4 px-4 shadow-lg'>
                    <img className='rounded-lg mx-3' src={recket} alt="" />
                    <div>
                        <h2 className='text-2xl lg:text-4xl my-3 font-bold text-center text-cyan-500'>BWF World Championships</h2>
                        <p className='text-2xl font-semibold mt-4'>
                            The BWF World Championships, formerly known as IBF World Championships, and also known as the World Badminton Championships, is a badminton tournament sanctioned by Badminton World Federation.
                        </p>
                        <div className='text-center mt-20'>
                            <Link to={'/classes'} className='font-bold px-6 text-xl py-4 rounded-2xl bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white hover:border-none transition-transform'>Order Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestClass;