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
import { Form } from "web3uikit";

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

  return (
    <div>
      <Form
        data={[
          {
            inputWidth: "50%",
            name: "Amount to stake (in ETH)",
            type: "number",
            value: "",
            key: "amountToStake",
          },
        ]}
      ></Form>
    </div>
  );
}
