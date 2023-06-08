import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";


const useSports = () => {
    const [sports, setSports] = useState();
    // const [loader, setLoader] = useState(true);
    const [instructors, setInstructors] = useState();

    useEffect(() => {
        fetch("http://localhost:5000/classes")
            .then(res => res.json())
            .then(data => {
                setSports(data);
                // setLoader(false);
        })
    }, [])

    useEffect(() => {
        fetch("http://localhost:5000/instructors")
            .then(res => res.json())
            .then(data => {
                setInstructors(data)
            })
    }, [])

    const { data: classes = [], isLoading: loader, refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allClasses')
            return res.json();
        }
    })

    return [sports, instructors, classes, refetch, loader];
};

export default useSports;