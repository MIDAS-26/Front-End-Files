var hone = document.querySelector("#one")
var htwo = document.querySelector("#two")
var hthree = document.querySelector("#three")


hone.addEventListener("mouseover", function(){
	hone.textContent = "Hovering over me"
	hone.style.color = "red"
})

hone.addEventListener("mouseout", function(){
	hone.textContent = "Biggest heading 1"
	hone.style.color = "rgb(65, 68, 255)"
})


htwo.addEventListener("click", function(){
	htwo.textContent = "Clicked Me"
	htwo.style.color = "blue"
})

hthree.addEventListener("dblclick", function(){
	hthree.textContent = "Double Clicked Me"
	hthree.style.color = "red"
})
