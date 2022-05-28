import { useNavigate } from 'react-router-dom';
import styles from '../styles/splash.module.scss';

export default function Splash() {

    let navigate = useNavigate();

    return (
        <div className={styles.container}>
            <img src='assets/splash.jpg' alt='Splash' />
            <div className={styles.content}>
                <h1>
                    Ache o <span>melhor</span> provedor
                    de internet da sua região
                </h1>

                <p>Com apenas alguns cliques você vai receber os melhores planos de internet da sua região.</p>

                <button onClick={() => navigate('/home')}>Buscar Agora</button>
            </div>
        </div>
    )
}
