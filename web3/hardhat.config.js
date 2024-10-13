require("@matterlabs/hardhat-zksync-solc");
require("dotenv").config();
const { PRIVATE_KEY } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    zksolc: {
        version: "1.3.9",
        compilerSource: "binary",
        defaultNetwork: "lineasepolia",
        settings: {
            optimizer: {
                enabled: true,
            },
        },
    },
    networks: {
        linea_sepolia: {
            url: `https://rpc.sepolia.linea.build/`,
            accounts: [PRIVATE_KEY],
        },
        linea_mainnet: {
            url: `https://rpc.linea.build/`,
            accounts: [PRIVATE_KEY],
        },
    },
    paths: {
        artifacts: "./artifacts-zk",
        cache: "./cache-zk",
        sources: "./contracts",
        tests: "./test",
    },
    solidity: {
        version: "0.8.17",
        settings: {
            optimizer: {
                enabled: true,
                runs: 200,
            },
        },
    },
};
