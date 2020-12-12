import { Response } from 'express';
import { User, UserRole } from 'src/app/shared/model/user.model';
import { UserDB } from './UserDB';
import { CerealeDB } from './CerealeDB';

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
}
