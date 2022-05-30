import styles from '../styles/verTodos.module.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button, IconButton, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function CadastroEndereco() {

    let navigate = useNavigate();
    return (

        <div className={styles.container}>
            <div className={styles.header}>
                <IconButton aria-label="back" onClick={() => navigate('/escolherEndereco')}>
                    <ArrowBackIcon sx={{ color: 'white' }} fontSize="large" />
                </IconButton>

                <h1>Cadastrar endereço</h1>
            </div>

            <div className={styles.cards}>

                <TextField id="cep" label="CEP" variant="outlined" />
                <TextField id="cidade" label="Cidade" variant="outlined" />
                <TextField id="endereco" label="Endereço" variant="outlined" />
                <TextField id="bairro" label="Bairro" variant="outlined" />
                <Button variant="contained" color="primary" onClick={() => navigate('/escolherVelocidade')}>
                    Cadastrar novo endereço
                </Button>
            </div>


        </div>
    )
}
