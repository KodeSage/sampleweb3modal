/** @format */

import { useWeb3Modal, Web3Button } from "@web3modal/react";
import { useAccount, useConnect, useDisconnect } from "wagmi";

export default function HomePage() {
  const { address, isConnected } = useAccount();
   const { disconnect } = useDisconnect();
	const { open} = useWeb3Modal();

	return (
		<>
			<div className="container">
				{/* Use predefined button */}
				{/* <Web3Button /> */}

				{/* Alternatively Use custom button */}
				<div>
					{!isConnected && <button onClick={() => open()}>Custom</button>}
				</div>

				<div>
					{isConnected && (
						<div>
							<p>{address}</p>
							<button onClick={() => disconnect()}>Disconnect</button>
						</div>
					)}
				</div>
			</div>
		</>
	);
}
