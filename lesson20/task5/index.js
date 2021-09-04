/* eslint-disable max-classes-per-file */

export class User {
  constructor(id, name, sessionId) {
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get sessionId() {
    return this._sessionId;
  }
}

export class UserRepository {
  constructor(users) {
    Object.freeze(users);
    this._users = users;
  }

  get users() {
    return this._users;
  }

  getUserNames() {
    return this.users.map((el) => el.name);
  }

  getUserIds() {
    return this.users.map((el) => el.id);
  }

  getUserNameById(userId) {
    return this.users.filter((el) => el.id === userId).map((el) => el.name)[0];
  }
}

const users = [
  { name: 'Tom', id: '123', sessionId: '467' },
  { name: 'Len', id: '322', sessionId: '870' },
];

const user = new User('1', 'Tom', 'session-id');
const userRepo = new UserRepository(users);
console.log(userRepo.getUserById('123'));

// получить свойства можем
// console.log(user.id); // ===> '1'
// console.log(user.name); // ===> 'Tom'
// console.log(user.sessionId); // ===> 'session-id'

// но изменить эти свойства нельзя
// user.name = 'Bob'; // пытаемся изменить старое значение
// console.log(user.name); // ===> 'Tom' - но изменение проигнорировано, так как setter отсутствует
