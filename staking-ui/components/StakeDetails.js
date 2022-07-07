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
//in react we use useState to keep track of the different state
//it checks a value and renders the frontend everytime that value changes
import { useState, useEffect } from "react";
import { ethers } from "ethers";

export default function StakeDetails() {
  const { account, isWeb3Enabled } = useMoralis();
  const { rtBalance, setRtBalance } = useState("0");

  //this is how we call any function that we want using runContractFunction
  const { runContractFunction: getRtBalance } = useWeb3Contract({
    abi: rewardTokenAbi,
    contractAddress: rewardTokenAddress,
    functionName: "balanceOf",
    params: {
      account: account,
    },
  });

  //to call getRtBlance we need to use a react function call useEffect
  //useEffect(function,[dependency]), everytime any dependency changes we run the function
  useEffect(() => {
    //function: update the UI and get balances
    if (isWeb3Enabled && account) {
      updateUiValues();
    }
  }, [account, isWeb3Enabled]);

  async function updateUiValues() {
    const rtBalanceFromContract = (
      await getRtBalance({ onError: (error) => console.log(error) })
    ).toString;
    const formattedRtBalanceFromContract = ethers.utils.formatUnites(
      rtBalanceFromContract,
      "ethers"
    );
    setRtBalance(formattedRtBalanceFromContract);
  }
  console.log(account);

  //reward token address
  //reward token ABI: copy from defi-minimal file artifacts/contracts/rewardToken
  //and added to a new file con constants/rewardTokenAbi.json (same is done for staking)

  return (
    <div>
      <div>RT Blance is: {rtBalance} </div>Hi from stake details
    </div>
  );
}
