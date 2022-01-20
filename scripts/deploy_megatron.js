async function main () {
    // We get the contract to deploy
    const Megatron = await ethers.getContractFactory("Megatron");
    megatron = await Megatron.deploy();
    await megatron.deployed();
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });