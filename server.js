const app = require('./app');

app.set('port', 3001);
const server = app.listen(app.get('port'), ()=>{
    console.log("Servido Rodando Na Porta " +server.address().port);
});