class libro {
    constructor(titulo, autor, año) {
        this.titulo = titulo;
        this.autor = autor;
        this.año = año;
    }
}

class Novela extends libro {
    informacion() {
        console.log( `titulo: ${this.titulo}, es una novela escrita por el autor: ${this.autor}, en el año: ${this.año}.`);
    }
    resumen(){
        console.log("es un libro inspirado para jovenes ")
    }
}

class Ciencia extends libro {
    informacion() {
        console.log(` titulo: ${this.titulo}, es un libro de ciencia escrito por el autor: ${this.autor}.`);
    }
    resumen(){
        console.log("es un libro que refleja el ser vivo")

    }
}

class Historia extends libro {
    infomacion() {
        console.log(`titulo: ${this.titulo}, explora eventos históricos y fue escrito por autor: ${this.autor}.`);
    }
    resumen(){
        console.log("es un libro que representa relatos historicos importantes")

    }
}

let n = new Novela("carmesi", "migel", 1999)
n.informacion()
n.resumen()
let c = new Ciencia("anatomia", "juan")
c.informacion()
c.resumen()
let h = new Historia("guerra de los 100 años", "felix")
h.infomacion()
h.resumen()

