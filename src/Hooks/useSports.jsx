import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";


const useSports = () => {
    const [sports, setSports] = useState();
    const [instructors, setInstructors] = useState();

    useEffect(() => {
        fetch("https://b7a12-summer-camp-server.vercel.app/classes")
            .then(res => res.json())
            .then(data => {
                setSports(data);
        })
    }, [])

    useEffect(() => {
        fetch("https://b7a12-summer-camp-server.vercel.app/instructors")
            .then(res => res.json())
            .then(data => {
                setInstructors(data)
            })
    }, [])

    const { data: classes = [], isLoading: loader, refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await fetch('https://b7a12-summer-camp-server.vercel.app/allClasses')
            return res.json();
        }
    })

    return [sports, instructors, classes, refetch, loader];
};

export default useSports;