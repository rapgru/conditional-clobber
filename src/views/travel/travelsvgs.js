import axios from 'axios';

/* eslint-disable import/no-webpack-loader-syntax */
const womanBikini = '/img/svgs/Travel/Woman/Bikini.svg';
const womanBoots = '/img/svgs/Travel/Woman/Boots.svg';
const womanCap = '/img/svgs/Travel/Woman/Cap.svg';
const womanCollartop = '/img/svgs/Travel/Woman/Collartop.svg';
const womanCroptop = '/img/svgs/Travel/Woman/Croptop.svg';
const womanEveryday = '/img/svgs/Travel/Woman/Everyday.svg';
const womanFlat = '/img/svgs/Travel/Woman/Flat.svg';
const womanGlove = '/img/svgs/Travel/Woman/Glove.svg';
const womanPullover = '/img/svgs/Travel/Woman/Pullover.svg';
const womanRain = '/img/svgs/Travel/Woman/Rain.svg';
const womanSkirt = '/img/svgs/Travel/Woman/Skirt.svg';
const womanSpringAutumn = '/img/svgs/Travel/Woman/SpringAutumn.svg';
const womanStrapless = '/img/svgs/Travel/Woman/Strapless.svg';
const womanStraplesstop = '/img/svgs/Travel/Woman/Straplesstop.svg';
const womanStraplong = '/img/svgs/Travel/Woman/Straplong.svg';
const womanStrapshort = '/img/svgs/Travel/Woman/Strapshort.svg';
const womanStraptop = '/img/svgs/Travel/Woman/Straptop.svg';
const womanTShirt = '/img/svgs/Travel/Woman/T-Shirt.svg';
const womanTightskirt = '/img/svgs/Travel/Woman/Thightskirt.svg';
const womanTop = '/img/svgs/Travel/Woman/Top.svg';
const womanTrouserslong = '/img/svgs/Travel/Woman/Trouserslong.svg';
const womanTrousersshort = '/img/svgs/Travel/Woman/Trousersshort.svg';
const womanWinter = '/img/svgs/Travel/Woman/Winter.svg';
const womanSock = '/img/svgs/Travel/Woman/Sock.svg';
const womanUnderwear = '/img/svgs/Travel/Woman/Underwear.svg';
const womanBra = '/img/svgs/Travel/Woman/BH.svg';

const manBikini = '/img/svgs/Travel/Man/Bikini.svg';
const manBoots = '/img/svgs/Travel/Man/Boots.svg';
const manCap = '/img/svgs/Travel/Man/Cap.svg';
const manCollarpullover = '/img/svgs/Travel/Man/Collarpullover.svg';
const manGlove = '/img/svgs/Travel/Man/Glove.svg';
const manLongshirt = '/img/svgs/Travel/Man/Longshirt.svg';
const manRain = '/img/svgs/Travel/Man/Rain.svg';
const manSneakers = '/img/svgs/Travel/Man/Sneakers.svg';
const manSpringAutumn = '/img/svgs/Travel/Man/SpringAutumn.svg';
const manStraptop = '/img/svgs/Travel/Man/Straptop.svg';
const manTShirtU = '/img/svgs/Travel/Man/T-ShirtU.svg';
const manTShirtV = '/img/svgs/Travel/Man/T-Shirtv.svg';
const manTrousersLong = '/img/svgs/Travel/Man/Trouserslong.svg';
const manTrousersMiddle = '/img/svgs/Travel/Man/Trousersmiddle.svg';
const manTrousersShort = '/img/svgs/Travel/Man/Trousersshort.svg';
const manWinter = '/img/svgs/Travel/Man/Winter.svg';
const manSock = '/img/svgs/Travel/Man/Sock.svg';
const manUnderwear = '/img/svgs/Travel/Man/Boxershort.svg';

