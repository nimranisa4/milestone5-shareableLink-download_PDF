// document.getElementById("resumeForm")?.addEventListener("submit",function(event){
//     event.preventDefault()

//  const profilepictureInput = document.getElementById("profilePicture")as HTMLInputElement;
// const nameElement = document.getElementById("name")as HTMLInputElement;
// const emailElement = document.getElementById("email")as HTMLInputElement;
// const phoneElement = document.getElementById("phone")as HTMLInputElement|null;
// const educationElement = document.getElementById("education")as HTMLInputElement;
// const experienceElement = document.getElementById("experience")as HTMLInputElement;
// const skillsElement = document.getElementById("skills")as HTMLInputElement;
// //** 
// const usernameElement = document.getElementById("username")as HTMLInputElement

// if(profilepictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement && 
   
//    //
   
//    usernameElement){


//    const name= nameElement.value;
//    const email= emailElement.value;
//    const phone= phoneElement.value;
//    const experience= experienceElement.value;
//    const education= educationElement.value;
//    const Skills= skillsElement.value;

//    const username = usernameElement.value;
//    const uniquePath = `resume/${username.replace(/\s+/g, '__')}__cv.html`

//    //profile picture

//    const profilepicturefile=profilepictureInput.files?.[0]
//    const profilepictureURL= profilepicturefile ? URL.createObjectURL(profilepicturefile) : "";

//     const resumeOutput = `
//     <h1>Resume<h1>
//     ${profilepictureURL ? `<img src="${profilepictureURL}"alt="profile picture" class="profile picture">`:''}
//     <p><strong>Name:</strong> ${name} </p>
//     <p><strong>email:</strong> ${email} </p>
//     <p><strong>phone Number:</strong> ${phone} </p>


//     <h>Education:<h>  
//     <p>${education}</p>

   
//     <h1>Experience:<h1>
//     <p>${experience}</p>
  
   
//     <h1>Skills:<h1>
//      <p>${Skills}</p>
//    ` ;

//    const downloadLink = document.createElement('a')
//    downloadLink.href = 'data:text/html;charset=UTF-8,' + encodeURIComponent(resumeOutput)
//    downloadLink.download= uniquePath;
//    downloadLink.textContent = 'Download your 2024 Resume';
   
//    const resumeOutputElement = document.getElementById("resumeOutput");
//    if(resumeOutputElement){
//     resumeOutputElement.innerHTML = resumeOutput;

//     resumeOutputElement.appendChild(downloadLink)

//         resumeOutputElement.style.display = "block";

//    }
// }else{
//     console.error('one or more output elements are missing');
//    }   

// });





// document.getElementById("resumeForm")?.addEventListener("submit", function(event) {
//    event.preventDefault();

//    const usernameElement = document.getElementById("username")as HTMLInputElement;
//    const nameElement = document.getElementById("name")as HTMLInputElement;
//    const emailElement = document.getElementById("email")as HTMLInputElement;
//    const phoneElement = document.getElementById("phone")as HTMLInputElement;
//    const addressElement = document.getElementById("address")as HTMLInputElement;
//    const profilePictureInput = document.getElementById("profilePicture")as HTMLInputElement;
//    const experienceElement = document.getElementById("experience")as HTMLInputElement;
//    const educationElement = document.getElementById("education")as HTMLInputElement;
//    const skillsElement = document.getElementById("skills")as HTMLInputElement;

//    if (usernameElement && nameElement && emailElement && phoneElement && addressElement &&
//        profilePictureInput && experienceElement && educationElement && skillsElement) {

//        const username = usernameElement.value;
//        const uniquePath = `resume/${username.replace(/\s+/g, '__')}__cv.html`;

//        const name = nameElement.value;
//        const email = emailElement.value;
//        const phone = phoneElement.value;
//        const address = addressElement.value;
//        const experience = experienceElement.value;
//        const education = educationElement.value;
//        const skills = skillsElement.value;

//        const profilePictureFile = profilePictureInput.files?.[0];
//        const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";

