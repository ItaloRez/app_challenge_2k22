import styles from '../styles/verTodos.module.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { CircularProgress, IconButton } from '@mui/material';
import { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import Card from '../components/Card';
import { useNavigate } from 'react-router-dom';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';

export default function VerTodos() {

    const [carregando, setCarregando] = useState(true);
    const [planos, setPlanos] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        let request = `https://app-challenge-api.herokuapp.com/plans`
        fetch(request)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setPlanos(res)

                setCarregando(false);
            })
    }, [])

    const handleFiltro = () => {
        let listPlanos = planos
        //order by price_per_month
        listPlanos.sort((a, b) => a.price_per_month - b.price_per_month)


        setPlanos(listPlanos)
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <IconButton aria-label="back" onClick={() => navigate('/home')}>
                    <ArrowBackIcon sx={{ color: 'white' }} fontSize="large" />
                </IconButton>

                <h1>Todos os planos</h1>
            </div>
            <div className={styles.filtro}>
                <IconButton aria-label="filtro" onClick={handleFiltro}>
                    <LocalAtmIcon />
                </IconButton>
            </div>

            {
                carregando
                    ?
                    <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
                        <CircularProgress />
                    </Box>
                    :
                    <div className={styles.cards}>
                        {planos.map((item, index) => {
                            return (
                                <Card
                                    key={index}
                                    plano={item}
                                />
                            )
                        })}
                    </div>
            }

        </div>
    )
}
