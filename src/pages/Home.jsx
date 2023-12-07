import { useEffect, useState } from "react";
import { useRequestProcessor } from "../requestProcessor";
import Navbar from "../components/Navbar";
import axios from "axios";
import UserCard from "../components/Card";
import styled from "@emotion/styled";
import axiosClient from "../axios";
function Home() {
    const { query } = useRequestProcessor();

    const { data: users, isLoading, isError } = query(
        'users',
        () => axiosClient.get('/users').then((res) => res.data),
        { enabled: true }
    );

    if (isLoading) return <p>Loading...</p>
    if (isError) return <p>Error</p>
   
    // fetching data
    // const [users, setUsers] = useState([]);
    // useEffect(() => {
    //     axios.get("https://jsonplaceholder.typicode.com/users")
    //         .then((result) => {
    //             setUsers(result.data);
    //         })
    //         .catch((error) => console.log(error));
    // }, []);

    // styled components
    const CardBox = styled('div')({
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        alignItems: 'center',
        columnGap: '10px',
        rowGap:'14px'
        
    })
    console.log(users)
    
    return ( 
        <div className="container">
            <Navbar />
            <CardBox >
            {users.map((item) => {
                return (
                    <UserCard key={item.id}
                        name={item.name}
                        address={item.address.city}
                        company={item.company.name}
                        userId={item.id} />
                   
                );
            })}
            </CardBox>
        </div>
     );
}

export default Home;