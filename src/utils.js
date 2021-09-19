const Web3 = require('Web3')

const web3 = new Web3('http://localhost:8545')

// console.log(web3)



const privateKey = '0xc0259b339ece7de34419bab10bbc1c393e64d7bc81015cc0a0cf9aa08f512cea'
const myAccount = web3.eth.accounts.wallet.add(privateKey);

// console.log(myAccount)

module.exports = {
    web3 : web3,
    myAccount : myAccount
}