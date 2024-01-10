import FluxMethods from "./FluxAPI/enum/FluxMethods.mjs"
import FluxRequest from "./FluxAPI/FluxRequest.mjs"
import DateFormat from "./FluxAPI/util/DateFormat.mjs"


const object = 

    {
 
        "nome" : "nome do livro1",
        "comentario" : "review do livro1" ,
        "url": "url da imagem do livro",
        "data" : DateFormat.getDate(),
        "hoursdate" : DateFormat.getTimer(),
        "user" : {"id": 1 }
    }


const request = new FluxRequest("http://localhost:8080/blog")
const response = await request.fluxFetch()
console.log(response)
// console.log(request.statusRequest())
// const a = ["ALO","LO"]

console.log(DateFormat.getDate())
