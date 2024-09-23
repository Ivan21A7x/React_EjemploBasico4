import React from 'react';
import Number0Component from './Number0Component';
import Number1Component from './Number1Component';
import Number2Component from './Number2Component';
import Number3Component from './Number3Component';
import Number4Component from './Number4Component';
import Number5Component from './Number5Component';
import Number6Component from './Number6Component';
import Number7Component from './Number7Component';
import Number8Component from './Number8Component';
import Number9Component from './Number9Component';
import NumberDotComponent from './NumberDotComponent';
import OpAddComponent from './OpAddComponent';
import OpSubComponent from './OpSubComponent';
import OpMulComponent from './OpMulComponent';
import OpDivComponent from './OpDivComponent';
import OpSqrComponent from './OpSqrComponent';
import OpTotalComponent from './OpTotalComponent';
import DisplayComponent from './DisplayComponent';
import { CalculatorProvider } from './CalculatorProvider';
import OpACComponent from './OpACComponent';
import { Box, Grid } from '@mui/joy';

export default function CalculatorComponent() {
  return (
    <CalculatorProvider>
       <Box
      sx={{
        display: 'flex',
        flexDirection: 'column', // Para alinear en la dirección vertical
        justifyContent: 'center', // Centrado vertical
        alignItems: 'center',     // Centrado horizontal (opcional)
        border: {
          xs: 'solid red 2px',
          sm: 'solid blue 2px',
          md: 'solid black 2px',
          lg: 'solid darkslateblue 2px'
        }
        
      }}
    >
      <Grid container
        sx={{
          // width: '90%',  // Calculadora ocupará el 90% del contenedor
          width: {
            xs: '90%',
            sm: '80%',
            md: '70%',
            lg: '50%'
          },
          maxWidth: '100%', // Se ajusta al tamaño de la pantalla
          backgroundColor: 'darkslateblue',
          padding: '2rem',  // Espaciado interno utilizando unidades relativas
          borderRadius: '1rem',  // Esquinas redondeadas relativas
          border: '0.1rem solid black',  // Borde con unidad relativa
          textAlign: 'center',
        }}
        spacing={0.5}
      >
        {/* Componente Display que ocupará las 12 columnas */}
        <Grid xs={12}><DisplayComponent /></Grid>

        {/* Distribución de los números y operadores */}
        <Grid xs={4}><Number1Component /></Grid>
        <Grid xs={4}><Number2Component /></Grid>
        <Grid xs={4}><Number3Component /></Grid>

        <Grid xs={4}><Number4Component /></Grid>
        <Grid xs={4}><Number5Component /></Grid>
        <Grid xs={4}><Number6Component /></Grid>

        <Grid xs={4}><Number7Component /></Grid>
        <Grid xs={4}><Number8Component /></Grid>
        <Grid xs={4}><Number9Component /></Grid>

        <Grid xs={4}><Number0Component /></Grid>
        <Grid xs={4}><NumberDotComponent /></Grid>

        {/* Operadores */}
        <Grid xs={4}><OpAddComponent /></Grid>
        <Grid xs={4}><OpSubComponent /></Grid>
        <Grid xs={4}><OpMulComponent /></Grid>
        <Grid xs={4}><OpDivComponent /></Grid>
        <Grid xs={4}><OpSqrComponent /></Grid>
        <Grid xs={4}><OpTotalComponent /></Grid>
        <Grid xs={4}><OpACComponent /></Grid>
      </Grid>
    </Box>
    </CalculatorProvider>
  );
}