const timer1 = function(num) {
  setTimeout(() => {
    process.stdout.write("\x07");
    console.log(`Timer set for ${num} seconds has ended.`);
  }, num * 1000);
};

const timers = process.argv.slice(2);

const numericTimers = timers.map(Number).filter(num => !isNaN(num) && num > 0);

numericTimers.forEach(timer1);

if (numericTimers.length === 0) {
  console.log('No valid timers set.');
} else {
  numericTimers.forEach(num => console.log(`Timer set for ${num} seconds.`));
}