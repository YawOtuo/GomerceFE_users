import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Input } from '@mui/material';
import React, { useState } from "react";
import { TextField } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { FormControl } from '@mui/material';
import { FormLabel } from '@mui/material';
import { RadioGroup } from '@mui/material';
import { Radio } from '@mui/material';
import { Select } from '@mui/material';
import { MenuItem } from '@mui/material';
import { Slider } from '@mui/material';
import { Button } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import { Typography } from '@mui/material';
import phone from './phone1.jfif'
import { CheckoutSubtotal } from './CheckoutSubtotal';
import { CheckoutOrders } from './CheckoutOrders';
import { NeedHelp } from './NeedHelp';
import { modifyCartStyle, outlineStyle, textStyle } from './StylesCheckoutAddress';

export const CheckoutSummaryPane = () =>
{
    return (
        <Box sx={{ ...textStyle , mt: 5, pt:5}}>
            <Box sx={{...outlineStyle, p:3}}>
                <Box>
                    <Typography sx={textStyle}>
                      Your Order ( 2 Items)
                    </Typography>
    
                </Box>
                <Box>
                    <CheckoutOrders image={phone} />
                    <CheckoutOrders image={phone} />
    
    
                </Box>
                <Box >
                    <CheckoutSubtotal text1='Subtotal' price='$$$$$$' />
                    <CheckoutSubtotal text1='VAT' price='$$$$$$' />
                    <CheckoutSubtotal text1='Total' price='$$$$$$' />
    
                </Box>
    
                <Button variant='contained' color='grey' sx={{
                    ...modifyCartStyle,
                    mt: 1, width: '100%'
                }}>MODIFY CART</Button>
            </Box>

            <NeedHelp />
        </Box>
    )
}