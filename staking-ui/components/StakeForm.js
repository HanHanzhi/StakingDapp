//this is where people actually stake(the action stake)
//1.staking abi
//2.staking address
//3.how much user want to stake
//4. approve our reward token
import { useWeb3Contract } from "react-moralis";
import {
  rewardTokenAbi,
  rewardTokenAddress,
  stakingAbi,
  stakingAddress,
} from "../constants";

export default function StakeForm() {
  const { runContractFunction } = useWeb3Contract();
  let approveOptions = {
    abi: rewardTokenAbi,
    contractAddress: rewardTokenAddress,
    functionName: "approve",
  };
  let stakeOptions = {
    abi: stakingAbi,
    contractAddress: stakingAddress,
    functionName: "stake",
  };
}
