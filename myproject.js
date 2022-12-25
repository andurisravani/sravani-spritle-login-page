let myFormEl = document.getElementById("myForm");

let emailEl = document.getElementById("email");
let passwordEl = document.getElementById("password");

let emailErrMsgEl = document.getElementById("emailErrMsg");
let passwordErrMsgE1 = document.getElementById("passwordErrMsg");


//validations for login
function login() {
    let usermail = "emailjs.com";
    let userpassword = "1234567";

    let mailid = emailEl.value;
    let passwordval = passwordEl.value


    //validations for profile details
     if (mailid === usermail || passwordval === userpassword) {

        let profileDetails = {
            imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
            DOB: "27.10.1999",
            Address: "1234- dBlock",
            phone_no: "9876543210"
        };

        document.getElementById("form_container").classList.add("d-none")

        let profileContainer = document.getElementById("profileContainer");
        profileContainer.classList.add("text-center", "d-flex", "flex-column", "justify-content-start")

        let imgContainer = document.getElementById("imgContainer");

        let imageElement = document.createElement("img");
        imageElement.setAttribute("src", profileDetails.imgSrc)
        imageElement.classList.add("image");
        imgContainer.appendChild(imageElement);

        let headingElement = document.createElement("h1");
        headingElement.classList.add("para");
        headingElement.textContent = "DOB : " + profileDetails.DOB;
        profileContainer.appendChild(headingElement);

        let headElement = document.createElement("h1");
        headElement.classList.add("para");
        headElement.textContent = "Address : " + profileDetails.Address;
        profileContainer.appendChild(headElement);

        let headerElement = document.createElement("h1");
        headerElement.classList.add("para");
        headerElement.textContent = "phone-no : " + profileDetails.phone_no;
        profileContainer.appendChild(headerElement);

    } else {
        
        if (emailEl.value === "" || passwordEl.value === "") {
            alert("Please enter a valid details")
           emailEl.addEventListener("blur", function(event) {
             if (event.target.value === "") {
                    emailErrMsgEl.textContent = "Required*";
                } else {
                    emailErrMsgEl.textContent = "";
                }
            });

            passwordEl.addEventListener("blur", function(event) {
                if (event.target.value === "") {
                    passwordErrMsgE1.textContent = "Required*";
                } else {
                    passwordErrMsgE1.textContent = "";
                }
            });

            myFormEl.addEventListener("submit", function(event) {
                event.preventDefault();
            });
        }

    }
}
//implementation of puzzle
function superpuzzle(val){
  let steps = [];
  let emptyrow,emptycol;

  for (let i=0; i<val.length; i++){
    for (let j=0; j<val[i].length; j++){
      if (val[i][j] ===0){
        emptyrow =i;
        emptycol =j;
        break;
      }
    }
  }
  for (let i=0; i<val.length; i++){
    for (let j =0; j<val[i].length; j++){
      if (val[i][j] !== i*val.length+j +1){
        if (emptyrow === i && (emptycol === j -1|| emptycol===j+1)){
          steps.push(val[i][j]);
          emptyrow = i;
          emptycol = j;
        }
      }
    }
  }
  return steps;
}

let input = [
  [1, 2, 3, 4],
  [5, 0, 6, 8],
  [9, 10, 7, 11],
  [13, 14, 15, 12]
];
console.log(superpuzzle(input));