import { Box, CardContent, Button, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react';


const ItemCount = () => {
    const [count, setCount] = useState(1);
    
    function sumar () {
        if(count < 10) {
            setCount(count + 1)
        }
        
    }

    function restar () {
        if(count > 1) {
            setCount(count - 1)
        }
    }
    

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            fontSize: 30
        }}>
            
                <CardContent>
                    <Button sx={{
                        fontSize: 30
                    }} onClick={ restar }>
                        -
                    </Button>
                    <Typography variant='p'>
                        {count}
                    </Typography>
                        <Button sx={{
                            fontSize: 30
                        }} onClick={ sumar }>
                            +
                        </Button>
                </CardContent>
            
        </Box>
    )
}

export default ItemCount
