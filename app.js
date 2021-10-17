const PRONOUN= ['The','Our']
const ADJ= ['great','big']
const NOUN= ['doit','res','code']
const EXTENSION= ['it','es','de']

const DOMAIN = [PRONOUN,ADJ,NOUN,EXTENSION]

window.onload = () =>{

 document.querySelector('#domain').innerHTML= generateDomain()

};

function generateDomain(params) {
    let result=[]
    for (let index1 in PRONOUN){+" "
        for (let index2 in ADJ){
            for(let index3 in NOUN){
                for(let index4 in EXTENSION){
                    let long= NOUN[index3].length-EXTENSION[index4].length
                    if(EXTENSION[index4]==NOUN[index3].slice(long)){
                      result.push(PRONOUN[index1].concat(ADJ[index2],NOUN[index3].slice(0,long),'.',EXTENSION[index4]))
                    } else{
                    result.push(PRONOUN[index1].concat(ADJ[index2],NOUN[index3],'.',EXTENSION[index4])+" ")
                    }
                }
            }
        
        }
    }
return result
}
