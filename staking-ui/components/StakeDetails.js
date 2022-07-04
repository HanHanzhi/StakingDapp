//what we wanna know?
//num of tokens in our wallet
//num of tokens staked
//num of tokens earned

//first we need to figure out who is connected to the website using useMoralis
import { useMoralis } from "react-moralis";

export default function StakeDetails() {
  const { account } = useMoralis();
  console.log(account);

  //reward token address
  //reward token ABI: copy from defi-minimal file artifacts/contracts/rewardToken
  //and added to a new file con constants/rewardTokenAbi.json

  return <div>Hi from stake details</div>;
}
