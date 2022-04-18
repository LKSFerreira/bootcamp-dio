function getAdmins(map) {
    let admins = [];
    for ([key, value] of map) {
        if (value == "Admin") {
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map()

usuarios.set("Lucas", "Admin");
usuarios.set("Murillo", "Admin");
usuarios.set("Maycon", "Admin");
usuarios.set("Vany", "User");
usuarios.set("Erica", "Admin");

console.log(getAdmins(usuarios));

const myArray = [30,30,40,5,223,2049,2704,2704,2704,3034,5,2914,2914];
    function valoresUnicos(arrei){
        const mySet = new Set(arrei);

        return [...mySet];
    }

console.log(valoresUnicos(myArray));