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
import { Box } from '@mui/joy';

export default function CalculatorComponent() {
  return (
    <CalculatorProvider>
      <Box
      sx={{
        m: 12,
        width: '500px',
        p: 5,
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        border: '1px solid black',
        justifyItems: 'center',
        alignItems: 'center',
        mx: 'auto',
        backgroundColor: 'darkslateblue',
        borderRadius: 'lg',
      }}
    >
      <DisplayComponent sx={{ gridColumn: 'span 3' }} />

      <Number1Component />
      <Number2Component />
      <Number3Component />
      <Number4Component />
      <Number5Component />
      <Number6Component />
      <Number7Component />
      <Number8Component />
      <Number9Component />
      <Number0Component />
      <NumberDotComponent />

      <OpAddComponent />
      <OpSubComponent />
      <OpMulComponent />
      <OpDivComponent />
      <OpSqrComponent />
      <OpTotalComponent />
      <OpACComponent />
    </Box>
    </CalculatorProvider>
  );
}
