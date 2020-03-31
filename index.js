let show=true;
let link="";

function abc()
{
if(show==true)
{
    document.getElementById("user")=true;

}
else
{
    document.getElementById("user")=false
}
}
let Enter=()=>
{
let name=document.getElementById("user").value
fetch(`https://api.github.com/users/${name}`)
.then(response=>
{
return response.json()
})
.then(data =>
{
document.getElementById('iUser').src= data.avatar_url;
document.getElementById('user-name').innerHTML= data.name;  
document.getElementById('bio').innerHTML= data.bio;  
document.getElementById('repository').innerHTML= data.public_repos;  
document.getElementById('followers').innerHTML= data.followers; 
document.getElementById('following').innerHTML= data.following;
link=data.html_url; 
abc()
})
}

let veiw_profile=function ()
{
console.log(link);
location.href=link;
}