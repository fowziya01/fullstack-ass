import { baseurl } from "./baseurl.js";
let form=document.getElementById("form");
form.addEventListener("submit",function(){
    event.preventDefault()
    let username=form.username.value;
    let email=form.email.value;
    let password=form.password.value;
    let mobile=form.mobile.value;
    let gender=form.gender.value;
    let userObj={username,email,password,mobile,gender};
    // check email is present in the db
    fetch(`${baseurl}/users`)
    .then((res)=>res.json())
    .then((data)=>{
        let user=data.filter((el,i)=>el.mail==email)
        if(user.length!==0){
            alert("User already registered")
        } else{
            fetch(`${baseurl}/users`,{
            method:"POST"  ,
            headers:{
                "content-type":"application/json"
            } , 
             body:JSON.stringify(userObj)       
            
            }).then(()=>{
                alert("SignUp successfull");
            });
        }
            }).catch((err)=>{
            console(err);
            alert("something went wrong,please try again later");
        })
    
});