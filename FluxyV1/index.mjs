import  FluxRequest from "./FluxAPI/FluxRequest.mjs" ;
import  FluxMethods from "./FluxAPI/FluxMethods.mjs";



const request = new FluxRequest()
const object = 
    {
        "nome_usuario": "Usu",
        "email": "usuario1@exaco",
        "senha_usuario": "udsdk"
}
const response = await request.fluxFetch('http://localhost:8080/usuarios')
console.log(response)
