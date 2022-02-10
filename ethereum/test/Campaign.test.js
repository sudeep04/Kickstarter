const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledFactory = require('../build/CampaignFactory.json')
const compiledCampaign = require('../build/Campaign.json')

let factory;
let accounts;
let campaign;
let camppaignAddress

beforeEach(async() => {
    accounts  = await web3.eth.getAccounts();

    factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({data: compiledFactory.bytecode})
    .send({ from: accounts[0], gas: '1000000'});

   await factory.methods.createCampaign('100').send({
        from: accounts[0], gas: '1000000'
    });

    [camppaignAddress] = await factory.methods.getDeployedCampaigns().call();
    campaign = await new web3.eth.Contract(JSON.parse(compiledCampaign.interface), camppaignAddress);
}); 

describe('Campaigns', () => {
    it('deploys a factory & campaign', () => {
        assert.ok(factory.options.address)
        assert.ok(campaign.options.address)
    });
    // it('deploys a contract', () => {
    //     assert.ok(lottery.options.address)
    // });

    // it('deploys a contract', () => {
    //     assert.ok(lottery.options.address)
    // });

    // it('deploys a contract', () => {
    //     assert.ok(lottery.options.address)
    // });

    // it('deploys a contract', () => {
    //     assert.ok(lottery.options.address)
    // });
});