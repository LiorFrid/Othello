const sol = (A) => {
    const objAtoZ = getAnArray();
    for (const c of A) {
        if (c <= 'z' && c >= 'a') {
            objAtoZ[c.toUpperCase()].isLittle = true;
        }
        else {
            objAtoZ[c].isBig = true;
        }
    }
    let valToReturn = "NO";
    Object.keys(objAtoZ).forEach(el => {
        if (objAtoZ[el].isBig && objAtoZ[el].isLittle) {
            valToReturn = el.toString()
        }
    })
    return valToReturn;
}

const getAnArray = () => {
    const objAtoZ = {}
    for (let i = 'A'.charCodeAt(0); i <= 'Z'.charCodeAt(0); i++) {
        objAtoZ[String.fromCharCode(i)] = {
            isBig: false,
            isLittle: false
        }
    }
    return objAtoZ;
}

console.log(sol("sgasdfZAatTzfawdfhsdfh"));