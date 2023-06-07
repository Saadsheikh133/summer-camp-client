import { useEffect, useState } from "react";


const useSports = () => {
    const [sports, setSports] = useState();
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        fetch("sports.json")
            .then(res => res.json())
            .then(data => {
                setSports(data);
                setLoader(false);
        })
    }, [])

    return [sports, loader];
};

export default useSports;