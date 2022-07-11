require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install infant fox turn fan rival remain method grid hero fortune genius'; 
let testAccounts = [
"0xd88f6ec05e2760dcb85df0e9fde434d9259a34a35fc9beec99662f8813dd0044",
"0x3ebb3362fdaa7ead1a18546faf78a0392331a1549135f207cd45e072e8a7e588",
"0x7fcc1afda39b7ba38cf361276a8526b2da6be77f27cb22a11adc4500f3b867dc",
"0x0cea45f0b10954768ad329b58a8e9c44e219aff77a601c8aa01e7f2517f3a139",
"0x92ff969845f921a11188ffab4f11aa78c3d3e8e498650fd17408618035252322",
"0xdec73412ada89de2cd65cd36e9b2222b4c78d53d1c4db5fccad7638a5b089e9c",
"0xb2375f20e0a58db25f484cb1ece614117a5172c9f827d6fd9b00980efb783586",
"0x5aaf52f6813a21abe13016f3b3524c9c92b7b3e469538f7bef58182cd87408fb",
"0x163d989317e5898c01ebecafcbd374333ab603a7a906922700d203a632c574b5",
"0xfeca06b0734efbacd4d913b0e0acb279db104aa70673344bc2b875487f9df19a"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


