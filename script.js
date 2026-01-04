let imgs = document.getElementById('img');
let img1 = "https://images.pexels.com/photos/6785279/pexels-photo-6785279.jpeg"
let img2 = " https://live.staticflickr.com/8138/29099429912_0659caf55b_b.jpg"
imgs.addEventListener("mouseenter",()=>{
	imgs.setAttribute("src", img2)
})
imgs.addEventListener("mouseleave",()=>{
	imgs.setAttribute("src", img1)
})

