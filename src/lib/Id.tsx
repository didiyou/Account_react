
let id = parseInt(window.localStorage.getItem('idMax') || '0')
class Id{
    value:number
    constructor(){
        id += 1
        window.localStorage.setItem('idMax',JSON.stringify(id))
        this.value = id
    }
}

export {Id}