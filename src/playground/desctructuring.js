const person = {
    name: "Botond",
    age: 33,
    location: {
        city: 'Kuvait'
    }
};

const {name, age = 22, location: placc } = person;

//------------------------------------------------
//------------------------------------------------
//------------------------------------------------

const address = ['1173', 'Kiss utca 21',  'Budapest', 'Hungary'];

const [zip, utca, varos = 'pornoapati', orszag] = address;
const [, , varoska, orszagka] = address;