const Contractor = function(name, role){
    const getName = () => name;
    const getRole = () => role;
    const sayHello = () => console.log(`Hello, my name is ${name} and I'm on the ${role} team`);

    return {getName, getRole, sayHello};
}



const Front = function(name, role, tech){
    // const {getRole} = Contractor(role);
    const getRole = () => role
    const {getName} = Contractor(name);
    const getTech = () => tech;

    return { getName, getRole, getTech };

}

let parker = Contractor('parker', 'engineer');
console.log(parker.getRole());
console.log(parker.getName());

// let trevor = Front('trevor', 'frontoper', 'react');
// console.log(trevor.getName());
// console.log(trevor.getTech());
// console.log(trevor.getRole());

let mongrat = Front('wilson', 'frontend', 'react')

console.log(mongrat.getRole())
console.log(mongrat.getName())
console.log(mongrat.getTech())

// class Contractor {
//     constructor(name, role){
//         this._name = name
//         this._role = role
//     }
//     get name(){
//         return this._name
//     }
//     get role(){
//         return this._role
//     }
//     sayHello(){
//         console.log(`Hello, my name is ${this._name} and I'm on the ${this._role} team`)
//     }

// }

// let parker = new Contractor('dog', 'engineer')
// console.log(parker.role)
// console.log(parker.name)