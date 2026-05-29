let mcu = ["Thor", "Ironman", "Hulk"]

let Dc = ["superman", "aquaman", "flash"]

const allhero = mcu.concat(Dc)
//console.log(allhero)

const allnew = [...mcu, ...Dc]
//console.log(allnew)

const newarray = [1, 2, 3, [4, 5], [6, 7, [8, 9]]]
const newarray2 = newarray.flat(Infinity)
//console.log(newarray2)



