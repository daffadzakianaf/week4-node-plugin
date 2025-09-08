import chalk from 'chalk';
import cowsay from 'cowsay';
import figlet from 'figlet';
import gradient from 'gradient-string';

const fullName = "Daffa Ahnaf"; 
const nim = "F1D022142";

console.log(chalk.magentaBright("======================================="));
console.log(chalk.blue.bold(`👤 Nama : ${fullName}`));
console.log(chalk.green.bold(`🎓 NIM  : ${nim}`));
console.log(chalk.magentaBright("=======================================\n"));

const motivationalMessage = "🔥 Diam tak akan menyelesaikan masalah, tapi diam juga tak akan menimbulkan masalah 🔥";
console.log(
  cowsay.say({
    text: motivationalMessage,
    e: "^^",
    T: "U ",
  })
);

figlet(fullName, function (err, data) {
  if (err) {
    console.log('Ada yang salah...');
    console.dir(err);
    return;
  }
  console.log(gradient.pastel.multiline(data));
});



