import PropTypes from 'prop-types';
import styles from './Hotel.module.css';
import hotelImg from '../../../assets/images/hotel.jpg';

const propTypes = {
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
};

function Hotel(props) {
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
                                <p className={styles.title}>{props.name}</p>
                                <p>{props.city}</p>
                            </div>
                            <div className='col'>
                                <p>Ocena: {props.rating}</p>
                                <a href='.' className='btn btn-primary mt-2 px-5'>Pokaż</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-12'>
                        <p className={styles.description}>
                            {props.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

Hotel.propTypes = propTypes;

export default Hotel;