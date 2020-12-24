import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import { UserConnectionService } from './Services/UserConnection';
import * as session from 'express-session';
import { ManagerDB } from './Services/ManagerDb';

const app: express.Application = express();
const port = 8080;

app.use(session({
    secret: '1234567890QWERTY'
}));
app.use(cors({credentials: true}));         // Pour autoriser le CORS.
app.use(bodyParser.json());                 // Pour parser les corps des requêtes HTTP qui contiennent du JSON.

app.post('/api/connection', function(req: express.Request, res) {
    const userConnectionService = new UserConnectionService();
    userConnectionService.connection(req, res);
});

app.get('/api/connection', function(req: express.Request, res) {
    const userConnectionService = new UserConnectionService();
    userConnectionService.getConnectedUser(req, res);
});

app.post('/api/postCereales', function(req: express.Request, res) {
    const manager = new ManagerDB();
    manager.updateCereales(req, res);
});

app.get('/api/getCereales', function(req: express.Request, res) {
    const manager = new ManagerDB();
    manager.getLotsCereales(res);
});

app.get('/api/getMateriels', function(req: express.Request, res) {
    const manager = new ManagerDB();
    manager.getMateriels(res);
});

app.post('/api/updateMateriels', function(req: express.Request, res) {
  const manager = new ManagerDB();
  manager.updateMateriels(req, res);
});

app.listen(port, () => {
    console.log(`Server express lancé sur le port ${port}`);
});
