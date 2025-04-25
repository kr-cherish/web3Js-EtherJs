import Account from "@/components/Account";
import AbiEncodeDecode from "@/components/abiEncodeDecode";
import ContractTest from "@/components/contractTest";
import ReadOnlyProviderDemo from "@/components/etherProvider";
import SendEther from "@/components/etherjs";
import ReadSmartContract from "@/components/smartContract";
import WalletInfo from "@/components/walletInfo";
export default function Home() {
  return (
    <div>
      {/* <HomePage/> */}
      {/* <SendEther/> */}

      {/* <WalletInfo/> */}

      {/* <ReadSmartContract/> */}

      {/* <ReadOnlyProviderDemo/> */}

      <AbiEncodeDecode/>
      <Account/>
      <ContractTest/>
    </div>
  );
}
