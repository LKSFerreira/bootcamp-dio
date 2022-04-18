function validaArray(arr, num) {
    try {
        if (!arr && !num)
            throw new ReferenceError("Envie os parâmetros");


        if (typeof arrei !== "object")
            throw new TypeError("O Array precisa ser do tipo objeto");


        if (typeof num !== "number")
            throw new TypeError("O Array precisa ser do tipo objeto");


        if (arrei.length !== num)
            throw new RangeError("Tamanho inválido");


        return arr;
    } catch (e) {
        if (e instanceof ReferenceError) {
            console.log("Esse é um ReferenceErrror !!");
            console.log(e.message);

        } else if (e instanceof TypeError) {
            console.log("Esse é um TypeErrror !!");
            console.log(e.message);

        } else if (e instanceof RangeError) {
            console.log("Esse é um RangeError !!");
            console.log(e.message);

        } else {
            console.log("Ocorreu um tipo erro não esperado: " + e);
        }
    }
}
console.log(validaArray());