let storeInfo= JSON.parse(localStorage.getItem("userDetails"))||[]
// console.log(storeInfo)
// let loginBtn= document.querySelector("#sign")
let capture= document.querySelector("#form").addEventListener("submit",function(event){
  event.preventDefault()
	let emailId = form.email1.value
	let passId = form.pass1.value;
     
	  
	 storeInfo.forEach((el)=>{
	
		if(el.email===emailId && el.pass===passId){
			
			alert("login Sucessfull")
			window.open("index.html")
		}else{
			alert("Wrong Email or Password")
		}
	})
})
 document.querySelector("#btn_reg").addEventListener("click",function(){
	window.open("signup.html")
})