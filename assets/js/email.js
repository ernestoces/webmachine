const btn = document.getElementById("button-submit");
const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Sending...";

  const serviceID = "default_service";
  const templateID = "template_91g0glw";

  emailjs.sendForm(serviceID, templateID, this).then(
    (resp) => {
      console.log("Sent! ", resp.status);
      /* btn.value = "Send Email";
      alert("Sent!"); */
      form.reset();
    },
    (err) => {
      /* btn.value = "Send Email";
      alert(JSON.stringify(err)); */
      console.log(JSON.stringify(err));
    }
  );
});
