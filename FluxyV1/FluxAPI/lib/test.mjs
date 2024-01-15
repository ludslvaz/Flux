import { UserObject } from "./PostObject/UserObject.mjs";
import { FluxRequest } from "./launcher/FluxRequest.mjs";

const obj = new UserObject('','','')

const lates = new FluxRequest('http://localhost:8080/usuarios')

console.log(await lates.fluxStart('',obj))
console.log(lates.statusRequest())