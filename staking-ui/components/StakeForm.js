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
import { ethers } from "ethers";

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

  async function handleStakeSubmit(data) {
    const amountToApprove = data.data[0].inputResult;
    approveOptions.params = {
      amount: ethers.utils.parseUnits(amountToApprove, "ether").toString(),
      spender: stakingAddress,
    };
    console.log("Approving...");
    const tx = await runContractFunction({
      onError: (error) => console.log(error),
      //if we confirm and it works out
      onSuccess: () => {
        //we would wan to immediately stake afterwards
        handleApproveSuccess(approveOptions.params.amount);
      },
    });
  }

  return (
    <div>
      <Form
        onSubmit={handleStakeSubmit}
        //when we submit , we pass the data field below into the handleStakeSubmit function
        data={[
          {
            inputWidth: "50%",
            name: "Amount to stake (in ETH)",
            type: "number",
            value: "",
            key: "amountToStake",
          },
        ]}
        title="Let's stake!"
      ></Form>
    </div>
  );
}
