import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';


const steps = ['Pedido en el horno', 'Pedido en proceso de entrega', 'Pedido entregado'];

export default function Progress() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {

    setActiveStep((prevActiveStep) => prevActiveStep + 1 );
   
  };

  return (
    
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    {setTimeout(handleNext,15000)}
      
    </Box>
  );
}
