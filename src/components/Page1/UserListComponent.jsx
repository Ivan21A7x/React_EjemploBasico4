import React from 'react';
import UserItemComponent from './UserItemComponent';
import { Typography, List, ListItem, Divider } from '@mui/joy';

export default function UserListComponent({ usuarios }) {
    if (!usuarios || !Array.isArray(usuarios) || usuarios.length === 0) {
        return (
            <Typography
                level="body1"
                sx={{ color: 'text.primary', mb: 2, p: 2, fontWeight: 'bold' }}
            >
                Ingresa un usuario
            </Typography>
        );
    }

    return (
        <div>
            <Typography
                level="body1"
                sx={{ color: 'text.primary', mb: 2, p: 2, fontWeight: 'bold' }}
            >Usuarios:</Typography>
            <Divider />

            <List sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 0 }}>
                {usuarios.map((usuario, index) => (
                    <React.Fragment key={index}>
                        <ListItem
                            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 0 }}
                        >
                            <UserItemComponent usuario={usuario} />
                        </ListItem>
                        <Divider />
                    </React.Fragment>
                ))}
            </List>
        </div>
    );
}
