
import { useState, useEffect } from 'react';
import Card from '../components/Card';
import styles from '../styles/home.module.scss';

import { getCity } from '../services/geocoding';
import { Box } from '@mui/system';
import { CircularProgress } from '@mui/material';

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

import { useNavigate } from 'react-router-dom';


export default function Home() {

    let navigate = useNavigate();

    const [planos, setPlanos] = useState([]);
    const [carregando, setCarregando] = useState(true);

    const [open, setOpen] = useState(false);

    useEffect(() => {

        const geo = localStorage.getItem('geolocation');

        if ("geolocation" in navigator && !geo) {
            setOpen(true);
            localStorage.setItem("geolocation", true);
        } else {
            getInfos();
        }
    }, [])

    const getInfos = async () => {

        if ("geolocation" in navigator) {

            try {

                navigator.geolocation.getCurrentPosition(function (position) {
                    getGeo(position.coords.latitude, position.coords.longitude);
                    console.log(position.coords.latitude, position.coords.longitude);
                });
            } catch (e) {
                console.log(e);
            }
        }
    }

    const getGeo = async (lat, lon) => {
        try {
            const res = await getCity(lat, lon);
            console.log("Resposta google: ", res);
            getPlanos(res.state);
        } catch (e) {
            console.log(e);
            getPlanos('');
        }

    }

    const getPlanos = (state) => {
        let request = '';
        if (state && state.length < 3) {
            request = `https://app-challenge-api.herokuapp.com/plans?state=${state}`
        } else {
            request = 'https://app-challenge-api.herokuapp.com/plans'
        }

        fetch(request)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setPlanos(res)

                setCarregando(false);
            })
    }

    return (
        <div className={styles.container}>
            <Modal
                open={open}
                setOpen={setOpen}
                getInfos={getInfos}
            />
            <div className={styles.header}>
                <div className={styles.title}>
                    <img src="assets/avatar.png" alt="avatar" />
                    <span>Bem-Vindo</span>
                    <img src="assets/bell.svg" alt="bell" onClick={() => navigate('/verTodos')} />
                </div>

                <div className={styles.badge}>
                    Hey, ??talo
                </div>

                <h1>
                    Encontrar o <span>provedor ideal </span>
                    para voc?? ficou simples!
                </h1>
            </div>
            <div className={styles.contentCards}>
                <div className={styles.cardPedido}>
                    <span>
                        Fa??a o pedido do or??amento para a sua resid??ncia.
                    </span>

                    <button onClick={() => navigate('/escolherEndereco')}>
                        Pedir
                    </button>
                </div>
                <div className={styles.headerPlanos}>
                    <span>Planos j?? registrados</span>
                    <span onClick={() => navigate('/verTodos')}>Ver todos</span>
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
        </div>
    )
}

function Modal({ open, setOpen, getInfos }) {


    // const handleClickOpen = () => {
    //     setOpen(true);
    // };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAccept = () => {
        getInfos();
        setOpen(false);
    }

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"Usar servico de localiza????o?"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Ative o servi??o de localiza????o para encontrar os melhores provedores da sua regi??o
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Negar</Button>
                <Button onClick={handleAccept} autoFocus>
                    Aceitar
                </Button>
            </DialogActions>
        </Dialog>
    )
}
