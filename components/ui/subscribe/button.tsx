import { Button } from '@mui/material'
import React from 'react'


interface BotonSuscribete {
    BotonSubscribete: string;
}

export default function BotonSuscribete({ BotonSubscribete }: BotonSuscribete): React.JSX.Element {
    return (
        <Button sx={{
            backgroundColor:"lightblue", color: "#000000", fontSize: "13px", borderRadius: "4px", textTransform: "none",
            '&:hover': {
                backgroundColor: "#1976d2"
            }
        }}>
            {BotonSubscribete}
        </Button>
    );
}
