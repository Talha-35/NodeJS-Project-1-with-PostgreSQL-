const { Sequelize, DataTypes } = require("sequelize");

//connect to db
// postgres://user:pass@example.com:5432/dbname
const { DB_USERNAME, DB_PASSWORD, DB_HOSTNAME, DB_PORT, DB_NAME } = process.env;
const sequelize = new Sequelize(
  `postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOSTNAME}:${DB_PORT}/${DB_NAME}`
);
sequelize
  .authenticate()
  .then(() => console.log("Successfully connected to database"))
  .catch((err) => console.log("Unable to connect to database", err));

// ORM table
// recruiter table in the clarusway db

// modelname, attribute, options
const UserModel = sequelize.define(
  // define DB deki verileri çekmek için kullanılan özellik
  "recruiters",
  // tablo ismi (recruiters) default olarak çoğul olma zorunda
  {
    //attributes
    //id, firstName, lastName, createdAt, updatedAt
    firstName: {
      type: DataTypes.STRING,
      // buradaki DataTypes : Sequelize kütüphanesinden çekiliyor. direk string yazılmıyor bu şekilde yazmak lazım. yukarda desc. şeklinde sequelize'dan import ettik.
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    //options
    freezeTableName: true,
    // bu özellik eklenir ise recuiters yazan yani tablonun isimleri tekil olabilir.
  }
);

module.exports = UserModel;
