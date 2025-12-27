import 'dotenv/config';
import express from 'express';
import connectDB from './src/db/connectDB.js';
import equipmentRoutes from './src/routes/equipment.routes.js';
import maintenanceRoutes from './src/routes/maintenanceActivity.routes.js';

const app = express();

await connectDB();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Express + ES Modules + Dotenv!' });
});

app.use('/api/equipment', equipmentRoutes);
app.use('/api/maintenance', maintenanceRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: err.message || 'Internal server error'
  });
});

app.listen(PORT, () => {
  console.log(`Server: http://localhost:${PORT}`);
});