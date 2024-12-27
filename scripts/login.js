import { baseurl } from "./baseurl.js";
let form=document.getElementById("form");
form.addEventListener("submit",function(){
    event.preventDefault()
    let email=form.email.value;
    let password=form.password.value;
    let userObj={email,password};
    // check email is present in the db
    fetch(`${baseurl}/users`)
    .then((res)=>res.json())
    .then((data)=>{
        let user=data.filter((el,i)=>el.mail==email)
        if(user.length!==0){
            if(user[0].password==password){
                alert("Login successful...");
                window.location.href="todo.html"
            }else{
                alert("password is wrong, please login with right password")
            }
        } else{
            
                alert("password is wrong, please signup.... ");
                window.location.href="signup.html";
        
        }
            }).catch((err)=>{
            console(err);
            alert("something went wrong,please try again later");
        })
    
});