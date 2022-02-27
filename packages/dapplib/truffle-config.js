require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena forward turtle crazy reflect magic attitude grace brave bone gate'; 
let testAccounts = [
"0x80817aa0e6e280f4e0ec3d752f0b09cf14e63e58900f207b02fa18f90794a1bd",
"0xaa4cc0fe6f0fbce9eae03b7908a940fed803fbebe932c1da244d9322924ccfd2",
"0xe02f67646db6fb4dd44d4f78a024c3fc234a27d1289312521c92c4c80ed1bbc8",
"0xdbdc082d5ae18ed4efeeeae8b2d2a79a9588a603960509b8e1afa2e3c3f1ac1c",
"0xeb4883fb9beed35a8a1fbb7d0cfa4e93fb9f75c1eaa00ae94351c08bc33cfb2b",
"0x88641cf63d012964942965cf47e2dac4246f642cfb1c8ea634c5dbae5f378c0a",
"0xeb34d42907c872d224e64cef09b741faf62698b936da72c728dcadb48d86cc52",
"0xac4a6748c5ef8b2814e9e4b7dc9ce66570db479d65193c84d499d7590f14ffa9",
"0xa9de64e63058b88251e9c0a4730f04332eb463944e2a35c2a170b13d6d377979",
"0x05de6b3eebaf26cacb5a9373c1bf99fa01891f6b87a9a1609eb3ad0f8179f895"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

