// LOGIN FORM
async function submit() {
  let login = document.querySelector('input[name="login"]#code-input').value;
  let password = document.querySelector('input[name="password"]#code-input').value;
  console.log(`login: ${login}, password: ${password}`);
  let req = await fetch(`./checkLogin.php?login=${login}&password=${password}`);
  if (req.ok) {
    let response = await req.text();
    if (response !== 'error') {
      document.querySelector('#main').innerHTML = response;
    }
  }
}

// DASHBOARD
function deleteIA() {
  document.querySelector('#delete-button').remove();
  document.querySelector('#res-msg')
      .textContent = 'Nice ! Bien ouèj vous avez sauvé la Terre ✅';
}