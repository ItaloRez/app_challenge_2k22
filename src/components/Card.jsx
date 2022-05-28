import { Divider } from '@mui/material';
import styles from '../styles/card.module.scss';
import UploadIcon from '@mui/icons-material/Upload';
import DownloadIcon from '@mui/icons-material/Download';
import { useNavigate } from 'react-router-dom';

export default function Card({ plano }) {

    let navigate = useNavigate();

    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.content}>
                    <span>{plano.isp}</span>
                    <span>R$ {plano.price_per_month} /mês</span>
                </div>
                <div className={styles.button}>
                    <button onClick={() => navigate('/pedido')}>Pedir</button>
                </div>
            </div>

            <Divider />

            <div className={styles.footer}>
                <div>
                    <DownloadIcon color="primary" />
                    <span>{plano.download_speed} Mbps</span>
                </div>
                <div>
                    <UploadIcon color="success" />
                    <span>{plano.upload_speed} Mbps</span>
                </div>
            </div>

        </div>
    )
}
