import * as express from 'express';
import { UserConnexionService } from './Services/UserConnexion';

const app: express.Application = express();
const port = 8080

var userConnexionService = new UserConnexionService();
userConnexionService.register_callbacks(app);

app.listen(port, () => {
    console.log(`Server express lance sur le port ${port}`)
})