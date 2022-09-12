const formEl = document.querySelector(".login-form")

formEl.addEventListener("submit", (event) => {
  event.preventDefault()
  const {
    elements: { email, password },
  } = event.currentTarget

  if (email.value === "" || password.value === "") {
    alert("Заполнить все поля")
  }

  const object = { Email: email.value, Password: password.value }

  formEl.reset()
})
