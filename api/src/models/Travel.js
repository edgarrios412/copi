const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define("travel",{
        id:{
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue:"Admin"
        },
    },{timestamps: false})
}