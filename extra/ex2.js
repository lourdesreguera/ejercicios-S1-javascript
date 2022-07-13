const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
const foodSchedule = [{name: "Salad", isVegan: true},{name: "Salmon", isVegan: false}, {name: "Tofu", isVegan: true}, {name: "Burger", isVegan: false}, {name: "Rice", isVegan: true}, {name: "Pasta", isVegan: true}];

// for (let i = 0; i < foodSchedule.length; i++) {
//     if (!foodSchedule[i].isVegan) {
//         let fruit;
//         for (let index = 0; index < fruits.length; index++) {
//             fruit = fruits[i];
//         }
//         foodSchedule[i].name = fruit;
//         foodSchedule[i].isVegan = true;
//     }
// }

// console.log(foodSchedule); 

for (let index = 0; index < foodSchedule.length; index++) {
    if(!foodSchedule[index].isVegan){
        foodSchedule[index].name = fruits.shift();
        foodSchedule[index].isVegan = true;
    }
}

console.log(foodSchedule);