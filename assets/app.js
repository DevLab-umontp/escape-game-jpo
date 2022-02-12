// LOGIN FORM
async function submit() {
  let login = document.querySelector('input[name="login"]#code-input').value;
  let password = document.querySelector('input[name="password"]#code-input').value;
  if (login === '') login = 'default';
  if (password === '') password = 'default';

  // console.log(`login: ${login}, password: ${password}`);
  let req = await fetch(`./checkLogin.php?login=${login}&password=${password}`);
  if (req.ok) {
    let response = await req.text();
    // console.log(response);
    if (response === 'error') {
      let errorPopup = document.createElement('div');
      errorPopup.id = 'errorMsg';
      errorPopup.innerHTML = '<span>❌</span><span>Mauvais login ou mot de passe</span>';
      document.querySelector('#login-form').appendChild(errorPopup);
      setTimeout(() => errorPopup.remove(), 2000);
    } else {
      document.querySelector('#main').innerHTML = response;
    }
  }
}

// DASHBOARD
function deleteIA() {
  document.querySelector('#delete-button').remove();
  let loadingImg = document.createElement('img');
  loadingImg.src = 'assets/loading.gif';
  let resDiv = document.querySelector('#res-msg');
  resDiv.appendChild(loadingImg);
  setTimeout(() => {
    loadingImg.remove();
    let textRes = document.createElement('p');
    textRes.innerHTML = "Félicitations ! 🎉️<br>Vous pouvez maintenant sortir visiter le reste de l'IUT !";
    textRes.style.fontSize = '2rem';
    textRes.style.fontFamily = 'sans-serif';
    textRes.style.fontWeight = 'bold';
    resDiv.appendChild(textRes);
  }, 1000);
}