const abi = require('./abi')
const Web3 = require('web3');
const rpcURL = 'https://data-seed-prebsc-2-s2.binance.org:8545';
const web3 = new Web3(rpcURL);
const address = '0x56E020848EEdED7766Da1F096c790eF86b92e4B3';
const contract = new web3.eth.Contract(abi, address);
contract.methods.getCounter().call((err, result) => {
    console.log(result);
})