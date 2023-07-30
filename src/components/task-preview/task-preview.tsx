// import { useState, useCallback } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Modal } from '../common/modal/modal';
// import { TripPopup } from '../trips/components/trip-popup/trip-popup';

// import { bookingsActionCreator } from '../../store/actions'; 

// import './style.css';

const TaskPreView = () => {
    // const dispatch = useDispatch();
    // const { expandedTrip } = useSelector(state => ({
    //     // expandedTrip: state.trips.expandedTrip
    // }));

    // const [isPopupOpen, setPopupOpen] = useState(false);

    // const handleShowPopup = () => setPopupOpen(true);
    // const handleClosePopup = () => setPopupOpen(false);
 
    // const handleCreateBookTrip = useCallback((payload) => {
    //     dispatch(bookingsActionCreator.createBooking(payload))
    //         .unwrap()
    //         .then(() => {
    //             handleClosePopup();
    //         })
    //         .catch(() => {
    //             // todo error
    //         });
    // }, [dispatch]);

    return (
        <>
    {/* //         <main className="trip-page">
    //             <h1 className="visually-hidden">Travel App</h1>
    //             <div className="trip">
    //                 <img src={expandedTrip.image} className="trip__img" alt="trip screen" />
    //                 <div className="trip__content">
    //                 <div className="trip-info">
    //                     <h3 className="trip-info__title">{ expandedTrip.title }</h3>
    //                     <div className="trip-info__content">
    //                     <span className="trip-info__duration"><strong>{ expandedTrip.duration }</strong> days</span>
    //                     <span className="trip-info__level">{ expandedTrip.level }</span>
    //                     </div>
    //                 </div>
    //                 <div className="trip__description">{ expandedTrip.description }</div>
    //                 <div className="trip-price">
    //                     <span>Price</span>
    //                     <strong className="trip-price__value">{expandedTrip.price} $</strong>
    //                 </div>
    //                 <button
    //                     className="trip__button button"
    //                     onClick={handleShowPopup}
    //                 >Book a trip</button>
    //                 </div>
    //             </div>
    //         </main>
            <Modal isHidden={!isPopupOpen}>
                <TripPopup
                    trip={expandedTrip}
                    onClose={handleClosePopup}
                    onSubmit={handleCreateBookTrip}
                ></TripPopup>
            </Modal> */}
        </>
    );
};

export { TaskPreView };