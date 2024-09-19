import React from 'react';
import { Typography } from '@mui/joy';

export default function UserItemComponent({ usuario }) {
    return (
        <div>
            <Typography level="body2" sx={{ m: 1 }}>
                Nombre: {usuario.nombre}
            </Typography>
            <Typography level="body2" sx={{ m: 1 }}>
                Edad: {usuario.edad}
            </Typography>
            <Typography level="body2" sx={{ m: 1 }}>
                ID: {usuario.id}
            </Typography>
        </div>
    );
}
