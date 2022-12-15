
//Globle Variable

let myul = document.getElementById('myul');

myul.innerHTML = '';




function saveData(e){   // e = event = formal argument

    //object.property
    //Object.method();

    e.preventDefault();
    console.log('Save')

//Local variable 
    let fn = document.querySelector('input[name="fname"]');
    let sn = document.querySelector('input[name="lname"]')

    //Object.method(); method = Function

        console.log(fn.value)
        console.log(sn.value)

        myul.innerHTML += '<li>'+fn.value+' '+sn.value+' </li>'


}