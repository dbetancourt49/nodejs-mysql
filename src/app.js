import express from 'express';
import employeesRoutes from './routes/employees.routes.js';
import indexRoutes from './routes/index.routes.js';

// Create object express - app
const app = express();
// Settings

// Midlewares
app.use(express.json())
// Routes
app.use(indexRoutes);
app.use('/api',employeesRoutes);
app.use((req,res,next) =>{
    res.status(404).json({
        message : 'endpoint not found'
    })
});
export default app;