import express from 'express';
import { logger } from '../database/config';

class App {
  private app: express.Express;

  constructor() {
    this.app = express();
    this.configureMiddlewares();
    this.configureRoutes();
  }

  private configureMiddlewares() {
    this.app.use(express.json());
  }

  private configureRoutes() {
    this.app.get('/', (req, res) => res.send('hello'));
  }

  public start(port: number) {
    this.app.listen(port, () => {
      logger.info(`Server started on port ${port}`);
    });
  }
}

export default App;
