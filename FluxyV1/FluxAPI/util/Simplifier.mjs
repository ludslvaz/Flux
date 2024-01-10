
export default class Simplifier {

    
     elementCollector(...args){
        let objects = args.map(item => document.getElementById(item))
        return objects;
    }

    CompactWord(wordArg){
        wordArg = wordArg
        .trim()
        .replaceAll(/\s/g,'-')
        .concat('-' + this.GeneratedIdentifierNatural())
        return wordArg
    }
    DescompactWord(wordArg){
        const object = {
            title : wordArg
            .slice(0,-6)
            .replace(/-/g,' '),
            IdN : wordArg.slice(-5)
        }
        return object
    }
     gerarLetras(quantidade) {
        let letras = '';
        for (let i = 0; i < quantidade; i++) {
            letras += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
        }
        return letras;
    }
    
     gerarNumeros(quantidade) {
        let numeros = '';
        for (let i = 0; i < quantidade; i++) {
            numeros += Math.floor(Math.random() * 10);
        }
        return numeros;
    }
    
    GeneratedIdentifierNatural() {
        let codeWord = this.gerarLetras(3)
        let codeNumber = this.gerarNumeros(2)
        return codeWord + codeNumber;
    }
    














   

    random(...args){
        let max = args[0]
        let min = args[1]
        if(min === undefined) min = 0
        const rand = Math.floor(Math.random() * (max-min + 1) + min)
        return rand;
    }
}