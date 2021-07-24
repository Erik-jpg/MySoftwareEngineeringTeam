function createManager (manager){
    return `<div class="card" border-radius=".25rem;"><header class="card-header-title"><p class="card-header-title">${manager.role}</p></header><div class="content"><ul class="itemToCard"><li class="itemToLine">Name: ${manager.name}</li><li class="itemToLine">Email: <a href="mailto:${manager.email}">${manager.email}</a></li><li class="itemToLine">Employee I.D.: ${manager.id}</li><li class="itemToLine">Office Number: ${manager.officeNumber}</li></ul><div></div><br/>`;
}

function createEngineer (engineer){
    return `<div class="card" border-radius=".25rem;"><header class="card-header-title"><p class="card-header-title">${engineer.role}</p></header><div class="content"><ul class="itemToCard"><li class="itemToLine">Name: ${engineer.name}</li><li class="itemToLine">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li><li class="itemToLine">Employee I.D.: ${engineer.id}</li><li class="itemToLine">Github: ${engineer.github}</li></ul><div></div><br/>`;
}

function createIntern (intern){
    return `<div class="card" border-radius=".25rem;"><header class="card-header-title"><p class="card-header-title">${intern.role}</p></header><div class="content"><ul class="itemToCard"><li class="itemToLine">Name: ${intern.name}</li><li class="itemToLine">Email: <a href="mailto:${intern.email}">${intern.email}</a></li><li class="itemToLine">Employee I.D.: ${intern.id}</li><li class="itemToLine">School: ${intern.school}</li></ul><div></div><br/>`;
}

function createHTML (manager, engineer, intern){
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
                <hr>
                ${manager.map(createManager).join('\n')}
            </div>
          </div>
        </div>
        <div class="engineersRow">
            <div class="engineersCard" class="card">
                ${engineer.map(createEngineer).join('\n')}
            </div>
        </div>
        <div class="internsRow">
            <div class="internsCard>
                ${intern.map(createIntern).join('\n')}
            </div>
        </div>
        
        
          </div>  
    </body>
    </html>`
}

module.exports = {
    createManager,
    createEngineer,
    createIntern,
    createHTML
}