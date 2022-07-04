const stakingAddress = "0x0165878a594ca255338adfa4d48449f69242eb8f";
const rewardTokenAddress = "0x5fc8d32690cc91d4c39d9d3abcbd16989f875707";

const stakingAbi = require("./stakingAbi.json");
const rewardTokenAbi = require(".rewardTokenAbi.json");

module.exports = {
  stakingAbi,
  rewardTokenAbi,
  stakingAddress,
  rewardTokenAddress,
};
