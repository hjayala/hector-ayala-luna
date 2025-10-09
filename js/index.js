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

//
// Handle Message Form
//

//Select form
const messageForm = document.querySelector('form[name="leave_message"]');

//Handle Submit
messageForm.addEventListener("submit", (event) => {
    //Stop the website from refereshing
    event.preventDefault();

    //Get input values
    const userName = event.target.usersName.value;
    const userEmail = event.target.usersEmail.value;
    const message = event.target.usersMessage.value;
    
    //Select Messages section
    messageSection = document.querySelector("#messages");
    //Select messages unordered list
    messageList = messageSection.querySelector("ul");

    //Create new list item
    newMessage = document.createElement("li");
    //Set innerHTML
    newMessage.innerHTML = `
        <a href="mailto:${userEmail}">${userName}</a>
        <span>${message}</span>
    `;

    //Create remove button
    removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.type = "button";

    //Remove button click event
    removeButton.addEventListener("click", () => {
        entry = removeButton.parentNode;

        entry.remove();

        //Check whether to hide Messages section
        updateMessages();
    });

    // STRETCH GOAL: Edit button
    const editButton = document.createElement("button");
    editButton.innerText = "Edit";
    editButton.type = "button";

    //Add functionality
    editButton.addEventListener("click", () => {
        //Temporary workaround without having to add any extra interface lol:
        const newMessageText = prompt("Edit your message:", message);

        //If user didn't cancel and entered something
        if (newMessageText !== null && newMessageText.trim() !== "") {
            //Update the span with the new message
            const messageSpan = newMessage.querySelector("span");
            messageSpan.textContent = newMessageText;
        }
    });

    //Append edit button to the message
    newMessage.appendChild(editButton);

    //Add removeButton to newMessage
    newMessage.appendChild(removeButton);

    //Add new message to Messages list
    messageList.appendChild(newMessage);

    //Check whether to Messages section is hidden
    updateMessages();
    
    //Reset values in form
    event.target.reset();

    console.log(`Name: ${userName} \nEmail:${userEmail} \nMessage:${message}`);
});

// STRETCH GOAL: Hide Messages section when empty
//Function to check if the list of messages is empty
function updateMessages() {
    const messageSection = document.querySelector("#messages");
    const messageList = messageSection.querySelector("ul");

    if (messageList.children.length == 0){
        //List is empty
        messageSection.style.display = "none"; //Hide section
    } else {
        //List is NOT empty
        messageSection.style.display = "block";
    }
}
//Show/Hide Messages section upon load
updateMessages();
