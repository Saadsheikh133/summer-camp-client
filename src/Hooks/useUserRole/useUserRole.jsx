import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const useUserRole = () => {
    const { user } = useContext(AuthContext);
    const [users, setUsers] = useState('');
    useEffect(() => {
        fetch(`http://localhost:5000/userRole/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setUsers(data)
                
        })
    }, [user])
    return [users];
};

export default useUserRole;