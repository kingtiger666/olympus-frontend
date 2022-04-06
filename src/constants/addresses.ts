import { NetworkId } from "src/constants";

export type AddressMap = Partial<Record<NetworkId, string>>;

export const STAKING_ADDRESSES = {
  [NetworkId.TESTNET_RINKEBY]: "0x06984c3a9eb8e3a8df02a4c09770d5886185792d",
  // [NetworkId.TESTNET_RINKEBY]: "0x6d1ca8B011058C322fE859AE3Ee6e6d647a22698",
  [NetworkId.MAINNET]: "0xB63cac384247597756545b500253ff8E607a8020",
};

export const BOND_DEPOSITORY_ADDRESSES = {
  [NetworkId.TESTNET_RINKEBY]: "0x9810C5c97C57Ef3F23d9ee06813eF7FD51E13042",
  [NetworkId.MAINNET]: "0x9025046c6fb25Fb39e720d97a8FD881ED69a1Ef6",
};

export const OP_BOND_DEPOSITORY_ADDRESSES = {
  [NetworkId.TESTNET_RINKEBY]: "0x060cb087a9730E13aa191f31A6d86bFF8DfcdCC0",
  [NetworkId.MAINNET]: "0x22AE99D07584A2AE1af748De573c83f1B9Cdb4c0",
};

export const DAO_TREASURY_ADDRESSES = {
  [NetworkId.TESTNET_RINKEBY]: "0xee1520f94f304e8d551cbf310fe214212e3ca34a",
  [NetworkId.MAINNET]: "0x245cc372C84B3645Bf0Ffe6538620B04a217988B",
};

export const OHM_DAI_LP_ADDRESSES = {
  [NetworkId.MAINNET]: "0x055475920a8c93CfFb64d039A8205F7AcC7722d3",
};

export const OHM_LUSD_LP_ADDRESSES = {
  [NetworkId.MAINNET]: "0x46E4D8A1322B9448905225E52F914094dBd6dDdF",
};

export const OHM_WETH_LP_ADDRESSES = {
  [NetworkId.MAINNET]: "0x69b81152c5A8d35A67B32A4D3772795d96CaE4da",
};

export const LUSD_ADDRESSES = {
  [NetworkId.MAINNET]: "0x5f98805A4E8be255a32880FDeC7F6728C6568bA0",
};

export const DAI_ADDRESSES = {
  [NetworkId.TESTNET_RINKEBY]: "0x5eD8BD53B0c3fa3dEaBd345430B1A3a6A4e8BD7C",
  [NetworkId.MAINNET]: "0x6b175474e89094c44da98b954eedeac495271d0f",
};

export const WETH_ADDRESSES = {
  [NetworkId.TESTNET_RINKEBY]: "0xc778417e063141139fce010982780140aa0cd5ab",
  [NetworkId.MAINNET]: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
};

export const GOHM_ADDRESSES = {
  [NetworkId.TESTNET_RINKEBY]: "0xcF2D6893A1CB459fD6B48dC9C41c6110B968611E",
  // [NetworkId.TESTNET_RINKEBY]: "0x0d980FF90cc86668B16e52BdD6522eBe408001D2",
  [NetworkId.MAINNET]: "0x0ab87046fBb341D058F17CBC4c1133F25a20a52f",
  [NetworkId.ARBITRUM]: "0x8D9bA570D6cb60C7e3e0F31343Efe75AB8E65FB1",
  [NetworkId.ARBITRUM_TESTNET]: "0x950c3626B9E9798aA1a4832cEee603ECfb7741a8",
  [NetworkId.AVALANCHE]: "0x321e7092a180bb43555132ec53aaa65a5bf84251",
  [NetworkId.AVALANCHE_TESTNET]: "0x115E5979435c89eF38fB87C2D7Fc3BCA09053c54",
  [NetworkId.POLYGON]: "0xd8cA34fd379d9ca3C6Ee3b3905678320F5b45195",
  [NetworkId.FANTOM]: "0x91fa20244fb509e8289ca630e5db3e9166233fdc",
  [NetworkId.OPTIMISM]: "0x0b5740c6b4a97f90eF2F0220651Cca420B868FfB",
};

