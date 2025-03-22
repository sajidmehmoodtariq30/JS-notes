const usrProfile = {}

usrProfile.id = '123abc'
usrProfile.fullname = {
    firstName: "Sajid M",
    lastName: "Tariq"
}

// console.log(usrProfile.fullname);

const obj1 = {1:'a',2:'b'}
const obj2 = {3:'c',4:'d'}

// const obj3 = Object.assign({},obj1,obj2);  // (target , sources)


const obj3 = {...obj1, ... obj2}
// console.log(obj3);

const dummydata = [
    {
        name: "Rehan",
        age: 19
    },
    {
        name: "Haadi",
        age: 18
    },
    {
        name: "Mooez",
        age: 20
    }
]

// console.log(dummydata[0].name);


// console.log(Object.keys(usrProfile));
// console.log(Object.values(usrProfile));

// console.log(usrProfile.hasOwnProperty('id'));

const course = {
    name: "PF",
    price: 9999,
    instructor: "Aizaz"
}

const {name : nm, price, instructor : ins} = course
console.log(nm, price, ins);

const navbar = ({course}) => {
    console.log(name);
    
}

{/* <Navbar course = {course} /> */}