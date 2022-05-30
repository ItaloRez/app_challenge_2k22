import { useState } from 'react';

import styles from '../styles/escolherEndereco.module.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function EscolherEndereco() {

    let navigate = useNavigate();

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <IconButton aria-label="back" onClick={() => navigate('/home')}>
                    <ArrowBackIcon sx={{ color: 'white' }} fontSize="large" />
                </IconButton>

                <h1>Qual localidade você deseja instalar o serviço de internet?</h1>


            </div>
            <div className={styles.buttons}>
                <button onClick={() => navigate('/escolherVelocidade')}>Localidade Atual</button>
                <button onClick={() => navigate('/cadastroEndereco')}>Cadastrar Novo Endereço</button>
            </div>
        </div>
    )
}


