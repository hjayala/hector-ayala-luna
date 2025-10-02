//
//Add Footer element
//
//Create footer element
const footer = document.createElement("footer");
footer.className = "footer";
//Append to HTML
document.body.append(footer);

//
//Insert Copyright Text in Footer
//
const today = new Date();

const thisYear = today.getFullYear();

const copyright = document.createElement("p");
copyright.innerHTML = "Hector Ayala " + thisYear + " &#169";

footer.appendChild(copyright);

//
//Add to Skills Section
//
skills = ["JavaScript", "C#", "HTML", "CSS", "Adobe Photoshop", "Adobe Animate", 
    "Adobe Illustrator", "GitHub", "Unity", "Office365", "Aseprite", "DavinciResolve"]

//Select Skills section
const skillsSection = document.querySelector("#Skills");
//Select Skills unordered list
const skillsList = skillsSection.querySelector("ul");

//Create li items from skills list
for (i = 0; i < skills.length; i++)
{
    skill = document.createElement("li");
    skill.textContent = skills[i];

    skillsList.appendChild(skill);
}