import Elem from "./Elem.js";
import "./Jatekter.css";
function jatekter(props) {
    function katt(szoveg) {
        console.log("asd");
        props.katt(szoveg)
    }
    return(
        <div className="jatekter">
        {
            props.lista.map(
                (elem,index)=>{
                    return(
                        <Elem ertek={elem} katt={katt} key={index} index={index}/>
                        
                    )
                }
            )

        }
        </div>


    )
}
export default jatekter;