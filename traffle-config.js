require("babel-register")
require("bable-polyfill")

module.exports = {
    netwoks: {
        development: {
            host: "127.0.0.1:7545",
            port: "7545",
            netwok_id: "*",
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