const svgs = {
  womanBikini: {
    name: 'womanBikini',
    gender: 'female',
    type: 'bikini',
    svg: womanBikini,
    display: 'bikini',
    holds: Infinity,
  },
  womanBoots: {
    name: 'womanBoots',
    gender: 'female',
    type: 'shoesCold',
    svg: womanBoots,
    display: 'winter shoes',
    holds: Infinity,
  },
  womanCap: {
    name: 'womanCap',
    gender: 'female',
    type: 'cap',
    svg: womanCap,
    display: 'cap',
    holds: Infinity,
  },
  womanCollartop: {
    name: 'womanCollartop',
    gender: 'female',
    type: 'collartop',
    svg: womanCollartop,
    display: 'top with collar',
    holds: 2,
  },
  womanCroptop: {
    name: 'womanCroptop',
    gender: 'female',
    type: 'croptop',
    svg: womanCroptop,
    display: 'croptop',
    holds: 2,
  },
  womanEveryday: {
    name: 'womanEveryday',
    gender: 'female',
    type: 'shoesEverday',
    svg: womanEveryday,
    display: 'sneakers',
    holds: Infinity,
  },
  womanFlat: {
    name: 'womanFlat',
    gender: 'female',
    type: 'shoesWarm',
    svg: womanFlat,
    display: 'flat shoes',
    holds: Infinity,
  },
  womanGlove: {
    name: 'womanGlove',
    gender: 'female',
    type: 'gloves',
    svg: womanGlove,
    display: 'gloves',
    holds: Infinity,
  },
  womanPullover: {
    name: 'womanPullover',
    gender: 'female',
    type: 'pullover',
    svg: womanPullover,
    display: 'pullover',
    holds: 3,
  },
  womanRain: {
    name: 'womanRain',
    gender: 'female',
    type: 'rubberboots',
    svg: womanRain,
    display: 'rubberboots',
    holds: Infinity,
  },
  womanSkirt: {
    name: 'womanSkirt',
    gender: 'female',
    type: 'skirt',
    svg: womanSkirt,
    display: 'skirt',
    holds: 3,
  },
  womanSpringAutumn: {
    name: 'womanSpringAutumn',
    gender: 'female',
    type: 'jacketSpringAutumn',
    svg: womanSpringAutumn,
    display: 'light jacket',
    holds: 4,
  },
  womanStrapless: {
    name: 'womanStrapless',
    gender: 'female',
    type: 'dressStrapless',
    svg: womanStrapless,
    display: 'strapless dress',
    holds: 2,
  },
  womanStraplesstop: {
    name: 'womanStraplesstop',
    gender: 'female',
    type: 'straplesstop',
    svg: womanStraplesstop,
    display: 'strapless top',
    holds: 2,
  },
  womanStraplong: {
    name: 'womanStraplong',
    gender: 'female',
    type: 'dressStraplong',
    svg: womanStraplong,
    display: 'dress',
    holds: 2,
  },
  womanStrapshort: {
    name: 'womanStrapshort',
    gender: 'female',
    type: 'dressStrapshort',
    svg: womanStrapshort,
    display: 'dress',
    holds: 2,
  },
  womanStraptop: {
    name: 'womanStraptop',
    gender: 'female',
    type: 'straptop',
    svg: womanStraptop,
    display: 'top with straps',
    holds: 2,
  },
  womanTShirt: {
    name: 'womanTShirt',
    gender: 'female',
    type: 't-shirt',
    svg: womanTShirt,
    display: 't-shirt',
    holds: 2,
  },
  womanTightskirt: {
    name: 'womanTightskirt',
    gender: 'female',
    type: 'thightskirt',
    svg: womanTightskirt,
    display: 'tight skirt',
    holds: 3,
  },
  womanTop: {
    name: 'womanTop',
    gender: 'female',
    type: 'top',
    svg: womanTop,
    display: 'top',
    holds: 2,
  },
  womanTrouserslong: {
    name: 'womanTrouserslong',
    gender: 'female',
    type: 'trousersCold',
    svg: womanTrouserslong,
    display: 'long trousers',
    holds: 3,
  },
  womanTrousersshort: {
    name: 'womanTrousersshort',
    gender: 'female',
    type: 'trousersWarm',
    svg: womanTrousersshort,
    display: 'short trousers',
    holds: 3,
  },
  womanWinter: {
    name: 'womanWinter',
    gender: 'female',
    type: 'jacketWinter',
    svg: womanWinter,
    display: 'winter jacket',
    holds: Infinity,
  },
  womanSock: {
    name: 'womanSock',
    gender: 'female',
    type: 'sock',
    svg: womanSock,
    display: 'socks',
    holds: 1,
  },
  womanUnderwear: {
    name: 'womanUnderwear',
    gender: 'female',
    type: 'underwear',
    svg: womanUnderwear,
    display: 'underwear',
    holds: 1,
  },
  womanBra: {
    name: 'womanBra',
    gender: 'female',
    type: 'bra',
    svg: womanBra,
    display: 'bra',
    holds: 2,
  },
  manBikini: {
    name: 'manBikini',
    gender: 'male',
    type: 'trunk',
    svg: manBikini,
    display: 'bathing trunks',
    holds: Infinity,
  },
  manBoots: {
    name: 'manBoots',
    gender: 'male',
    type: 'shoesCold',
    svg: manBoots,
    display: 'winter shoes',
    holds: Infinity,
  },
  manCap: {
    name: 'manCap',
    gender: 'male',
    type: 'cap',
    svg: manCap,
    display: 'cap',
    holds: Infinity,
  },
  manCollarpullover: {
    name: 'manCollarpullover',
    gender: 'male',
    type: 'collarpullover',
    svg: manCollarpullover,
    display: 'pullover with collar',
    holds: 3,
  },
  manGlove: {
    name: 'manGlove',
    gender: 'male',
    type: 'gloves',
    svg: manGlove,
    display: 'gloves',
    holds: Infinity,
  },
  manLongshirt: {
    name: 'manLongshirt',
    gender: 'male',
    type: 'longshirt',
    svg: manLongshirt,
    display: 'longshirt',
    holds: 2,
  },
  manRain: {
    name: 'manRain',
    gender: 'male',
    type: 'rubberboots',
    svg: manRain,
    display: 'rubberboots',
    holds: Infinity,
  },
  manSneakers: {
    name: 'manSneakers',
    gender: 'male',
    type: 'shoesSneakers',
    svg: manSneakers,
    display: 'sneakers',
    holds: Infinity,
  },
  manSpringAutumn: {
    name: 'manSpringAutumn',
    gender: 'male',
    type: 'jacketSpringAutumn',
    svg: manSpringAutumn,
    display: 'light jacket',
    holds: 5,
  },
  manTShirtU: {
    name: 'manTShirtU',
    gender: 'male',
    type: 'TshirtU',
    svg: manTShirtU,
    display: 't-shirt',
    holds: 2,
  },
  manStraptop: {
    name: 'manStraptop',
    gender: 'male',
    type: 'straptop',
    svg: manStraptop,
    display: 'tanktop',
    holds: 2,
  },
  manTShirtV: {
    name: 'manTShirtV',
    gender: 'male',
    type: 'TshirtV',
    svg: manTShirtV,
    display: 't-shirt',
    holds: 2,
  },
  manTrousersLong: {
    name: 'manTrousersLong',
    gender: 'male',
    type: 'trousersCold',
    svg: manTrousersLong,
    display: 'long trousers',
    holds: 3,
  },
  manTrousersMiddle: {
    name: 'manTrousersMiddle',
    gender: 'male',
    type: 'trousersWarmMiddle',
    svg: manTrousersMiddle,
    display: 'medium length trousers',
    holds: 3,
  },
  manTrousersShort: {
    name: 'manTrousersShort',
    gender: 'male',
    type: 'trousersWarm',
    svg: manTrousersShort,
    display: 'short trousers',
    holds: 3,
  },
  manWinter: {
    name: 'manWinter',
    gender: 'male',
    type: 'jacketWinter',
    svg: manWinter,
    display: 'winter jacket',
    holds: Infinity,
  },
  manSock: {
    name: 'manSock',
    gender: 'male',
    type: 'sock',
    svg: manSock,
    display: 'socks',
    holds: 1,
  },
  manUnderwear: {
    name: 'manUnderwear',
    gender: 'male',
    type: 'underwear',
    svg: manUnderwear,
    display: 'underwear',
    holds: 1,
  },
};

export async function getSVGString(name) {
  const axRet = await axios.get(svgs[name].svg, {
    responseType: 'text',
    transformResponse: undefined,
  });
  const ret = await axRet.data;
  return ret;
}

export function getSVGType(name) {
  return svgs[name].type;
}

export function getSVGCategory(name) {
  return svgs[name].category;
}

export default svgs;
