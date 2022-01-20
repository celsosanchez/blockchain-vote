const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("crypto", function () {
  let crypto;
  beforeEach(async function(){
    const Crypto = await ethers.getContractFactory("ECUToken");
    crypto = await Crypto.deploy();
    await crypto.deployed();
  });

});