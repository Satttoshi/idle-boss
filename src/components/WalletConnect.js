import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import styled from "styled-components";

export default function WalletConnect() {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");

        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <StyledButton onClick={openConnectModal} type="button">
                    Connect Wallet
                  </StyledButton>
                );
              }

              if (chain.unsupported) {
                return (
                  <StyledButton onClick={openChainModal} type="button">
                    Wrong network
                  </StyledButton>
                );
              }

              return (
                <>
                  <StyledNetworkButton onClick={openChainModal} type="button">
                    Wallet connected to
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 12,
                          height: 12,
                          borderRadius: 999,
                          overflow: "hidden",
                        }}
                      >
                        {chain.iconUrl && (
                          <Image
                            alt={chain.name ?? "Chain icon"}
                            src={chain.iconUrl}
                            width={12}
                            height={12}
                          />
                        )}
                      </div>
                    )}
                    {chain.name + " Network"}
                  </StyledNetworkButton>

                  <StyledAddressButton onClick={openAccountModal} type="button">
                    {account.displayName}
                    {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ""}
                  </StyledAddressButton>
                </>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
}

const StyledNetworkButton = styled.button`
  background-color: transparent;
  color: var(--1);
  appearance: none;
  border: none;
  position: absolute;
  cursor: pointer;
  width: 240px;
  height: 25px;
  border-radius: 20px;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: var(--font1);
  font-weight: 500;
  font-size: 0.67rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const StyledAddressButton = styled.button`
  background-color: var(--6);
  color: var(--1);
  appearance: none;
  border: 2px solid var(--1);
  position: absolute;
  cursor: pointer;
  width: 220px;
  height: 45px;
  border-radius: 20px;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: var(--font1);
  font-weight: 500;
  font-size: 1rem;
`;

const StyledButton = styled.button`
  appearance: none;
  border: none;
  position: absolute;
  cursor: pointer;
  width: 220px;
  height: 45px;
  border-radius: 20px;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-family: var(--font1);
  font-weight: 700;
  font-size: 1.5rem;
  color: var(--5);

  @media (hover: hover) {
    &:hover:enabled {
      background-color: var(--3);
    }
  }

  @media (hover: none) {
    &:active:enabled {
      background-color: var(--3);
    }
  }
`;
