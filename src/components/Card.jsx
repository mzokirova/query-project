import Card from '@mui/material/Card';
import { Link } from 'react-router-dom';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Users from '../pages/Users';
import styled from '@emotion/styled';

function UserCard({ name, address, company, userId }) {
    const MyCardContent = styled('CardContent')({
        padding: '1rem',
        backgroundColor: 'lightcyan',
        width: '250px',
        height: '200px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        borderRadius:'5px'

    })
    return ( 
        <>
            <MyCardContent sx={{width:'25%'}}>
                   
                <Typography variant="h6" >
                    {name}
                </Typography>
                <Typography variant='body2'>
                   Adress: {address}
                </Typography>
                <Typography variant="body2">
                   Company: {company}
                </Typography>
                <CardActions>
                    <Link style={{color:'darkred',fontWeight:'500'}} to={`${userId}`} >Search Users</Link>
                </CardActions>
            </MyCardContent>
        </>
     );
}

export default UserCard;