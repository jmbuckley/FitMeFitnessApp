module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('users',{
      user_ID: {
        type: DataTypes.STRING,
        primaryKey: true
      },
      user_name:{
        type: DataTypes.STRING
      },
      user_Email: {
        type: DataTypes.STRING
      },
      user_password:{
        type: DataTypes.STRING
      },
      google_id:{
        type: DataTypes.STRING
      }
    },{
      timestamps: false
    });
    return Users;
  }