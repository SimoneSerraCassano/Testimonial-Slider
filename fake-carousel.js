let john = document.getElementById("john")
let tanya = document.getElementById("tanya")

tanya.style.display = "none";

function nextTestimonial() {
  if (john.style.display === "none") {
    john.style.display = "block";
    tanya.style.display = "none";
  } else {
    john.style.display = "none";
    tanya.style.display = "block";
  }
}
