import { useState,useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";
function Users() {
    const [user, setUser] = useState([]);
    // url params
    const {userId} = useParams();

    // search params
    const [searchParams, setSearchParams] = useSearchParams();
    const completed = searchParams.get('completed');

    // navigate
    const navigate = useNavigate()
    
    // fetching data
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then((result) => {
    
                if (!completed) {
                    setUser(result.data);
                }
                else {
                    const filteredData = result.data.filter((item) => {
                        console.log(typeof item.completed);
                        // console.log(typeof completed);
                        return item.completed == Boolean(completed);
                    })
                    console.log(filteredData);
                    setUser(filteredData);
                }
            })
            .catch((error) => console.log(error));
    }, [completed]);


    const UserCard = styled('div')({
        backgroundColor: 'lightblue',
        padding: '1rem',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin:'1rem 0'
})

    const UserBtn = styled('button')({
        border: 'none',
        fontSize: '1.2rem',
        border: '2px solid dakrblue',
        padding: '4px',
        backgroundColor: 'whitesmoke',
        borderRadius: '5px',
        marginLeft:'1rem'
    })

    return ( 
        <div className="container">
            <Navbar/>
            <Typography variant="h5" sx={{ textAlign: 'center' }}>User ID : <span style={{color:'darkred',fontSize:'1.9rem'}}>{userId}</span></Typography>
            <div >
                <UserBtn onClick={()=>navigate(-1)}>Back</UserBtn>
                <UserBtn onClick={() => { setSearchParams({ completed: 'true' }) }}>Search Completed</UserBtn>
            </div>
          
            {
                user.map((data,index) => {
                    return(
                        <>
            
                           
                            {data.userId == userId && (
                                <div style={{display:'flex',flexDirection:'column',gap:'20px'}}>
                                <UserCard key={index}>
                                    <h1>{data.id}</h1>
                                    <h2>{data.title}</h2>
                                        {data.completed == true ? <h2 className="completed">completed</h2> : <h2 className="non-completed">not completed</h2>}
                                </UserCard>

                                </div>
                            ) 
                            }
                </>
                    )
                })
               
            }
        </div>
     );
}

export default Users;