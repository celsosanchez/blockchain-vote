async function main () {
    // We get the contract to deploy
    const Crypto = await ethers.getContractFactory("ECUToken");
    crypto = await Crypto.deploy();
    await crypto.deployed();
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });