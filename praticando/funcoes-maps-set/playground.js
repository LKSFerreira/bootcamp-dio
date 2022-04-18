function validaArray(arr, num) {
    try {
        if (!arr && !num)
            throw new ReferenceError("Envie os parâmetros");


        if (typeof arr !== "object")
            throw new TypeError("O Array precisa ser do tipo objeto");


        if (typeof num !== "number")
            throw new TypeError("O num precisa ser do tipo number");


        if (arr.length !== num)
            throw new RangeError("Tamanho inválido");


        return arr;
    } catch (e) {
        if (e instanceof ReferenceError) {
            console.log("Esse é um ReferenceError !!");
            console.log(e.message);

        } else if (e instanceof TypeError) {
            console.log("Esse é um TypeError !!");
            console.log(e.message);

        } else if (e instanceof RangeError) {
            console.log("Esse é um RangeError !!");
            console.log(e.message);

        } else {
            console.log("Ocorreu um tipo erro não esperado: " + e);
        }
    }
}

console.log(validaArray(["a", "b", "c"], 3));