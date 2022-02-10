const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json')
const compiledCampaign = require('./build/Campaign.json')

// const provider = new HDWalletProvider(
//   'REPLACE_WITH_YOUR_MNEMONIC',
//   // remember to change this to your own phrase!
//   'https://rinkeby.infura.io/v3/15c1d32581894b88a92d8d9e519e476c'
//   // remember to change this to your own endpoint!
// );

const provider = new HDWalletProvider(
  'nut material spoil fortune liquid castle amateur horror marine endless outdoor tonight', 
  'https://rinkeby.infura.io/v3/cd79e0848c6b43a99a84e032155a04bb'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: '1000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
  provider.engine.stop();
};
deploy();

