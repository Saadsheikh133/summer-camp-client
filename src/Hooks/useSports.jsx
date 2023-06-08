import { useEffect, useState } from "react";


const useSports = () => {
    const [sports, setSports] = useState();
    const [loader, setLoader] = useState(true);
    const [instructors, setInstructors] = useState();

    useEffect(() => {
        fetch("http://localhost:5000/classes")
            .then(res => res.json())
            .then(data => {
                setSports(data);
                setLoader(false);
        })
    }, [])

    useEffect(() => {
        fetch("http://localhost:5000/instructors")
            .then(res => res.json())
            .then(data => {
                setInstructors(data)
            })
    }, [])
    return [sports, instructors, loader];
};

export default useSports;