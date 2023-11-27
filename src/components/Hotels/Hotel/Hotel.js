import styles from './Hotel.module.css';
import hotelImg from '../../../assets/images/hotel.jpg';

function Hotel() {
    return (
        <div className={`card ${styles.hotel}`}>
            <div className='card-body'>
                <div className='row'>
                    <div className='col-4'>
                        <img
                            src={hotelImg}
                            alt='hotel'
                            className='img-fluid img-thumbnail' />
                    </div>
                    <div className='col-8'>
                        <div className='row'>
                            <div className='col'>
                                <p className={styles.title}>Tytuł</p>
                                <p>Miasto</p>
                            </div>
                            <div className='col'>
                                <p>Ocena: 4.3</p>
                                <a href='.' className='btn btn-primary mt-2 px-5'>Pokaż</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-12'>
                        <p className={styles.description}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hotel;