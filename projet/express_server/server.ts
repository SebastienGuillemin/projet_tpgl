import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import { UserConnectionService } from './Services/UserConnection';

const app: express.Application = express();
const port = 8080

app.use(cors());                    //Pour autoriser le CORD.
app.use(bodyParser.json());       //Pour parser les corps des requêtes HTTP qui contiennent du JSON.

app.post('/connection', function(req, res) {
    var userConnectionService = new UserConnectionService();
    res.status(200);
    res.send(userConnectionService.connection(req));
});

app.listen(port, () => {
    console.log(`Server express lancé sur le port ${port}`);
})