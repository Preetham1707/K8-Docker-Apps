const {Pool} = require('pg');
const pool =new Pool({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database:process.env.POSTGRES_DB,
    password:process.env.POSTGRES_PASSWORD,
    port:process.env.POSTGRES_PORT,
    
})
// Log when a new client connects
pool.on('connect', (client) => {
    console.log(`Connected to the database: ${process.env.POSTGRES_DB} at ${process.env.POSTGRES_HOST}`);
});

module.exports= {pool};






