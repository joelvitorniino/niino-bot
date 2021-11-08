require('dotenv').config();

module.exports = {
    dialect: "sqlite",
    define: {
        timestamps: true,
        underscored: true,
    },
  };