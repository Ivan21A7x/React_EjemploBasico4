import { useState } from "react";
import { Input, Button } from '@mui/joy';

export default function UserFormComponent({ addUser }) {
    const [formData, setFormData] = useState({ nombre: "", edad: "", id: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.values(formData).every(Boolean)) {
            addUser(formData);
            console.log(formData);
            setFormData({ nombre: "", edad: "", id: "" });
        }
    };

    const inputStyles = {
        margin: '2vh',
        fontWeight: 'bold',
        fontSize: { xs: '20px', sm: '25px', md: '35px', lg: '25px' },
        '--Input-focusedThickness': '0.25rem',
        '--Input-focusedHighlight': '#4CAF50',
        '&:focus-within': { borderColor: 'darkslateblue' },
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <Input name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Nombre" size="md" sx={inputStyles} required />
            <Input name="edad" type="number" value={formData.edad} onChange={handleChange} placeholder="Edad" size="md" sx={inputStyles} required />
            <Input name="id" value={formData.id} onChange={handleChange} placeholder="ID" size="md" sx={inputStyles} required />
            <Button type="submit" size="lg" variant="solid" color="primary" sx={{ margin: '3vh', fontSize: { xs: '20px', sm: '25px', md: '35px', lg: '25px' } }}>
                Agregar usuario
            </Button>
        </form>
    );
}
