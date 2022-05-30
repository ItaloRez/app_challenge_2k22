import styles from '../styles/verTodos.module.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Button, FormControl, IconButton, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function EscolherVelocidade() {

    let navigate = useNavigate();
    const [velocidade, setVelocidade] = useState('');

    const handleChange = (event) => {

        setVelocidade(event.target.value);
        navigate('/orcamento');
    };

    return (

        <div className={styles.container}>
            <div className={styles.header}>
                <IconButton aria-label="back" onClick={() => navigate('/cadastroEndereco')}>
                    <ArrowBackIcon sx={{ color: 'white' }} fontSize="large" />
                </IconButton>

                <h1>Escolher Velocidade</h1>
            </div>

            <div className={styles.cards}>

                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="Velocidade">Velocidade</InputLabel>
                        <Select
                            labelId="Velocidade"
                            id="Velocidade"
                            value={velocidade}
                            label="Velocidade"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>-10 Mega</MenuItem>
                            <MenuItem value={20}>10 Mega</MenuItem>
                            <MenuItem value={30}>50 Mega</MenuItem>
                            <MenuItem value={40}>100 Mega</MenuItem>
                            <MenuItem value={50}>200 Mega</MenuItem>
                            <MenuItem value={60}>500 Mega</MenuItem>
                            <MenuItem value={70}>+500 Mega</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </div>


        </div>
    )
}
