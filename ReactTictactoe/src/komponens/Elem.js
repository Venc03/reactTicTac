

function Elem(props) {
    function katt() {
        console.log("asd");
        props.katt(props.index);
    }
    return (<div className="elem" onClick={katt}>
    {props.ertek}
    </div>)
}
export default Elem;