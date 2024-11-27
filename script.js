// document.getElementById("resumeForm")?.addEventListener("submit",function(event){
//     event.preventDefault()
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;
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
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _this = this;
    var _a;
    event.preventDefault();
    var profilepictureInput = document.getElementById("profilePicture");
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var educationElement = document.getElementById("education");
    var experienceElement = document.getElementById("experience");
    var skillsElement = document.getElementById("skills");
    //** 
    var usernameElement = document.getElementById("username");
    if (profilepictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement &&
        //
        usernameElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var experience = experienceElement.value;
        var education = educationElement.value;
        var Skills = skillsElement.value;
        //***************************************** *//
        //profile picture
        var profilepicturefile = (_a = profilepictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilepictureURL = profilepicturefile ? URL.createObjectURL(profilepicturefile) : "";
        var resumeHTML = "\n    <h1>Resume<h1>\n    ".concat(profilepictureURL ? "<img src=\"".concat(profilepictureURL, "\"alt=\"profile picture\" class=\"profile picture\">") : '', "\n    <p><strong>Name:</strong> ").concat(name_1, " </p>\n    <p><strong>email:</strong> ").concat(email, " </p>\n    <p><strong>phone Number:</strong> ").concat(phone, " </p>\n\n\n    <h>Education:<h>  \n    <p>").concat(education, "</p>\n\n   \n    <h1>Experience:<h1>\n    <p>").concat(experience, "</p>\n  \n   \n    <h1>Skills:<h1>\n     <p>").concat(Skills, "</p>\n   ");
        //*********************************** *//
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeHTML;
            resumeOutputElement.classList.remove("hidden");
            // create container button
            var buttonsContainer = document.createElement("div");
            buttonsContainer.id = "buttonsContainer";
            resumeOutputElement.appendChild(buttonsContainer);
            //Add download PDF button
            var downloadButton = document.createElement("button");
            downloadButton.textContent = "Download as PDF";
            downloadButton.addEventListener("click", function () {
                window.print();
            });
            buttonsContainer.appendChild(downloadButton);
            // Add shareable link button
            var shareLinkButton = document.createElement("button");
            shareLinkButton.textContent = "Copy shareable Link";
            shareLinkButton.addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
                var shareableLink, err_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            shareableLink = "https//yourdomain.com/resume/".concat(name_1.replace(/\s+/g, "__"), "_cv.html");
                            // use clip board API to copy the shareable link
                            return [4 /*yield*/, navigator.clipboard.writeText(shareableLink)];
                        case 1:
                            // use clip board API to copy the shareable link
                            _a.sent();
                            alert("shareable link copied to clipboard");
                            return [3 /*break*/, 3];
                        case 2:
                            err_1 = _a.sent();
                            console.error("Failed to copy link: ", err_1);
                            alert("Failed to copy link to clipboard . Please try again");
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            buttonsContainer.appendChild(shareLinkButton);
        }
        else {
            console.error("Resume output container not  found");
        }
    }
    else {
        console.error('Form elements are missing');
    }
});
