document.getElementById("sendMail").addEventListener("submit", submit);



function sendMail(contactForm) {
            emailjs.send("service_jso9n11", "template_lclscqr", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    // return false;  // To block from loading a new page
}

function submit() {
    alert("Email Sent!");
  }