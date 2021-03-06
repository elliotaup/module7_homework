/*Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.*/

let pied_piper = {
    age: 2000,
    color: 'red',
}

function iProp(obj) {
    for (let key in obj) {
        if (obj.hasiProperty(key)) {

            console.log(key, obj[key]);
        }
    }
}
iProp(pied_piper)