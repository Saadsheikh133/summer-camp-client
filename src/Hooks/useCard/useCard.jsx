import { useQuery } from "@tanstack/react-query";


const useCard = () => {
    const { data: card = [], refetch } = useQuery({
        queryKey: ['card'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/selectedClass')
            return res.json();
        }
    })
    return [card, refetch]
};

export default useCard;