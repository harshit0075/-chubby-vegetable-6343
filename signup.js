let storeInfo= JSON.parse(localStorage.getItem("userDetails"))||[]
document.querySelector("#form").addEventListener("submit",myfun)

function myfun(event){
	event.preventDefault()
	let name =document.querySelector("#name").value;
	let email= document.querySelector("#email").value;
	let con_email= document.querySelector("#confirm-email").value;
	let pass= document.querySelector("#pass").value;
	let con_pass= document.querySelector("#confirm-password").value;
	let phone_number= document.querySelector("#phone-number").value;
	let obj={
		name,email,pass,
	}
	storeInfo.push(obj)
	if(email!==con_email|| pass!==con_pass){
		alert("Wrong Email or Password")
	} 
	else{
		localStorage.setItem("userDetails",JSON.stringify(storeInfo))
		alert("Register Seccessfull")
		window.open("login.html")
	}
// 	  else{
// 		storeInfo.forEach((el)=>{
// 		if(email===el.email){
// 				alert("Already Registered")
			
			
// 		}else{
// 			localStorage.setItem("userDetails",JSON.stringify(storeInfo))
// 		}
// 	})
	
// 	console.log(storeInfo)	
// }
}