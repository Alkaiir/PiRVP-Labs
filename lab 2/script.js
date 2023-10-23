let objectsCount = 0;

let ObjectsCountRender = () => {
    let counter = document.getElementById('objectsCount')
    counter.innerHTML = `Максимальное колличество объектов в массиве равно ` + objectsCount;
    setTimeout(ObjectsCountRender, 1000/60);
}

let GetObjectsCount = () => {
    let inp1 = document.getElementById('inp1').value;
    objectsCount = +inp1;
}

document.addEventListener('DOMContentLoaded', ObjectsCountRender());

let surname = " ";
let firstname = " ";
let lastname = " ";
let gender = true;
let height = 0;
let weight = 0;
let birthday = new Date(0);
let phone = 0;
let school = " ";
let street = " ";
let homeNumber = 0;
let classNumber = 0;
let classInitial = " ";

let ObjectMass = [];

// let schoolBoy = {
//     surname: surname,
//     name: firstname ,
//     lastname: lastname ,
//     gender: gender ,
//     height: height,
//     weight: weight,
//     birthday: birthday,
//     phone: phone,
//     school: school,
//     adress: {
//         street: street,
//         homeNumber:  homeNumber
//     },
//     class: {
//         classNumber: classNumber,
//         classInitial: classInitial
//     }
// };

let MassAddObject = () => {

    if (ObjectMass.length < objectsCount) {
        surname = document.getElementById('surname').value;
        firstname = document.getElementById('firstname').value;
        lastname = document.getElementById('lastname').value;
        gender = document.getElementById('gender').value;
        height = document.getElementById('height').value;
        weight = document.getElementById('weight').value;
        birthday = document.getElementById('birthday').value;
        phone = document.getElementById('phone').value;
        school = document.getElementById('school').value;
        street = document.getElementById('street').value;
        homeNumber = document.getElementById('homeNumber').value;
        classNumber = document.getElementById('classNumber').value;
        classInitial = document.getElementById('classInitial').value;

        let schoolBoy = {
            surname: surname,
            firstname: firstname ,
            lastname: lastname ,
            gender: gender ,
            height: height,
            weight: weight,
            birthday: birthday,
            phone: phone,
            school: school,
            adress: {
                street: street,
                homeNumber:  homeNumber
            },
            class: {
                classNumber: classNumber,
                classInitial: classInitial
            }
        };

        ObjectMass.push(schoolBoy);
    }

    return ObjectMass;
}

let MassView = () => {
    let log = document.getElementById('log');
    log.innerHTML = ' ';
    for (let i = 1; i < (ObjectMass.length + 1); ++i) {
      log.innerHTML = log.innerHTML + '<br>' +'Номер школьника : ' + i + `<br>`;
      log.innerHTML = log.innerHTML + 'Фамилия : ' + ObjectMass[i-1].surname + '<br>';
      log.innerHTML = log.innerHTML + 'Имя : ' + ObjectMass[i-1].firstname + '<br>';
      log.innerHTML = log.innerHTML + 'Отчество : ' + ObjectMass[i-1].lastname + '<br>';
      log.innerHTML = log.innerHTML + 'Пол : ' + ObjectMass[i-1].gender + '<br>';
      log.innerHTML = log.innerHTML + 'Рост : ' + ObjectMass[i-1].height + '<br>';
      log.innerHTML = log.innerHTML + 'Вес : ' + ObjectMass[i-1].weight + '<br>';
      log.innerHTML = log.innerHTML + 'День рождения : ' + ObjectMass[i-1].birthday + '<br>';
      log.innerHTML = log.innerHTML + 'Номер телефона : ' + ObjectMass[i-1].phone + '<br>';
      log.innerHTML = log.innerHTML + 'Школа : ' + ObjectMass[i-1].school + '<br>';
      log.innerHTML = log.innerHTML + 'Улица проживания : ' + ObjectMass[i-1].adress.street + '<br>';
      log.innerHTML = log.innerHTML + 'Номер дома : ' + ObjectMass[i-1].adress.homeNumber + '<br>';
      log.innerHTML = log.innerHTML + 'Класс : ' + ObjectMass[i-1].class.classNumber + ObjectMass[i-1].class.classInitial + '<br>';
    };
}

let MassSort = () => {

}