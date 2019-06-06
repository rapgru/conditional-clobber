/* eslint-disable import/no-webpack-loader-syntax */
import womanBikini from '!!raw-loader!@/assets/SVGs/Travel/Woman/Bikini.svg';
import womanBoots from '!!raw-loader!@/assets/SVGs/Travel/Woman/Boots.svg';
import womanCap from '!!raw-loader!@/assets/SVGs/Travel/Woman/Cap.svg';
import womanCollartop from '!!raw-loader!@/assets/SVGs/Travel/Woman/Collartop.svg';
import womanCroptop from '!!raw-loader!@/assets/SVGs/Travel/Woman/Croptop.svg';
import womanEveryday from '!!raw-loader!@/assets/SVGs/Travel/Woman/Everyday.svg';
import womanFlat from '!!raw-loader!@/assets/SVGs/Travel/Woman/Flat.svg';
import womanGlove from '!!raw-loader!@/assets/SVGs/Travel/Woman/Glove.svg';
import womanPullover from '!!raw-loader!@/assets/SVGs/Travel/Woman/Pullover.svg';
import womanRain from '!!raw-loader!@/assets/SVGs/Travel/Woman/Rain.svg';
import womanSkirt from '!!raw-loader!@/assets/SVGs/Travel/Woman/Skirt.svg';
import womanSpringAutumn from '!!raw-loader!@/assets/SVGs/Travel/Woman/SpringAutumn.svg';
import womanStrapless from '!!raw-loader!@/assets/SVGs/Travel/Woman/Strapless.svg';
import womanStraplesstop from '!!raw-loader!@/assets/SVGs/Travel/Woman/Straplesstop.svg';
import womanStraplong from '!!raw-loader!@/assets/SVGs/Travel/Woman/Straplong.svg';
import womanStrapshort from '!!raw-loader!@/assets/SVGs/Travel/Woman/Strapshort.svg';
import womanStraptop from '!!raw-loader!@/assets/SVGs/Travel/Woman/Straptop.svg';
import womanTShirt from '!!raw-loader!@/assets/SVGs/Travel/Woman/T-Shirt.svg';
import womanTightskirt from '!!raw-loader!@/assets/SVGs/Travel/Woman/Thightskirt.svg';
import womanTop from '!!raw-loader!@/assets/SVGs/Travel/Woman/Top.svg';
import womanTrouserslong from '!!raw-loader!@/assets/SVGs/Travel/Woman/Trouserslong.svg';
import womanTrousersshort from '!!raw-loader!@/assets/SVGs/Travel/Woman/Trousersshort.svg';
import womanWinter from '!!raw-loader!@/assets/SVGs/Travel/Woman/Winter.svg';

import manBikini from '!!raw-loader!@/assets/SVGs/Travel/Man/Bikini.svg';
import manBoots from '!!raw-loader!@/assets/SVGs/Travel/Man/Boots.svg';
import manCap from '!!raw-loader!@/assets/SVGs/Travel/Man/Cap.svg';
import manCollarpullover from '!!raw-loader!@/assets/SVGs/Travel/Man/Collarpullover.svg';
import manGlove from '!!raw-loader!@/assets/SVGs/Travel/Man/Glove.svg';
import manLongshirt from '!!raw-loader!@/assets/SVGs/Travel/Man/Longshirt.svg';
import manRain from '!!raw-loader!@/assets/SVGs/Travel/Man/Rain.svg';
import manSneakers from '!!raw-loader!@/assets/SVGs/Travel/Man/Sneakers.svg';
import manSpringAutumn from '!!raw-loader!@/assets/SVGs/Travel/Man/SpringAutumn.svg';
import manStraptop from '!!raw-loader!@/assets/SVGs/Travel/Man/Straptop.svg';
import manTShirtU from '!!raw-loader!@/assets/SVGs/Travel/Man/T-ShirtU.svg';
import manTShirtV from '!!raw-loader!@/assets/SVGs/Travel/Man/T-Shirtv.svg';
import manTrousersLong from '!!raw-loader!@/assets/SVGs/Travel/Man/Trouserslong.svg';
import manTrousersMiddle from '!!raw-loader!@/assets/SVGs/Travel/Man/Trousersmiddle.svg';
import manTrousersShort from '!!raw-loader!@/assets/SVGs/Travel/Man/Trousersshort.svg';
import manWinter from '!!raw-loader!@/assets/SVGs/Travel/Man/Winter.svg';

export const svgs = {
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
};

export function getSVGString(name) {
  return svgs[name].svg;
}

export function getSVGType(name) {
  return svgs[name].type;
}

export function getSVGCategory(name) {
  return svgs[name].category;
}

export default svgs;
