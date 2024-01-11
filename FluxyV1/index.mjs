import Simplifier from "./FluxAPI/util/Simplifier.mjs" 
import FluxRequest from "./FluxAPI/FluxRequest.mjs"; 
import FluxMethods from "./FluxAPI/enum/FluxMethods.mjs";

let las = new Simplifier();
let a = 'jsdd'
const object = {
    "nome" : las.CompactWord("nome do livro1"),
    "comentario" : "review do livro1" ,
    "url": "url da imagem do livro",
    "data" : "2023-04-01",
    "hoursdate" : "23:23:01",
    "user" : {"id": 1 }
}
let title = "nome do lvro1"
console.log(las.CompactWord(title))
let post = new FluxRequest(`http://localhost:8080/blog/`);


let response = await post.fluxFetch()
// console.log(response);
console.log(post.statusRequest())



