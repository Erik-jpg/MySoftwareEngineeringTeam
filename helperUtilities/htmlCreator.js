function createManager(Manager) {
    return `<div class="card" border-radius=".25rem;"><header class="card-header-title"><p class="card-header-title">undefined</p></header><div class="content"><ul class="itemToCard"><li class="itemToLine">Name: ${Manager.name}</li><li class="itemToLine">Email: <a href="mailto:${manager.email}">${Manager.email}</a></li><li class="itemToLine">Employee I.D.: ${manager.id}</li><li class="itemToLine">Office Number: ${manager.officeNumber}</li></ul><div></div><br/>`
}

function createEngineer(Engineer) {
    return `<div class="card" border-radius=".25rem;"><header class="card-header-title"><p class="card-header-title">undefined</p></header><div class="content"><ul class="itemToCard"><li class="itemToLine">Name: ${Engineer.name}</li><li class="itemToLine">Email: <a href="mailto:${Engineer.email}">${Engineer.email}</a></li><li class="itemToLine">Employee I.D.: ${Engineer.id}</li><li class="itemToLine">Office${Engineer.name}'s Github account: <a href="https://github.com/${Engineer.github}"></a></a></li></ul><div></div><br/>`
}

function createIntern(Intern) {
    return `<div class="card" border-radius=".25rem;"><header class="card-header-title"><p class="card-header-title">undefined</p></header><div class="content"><ul class="itemToCard"><li class="itemToLine">Name: ${Intern.name}</li><li class="itemToLine">Email: <a href="mailto:${Intern.email}">${Intern.email}</a></li><li class="itemToLine">Employee I.D.: ${Intern.id}</li><li class="itemToLine">School: ${Intern.school}</li></ul><div></div><br/>`
}

function createHTML(Manager, Engineer, Intern) {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8"/>
      <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"/>
      <link rel="style.css" href="style.css">
      <title>Software Engineering Team</title>
    </head>
    
    <body>
      <h1>Software Employee Cards</h1>
      <div class="container">
        <div class="managersRow">
          <div id="managerCard" class="card">
            <div class="card-header-title">Manager</div>
                ${Manager.map(createManager).join("\n")}
            </div>
          </div>
        </div>
        <div class="engineersRow">
            <div id="engineersCard" class="card">
             <div class="card-header-title">Engineer</div>
             ${Engineer.map(createEngineer).join("\n")}
            </div>
        </div>
        <div class="internsRow">
            <div id="internsCard " class="card">
             <div class="card-header-title">Intern</div>
             ${Intern.map(createIntern).join("\n")}
            </div>
        </div>
        </div>  
    </body>
    </html>`
};

module.exports = {
    createManager,
    createEngineer,
    createIntern,
    createHTML
}