const form = document.querySelector('.feedback-form');
let formData = { email: "", message: "" };
const localStorageKey = "feedback-form-state";

form.addEventListener("input", (evt) => {
    formData[evt.target.name] = evt.target.value.trim();
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

const savedData = localStorage.getItem(localStorageKey);
if (savedData) {
    formData = JSON.parse(savedData);
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
}

form.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const { email, message } = formData;

  if (email === "" || message === "") {
    alert("Fill please all fields");
    return;
  }
  console.log("Submitted form data:", formData);
    
  form.reset();
  localStorage.removeItem(localStorageKey);
  formData = { email: "", message: "" };
});

