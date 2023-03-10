"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Users", {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING,
            },
            email: { type: Sequelize.STRING },
            password: { type: Sequelize.STRING },
            name: { type: Sequelize.STRING },
            role_code: { type: Sequelize.STRING },
            pid: { type: Sequelize.TEXT("long") },
            singerId: { type: Sequelize.TEXT("long") },
            sid: { type: Sequelize.TEXT("long") },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Users");
    },
};
