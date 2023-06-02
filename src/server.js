import app from './app.js';
import {PORT} from './config.js';
// Init Server
app.listen(PORT);
console.log(`Server on port ${PORT}`)