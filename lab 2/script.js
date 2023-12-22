let objectsCount = 0;

let surname = " ";
let firstname = " ";
let lastname = " ";
let gender = true;
let height = 0;
let weight = 0;
let birthday = new Date(0);
let phone = 0;
let street = " ";
let homeNumber = 0;

let ObjectMass = [];


document.querySelector('.addForm').addEventListener('submit', function(event) {event.preventDefault()})

let ObjectsCountRender = () => {
    let counter = document.getElementById('objectsCount')
    counter.innerHTML = `Максимальное колличество объектов в массиве равно ` + objectsCount;
    setTimeout(ObjectsCountRender, 1000/60);
}

let GetObjectsCount = () => {
    let inp1 = document.getElementById('inp1').value;
    objectsCount = +inp1;
}

document.addEventListener('DOMContentLoaded', ObjectsCountRender);




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
        street = document.getElementById('street').value;
        homeNumber = document.getElementById('homeNumber').value;

        let person = {
            surname: surname,
            firstname: firstname ,
            lastname: lastname ,
            gender: gender ,
            height: height,
            weight: weight,
            birthday: birthday,
            phone: phone,
            adress: {
                street: street,
                homeNumber:  homeNumber
            }
        };

        ObjectMass.push(person);
    }
}

let MassView = () => {
    if (ObjectMass.length > objectsCount) {
        let newObjectMass = [];
        for (let i = 0; i < objectsCount; ++i) {
            newObjectMass.push(ObjectMass[i]);
        }
        ObjectMass = [];
        ObjectMass = newObjectMass;

    }

    let log = document.getElementById('log');
    log.innerHTML = ' ';
    for (let i = 1; i < (ObjectMass.length + 1); ++i) {
      log.innerHTML = log.innerHTML + '<br>' +'Номер человека : ' + i + `<br>`;
      log.innerHTML = log.innerHTML + 'Фамилия : ' + ObjectMass[i-1].surname + '<br>';
      log.innerHTML = log.innerHTML + 'Имя : ' + ObjectMass[i-1].firstname + '<br>';
      log.innerHTML = log.innerHTML + 'Отчество : ' + ObjectMass[i-1].lastname + '<br>';
      log.innerHTML = log.innerHTML + 'Пол : ' + ObjectMass[i-1].gender + '<br>';
      log.innerHTML = log.innerHTML + 'Рост : ' + ObjectMass[i-1].height + '<br>';
      log.innerHTML = log.innerHTML + 'Вес : ' + ObjectMass[i-1].weight + '<br>';
      log.innerHTML = log.innerHTML + 'День рождения : ' + ObjectMass[i-1].birthday + '<br>';
      log.innerHTML = log.innerHTML + 'Номер телефона : ' + ObjectMass[i-1].phone + '<br>';
      log.innerHTML = log.innerHTML + 'Улица проживания : ' + ObjectMass[i-1].adress.street + '<br>';
      log.innerHTML = log.innerHTML + 'Номер дома : ' + ObjectMass[i-1].adress.homeNumber + '<br>';
    }
}

