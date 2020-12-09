import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import { UserConnectionService } from './Services/UserConnection';
import * as session from 'express-session';

const app: express.Application = express();
const port = 8080

app.use(session({
    secret: "1234567890QWERTY"
}));
app.use(cors({credentials: true}));         //Pour autoriser le CORS.
app.use(bodyParser.json());                 //Pour parser les corps des requêtes HTTP qui contiennent du JSON.

app.post('/api/connection', function(req : express.Request, res, next) {
    var userConnectionService = new UserConnectionService();
    var connectionResult = userConnectionService.connection(req, res); 
});

app.get('/api/connection', function(req : express.Request, res, next) {
    var userConnectionService = new UserConnectionService();
    var connectionResult = userConnectionService.getConnectedUser(req, res); 
});

app.listen(port, () => {
    console.log(`Server express lancé sur le port ${port}`);
})