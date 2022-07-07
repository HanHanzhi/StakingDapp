//what we wanna know?
//num of tokens in our wallet
//num of tokens staked
//num of tokens earned

//first we need to figure out who is connected to the website using useMoralis
//useWeb3Contract by Moralis allows us to call function on any contract
import { useMoralis, useWeb3Contract } from "react-moralis";
import {
  stakingAddress,
  stakingAbi,
  rewardTokenAbi,
  rewardTokenAddress,
} from "../constants";

export default function StakeDetails() {
  const { account } = useMoralis();

  //this is how we call any function that we want using runContractFunction
  const { runContractFunction: getRtBalance } = useWeb3Contract({
    abi: rewardTokenAbi,
    contractAddress: rewardTokenAddress,
    functionName: "balanceOf",
    params: {
      account: account,
    },
  });

  console.log(account);

  //reward token address
  //reward token ABI: copy from defi-minimal file artifacts/contracts/rewardToken
  //and added to a new file con constants/rewardTokenAbi.json (same is done for staking)

  return <div>Hi from stake details</div>;
}
