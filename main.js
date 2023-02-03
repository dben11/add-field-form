const formContainer = document.getElementById("form-container");
const addFieldButton = document.getElementById("add-field-button");
const removeFieldButton = document.getElementById("remove-field-button");

addFieldButton.addEventListener("click", function() {
  const input1 = document.createElement("input");
  input1.type = "text";
  input1.placeholder = "Input 1";
  input1.classList.add("input-field");
  formContainer.appendChild(input1);
  
  const input2 = document.createElement("input");
  input2.type = "text";
  input2.placeholder = "Input 2";
  input2.classList.add("input-field");
  formContainer.appendChild(input2);
});

removeFieldButton.addEventListener("click", function() {
  formContainer.removeChild(formContainer.lastChild);
  formContainer.removeChild(formContainer.lastChild);
});

document.getElementById("dynamic-form").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const inputFields = document.querySelectorAll(".input-field");
  let hasError = false;
  
  for (let i = 0; i < inputFields.length; i++) {
    const input = inputFields[i];
    const errorMessage = document.createElement("div");
    errorMessage.classList.add("error");
    
    if (!input.value) {
      errorMessage.innerHTML = "This field is required";
      input.parentNode.insertBefore(errorMessage, input.nextSibling);
      hasError = true;
    } else {
      if (input.nextSibling.classList.contains("error")) {
        input.parentNode.removeChild(input.nextSibling);
      }
    }
  }
  
  if (!hasError) {
    alert("Form submitted successfully");
  }
});
