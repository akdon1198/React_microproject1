import { useState } from "react"
import "./Formcomponent.css"
function Formcomponent({setcarddetail}){
    const[namefield, setnamefield] = useState("")
    const[numberfield, setnumberfield] = useState("")
    const[cvcfield, setcvcfield] = useState("")
    const[monthfield, setmonthfield] = useState("")
    const[yearfield, setyearfield] = useState("")
    const[errorfield, seterrorfield] = useState({
        nameerror : null,
        numbererror : null,
        cvcerror : null
    })
    function handleclick(e){
        e.preventDefault();
        if(namefield.length == 0){
            seterrorfield({nameerror : "Cardholder name required"})
            return;
        }
        for(let i = 0; i < namefield.length; i++){
            if(namefield[i] == " ") continue;
            if(!isNaN(namefield[i])) {
                seterrorfield({nameerror : "Cardholder name must be alphabet"})
                return;
            }
        }
        if(numberfield.length < 16){
            seterrorfield({numbererror : "Card number required"})
            return;
        }
        if(cvcfield.length < 3){
            seterrorfield({cvcerror : "CVC number required"})
            return;
        }
        if(isNaN(numberfield)){
            seterrorfield({numbererror : "Card number must be numeric"})
            return;
        }
        if(isNaN(cvcfield)){
            seterrorfield({cvcerror : "CVC must be numeric"})
            return;
        }
        let tempnumber = ""
        for(let i = 1; i <= 16; i++){
            tempnumber += numberfield[i - 1]  
            if(i % 4 == 0) tempnumber += " "
        }
        setcarddetail({
            number : tempnumber,
            name : namefield.toUpperCase(),
            cvc : cvcfield,
            monthyear : monthfield+"/"+yearfield
        })

        seterrorfield({})
    }
    return(
        <>
            <div className="form-container">
                <form>
                    <div>
                    <label htmlFor="cardholdername">CARDHOLDER NAME</label>
                    <input type="text" placeholder="e.g. Jane Applessed"
                    onChange={(e)=>setnamefield(e.target.value)} value={namefield}
                    />
                    {errorfield.nameerror? 
                    <p style={{color:"#F81212"}}>{errorfield.nameerror}</p> : ""
                    }
                    </div>
                    <div>
                    <label htmlFor="cardnumber">CARD NUMBER</label>
                    <input type="text" maxLength="16" placeholder="e.g. 1234 5678 9123 0000"
                    onChange={(e)=>setnumberfield(e.target.value)} value={numberfield}
                    />
                    {errorfield.numbererror? 
                    <p style={{color:"#F81212"}}>{errorfield.numbererror}</p> : ""
                    }
                    </div>
                    <div style={{display:"flex", gap:"20px"}}>
                    <div>
                    
                    <label htmlFor="expirydate">EXP.DATE (MM/YY)</label>
                    <input type="number" min="1" max="12" placeholder="MM" style={{width:"78px", height:"44px", marginRight:"10px"}}
                    size="2"
                    onChange={(e)=>setmonthfield(e.target.value)} value={monthfield}
                    />
                    <input type="number" min="1000" max="9999" placeholder="YY" style={{width:"78px", height:"44px"}}
                    onChange={(e)=>setyearfield(e.target.value)} value={yearfield}
                    />
                    </div>
                    <div>

                    <label htmlFor="cvc">CVC</label>
                    <input type="text" placeholder="e.g. 123" maxLength="3" style={{width:"52%", height:"44px"}}
                    onChange={(e)=>setcvcfield(e.target.value)} value={cvcfield}
                    />
                    {errorfield.cvcerror? 
                    <p style={{color:"#F81212"}}>{errorfield.cvcerror}</p> : ""
                    }
                    </div>
                    </div>
                    <button onClick={(e) => handleclick(e)}>Confirm</button>
                </form>
            </div>
        </>
    )
}

export default Formcomponent