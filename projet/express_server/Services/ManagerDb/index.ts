import { UserRole } from 'src/app/shared/model/UserRole';
import { User } from 'src/app/shared/model/user.model';
import { UserDB } from './UserDB';

export class ManagerDB {
    private _userDB = new UserDB();

    getUserRole(user: User): UserRole {
        return this._userDB.getUserRole(user);
    }
}