let MassSort = () => {

    let newMass = [];
    function byField(fieldName){
        return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
    }
    let type = document.querySelector('#sortValue').value;
    switch(type) {
        case 'number':
          MassView()
          break;
      
        case 'surname':
          let surnameSort = () => {
              console.log('Сортировка по фамилии')
              newMass = ObjectMass.sort(byField('surname'));
              let log = document.getElementById('log');
              log.innerHTML = ' ';
              for (let i = 1; i < (newMass.length + 1); ++i) {
                  log.innerHTML = log.innerHTML + '<br>' + 'Фамилия : ' + newMass[i-1].surname + '<br>';
                  log.innerHTML = log.innerHTML + 'Имя : ' + newMass[i-1].firstname + '<br>';
                  log.innerHTML = log.innerHTML + 'Отчество : ' + newMass[i-1].lastname + '<br>';
                  log.innerHTML = log.innerHTML + 'Пол : ' + newMass[i-1].gender + '<br>';
                  log.innerHTML = log.innerHTML + 'Рост : ' + newMass[i-1].height + '<br>';
                  log.innerHTML = log.innerHTML + 'Вес : ' + newMass[i-1].weight + '<br>';
                  log.innerHTML = log.innerHTML + 'День рождения : ' + newMass[i-1].birthday + '<br>';
                  log.innerHTML = log.innerHTML + 'Номер телефона : ' + newMass[i-1].phone + '<br>';
                  log.innerHTML = log.innerHTML + 'Улица проживания : ' + newMass[i-1].adress.street + '<br>';
                  log.innerHTML = log.innerHTML + 'Номер дома : ' + newMass[i-1].adress.homeNumber + '<br>';
              }
          }

          surnameSort();
          break;

        case 'height':
            let heightSort = () => {
                console.log('Сортировка по росту')
                newMass = ObjectMass.sort(byField('height'));
                let log = document.getElementById('log');
                log.innerHTML = ' ';
                for (let i = 1; i < (newMass.length + 1); ++i) {

                    log.innerHTML = log.innerHTML + '<br>' + 'Фамилия : ' + newMass[i-1].surname + '<br>';
                    log.innerHTML = log.innerHTML + 'Имя : ' + newMass[i-1].firstname + '<br>';
                    log.innerHTML = log.innerHTML + 'Отчество : ' + newMass[i-1].lastname + '<br>';
                    log.innerHTML = log.innerHTML + 'Пол : ' + newMass[i-1].gender + '<br>';
                    log.innerHTML = log.innerHTML + 'Рост : ' + newMass[i-1].height + '<br>';
                    log.innerHTML = log.innerHTML + 'Вес : ' + newMass[i-1].weight + '<br>';
                    log.innerHTML = log.innerHTML + 'День рождения : ' + newMass[i-1].birthday + '<br>';
                    log.innerHTML = log.innerHTML + 'Номер телефона : ' + newMass[i-1].phone + '<br>';
                    log.innerHTML = log.innerHTML + 'Улица проживания : ' + newMass[i-1].adress.street + '<br>';
                    log.innerHTML = log.innerHTML + 'Номер дома : ' + newMass[i-1].adress.homeNumber + '<br>';
                }
            }

            heightSort();
           break;

        case 'weight':
            let weightSort = () => {
                console.log('Сортировка по весу')
                newMass = ObjectMass.sort(byField('weight'));
                let log = document.getElementById('log');
                log.innerHTML = ' ';
                for (let i = 1; i < (newMass.length + 1); ++i) {

                    log.innerHTML = log.innerHTML + '<br>' + 'Фамилия : ' + newMass[i-1].surname + '<br>';
                    log.innerHTML = log.innerHTML + 'Имя : ' + newMass[i-1].firstname + '<br>';
                    log.innerHTML = log.innerHTML + 'Отчество : ' + newMass[i-1].lastname + '<br>';
                    log.innerHTML = log.innerHTML + 'Пол : ' + newMass[i-1].gender + '<br>';
                    log.innerHTML = log.innerHTML + 'Рост : ' + newMass[i-1].height + '<br>';
                    log.innerHTML = log.innerHTML + 'Вес : ' + newMass[i-1].weight + '<br>';
                    log.innerHTML = log.innerHTML + 'День рождения : ' + newMass[i-1].birthday + '<br>';
                    log.innerHTML = log.innerHTML + 'Номер телефона : ' + newMass[i-1].phone + '<br>';
                    log.innerHTML = log.innerHTML + 'Улица проживания : ' + newMass[i-1].adress.street + '<br>';
                    log.innerHTML = log.innerHTML + 'Номер дома : ' + newMass[i-1].adress.homeNumber + '<br>';
                }
            }

            weightSort();
           break;
      
        default:
          console.log(type);
          break;
      }
      
}

