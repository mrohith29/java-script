alert("Hello how are you today")
let replay = prompt("Replay here ")

let permission = confirm("This website uses cookies, do you want all them?")
if(permission) {
    document.write(replay)
} else {
    document.write("Permission for cookies is denied")
}