//        const resumeOutput = `
//            <h1>${name}'s Resume</h1>
//            ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profile-picture">` : ''}
//            <p><strong>Name:</strong> ${name}</p>
//            <p><strong>Email:</strong> ${email}</p>
//            <p><strong>Phone Number:</strong> ${phone}</p>
//            <p><strong>Address:</strong> ${address}</p>
//            <h2>Experience</h2><p>${experience}</p>
//            <h2>Education</h2><p>${education}</p>
//            <h2>Skills</h2><p>${skills}</p>
//        `;

//        const downloadLink = document.createElement('a');
//        downloadLink.href = 'data:text/html;charset=UTF-8,' + encodeURIComponent(resumeOutput);
//        downloadLink.download = uniquePath;
//        downloadLink.textContent = 'Download your 2024 Resume';

//        const resumeOutputElement = document.getElementById("resumeOutput");
//        if (resumeOutputElement) {
//            resumeOutputElement.innerHTML = resumeOutput;
//            resumeOutputElement.appendChild(downloadLink);
//            resumeOutputElement.style.display = "block";
//        }
//    } else {
//        console.error('One or more form elements are missing');
//    }
// });
















document.getElementById("resumeForm")?.addEventListener("submit",function(event){
    event.preventDefault()

 const profilepictureInput = document.getElementById("profilePicture")as HTMLInputElement;
const nameElement = document.getElementById("name")as HTMLInputElement;
const emailElement = document.getElementById("email")as HTMLInputElement;
const phoneElement = document.getElementById("phone")as HTMLInputElement|null;
const educationElement = document.getElementById("education")as HTMLInputElement;
const experienceElement = document.getElementById("experience")as HTMLInputElement;
const skillsElement = document.getElementById("skills")as HTMLInputElement;
//** 
const usernameElement = document.getElementById("username")as HTMLInputElement

if(profilepictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement && 
   
   //
   
   usernameElement){




   const name= nameElement.value;
   const email= emailElement.value;
   const phone= phoneElement.value;
   const experience= experienceElement.value;
   const education= educationElement.value;
   const Skills= skillsElement.value;

//***************************************** *//



   //profile picture

   const profilepicturefile=profilepictureInput.files?.[0]
   const profilepictureURL= profilepicturefile ? URL.createObjectURL(profilepicturefile) : "";

    const resumeHTML = `
    <h1>Resume<h1>
    ${profilepictureURL ? `<img src="${profilepictureURL}"alt="profile picture" class="profile picture">`:''}
    <p><strong>Name:</strong> ${name} </p>
    <p><strong>email:</strong> ${email} </p>
    <p><strong>phone Number:</strong> ${phone} </p>


    <h>Education:<h>  
    <p>${education}</p>

   
    <h1>Experience:<h1>
    <p>${experience}</p>
  
   
    <h1>Skills:<h1>
     <p>${Skills}</p>
   ` ;

//*********************************** *//

const resumeOutputElement = document.getElementById("resumeOutput")
if(resumeOutputElement){
    resumeOutputElement.innerHTML = resumeHTML;
    resumeOutputElement.classList.remove("hidden");


    // create container button

    const buttonsContainer = document.createElement("div");
    buttonsContainer.id = "buttonsContainer";
    resumeOutputElement.appendChild(buttonsContainer);


    //Add download PDF button

const downloadButton = document.createElement("button");
downloadButton.textContent = "Download as PDF";
downloadButton.addEventListener("click",()=>{
    window.print();
});
buttonsContainer.appendChild(downloadButton);


// Add shareable link button

const shareLinkButton = document.createElement("button");
    shareLinkButton.textContent = "Copy shareable Link";
    shareLinkButton.addEventListener("click", async ()=>{
        try{
            const shareableLink = `https//yourdomain.com/resume/${name.replace(
                /\s+/g,"__"
            )}_cv.html`;

            // use clip board API to copy the shareable link

            await navigator.clipboard.writeText(shareableLink);
            alert("shareable link copied to clipboard");

        }catch(err){
          console.error("Failed to copy link: ",err);
          alert("Failed to copy link to clipboard . Please try again")

        }
    });
    buttonsContainer.appendChild(shareLinkButton);
}else{
   console.error("Resume output container not  found")
}
}else{
    console.error('Form elements are missing');
   }   

});




