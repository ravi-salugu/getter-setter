const {web3, myAccount } = require ('./utils')

const { bytecode} = require('./contractArtifacts')

async function deploy()
{
    let r = await web3.eth.personal.sendTransaction({
        from : myAccount.address,
        gas : 800000,
        data: bytecode
    })
.on('receipt',console.log)

}

deploy()