import express, { Request, Response } from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/modules/student/student.route';
import { globalErrorHandler } from './middleware/globalErrorHandler';
const app = express();

app.use(cors());
app.use(express.json());

// application routes
app.use('/api/v1/student', StudentRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});


// ! globalErrorHandler 
app.use(globalErrorHandler);

export default app;
