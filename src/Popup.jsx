import './popup.scss'

const Popup = (props) => {

    const closePopup = () => {
        let popup = document.querySelector('.overlay');
        popup.classList.remove('active')
    }
    return (
        <div className="overlay">
            <div className="popup">
                <div className="popup__text">
                        <div className="popup__title">Ganaste!</div>
                        <div className="popup__prize">{props.prize}</div>
                    </div>
                    <button className="popup__button" onClick={closePopup}>Llevar</button>
                </div>
        </div>
        
    )
}

export default Popup