import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import { UserConnectionService } from './Services/UserConnection';

const app: express.Application = express();
const port = 8080

app.use(cors());                    //Pour autoriser le CORD.
app.use(bodyParser.json());       //Pour parser les corps des requêtes HTTP qui contiennent du JSON.

app.post('/api/connection', function(req, res) {
    var userConnectionService = new UserConnectionService();
    var connectionResult = userConnectionService.connection(req);
    
    if (connectionResult) {
        res.status(200);
    }
    else {
        res.status(401);
    }

    // todo: redirect le server express envoie l'url redirect vers page admin ou user
    res.send(JSON.stringify(connectionResult));
});

app.listen(port, () => {
    console.log(`Server express lancé sur le port ${port}`);
})