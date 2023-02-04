const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    goerli: {
      provider: () => new HDWalletProvider("genius giant social mad giggle wear equip crack cupboard inform episode jazz", "https://goerli.infura.io/v3/23b7e64ba6504ad7be936bba6f37090d"),
      network_id: '5',
      gas: 4465030
    }
  },
  compilers: {
    solc: {
      version: "0.6.0",    // Fetch exact version from solc-bin (default: truffle's version)
    }
  }
};