import styles from '../styles/pedido.module.scss';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Orcamento() {

    let navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    })

    return (
        <div className={styles.container} onClick={() => navigate('/home')}>
            <h1>Foi feito o pedido do orçamento para o seu endereço</h1>
            <p>
                Logo os melhores provedores lhe enviarão
                propostas!
            </p>
            <img src="assets/success.gif" alt="success" />
        </div>
    )
}
