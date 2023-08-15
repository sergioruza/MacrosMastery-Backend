/* eslint-disable */
const { exec } = require('child_process');

const migrationName = process.argv[2];

if (!migrationName) {
  console.error('Por favor, forneça um nome para a migração.');
  process.exit(1);
}

const command = `npx sequelize-cli migration:generate --name ${migrationName}`;
exec(command, (error, stdout) => {
  if (error) {
    console.error('Erro ao gerar a migração:', error);
    return;
  }
  console.log(stdout);
});
