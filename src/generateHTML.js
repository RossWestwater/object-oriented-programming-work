

function generateManager(data) {
              
    return `<div class="card shadow col-3 p-0 mx-3 mb-5">
            <div class="card-body p-0">
              <section class="bg-primary p-3">
                <h3 class="card-title font-weight-bolder text-light">${data.name}</h3>
                <i class="fas fa-mug-hot fa-2x text-light"></i>
                <p class="card-text d-inline-flex text-light font-weight-bold">
                  Manager
                </p>
              </section>
              <section class="p-4 bg-light py-4">
                <ul class="list-group bg-light">
                  <li class="list-group-item my-1 rounded">ID: ${data.id}</li>
                  <li class="list-group-item my-1 rounded">Email: <a href="mailto:${data.email}">${data.email}</a></li>
                  <li class="list-group-item my-1 rounded">officeNumber: ${data.officeNumber}</li>
                </ul>
              </section>
            </div>
          </div>`;
          }
function generateEngineer(data) {
        
  return `
          <div class="card shadow col-3 p-0 mx-3 mb-5">
            <div class="card-body p-0">
              <section class="bg-primary p-3">
                <h3 class="card-title font-weight-bolder text-light">${data.name}</h3>
                <i class="fas fa-glasses fa-2x text-light"></i>
                <p class="card-text d-inline-flex text-light font-weight-bold">
                  Engineer
                </p>
              </section>
              <section class="p-4 bg-light py-4">
                <ul class="list-group bg-light">
                  <li class="list-group-item my-1 rounded">ID: ${data.id}</li>
                  <li class="list-group-item my-1 rounded">Email: <a href="mailto:${data.email}">${data.email}</a></li>
                  <li class="list-group-item my-1 rounded">github: <a href="https://github.com/${data.github}" target="_blank">${data.github}</a></li>
                </ul>
              </section>
            </div>
          </div>`;
          }

function generateIntern(data) {
              
  return `
          <div class="card shadow col-3 p-0 mx-3 mb-5">
            <div class="card-body p-0">
              <section class="bg-primary p-3">
                <h3 class="card-title font-weight-bolder text-light">${data.name}</h3>
                <i class="fas fa-user-graduate fa-2x text-light"></i>
                <p class="card-text d-inline-flex text-light font-weight-bold">
                  Intern
                </p>
              </section>
              <section class="p-4 bg-light py-4">
                <ul class="list-group bg-light">
                  <li class="list-group-item my-1 rounded">ID: ${data.id}</li>
                  <li class="list-group-item my-1 rounded">Email: <a href="mailto:${data.email}" target="_blank">${data.email}</a></li>
                  <li class="list-group-item my-1 rounded">School: ${data.school}</li>
                </ul>
              </section>
            </div>
          </div>`;
          }

module.exports = function generateHTML(teamInfo) {
  let cards = ''
  for (let i = 0; i < teamInfo.length; i++) {
    if (teamInfo[i].getRole() === 'Manager'){
      cards = cards + generateManager(teamInfo[i])
    }
    else if (teamInfo[i].getRole() === 'Intern') {
      cards = cards + generateIntern(teamInfo[i])
    }
    else {
      cards = cards + generateEngineer(teamInfo[i])
    }
  }
  console.log(teamInfo)
return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Employee List</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
      integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
      integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="/src/style.css" />
  </head>
  <body>
    <h1 class="bg-danger text-center py-5 mx-5 text-light font-weight-bold">My Team</h1>
    <div class="row justify-content-center mx-5 my-5">
      <div class="col-8">
        <div class="row justify-content-center">
          ${cards}
        </div>
    </div>
    </div>
  </body>
</html>`;
}
