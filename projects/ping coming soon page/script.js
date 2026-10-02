const subscribeForm = document.querySelector(".subscribe-form");
const emailInput = document.querySelector("#email");
const emailFeedback = document.querySelector("#email-feedback");

subscribeForm.noValidate = true;

function showFeedback(message, type) {
  emailFeedback.textContent = message;
  emailFeedback.className = `form-feedback form-feedback--${type}`;
  emailFeedback.hidden = false;
  emailInput.setAttribute("aria-invalid", String(type === "error"));
}

function clearFeedback() {
  emailFeedback.textContent = "";
  emailFeedback.hidden = true;
  emailInput.setAttribute("aria-invalid", "false");
}

subscribeForm.addEventListener("submit", (event) => {
  event.preventDefault();

  emailInput.value = emailInput.value.trim();

  if (!emailInput.value) {
    showFeedback("Whoops! It looks like you forgot to add your email", "error");
    emailInput.focus();
    return;
  }

  if (emailInput.validity.typeMismatch) {
    showFeedback("Please provide a valid email address", "error");
    emailInput.focus();
    return;
  }

  showFeedback(
    "Your email address is valid, but subscriptions are not connected yet.",
    "success",
  );
});

emailInput.addEventListener("input", clearFeedback);
