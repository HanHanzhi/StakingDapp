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

  async function handleApproveSuccess(amountToStakeFormatted) {
    stakeOptions.params = {
      amount: amountToStakeFormatted,
    };
    console.log("Staking %d RT Token...", stakeOptions.params.amount);
    //tx means transaction
    const tx = await runContractFunction({
      params: stakeOptions,
      onError: (error) => console.log(error),
    });
    //.wait(1) = waits for 1 confirmation, this serve as an additional mechanism to ensure that
    //there is probabilistically a very low chance for a transaction to be reverted
    await tx.wait(1);
    console.log("Transaction has been confirmed by 1 block");
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
