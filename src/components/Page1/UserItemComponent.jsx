import React from 'react';
import { Typography } from '@mui/joy';

export default function UserItemComponent({ usuario }) {
    return (
        <div>
            <Typography level="body2" sx={{ color: 'text.primary', m: '2vh', fontSize: { xs: '20px', sm: '25px', md: '35px', lg: '25px' }, }}>
                Nombre: {usuario.nombre}
            </Typography>
            <Typography level="body2" sx={{ color: 'text.primary', m: '2vh', fontSize: { xs: '20px', sm: '25px', md: '35px', lg: '25px' }, }}>
                Edad: {usuario.edad}
            </Typography>
            <Typography level="body2" sx={{ color: 'text.primary', m: '2vh', fontSize: { xs: '20px', sm: '25px', md: '35px', lg: '25px' }, }}>
                ID: {usuario.id}
            </Typography>
        </div>
    );
}
