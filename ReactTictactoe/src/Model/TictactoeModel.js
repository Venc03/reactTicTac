class TicTacToe{
    #allapot;
    #lepes;
    #lista=[];
    constructor(){
        this.#allapot = " ";
        this.#lista=[" "," ",""," ",""," "," "," ",""];
        this.#lepes = 0;
    }
    setLista(index){
        this.#lepes++;
        if (this.#allapot === "X") {
          this.#allapot = "O";
        } else {
          this.#allapot = "X";
        }
        this.#lista[index] = this.#allapot;
    }
    getLista(){
        return[...this.#lista]
    }
}
export default TicTacToe