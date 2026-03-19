new Typed(".typing",{
strings:["Frontend Developer","Web Designer","Freelancer"],
typeSpeed:70,
backSpeed:40,
loop:true
})

ScrollReveal().reveal(".home",{distance:"60px",duration:2000})
ScrollReveal().reveal(".about",{origin:"bottom"})
ScrollReveal().reveal(".portfolio",{origin:"bottom"})
ScrollReveal().reveal(".contact",{origin:"bottom"})

particlesJS("particles-js",{
particles:{
number:{value:60},
size:{value:3},
move:{speed:2},
line_linked:{enable:true}
}
})

const bars=document.querySelectorAll(".skill-bar span")

window.addEventListener("scroll",()=>{
bars.forEach(bar=>{
const top=bar.getBoundingClientRect().top
if(top<window.innerHeight){
bar.style.width=bar.dataset.width
}
})
})

const counters=document.querySelectorAll(".counter")

counters.forEach(counter=>{
const update=()=>{
const target=+counter.dataset.target
const count=+counter.innerText
const speed=target/100
if(count<target){
counter.innerText=Math.ceil(count+speed)
setTimeout(update,20)
}else{
counter.innerText=target
}
}
update()
})

fetch("https://api.github.com/users/YOUR_GITHUB_Sambeetech/repos")
.then(res=>res.json())
.then(data=>{

const container=document.getElementById("github-projects")

data.slice(0,6).forEach(repo=>{

container.innerHTML+=`

<div class="github-card">
<h3>${repo.name}</h3>
<p>${repo.description || "No description"}</p>
<a href="${repo.html_url}" target="_blank">View Repo</a>
</div>
`

})

})

const modal=document.getElementById("projectModal")
const frame=document.getElementById("projectFrame")

function openProject(url){
frame.src=url
modal.style.display="block"
}

document.querySelector(".close").onclick=()=>{
modal.style.display="none"
}

// ===============================
// AUTO OPEN CHAT LIKE CHATGPT
// ===============================

window.onload = () => {

setTimeout(() => {
document.getElementById("chatBox").style.display = "block"
}, 2000)

}


// ===============================
// TOGGLE CHAT
// ===============================

function toggleChat(){
const chat = document.getElementById("chatBox")

if(chat.style.display === "block"){
chat.style.display = "none"
}else{
chat.style.display = "block"
}
}


// ===============================
// SEND MESSAGE
// ===============================

function sendMessage(){

const input = document.getElementById("userInput")
const messages = document.getElementById("chatMessages")

const userText = input.value.trim()

if(userText === "") return

// user message
messages.innerHTML += `<div class="user-message">${userText}</div>`

input.value = ""

messages.scrollTop = messages.scrollHeight

generateReply(userText)
}


// ===============================
// SMART KEYWORD AI RESPONSES
// ===============================

function generateReply(userText){

let reply = "I'm Samuel's AI assistant. Ask me about his skills, projects, or how to hire him."

const text = userText.toLowerCase()

// greetings
if(text.includes("hello") || text.includes("hi") || text.includes("hey")){
reply = "Hello 👋 Welcome to Samuel's portfolio. How can I help you today?"
}

// skills
else if(text.includes("skills") || text.includes("what can you do")){
reply = "Samuel is a frontend developer skilled in HTML, CSS, JavaScript, responsive design, and modern UI development."
}

// projects
else if(text.includes("projects") || text.includes("portfolio") || text.includes("work")){
reply = "You can scroll to the portfolio section to see Samuel's latest projects and real websites he built."
}

// hire
else if(text.includes("hire") || text.includes("contact") || text.includes("work with you")){
reply = "You can hire Samuel by sending a message in the contact section. He replies quickly."
}

// github
else if(text.includes("github") || text.includes("code")){
reply = "Check the GitHub section to see Samuel's real coding projects and source code."
}

// experience
else if(text.includes("experience") || text.includes("who is samuel")){
reply = "Samuel is a frontend developer focused on modern websites, responsive design, and user-friendly interfaces."
}

// default
typeMessage(reply)
}


// ===============================
// AI TYPING EFFECT
// ===============================

function typeMessage(text){

const messages = document.getElementById("chatMessages")

const aiDiv = document.createElement("div")
aiDiv.classList.add("ai-message")

messages.appendChild(aiDiv)

let i = 0

function typing(){

if(i < text.length){
aiDiv.innerHTML += text.charAt(i)
i++
setTimeout(typing, 20)
}

messages.scrollTop = messages.scrollHeight
}

typing()

}


// ===============================
// ENTER KEY SUPPORT
// ===============================

document.getElementById("userInput").addEventListener("keypress", function(e){
if(e.key === "Enter"){
sendMessage()
}
})


// ===============================
// VOICE CHAT (MICROPHONE)
// ===============================

// ===============================
// VOICE CHAT (MICROPHONE)
// ===============================

function startVoice() {

const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)()

recognition.lang = "en-US"

recognition.start()

recognition.onresult = function(event) {

const voiceText = event.results[0][0].transcript

document.getElementById("userInput").value = voiceText

sendMessage()

}

}


// ===============================
// WELCOME MESSAGE WHEN CHAT OPENS
// ===============================

window.onload = () => {

setTimeout(() => {

const messages = document.getElementById("chatMessages")

messages.innerHTML += `
<div class="ai-message">
👋 Hello and welcome!

I’m the AI assistant for Samuel Olurin’s portfolio.

You can ask me:
• What skills does he have?  
• Show me his projects  
• How can I hire him?  
• Send me his CV  

Just type your question below 😊
</div>
`

messages.scrollTop = messages.scrollHeight

}, 1500)

}