// alert("Let's start the game!!")
// let option = ['snake', 'water', 'gun']
// let choice = prompt(`Enter your choic from ${option}`)
// let mychoice = option[Math.floor(Math.random() * option.length)]

// document.write("My choice is " + mychoice + " and your choice is " + choice + "\n")

// if(choice==='gun' && mychoice==='snake') {
//     document.write("You won")
// }else if(choice==='gun' && mychoice==='water') {
//     document.write("You lost")
// }else if(choice==='gun' && mychoice==='gun') {
//     document.write("You draw")
// }else if(choice==='snake' && mychoice==='snake') {
//     document.write("game draw")
// }else if(choice==='snake' && mychoice==='gun') {
//     document.write("You lost")
// }else if(choice==='water' && mychoice==='water') {
//     document.write("game draw")
// }else if(choice==='water' && mychoice==='snake') {
//     document.write("You lost")
// }else if(choice==='water' && mychoice==='gun') {
//     document.write("You won")
// }

alert("Let's start the game!!");
let options = ['snake', 'water', 'gun'];
let userChoice = prompt(`Enter your choice from ${options}`);
let computerChoice = options[Math.floor(Math.random() * options.length)];
document.write(Math.floor(Math.random() * options.length))

document.write("My choice is " + computerChoice + " and your choice is " + userChoice + "\n");

let outcomes = {
    'gun': {
        'snake': 'You won',
        'water': 'You lost',
        'gun': 'You draw'
    },
    'snake': {
        'snake': 'Game draw',
        'gun': 'You lost',
        'water': 'You won'
    },
    'water': {
        'snake': 'You lost',
        'water': 'Game draw',
        'gun': 'You won'
    }
};

if (outcomes[userChoice] && outcomes[userChoice][computerChoice]) {
    document.write(outcomes[userChoice][computerChoice]);
} else {
    document.write("Invalid choice");
}