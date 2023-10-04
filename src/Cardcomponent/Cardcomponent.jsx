import "./Cardcomponent.css"
import card1 from "../images/card1.png"
import card2 from "../images/card2.png"

function Cardcomponent({number, name, monthyear, cvc}){
    return(
        <>
            <div className="card-container">
                <div className="card1">
                    <img src={card1} alt="card1"/>                
                </div>
                <div className="elipse">
                    <svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47" fill="none">
                    <circle cx="23.5" cy="23.5" r="23.5" fill="#FEFFFF"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                    <circle cx="11.5" cy="11.5" r="10.25" fill="url(#paint0_linear_1011_13)" stroke="white" stroke-width="1.5"/>
                    <defs>
                        <linearGradient id="paint0_linear_1011_13" x1="5.5" y1="6" x2="21" y2="18" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#623FF2"/>
                        <stop offset="1" stop-color="#5E37EC"/>
                        </linearGradient>
                    </defs>
                    </svg>
                    </div>
                    <h1>{number}</h1>
                    <div className="name-monthyear">
                        <h2>{name}</h2>
                        <h2>{monthyear}</h2>
                    </div>
                <div className="card2">
                    <img src={card2} alt="card2"/>
                <div className="cvcdetail">
                    {cvc}
                </div>
                </div>
            </div>
        </>
    )
}

export default Cardcomponent