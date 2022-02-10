import web3 from "./web3";

import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x1AAB8783AA79FabeedFb62503c10F7307e547163'
);

export default instance;