import { Request, Response } from 'express';
import { User, UserRole } from 'src/app/shared/model/user.model';
import { UserDB } from './UserDB';
import { CerealeDB } from './CerealeDB';
import { MaterielDB } from './MaterielDB';

//Cette classe permet de gérer les différents composants qui interagissent avec la BD.
//Elle permet de faire des manipulations avant qu'un composant n'agisse sur la BD ou après qu'un composant ait renvoyé une valeur.
export class ManagerDB {
    
    getUserRole(user: User): UserRole {
        let userDB = new UserDB();
        return userDB.getUserRole(user);
    }

    getLotsCereales(res: Response): void {
        let cerealeDB = new CerealeDB();
        let cereales = cerealeDB.getLotsCereales();
        res.status(200).json(cereales);
    }

    updateCereales(req : Request, res: Response): void {
        let cerealeDB = new CerealeDB();
        cerealeDB.updateCereales(req, res);
    }

  
    getMateriels(res: Response): void {
        let materielDB = new MaterielDB();
        let materiels = materielDB.getMateriels();
        res.json(materiels);
    }
}
