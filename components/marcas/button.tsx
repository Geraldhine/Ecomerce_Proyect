import { Button } from '@mui/material'
import React from 'react'


interface BotonMarcasProps {
    BotonNombre: string;
}

export default function BotonMarcas({ BotonNombre }: BotonMarcasProps) {
    return (
        <Button sx={{ marginTop: "10px",
            backgroundColor: "lightblue", color: "#000000", fontSize: "11px", borderRadius: "4px", textTransform: "none",
            '&:hover': {
                backgroundColor: "#1976d2"
            }
        }}>
            {BotonNombre}
        </Button>
    );
}
