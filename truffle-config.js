require("babel-register")
require("babel-polyfill")

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1:8545",
      port: 8545,
      network_id: "5777",
    },
  },
  contracts_directory: "./src/contracts/",
  contracts_build_directory: "./src/truffle_abis/",
  compilers: {
    solc: {
      version: "^0.8.0",
      optimizer: {
        enabled: true,
        runs: 200,
      }
    }
  }
}
