
let container=document.querySelector(".container");
let h1=document.querySelector(".h1");
let darkLightmode=document.querySelector(".darkLightmode")
let plight=document.querySelector(".plight");
let sun=document.querySelector(".sun");
let form=document.querySelector(".form");
let input=document.querySelector(".input")
let noRessult=document.querySelector(".noRessult");
let inputBtn=document.querySelector(".inputBtn");
let main=document.querySelector(".main");
let avatar=document.querySelector(".avatar");
let login=document.querySelector(".login");
let nameLittle=document.querySelector(".nameLittle");
let createDate=document.querySelector(".createDate");
let bio=document.querySelector(".bio");
let activities=document.querySelector(".activities");
let reposNumb=document.querySelector(".reposNumb");
let followersNumb=document.querySelector(".followersNumb");
let followingNumb=document.querySelector(".followingNumb");
let place=document.querySelector(".place");
let github=document.querySelector(".github");
let twitter=document.querySelector(".twitter");
let git2=document.querySelector(".git2");


darkLightmode.addEventListener("click", ()=>{
        lightMode();
});


function lightMode(){
 container.classList.toggle("lightContainer");

 let sunImg=sun;
 if(container.classList.contains("lightContainer")){
    sunImg.src="./assets/moon.svg";
 }else{
    sunImg.src="./assets/sun.svg";
 }

 h1.classList.toggle("lightH1");

 plight.classList.toggle("lightPlight");

 if(container.classList.contains("lightContainer")){
    plight.innerHTML="DARK"
 }else{
    plight.innerHTML="LIGHT"
 }

 form.classList.toggle("lightForm");


 main.classList.toggle("lightMain");

 activities.classList.toggle("lightActivities");

 reposNumb.classList.toggle("lightReposNumb");

 followersNumb.classList.toggle("lightReposNumb");

 followingNumb.classList.toggle("lightReposNumb");

 place.classList.toggle("lightPlace");

 github.classList.toggle("lightGithub");

 twitter.classList.toggle("lightTwitter");

 git2.classList.toggle("lightGit2");

 input.classList.toggle("lightInput")

}




form.addEventListener("submit", async (event) => {
  event.preventDefault(); 
  const username = input.value.trim();
  if (username !== "") {
      try {
          const response = await fetch(`https://api.github.com/users/${username}`);

          if (response.ok) {
              const data = await response.json();
              displayUserData(data);
          } else if (response.status === 404) {
              
              noRessult.textContent = "User Not Found.";
              main.style.display = "none";

          } else {
              throw new Error("Error fetching data.");
          }
      } catch (error) {
          
          noRessult.textContent = "Error fetching data. Please try again later.";
          main.style.display = "none";

      }
  } else {
     
      noRessult.textContent = "Please enter a GitHub username.";
      main.style.display = "none";
  }
});


function cutLength(str, limit){
  if(str.length>limit){
    return  str.substring(str.length-limit)+ "...";
  }
  return str;
}

function displayUserData(userData) {
 
  noRessult.textContent = ""; 
  main.style.display = "flex"; 
  avatar.querySelector(".img").src = userData.avatar_url;
  login.textContent = userData.login;
  nameLittle.textContent=userData.name;
  createDate.textContent = ` ${"Joined  "+new Date(userData.created_at).toLocaleDateString()}`;
  bio.textContent=userData.bio;
  reposNumb.textContent=userData.public_repos;
  followersNumb.textContent=userData.followers;
  followingNumb.textContent=userData.following;
  place.textContent=userData.location || "Not Avaliable"

  github.innerHTML = userData.blog
  ? `<a href="${userData.blog}" target="_blank">${cutLength(userData.blog, 20)}</a>`
  : "Not Available";



  twitter.innerHTML=userData.twitter_username
  ? `<a href="${userData.twitter_username}" target="_blank">${cutLength(twitter_username, 20)}</a>`
  : "Not Available";



  git2.innerHTML=userData.company
  ? `<a href="${userData.company}" target="_blank">${cutLength(company, 20)}</a>`
  : "Not Available";


}