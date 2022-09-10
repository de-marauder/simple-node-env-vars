
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log(`Microservices rock! ${process.env.NAME} said violently.`);
    await sleep(5000);
  }
}

main();
