let imgs = document.getElementById('img');
imgs.addEventListener("mouseenter",()=>{
	let img2 =  "https://live.staticflickr.com/8138/29099429912_0659caf55b_b.jpg"
	imgs.setAttribute("src", img2)
})
imgs.addEventListener("mouseleave",()=>{
	let img2 =  "https://images.pexels.com/photos/6785279/pexels-photo-6785279.jpeg"
	imgs.setAttribute("src", img2)
})

