class User {
  constructor({name, id, profession, age}) {
    this.name = name;
    this.id = parseInt(id);
    this.profession = profession;
    this.birthDay = '2020' - age;
  }
}

module.exports = User;