const music = document.getElementById("bgMusic");

function startMusic(){
    music.play().catch(err=>{
        console.log("Audio blocked:", err);
    });
}

// ANY FIRST USER ACTION
document.addEventListener("click", startMusic, { once: true });
document.addEventListener("touchstart", startMusic, { once: true });
const photoCaptions=[
"I don't know if you realize it, but this is the face that makes my whole day better.",
"Sometimes I just stare at your photos and wonder how I got so lucky to have you.",
"In a world full of people, you're still my favorite person to look at.",
"Out of everything we've shared, this simple moment means more to me than words can explain.",
"That little boy had no idea he'd grow up to become someone's whole heart.",
"No matter how many pictures I have of you, they never feel enough.",
"I wish I could go back in time just to tell this little kid how loved he would be one day.",
"If home was a person, it would probably feel a lot like you.",
"Out of all my favorite memories, you are still the best one."
];

const videoCaptions=[
"This moment feels small… but it holds my entire world.",
"Your eyes say everything I feel inside.",
"Just you being you is my favorite feeling.",
"I replay this moment in my heart again and again.",
"Happiness looks like this when it’s you.",
"Some memories never fade.",
"I don’t know how to explain it… but this feels like peace.",
"No matter how many times I see this, it still feels new."
];

document.querySelectorAll("img,video").forEach(el=>{
el.addEventListener("click",()=>{

document.getElementById("popup").style.display="flex";

let img=document.getElementById("popupImg");
let vid=document.getElementById("popupVideo");
let cap=document.getElementById("caption");

img.style.display="none";
vid.style.display="none";

if(el.dataset.type==="img"){
img.style.display="block";
img.src=el.src;
cap.innerText=photoCaptions[el.dataset.index];
}else{
vid.style.display="block";
vid.src=el.src;
cap.innerText=videoCaptions[el.dataset.index];
vid.play();
}

});
});

document.getElementById("close").onclick=()=>{
document.getElementById("popup").style.display="none";
document.getElementById("popupVideo").pause();
};
document.getElementById("backBtn").onclick=()=>{
document.getElementById("popup").style.display="none";

const video=document.getElementById("popupVideo");
video.pause();
};