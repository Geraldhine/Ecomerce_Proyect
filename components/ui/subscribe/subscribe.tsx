
import { FaBell } from 'react-icons/fa';
import { TextField, Box } from "@mui/material";
import BotonSuscribete from './button';
import { CgEnter } from 'react-icons/cg';

export default function Subscribe() {
    return (
        <>
            <Box display="flex"
                flexDirection="column"
                alignItems="center"
                width={"100%"}
                height={200}
                justifyContent="center" sx={{ marginTop: 4, backgroundColor: "beige" }}>
                <Box display={'flex'} flexDirection="row" alignItems="center" justifyContent="center">
                    <FaBell size={40} color="black" />
                    <p className=" font-bold text-[24px] text-orange-60w0">Suscribete</p>
                </Box>
                <Box margin={2}>
                    <p>Recibe nuestras últimas actualizaciones</p>
                </Box>
                <Box display={'flex'} gap={1} justifyContent="center" sx={{
                    width: '100%', backgroundColor: "white"
                }}>
                    <TextField
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        
                        sx={{
                            width: '200px',
                            '& .MuiInputBase-root': {
                                height: 35, // altura del input
                                fontSize: 13,
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderRadius: 1,
                                    borderColor: 'black',
                                }
                            },
                            '& .MuiInputLabel-root': {
                                fontSize: 13,
                                top: '50%', 
                                transform: 'translate(14px, -50%) scale(1)', 
                                color: '#aaa'
                            }
                        }}
                    />

                    <BotonSuscribete BotonSubscribete={'Suscríbete'} />
                </Box>

            </Box>
        </>
    );
}