export const WSOHM_ADDRESSES = {
  [NetworkId.TESTNET_RINKEBY]: "0xe73384f11Bb748Aa0Bc20f7b02958DF573e6E2ad",
  [NetworkId.MAINNET]: "0xca76543cf381ebbb277be79574059e32108e3e65",
  [NetworkId.ARBITRUM]: "0x739ca6D71365a08f584c8FC4e1029045Fa8ABC4B",
  [NetworkId.ARBITRUM_TESTNET]: "0x3DE0150338BDeE175a8EAc6fBbBF2c55279454d5",
  [NetworkId.AVALANCHE]: "0x8cd309e14575203535ef120b5b0ab4dded0c2073",
  [NetworkId.AVALANCHE_TESTNET]: "0x8e8ffc8d41Ee4A915A1FB3940b1beAB0c2Cd5bB0",
};

export const OHM_ADDRESSES = {
  [NetworkId.TESTNET_RINKEBY]: "0xd7B98050962ec7cC8D11a83446B3217257C754B7",
  // [NetworkId.TESTNET_RINKEBY]: "0x14cD61F5d13a4E175F032B252f197B65B9c8E6dc",
  [NetworkId.MAINNET]: "0x64aa3364f17a4d01c6f1751fd97c2bd3d7e7f1d5",
};

export const V1_OHM_ADDRESSES = {
  [NetworkId.TESTNET_RINKEBY]: "0xC0b491daBf3709Ee5Eb79E603D73289Ca6060932",
  [NetworkId.MAINNET]: "0x383518188c0c6d7730d91b2c03a03c837814a899",
};

export const SOHM_ADDRESSES = {
  [NetworkId.TESTNET_RINKEBY]: "0xebED323CEbe4FfF65F7D7612Ea04313F718E5A75",
  // [NetworkId.TESTNET_RINKEBY]: "0xf8706c2d93d2641bC1d00EcEC6cA1373DcAB8F1f",
  [NetworkId.MAINNET]: "0x04906695D6D12CF5459975d7C3C03356E4Ccd460",
};

export const V1_SOHM_ADDRESSES = {
  [NetworkId.TESTNET_RINKEBY]: "0x1Fecda1dE7b6951B248C0B62CaeBD5BAbedc2084",
  [NetworkId.MAINNET]: "0x04F2694C8fcee23e8Fd0dfEA1d4f5Bb8c352111F",
};

export const MIGRATOR_ADDRESSES = {
  [NetworkId.TESTNET_RINKEBY]: "0x568c257BF4714864382b643fC8e6Ce5fbBcC6d3C",
  // [NetworkId.TESTNET_RINKEBY]: "0xccE1637DD5050e1752408147c044c819Eeeb4276",
  [NetworkId.MAINNET]: "0x184f3FAd8618a6F458C16bae63F70C426fE784B3",
  [NetworkId.ARBITRUM]: "0x1e7902a8b0adbf81042b5e30bdfa281f0b928d6d",
  [NetworkId.ARBITRUM_TESTNET]: "0xde9518c8444Fa436704Fbd9db27B3910bca9F532",
  [NetworkId.AVALANCHE]: "0xB10209BFbb37d38EC1B5F0c964e489564e223ea7",
  [NetworkId.AVALANCHE_TESTNET]: "0x9050D25977F8A19CDD5599A28bC5f55d39fb6105",
};

export const GOHM_TOKEMAK_ADDRESSES = {
  [NetworkId.MAINNET]: "0x41f6a95bacf9bc43704c4a4902ba5473a8b00263",
};

export const FUSE_POOL_6_ADDRESSES = {
  [NetworkId.MAINNET]: "0x59bd6774c22486d9f4fab2d448dce4f892a9ae25",
};

export const FUSE_POOL_18_ADDRESSES = {
  [NetworkId.MAINNET]: "0x6eDa4b59BaC787933A4A21b65672539ceF6ec97b",
};

export const FUSE_POOL_36_ADDRESSES = {
  [NetworkId.MAINNET]: "0x252d447c54F33e033AD04048baEAdE7628cB1274",
};
