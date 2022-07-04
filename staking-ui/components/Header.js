import { ConnectButton } from "web3uikit";

export default function Header() {
  return (
    <nav className="p-5 border-b-2 flex flex-row">
      <ConnectButton moralisAuth={false} />
    </nav>
  );
}
