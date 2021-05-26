
var text = "Niyongira Passy", speed = 300, id = 1;
var txt = document.querySelector("#txt");

type_text();

function type_text(){
	let span = '<span class="cursor">_</span>';
    txt.innerHTML = `${text.slice(0,id)} ${span}`;
    id++;
    setTimeout(type_text,100);
}

document.addEventListener('scroll',function(){
	if(scrollY > 2 && scrollY < 850){
		//console.log('a' + window.scrollY);
		document.querySelector('ul').classList.add('active');
	}
	else if(scrollY > 900){
		//console.log(window.scrollY);
		document.querySelector('ul').classList.add('nav_white');
	}
	else if(scrollY < 890){
		document.querySelector('ul').classList.remove('active');
		document.querySelector('ul').classList.remove('nav_white');
	}
})
