// LOGIN FORM
async function submit() {
  let login = document.querySelector('input[name="login"]#code-input').value;
  let password = document.querySelector('input[name="password"]#code-input').value;
  if (login === '') login = 'default';
  if (password === '') password = 'default';

  console.log(`login: ${login}, password: ${password}`);
  let req = await fetch(`./checkLogin.php?login=${login}&password=${password}`);
  if (req.ok) {
    let response = await req.text();
    console.log(response);
    if (response === 'error') {
      let errorPopup = document.createElement('div');
      errorPopup.id = 'errorMsg';
      errorPopup.innerHTML = '<span>❌</span><span>Mauvais login ou mot de passe</span>';
      document.querySelector('#login-form').appendChild(errorPopup);
      setTimeout(errorPopup.remove, 2000);
    } else {
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