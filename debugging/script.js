
function hello (name){
   name="John"
   let phrase = `Hello , ${name} !`
   say(phrase)
}
function say(phrase){
   alert(`**${phrase}**`)
}
window.load = hello.bind(null,"Gift")