const about = document.querySelectorAll('#about path');

for(let i = 0; i<about.length; i++){
	console.log(`Letter ${i} is ${about[i].getTotalLength()}`);
}