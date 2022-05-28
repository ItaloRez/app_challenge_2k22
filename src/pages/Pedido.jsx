import styles from '../styles/pedido.module.scss';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Pedido() {

    let navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    })

    return (
        <div className={styles.container} onClick={() => navigate('/home')}>
            <h1>Parabéns, o pedido foi feito, logo você terá a melhor internet em sua residência.</h1>
            <p>O provedor entrará em contato para demais dúvidas e estipulação de prazos.</p>
            <img src="assets/success.gif" alt="success" />
        </div>
    )
}