let search = () => {
    let getParams = document.querySelector('#searchParams').value;
    let params = getParams.split(',');
    let somePersons = [];
    let log = document.getElementById('log');
    switch (params[0]) {
        case('имя'):
            somePersons = ObjectMass.filter(item => item.firstname === params[1]);

            log.innerHTML = ' ';
            for (let i = 1; i < (somePersons.length + 1); ++i) {

                log.innerHTML = log.innerHTML + '<br>' + 'Фамилия : ' + somePersons[i-1].surname + '<br>';
                log.innerHTML = log.innerHTML + 'Имя : ' + somePersons[i-1].firstname + '<br>';
                log.innerHTML = log.innerHTML + 'Отчество : ' + somePersons[i-1].lastname + '<br>';
                log.innerHTML = log.innerHTML + 'Пол : ' + somePersons[i-1].gender + '<br>';
                log.innerHTML = log.innerHTML + 'Рост : ' + somePersons[i-1].height + '<br>';
                log.innerHTML = log.innerHTML + 'Вес : ' + somePersons[i-1].weight + '<br>';
                log.innerHTML = log.innerHTML + 'День рождения : ' + somePersons[i-1].birthday + '<br>';
                log.innerHTML = log.innerHTML + 'Номер телефона : ' + somePersons[i-1].phone + '<br>';
                log.innerHTML = log.innerHTML + 'Улица проживания : ' + somePersons[i-1].adress.street + '<br>';
                log.innerHTML = log.innerHTML + 'Номер дома : ' + somePersons[i-1].adress.homeNumber + '<br>';
            }
            break;
        case('фамилия'):
            somePersons = ObjectMass.filter(item => item.surname === params[1]);
            log.innerHTML = ' ';
            for (let i = 1; i < (somePersons.length + 1); ++i) {

                log.innerHTML = log.innerHTML + '<br>' + 'Фамилия : ' + somePersons[i-1].surname + '<br>';
                log.innerHTML = log.innerHTML + 'Имя : ' + somePersons[i-1].firstname + '<br>';
                log.innerHTML = log.innerHTML + 'Отчество : ' + somePersons[i-1].lastname + '<br>';
                log.innerHTML = log.innerHTML + 'Пол : ' + somePersons[i-1].gender + '<br>';
                log.innerHTML = log.innerHTML + 'Рост : ' + somePersons[i-1].height + '<br>';
                log.innerHTML = log.innerHTML + 'Вес : ' + somePersons[i-1].weight + '<br>';
                log.innerHTML = log.innerHTML + 'День рождения : ' + somePersons[i-1].birthday + '<br>';
                log.innerHTML = log.innerHTML + 'Номер телефона : ' + somePersons[i-1].phone + '<br>';
                log.innerHTML = log.innerHTML + 'Улица проживания : ' + somePersons[i-1].adress.street + '<br>';
                log.innerHTML = log.innerHTML + 'Номер дома : ' + somePersons[i-1].adress.homeNumber + '<br>';
            }
            break;
        case('отчество'):
            somePersons = ObjectMass.filter(item => item.lastname === params[1]);
            log.innerHTML = ' ';
            for (let i = 1; i < (somePersons.length + 1); ++i) {

                log.innerHTML = log.innerHTML + '<br>' + 'Фамилия : ' + somePersons[i-1].surname + '<br>';
                log.innerHTML = log.innerHTML + 'Имя : ' + somePersons[i-1].firstname + '<br>';
                log.innerHTML = log.innerHTML + 'Отчество : ' + somePersons[i-1].lastname + '<br>';
                log.innerHTML = log.innerHTML + 'Пол : ' + somePersons[i-1].gender + '<br>';
                log.innerHTML = log.innerHTML + 'Рост : ' + somePersons[i-1].height + '<br>';
                log.innerHTML = log.innerHTML + 'Вес : ' + somePersons[i-1].weight + '<br>';
                log.innerHTML = log.innerHTML + 'День рождения : ' + somePersons[i-1].birthday + '<br>';
                log.innerHTML = log.innerHTML + 'Номер телефона : ' + somePersons[i-1].phone + '<br>';
                log.innerHTML = log.innerHTML + 'Улица проживания : ' + somePersons[i-1].adress.street + '<br>';
                log.innerHTML = log.innerHTML + 'Номер дома : ' + somePersons[i-1].adress.homeNumber + '<br>';
            }
            break;
        case('пол'):
            somePersons = ObjectMass.filter(item => item.gender === params[1]);
            log.innerHTML = ' ';
            for (let i = 1; i < (somePersons.length + 1); ++i) {

                log.innerHTML = log.innerHTML + '<br>' + 'Фамилия : ' + somePersons[i-1].surname + '<br>';
                log.innerHTML = log.innerHTML + 'Имя : ' + somePersons[i-1].firstname + '<br>';
                log.innerHTML = log.innerHTML + 'Отчество : ' + somePersons[i-1].lastname + '<br>';
                log.innerHTML = log.innerHTML + 'Пол : ' + somePersons[i-1].gender + '<br>';
                log.innerHTML = log.innerHTML + 'Рост : ' + somePersons[i-1].height + '<br>';
                log.innerHTML = log.innerHTML + 'Вес : ' + somePersons[i-1].weight + '<br>';
                log.innerHTML = log.innerHTML + 'День рождения : ' + somePersons[i-1].birthday + '<br>';
                log.innerHTML = log.innerHTML + 'Номер телефона : ' + somePersons[i-1].phone + '<br>';
                log.innerHTML = log.innerHTML + 'Улица проживания : ' + somePersons[i-1].adress.street + '<br>';
                log.innerHTML = log.innerHTML + 'Номер дома : ' + somePersons[i-1].adress.homeNumber + '<br>';
            }
            break;
        case('рост'):
            somePersons = ObjectMass.filter(item => item.height === params[1]);
            log.innerHTML = ' ';
            for (let i = 1; i < (somePersons.length + 1); ++i) {

                log.innerHTML = log.innerHTML + '<br>' + 'Фамилия : ' + somePersons[i-1].surname + '<br>';
                log.innerHTML = log.innerHTML + 'Имя : ' + somePersons[i-1].firstname + '<br>';
                log.innerHTML = log.innerHTML + 'Отчество : ' + somePersons[i-1].lastname + '<br>';
                log.innerHTML = log.innerHTML + 'Пол : ' + somePersons[i-1].gender + '<br>';
                log.innerHTML = log.innerHTML + 'Рост : ' + somePersons[i-1].height + '<br>';
                log.innerHTML = log.innerHTML + 'Вес : ' + somePersons[i-1].weight + '<br>';
                log.innerHTML = log.innerHTML + 'День рождения : ' + somePersons[i-1].birthday + '<br>';
                log.innerHTML = log.innerHTML + 'Номер телефона : ' + somePersons[i-1].phone + '<br>';
                log.innerHTML = log.innerHTML + 'Улица проживания : ' + somePersons[i-1].adress.street + '<br>';
                log.innerHTML = log.innerHTML + 'Номер дома : ' + somePersons[i-1].adress.homeNumber + '<br>';
            }
            break;
        case('вес'):
            somePersons = ObjectMass.filter(item => item.weight === params[1]);
            log.innerHTML = ' ';
            for (let i = 1; i < (somePersons.length + 1); ++i) {

                log.innerHTML = log.innerHTML + '<br>' + 'Фамилия : ' + somePersons[i-1].surname + '<br>';
                log.innerHTML = log.innerHTML + 'Имя : ' + somePersons[i-1].firstname + '<br>';
                log.innerHTML = log.innerHTML + 'Отчество : ' + somePersons[i-1].lastname + '<br>';
                log.innerHTML = log.innerHTML + 'Пол : ' + somePersons[i-1].gender + '<br>';
                log.innerHTML = log.innerHTML + 'Рост : ' + somePersons[i-1].height + '<br>';
                log.innerHTML = log.innerHTML + 'Вес : ' + somePersons[i-1].weight + '<br>';
                log.innerHTML = log.innerHTML + 'День рождения : ' + somePersons[i-1].birthday + '<br>';
                log.innerHTML = log.innerHTML + 'Номер телефона : ' + somePersons[i-1].phone + '<br>';
                log.innerHTML = log.innerHTML + 'Улица проживания : ' + somePersons[i-1].adress.street + '<br>';
                log.innerHTML = log.innerHTML + 'Номер дома : ' + somePersons[i-1].adress.homeNumber + '<br>';
            }
            break;
        case('деньрождения'):
            somePersons = ObjectMass.filter(item => item.birthday === params[1]);
            log.innerHTML = ' ';
            for (let i = 1; i < (somePersons.length + 1); ++i) {

                log.innerHTML = log.innerHTML + '<br>' + 'Фамилия : ' + somePersons[i-1].surname + '<br>';
                log.innerHTML = log.innerHTML + 'Имя : ' + somePersons[i-1].firstname + '<br>';
                log.innerHTML = log.innerHTML + 'Отчество : ' + somePersons[i-1].lastname + '<br>';
                log.innerHTML = log.innerHTML + 'Пол : ' + somePersons[i-1].gender + '<br>';
                log.innerHTML = log.innerHTML + 'Рост : ' + somePersons[i-1].height + '<br>';
                log.innerHTML = log.innerHTML + 'Вес : ' + somePersons[i-1].weight + '<br>';
                log.innerHTML = log.innerHTML + 'День рождения : ' + somePersons[i-1].birthday + '<br>';
                log.innerHTML = log.innerHTML + 'Номер телефона : ' + somePersons[i-1].phone + '<br>';
                log.innerHTML = log.innerHTML + 'Улица проживания : ' + somePersons[i-1].adress.street + '<br>';
                log.innerHTML = log.innerHTML + 'Номер дома : ' + somePersons[i-1].adress.homeNumber + '<br>';
            }
            break;
        case('номертелефона'):
            somePersons = ObjectMass.filter(item => item.phone === params[1]);
            log.innerHTML = ' ';
            for (let i = 1; i < (somePersons.length + 1); ++i) {

                log.innerHTML = log.innerHTML + '<br>' + 'Фамилия : ' + somePersons[i-1].surname + '<br>';
                log.innerHTML = log.innerHTML + 'Имя : ' + somePersons[i-1].firstname + '<br>';
                log.innerHTML = log.innerHTML + 'Отчество : ' + somePersons[i-1].lastname + '<br>';
                log.innerHTML = log.innerHTML + 'Пол : ' + somePersons[i-1].gender + '<br>';
                log.innerHTML = log.innerHTML + 'Рост : ' + somePersons[i-1].height + '<br>';
                log.innerHTML = log.innerHTML + 'Вес : ' + somePersons[i-1].weight + '<br>';
                log.innerHTML = log.innerHTML + 'День рождения : ' + somePersons[i-1].birthday + '<br>';
                log.innerHTML = log.innerHTML + 'Номер телефона : ' + somePersons[i-1].phone + '<br>';
                log.innerHTML = log.innerHTML + 'Улица проживания : ' + somePersons[i-1].adress.street + '<br>';
                log.innerHTML = log.innerHTML + 'Номер дома : ' + somePersons[i-1].adress.homeNumber + '<br>';
            }
            break;
        case('улицадома'):
            somePersons = ObjectMass.filter(item => item.adress.street === params[1]);
            log.innerHTML = ' ';
            for (let i = 1; i < (somePersons.length + 1); ++i) {

                log.innerHTML = log.innerHTML + '<br>' + 'Фамилия : ' + somePersons[i-1].surname + '<br>';
                log.innerHTML = log.innerHTML + 'Имя : ' + somePersons[i-1].firstname + '<br>';
                log.innerHTML = log.innerHTML + 'Отчество : ' + somePersons[i-1].lastname + '<br>';
                log.innerHTML = log.innerHTML + 'Пол : ' + somePersons[i-1].gender + '<br>';
                log.innerHTML = log.innerHTML + 'Рост : ' + somePersons[i-1].height + '<br>';
                log.innerHTML = log.innerHTML + 'Вес : ' + somePersons[i-1].weight + '<br>';
                log.innerHTML = log.innerHTML + 'День рождения : ' + somePersons[i-1].birthday + '<br>';
                log.innerHTML = log.innerHTML + 'Номер телефона : ' + somePersons[i-1].phone + '<br>';
                log.innerHTML = log.innerHTML + 'Улица проживания : ' + somePersons[i-1].adress.street + '<br>';
                log.innerHTML = log.innerHTML + 'Номер дома : ' + somePersons[i-1].adress.homeNumber + '<br>';
            }
            break;
        case('номердома'):
            somePersons = ObjectMass.filter(item => item.adress.homeNumber === params[1]);
            log.innerHTML = ' ';
            for (let i = 1; i < (somePersons.length + 1); ++i) {

                log.innerHTML = log.innerHTML + '<br>' + 'Фамилия : ' + somePersons[i-1].surname + '<br>';
                log.innerHTML = log.innerHTML + 'Имя : ' + somePersons[i-1].firstname + '<br>';
                log.innerHTML = log.innerHTML + 'Отчество : ' + somePersons[i-1].lastname + '<br>';
                log.innerHTML = log.innerHTML + 'Пол : ' + somePersons[i-1].gender + '<br>';
                log.innerHTML = log.innerHTML + 'Рост : ' + somePersons[i-1].height + '<br>';
                log.innerHTML = log.innerHTML + 'Вес : ' + somePersons[i-1].weight + '<br>';
                log.innerHTML = log.innerHTML + 'День рождения : ' + somePersons[i-1].birthday + '<br>';
                log.innerHTML = log.innerHTML + 'Номер телефона : ' + somePersons[i-1].phone + '<br>';
                log.innerHTML = log.innerHTML + 'Улица проживания : ' + somePersons[i-1].adress.street + '<br>';
                log.innerHTML = log.innerHTML + 'Номер дома : ' + somePersons[i-1].adress.homeNumber + '<br>';
            }
            break;
    }
}