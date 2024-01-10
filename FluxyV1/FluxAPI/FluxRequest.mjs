 
export default class FluxRequest {
    async fluxFetch(...args) {
        const url = args[0];
        const httpMethods = args[1];
        const object = args[2];
        
        switch (httpMethods) {
            case 'GET':
                console.log('get')
                return await fetch(url).then(promise => promise.json())
            case 'POST' : 
                console.log('post')
                const headerExPost = { headers: { "Content-Type": "application/json", Accept: "application/json", }, method : httpMethods , body : JSON.stringify(object)}
                return await fetch(url,headerExPost).then(promise => promise.json())
            case 'PUT':
                console.log('PUT')
                const headerExPut = { headers: { "Content-Type": "application/json", Accept: "application/json", }, method : httpMethods , body : JSON.stringify(object)}
                return await fetch(url,headerExPut).then(promise => promise.json())
            case 'DELETE':
                console.log('DELETE')
                const headerExDelete = { headers: { "Content-Type": "application/json", Accept: "application/json", }, method : httpMethods }
                return await fetch(url,headerExDelete).then(promise => promise.JSON())
            default:
                console.log('GET')
                return await fetch(url).then(promise => promise.json())

        }

        











    }

    getResponse(){
        console.log(this.response)
    }

}

