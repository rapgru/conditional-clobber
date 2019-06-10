import axios from 'axios';

/* eslint-disable import/no-webpack-loader-syntax */
const womanBodyBlack = '/img/svgs/Woman/Body/Black.svg';
const womanBodyYellow = '/img/svgs/Woman/Body/LightYellow.svg';
const womanBodyWhite = '/img/svgs/Woman/Body/White.svg';
const womanDressStraplessBlue = '/img/svgs/Woman/Clothes/Dresses/Strapless/Blue.svg';
const womanDressStraplessRed = '/img/svgs/Woman/Clothes/Dresses/Strapless/Red.svg';
const womanDressStraplessWhiteblue = '/img/svgs/Woman/Clothes/Dresses/Strapless/Whiteblue.svg';
const womanDressStraplongBlack = '/img/svgs/Woman/Clothes/Dresses/Straplong/Black.svg';
const womanDressStraplongPink = '/img/svgs/Woman/Clothes/Dresses/Straplong/Pink.svg';
const womanDressStraplongViolet = '/img/svgs/Woman/Clothes/Dresses/Straplong/Violet.svg';
const womanDressStrapshortBlack = '/img/svgs/Woman/Clothes/Dresses/Strapshort/Black.svg';
const womanDressStrapshortBlue = '/img/svgs/Woman/Clothes/Dresses/Strapshort/Blue.svg';
const womanDressStrapshortPink = '/img/svgs/Woman/Clothes/Dresses/Strapshort/Pink.svg';
const womanDressStrapshortWhite = '/img/svgs/Woman/Clothes/Dresses/Strapshort/White.svg';
const womanExtraBikiniBlack = '/img/svgs/Woman/Clothes/Extras/Bikini/Black.svg';
const womanExtraBikiniBlue = '/img/svgs/Woman/Clothes/Extras/Bikini/Blue.svg';
const womanExtraBikiniPink = '/img/svgs/Woman/Clothes/Extras/Bikini/Pink.svg';
const womanExtraCapBlue = '/img/svgs/Woman/Clothes/Extras/Cap/Blue.svg';
const womanExtraCapRed = '/img/svgs/Woman/Clothes/Extras/Cap/Red.svg';
const womanExtraCapViolet = '/img/svgs/Woman/Clothes/Extras/Cap/Violet.svg';
const womanExtraGloveBlack = '/img/svgs/Woman/Clothes/Extras/Glove/Black.svg';
const womanExtraGloveBlue = '/img/svgs/Woman/Clothes/Extras/Glove/Blue.svg';
const womanExtraGloveRed = '/img/svgs/Woman/Clothes/Extras/Glove/Red.svg';
const womanJacketSpringautumnBlack = '/img/svgs/Woman/Clothes/Jacket/Spring-Autumn/Black.svg';
const womanJacketSpringautumnGrayblue = '/img/svgs/Woman/Clothes/Jacket/Spring-Autumn/Grayblue.svg';
const womanJacketWinterBlue = '/img/svgs/Woman/Clothes/Jacket/Winter/Blue.svg';
const womanJacketWinterGreen = '/img/svgs/Woman/Clothes/Jacket/Winter/Green.svg';
const womanLowerbodyColdTrousersBlue = '/img/svgs/Woman/Clothes/Lowerbody/Cold/Trousers/Blue.svg';
const womanLowerbodyColdTrousersDarkblue = '/img/svgs/Woman/Clothes/Lowerbody/Cold/Trousers/Darkblue.svg';
const womanLowerbodyColdTrousersDarkgreen = '/img/svgs/Woman/Clothes/Lowerbody/Cold/Trousers/Darkgreen.svg';
const womanLowerbodyColdTrousersLightblue = '/img/svgs/Woman/Clothes/Lowerbody/Cold/Trousers/Lightblue.svg';
const womanLowerbodyColdTrousersWhite = '/img/svgs/Woman/Clothes/Lowerbody/Cold/Trousers/White.svg';
const womanLowerbodyWarmSkirtBlack = '/img/svgs/Woman/Clothes/Lowerbody/Warm/Skirt/Black.svg';
const womanLowerbodyWarmSkirtBlue = '/img/svgs/Woman/Clothes/Lowerbody/Warm/Skirt/Blue.svg';
const womanLowerbodyWarmSkirtViolet = '/img/svgs/Woman/Clothes/Lowerbody/Warm/Skirt/Violet.svg';
const womanLowerbodyWarmThightskirtBlack = '/img/svgs/Woman/Clothes/Lowerbody/Warm/Thightskirt/Black.svg';
const womanLowerbodyWarmThightskirtBlue = '/img/svgs/Woman/Clothes/Lowerbody/Warm/Thightskirt/Blue.svg';
const womanLowerbodyWarmThightskirtBrown = '/img/svgs/Woman/Clothes/Lowerbody/Warm/Thightskirt/Brown.svg';
const womanLowerbodyWarmTrousersBlack = '/img/svgs/Woman/Clothes/Lowerbody/Warm/Trousers/Black.svg';
const womanLowerbodyWarmTrousersBlue = '/img/svgs/Woman/Clothes/Lowerbody/Warm/Trousers/Blue.svg';
const womanLowerbodyWarmTrousersGray = '/img/svgs/Woman/Clothes/Lowerbody/Warm/Trousers/Gray.svg';
const womanLowerbodyWarmTrousersLightBlue = '/img/svgs/Woman/Clothes/Lowerbody/Warm/Trousers/Lightblue.svg';
const womanShoeEveryday = '/img/svgs/Woman/Clothes/Shoe/Everyday/Black.svg';
const womanShoeRain = '/img/svgs/Woman/Clothes/Shoe/Rubberboots/Yellow.svg';
const womanShoeWarm = '/img/svgs/Woman/Clothes/Shoe/Warm/Flat.svg';
const womanShoeCold = '/img/svgs/Woman/Clothes/Shoe/Winter/Boots.svg';
const womanUpperbodyColdCollartopBlack = '/img/svgs/Woman/Clothes/Upperbody/Cold/Collartop/Black.svg';
const womanUpperbodyColdCollartopBlueviolet = '/img/svgs/Woman/Clothes/Upperbody/Cold/Collartop/Blueviolet.svg';
const womanUpperbodyColdCollartopGray = '/img/svgs/Woman/Clothes/Upperbody/Cold/Collartop/Gray.svg';
const womanUpperbodyColdCollartopWhite = '/img/svgs/Woman/Clothes/Upperbody/Cold/Collartop/White.svg';
const womanUpperbodyColdPulloverPink = '/img/svgs/Woman/Clothes/Upperbody/Cold/Pullover/Pink.svg';
const womanUpperbodyColdPulloverRed = '/img/svgs/Woman/Clothes/Upperbody/Cold/Pullover/Red.svg';
const womanUpperbodyColdPulloverTurquoise = '/img/svgs/Woman/Clothes/Upperbody/Cold/Pullover/Turquoise.svg';
const womanUpperbodyColdTopRed = '/img/svgs/Woman/Clothes/Upperbody/Cold/Top/Red.svg';
const womanUpperbodyColdTopTurquoise = '/img/svgs/Woman/Clothes/Upperbody/Cold/Top/Turquoise.svg';
const womanUpperbodyColdTopViolet = '/img/svgs/Woman/Clothes/Upperbody/Cold/Top/Violet.svg';
const womanUpperbodyColdTopWhite = '/img/svgs/Woman/Clothes/Upperbody/Cold/Top/White.svg';
const womanUpperbodyWarmCroptopBlue = '/img/svgs/Woman/Clothes/Upperbody/Warm/Croptop/Blue.svg';
const womanUpperbodyWarmCroptopDarkgreen = '/img/svgs/Woman/Clothes/Upperbody/Warm/Croptop/Darkgreen.svg';
const womanUpperbodyWarmCroptopRed = '/img/svgs/Woman/Clothes/Upperbody/Warm/Croptop/Red.svg';
const womanUpperbodyWarmStraplesstopGreen = '/img/svgs/Woman/Clothes/Upperbody/Warm/Straplesstop/Green.svg';
const womanUpperbodyWarmStraplesstopTurquoise = '/img/svgs/Woman/Clothes/Upperbody/Warm/Straplesstop/Turquoise.svg';
const womanUpperbodyWarmStraplesstopViolet = '/img/svgs/Woman/Clothes/Upperbody/Warm/Straplesstop/Violet.svg';
const womanUpperbodyStraptopLightblue = '/img/svgs/Woman/Clothes/Upperbody/Warm/Straptop/Lightblue.svg';
const womanUpperbodyStraptopLightviolet = '/img/svgs/Woman/Clothes/Upperbody/Warm/Straptop/Lightviolet.svg';
const womanUpperbodyStraptopRed = '/img/svgs/Woman/Clothes/Upperbody/Warm/Straptop/Red.svg';
const womanUpperbodyStraptopWhitepink = '/img/svgs/Woman/Clothes/Upperbody/Warm/Straptop/Whitepink.svg';
const womanUpperbodyTshirtLightgray = '/img/svgs/Woman/Clothes/Upperbody/Warm/T-shirt/Lightgray.svg';
const womanUpperbodyTshirtViolet = '/img/svgs/Woman/Clothes/Upperbody/Warm/T-shirt/Violet.svg';
const womanHairLongFringeBlond = '/img/svgs/Woman/Hair/Long/Fringe/Blond.svg';
const womanHairLongFringeBrown = '/img/svgs/Woman/Hair/Long/Fringe/Brown.svg';
const womanHairLongFringeOrange = '/img/svgs/Woman/Hair/Long/Fringe/Orange.svg';
const womanHairLongFringeBlack = '/img/svgs/Woman/Hair/Long/Fringe/Black.svg';
const womanHairLongStraightBlond = '/img/svgs/Woman/Hair/Long/Straight/Blond.svg';
const womanHairLongStraightBrown = '/img/svgs/Woman/Hair/Long/Straight/Brown.svg';
const womanHairLongStraightOrange = '/img/svgs/Woman/Hair/Long/Straight/Orange.svg';
const womanHairLongStraightBlack = '/img/svgs/Woman/Hair/Long/Straight/Black.svg';
const womanHairLongWavyBlond = '/img/svgs/Woman/Hair/Long/Wavy/Blond.svg';
const womanHairLongWavyBrown = '/img/svgs/Woman/Hair/Long/Wavy/Brown.svg';
const womanHairLongWavyOrange = '/img/svgs/Woman/Hair/Long/Wavy/Orange.svg';
const womanHairLongWavyBlack = '/img/svgs/Woman/Hair/Long/Wavy/Black.svg';
const womanHairPigtailBraidBlond = '/img/svgs/Woman/Hair/Pigtail/Braid/Blond.svg';
const womanHairPigtailBraidBrown = '/img/svgs/Woman/Hair/Pigtail/Braid/Brown.svg';
const womanHairPigtailBraidOrange = '/img/svgs/Woman/Hair/Pigtail/Braid/Orange.svg';
const womanHairPigtailBraidBlack = '/img/svgs/Woman/Hair/Pigtail/Braid/Black.svg';
const womanHairPigtailDuttBlond = '/img/svgs/Woman/Hair/Pigtail/Dutt/Blond.svg';
const womanHairPigtailDuttBrown = '/img/svgs/Woman/Hair/Pigtail/Dutt/Brown.svg';
const womanHairPigtailDuttOrange = '/img/svgs/Woman/Hair/Pigtail/Dutt/Orange.svg';
const womanHairPigtailDuttBlack = '/img/svgs/Woman/Hair/Pigtail/Dutt/Black.svg';
const womanHairPigtailPigtailBlond = '/img/svgs/Woman/Hair/Pigtail/Pigtail/Blond.svg';
const womanHairPigtailPigtailBrown = '/img/svgs/Woman/Hair/Pigtail/Pigtail/Brown.svg';
const womanHairPigtailPigtailOrange = '/img/svgs/Woman/Hair/Pigtail/Pigtail/Orange.svg';
const womanHairPigtailPigtailBlack = '/img/svgs/Woman/Hair/Pigtail/Pigtail/Black.svg';
const womanHairShortCurlyBlond = '/img/svgs/Woman/Hair/Short/Curly/Blond.svg';
const womanHairShortCurlyBrown = '/img/svgs/Woman/Hair/Short/Curly/Brown.svg';
const womanHairShortCurlyOrange = '/img/svgs/Woman/Hair/Short/Curly/Orange.svg';
const womanHairShortCurlyBlack = '/img/svgs/Woman/Hair/Short/Curly/Black.svg';
const womanHairShortFringeBlond = '/img/svgs/Woman/Hair/Short/Fringe/Blond.svg';
const womanHairShortFringeBrown = '/img/svgs/Woman/Hair/Short/Fringe/Brown.svg';
const womanHairShortFringeOrange = '/img/svgs/Woman/Hair/Short/Fringe/Orange.svg';
const womanHairShortFringeBlack = '/img/svgs/Woman/Hair/Short/Fringe/Black.svg';
const womanHairShortStraightBlond = '/img/svgs/Woman/Hair/Short/Straight/Blond.svg';
const womanHairShortStraightBrown = '/img/svgs/Woman/Hair/Short/Straight/Brown.svg';
const womanHairShortStraightOrange = '/img/svgs/Woman/Hair/Short/Straight/Orange.svg';
const womanHairShortStraightBlack = '/img/svgs/Woman/Hair/Short/Straight/Black.svg';


const weatherPredictionHail = '/img/svgs/Weather/Prediction/Hail.svg';
const weatherPredictionRain = '/img/svgs/Weather/Prediction/Rain.svg';
const weatherPredictionSnow = '/img/svgs/Weather/Prediction/Snow.svg';
const weatherPredictionSun = '/img/svgs/Weather/Prediction/Sun.svg';
const weatherPredictionThunderstorm = '/img/svgs/Weather/Prediction/Thunderstorm.svg';
const weatherToolsCap = '/img/svgs/Weather/Tools/Cap.svg';
const weatherToolsGloves = '/img/svgs/Weather/Tools/Gloves.svg';
const weatherToolsSuncreme = '/img/svgs/Weather/Tools/Suncreme.svg';
const weatherToolsUmbrella = '/img/svgs/Weather/Tools/Umbrella.svg';

const iconsBodyColorBlack = '/img/svgs/Icons/Body_Color/Black.svg';
const iconsBodyColorWhite = '/img/svgs/Icons/Body_Color/White.svg';
const iconsBodyColorYellow = '/img/svgs/Icons/Body_Color/Yellow.svg';
const iconsGenderMan = '/img/svgs/Icons/Gender/Man_Symbol.svg';
const iconsGenderWoman = '/img/svgs/Icons/Gender/Woman_Symbol.svg';
const iconsHairColorBlond = '/img/svgs/Icons/Hair_Color/Blond.svg';
const iconsHairColorBrown = '/img/svgs/Icons/Hair_Color/Brown.svg';
const iconsHairColorOrange = '/img/svgs/Icons/Hair_Color/Orange.svg';
const iconsHairColorBlack = '/img/svgs/Icons/Hair_Color/Black.svg';

const manBodyWhite = '/img/svgs/Man/Body/White.svg';
const manBodyYellow = '/img/svgs/Man/Body/Yellow.svg';
const manBodyBlack = '/img/svgs/Man/Body/Black.svg';
const manExtraTrunkBlue = '/img/svgs/Man/Clothes/Extra/Bath/Blue.svg';
const manExtraTrunkGray = '/img/svgs/Man/Clothes/Extra/Bath/Gray.svg';
const manExtraCapBlue = '/img/svgs/Man/Clothes/Extra/Cap/Blue.svg';
const manExtraCapViolet = '/img/svgs/Man/Clothes/Extra/Cap/Violet.svg';
const manExtraGloveViolet = '/img/svgs/Man/Clothes/Extra/Glove/Violet.svg';
const manExtraGloveBlue = '/img/svgs/Man/Clothes/Extra/Glove/Blue.svg';
const manExtraJacketBlue = '/img/svgs/Man/Clothes/Extra/West/Blue.svg'; // Actually Jacket
const manExtraJacketWhite = '/img/svgs/Man/Clothes/Extra/West/White.svg'; // Actually Jacket
const manExtraWinterjacketBlack = '/img/svgs/Man/Clothes/Extra/Winterjacket/Black.svg';
const manExtraWinterjacketBlue = '/img/svgs/Man/Clothes/Extra/Winterjacket/Blue.svg';
const manLowerbodyColdBlack = '/img/svgs/Man/Clothes/Lowerbody/Cold/Black.svg';
const manLowerbodyColdBlue = '/img/svgs/Man/Clothes/Lowerbody/Cold/Blue.svg';
const manLowerbodyColdGray = '/img/svgs/Man/Clothes/Lowerbody/Cold/Gray.svg';
const manLowerbodyColdGreen = '/img/svgs/Man/Clothes/Lowerbody/Cold/Green.svg';
const manLowerbodyWarmMiddleBlack = '/img/svgs/Man/Clothes/Lowerbody/Warm/Middle/Black.svg';
const manLowerbodyWarmMiddleBlue = '/img/svgs/Man/Clothes/Lowerbody/Warm/Middle/Blue.svg';
const manLowerbodyWarmMiddleGray = '/img/svgs/Man/Clothes/Lowerbody/Warm/Middle/Gray.svg';
const manLowerbodyWarmShortBlack = '/img/svgs/Man/Clothes/Lowerbody/Warm/Short/Black.svg';
const manLowerbodyWarmShortBlue = '/img/svgs/Man/Clothes/Lowerbody/Warm/Short/Blue.svg';
const manLowerbodyWarmShortGray = '/img/svgs/Man/Clothes/Lowerbody/Warm/Short/Gray.svg';
const manLowerbodyWarmShortGreen = '/img/svgs/Man/Clothes/Lowerbody/Warm/Short/Green.svg';
const manShoesRubberboots = '/img/svgs/Man/Clothes/Shoes/Rainingboots/Yellow.svg';
const manShoesSneakers = '/img/svgs/Man/Clothes/Shoes/Sneakers/Blue.svg';
const manShoesWinter = '/img/svgs/Man/Clothes/Shoes/Winter/Blue.svg';
const manUpperbodyColdCollarpulloverBlack = '/img/svgs/Man/Clothes/Upperbody/Cold/Collarpullover/Black.svg';
const manUpperbodyColdCollarpulloverBlue = '/img/svgs/Man/Clothes/Upperbody/Cold/Collarpullover/Blue.svg';
const manUpperbodyColdCollarpulloverGreen = '/img/svgs/Man/Clothes/Upperbody/Cold/Collarpullover/Green.svg';
const manUpperbodyColdCollarpulloverViolet = '/img/svgs/Man/Clothes/Upperbody/Cold/Collarpullover/Violet.svg';
const manUpperbodyColdLongshirtBlue = '/img/svgs/Man/Clothes/Upperbody/Cold/Longshirt/Blue.svg';
const manUpperbodyColdLongshirtBrown = '/img/svgs/Man/Clothes/Upperbody/Cold/Longshirt/Brown.svg';
const manUpperbodyColdLongshirtRed = '/img/svgs/Man/Clothes/Upperbody/Cold/Longshirt/Red.svg';
const manUpperbodyColdStraptopBlue = '/img/svgs/Man/Clothes/Upperbody/Warm/Straptop/Blue.svg';
const manUpperbodyColdStraptopGray = '/img/svgs/Man/Clothes/Upperbody/Warm/Straptop/Gray.svg';
const manUpperbodyColdStraptopGreen = '/img/svgs/Man/Clothes/Upperbody/Warm/Straptop/Green.svg';
const manUpperbodyColdStraptopWhite = '/img/svgs/Man/Clothes/Upperbody/Warm/Straptop/White.svg';
const manUpperbodyColdTshirtVBlue = '/img/svgs/Man/Clothes/Upperbody/Warm/TShirt/Blue.svg';
const manUpperbodyColdTshirtVBrown = '/img/svgs/Man/Clothes/Upperbody/Warm/TShirt/Gray.svg';
const manUpperbodyColdTshirtVGray = '/img/svgs/Man/Clothes/Upperbody/Warm/TShirt/Brown.svg';
const manUpperbodyColdTshirtVWhite = '/img/svgs/Man/Clothes/Upperbody/Warm/TShirt/White.svg';
const manUpperbodyColdTshirtUBlack = '/img/svgs/Man/Clothes/Upperbody/Warm/TShirtR/Black.svg';
const manUpperbodyColdTshirtUBlue = '/img/svgs/Man/Clothes/Upperbody/Warm/TShirtR/Blue.svg';
const manUpperbodyColdTshirtUViolet = '/img/svgs/Man/Clothes/Upperbody/Warm/TShirtR/Violet.svg';
const manUpperbodyColdTshirtUYellow = '/img/svgs/Man/Clothes/Upperbody/Warm/TShirtR/Yellow.svg';
const manHairFirstBlond = '/img/svgs/Man/Hair/First/Blond.svg';
const manHairFirstBrown = '/img/svgs/Man/Hair/First/Brown.svg';
const manHairFirstOrange = '/img/svgs/Man/Hair/First/Orange.svg';
const manHairFirstBlack = '/img/svgs/Man/Hair/First/Black.svg';
const manHairLongBlond = '/img/svgs/Man/Hair/Long/Blond.svg';
const manHairLongBrown = '/img/svgs/Man/Hair/Long/Brown.svg';
const manHairLongOrange = '/img/svgs/Man/Hair/Long/Orange.svg';
const manHairLongBlack = '/img/svgs/Man/Hair/Long/Black.svg';
const manHairMattBlond = '/img/svgs/Man/Hair/Matt/Blond.svg';
const manHairMattBrown = '/img/svgs/Man/Hair/Matt/Brown.svg';
const manHairMattOrange = '/img/svgs/Man/Hair/Matt/Orange.svg';
const manHairMattBlack = '/img/svgs/Man/Hair/Matt/Black.svg';
const manHairSecondBlond = '/img/svgs/Man/Hair/Second/Blond.svg';
const manHairSecondBrown = '/img/svgs/Man/Hair/Second/Brown.svg';
const manHairSecondOrange = '/img/svgs/Man/Hair/Second/Orange.svg';
const manHairSecondBlack = '/img/svgs/Man/Hair/Second/Black.svg';
const manHairWavesBlond = '/img/svgs/Man/Hair/Waves/Blond.svg';
const manHairWavesBrown = '/img/svgs/Man/Hair/Waves/Brown.svg';
const manHairWavesOrange = '/img/svgs/Man/Hair/Waves/Orange.svg';
const manHairWavesBlack = '/img/svgs/Man/Hair/Waves/Black.svg';


const svgs = {
  womanBodyBlack: {
    name: 'womanBodyBlack',
    gender: 'female',
    type: 'body',
    category: 'body',
    svg: womanBodyBlack,
  },
  womanBodyYellow: {
    name: 'womanBodyLightYellow',
    gender: 'female',
    type: 'body',
    category: 'body',
    svg: womanBodyYellow,
  },
  womanBodyWhite: {
    name: 'womanBodyWhite',
    gender: 'female',
    type: 'body',
    category: 'body',
    svg: womanBodyWhite,
  },
  womanDressStraplessBlue: {
    name: 'womanDressStraplessBlue',
    gender: 'female',
    type: 'dressStrapless',
    category: 'fullbody',
    percentage: 10,
    svg: womanDressStraplessBlue,
  },
  womanDressStraplessRed: {
    name: 'womanDressStraplessRed',
    gender: 'female',
    type: 'dressStrapless',
    category: 'fullbody',
    percentage: 10,
    svg: womanDressStraplessRed,
  },
  womanDressStraplessWhiteblue: {
    name: 'womanDressStraplessWhiteblue',
    gender: 'female',
    type: 'dressStrapless',
    category: 'fullbody',
    percentage: 10,
    svg: womanDressStraplessWhiteblue,
  },
  womanDressStraplongBlack: {
    name: 'womanDressStraplongBlack',
    gender: 'female',
    type: 'dressStraplong',
    category: 'fullbody',
    percentage: 35,
    svg: womanDressStraplongBlack,
  },
  womanDressStraplongPink: {
    name: 'womanDressStraplongPink',
    gender: 'female',
    type: 'dressStraplong',
    category: 'fullbody',
    percentage: 35,
    svg: womanDressStraplongPink,
  },
  womanDressStraplongViolet: {
    name: 'womanDressStraplongViolet',
    gender: 'female',
    type: 'dressStraplong',
    category: 'fullbody',
    percentage: 35,
    svg: womanDressStraplongViolet,
  },
  womanDressStrapshortBlack: {
    name: 'womanDressStrapshortBlack',
    gender: 'female',
    type: 'dressStrapshort',
    category: 'fullbody',
    percentage: 20,
    svg: womanDressStrapshortBlack,
  },
  womanDressStrapshortBlue: {
    name: 'womanDressStrapshortBlue',
    gender: 'female',
    type: 'dressStrapshort',
    category: 'fullbody',
    percentage: 20,
    svg: womanDressStrapshortBlue,
  },
  womanDressStrapshortPink: {
    name: 'womanDressStrapshortPink',
    gender: 'female',
    type: 'dressStrapshort',
    category: 'fullbody',
    percentage: 20,
    svg: womanDressStrapshortPink,
  },
  womanDressStrapshortWhite: {
    name: 'womanDressStrapshortWhite',
    gender: 'female',
    type: 'dressStrapshort',
    category: 'fullbody',
    percentage: 20,
    svg: womanDressStrapshortWhite,
  },
  womanExtraBikiniBlack: {
    name: 'womanExtraBikiniBlack',
    gender: 'female',
    type: 'bikini',
    category: 'fullbody',
    percentage: 0,
    svg: womanExtraBikiniBlack,
  },
  womanExtraBikiniBlue: {
    name: 'womanExtraBikiniBlue',
    gender: 'female',
    type: 'bikini',
    category: 'fullbody',
    percentage: 0,
    svg: womanExtraBikiniBlue,
  },
  womanExtraBikiniPink: {
    name: 'womanExtraBikiniPink',
    gender: 'female',
    type: 'bikini',
    category: 'fullbody',
    percentage: 0,
    svg: womanExtraBikiniPink,
  },
  womanExtraCapBlue: {
    name: 'womanExtraCapBlue',
    gender: 'female',
    type: 'cap',
    category: 'headgear',
    percentage: 100,
    svg: womanExtraCapBlue,
  },
  womanExtraCapRed: {
    name: 'womanExtraCapRed',
    gender: 'female',
    type: 'cap',
    category: 'headgear',
    percentage: 100,
    svg: womanExtraCapRed,
  },
  womanExtraCapViolet: {
    name: 'womanExtraCapViolet',
    gender: 'female',
    type: 'cap',
    category: 'headgear',
    percentage: 100,
    svg: womanExtraCapViolet,
  },
  womanExtraGloveBlack: {
    name: 'womanExtraGloveBlack',
    gender: 'female',
    type: 'gloves',
    category: 'gloves',
    percentage: 100,
    svg: womanExtraGloveBlack,
  },
  womanExtraGloveBlue: {
    name: 'womanExtraGloveBlue',
    gender: 'female',
    type: 'gloves',
    category: 'gloves',
    percentage: 100,
    svg: womanExtraGloveBlue,
  },
  womanExtraGloveRed: {
    name: 'womanExtraGloveRed',
    gender: 'female',
    type: 'gloves',
    category: 'gloves',
    percentage: 100,
    svg: womanExtraGloveRed,
  },
  womanJacketSpringautumnBlack: {
    name: 'womanJacketSpringautumnBlack',
    gender: 'female',
    type: 'jacketSpringAutumn',
    category: 'jacket',
    percentage: 40,
    svg: womanJacketSpringautumnBlack,
  },
  womanJacketSpringautumnGrayblue: {
    name: 'womanJacketSpringautumnGrayblue',
    gender: 'female',
    type: 'jacketSpringAutumn',
    category: 'jacket',
    percentage: 40,
    svg: womanJacketSpringautumnGrayblue,
  },
  womanJacketWinterBlue: {
    name: 'womanJacketWinterBlue',
    gender: 'female',
    type: 'jacketWinter',
    category: 'jacket',
    percentage: 100,
    svg: womanJacketWinterBlue,
  },
  womanJacketWinterGreen: {
    name: 'womanJacketWinterGreen',
    gender: 'female',
    type: 'jacketWinter',
    category: 'jacket',
    percentage: 100,
    svg: womanJacketWinterGreen,
  },
  womanLowerbodyColdTrousersBlue: {
    name: 'womanLowerbodyColdTrousersBlue',
    gender: 'female',
    type: 'trousersCold',
    category: 'lowerbody',
    percentage: 75,
    svg: womanLowerbodyColdTrousersBlue,
  },
  womanLowerbodyColdTrousersDarkblue: {
    name: 'womanLowerbodyColdTrousersDarkblue',
    gender: 'female',
    type: 'trousersCold',
    category: 'lowerbody',
    percentage: 75,
    svg: womanLowerbodyColdTrousersDarkblue,
  },
  womanLowerbodyColdTrousersDarkgreen: {
    name: 'womanLowerbodyColdTrousersDarkgreen',
    gender: 'female',
    type: 'trousersCold',
    category: 'lowerbody',
    percentage: 75,
    svg: womanLowerbodyColdTrousersDarkgreen,
  },
  womanLowerbodyColdTrousersLightblue: {
    name: 'womanLowerbodyColdTrousersLightblue',
    gender: 'female',
    type: 'trousersCold',
    category: 'lowerbody',
    percentage: 75,
    svg: womanLowerbodyColdTrousersLightblue,
  },
  womanLowerbodyColdTrousersWhite: {
    name: 'womanLowerbodyColdTrousersWhite',
    gender: 'female',
    type: 'trousersCold',
    category: 'lowerbody',
    percentage: 75,
    svg: womanLowerbodyColdTrousersWhite,
  },
  womanLowerbodyWarmSkirtBlack: {
    name: 'womanLowerbodyWarmSkirtBlack',
    gender: 'female',
    type: 'skirt',
    category: 'lowerbody',
    percentage: 15,
    svg: womanLowerbodyWarmSkirtBlack,
  },
  womanLowerbodyWarmSkirtBlue: {
    name: 'womanLowerbodyWarmSkirtBlue',
    gender: 'female',
    type: 'skirt',
    category: 'lowerbody',
    percentage: 15,
    svg: womanLowerbodyWarmSkirtBlue,
  },
  womanLowerbodyWarmSkirtViolet: {
    name: 'womanLowerbodyWarmSkirtViolet',
    gender: 'female',
    type: 'skirt',
    category: 'lowerbody',
    percentage: 15,
    svg: womanLowerbodyWarmSkirtViolet,
  },
  womanLowerbodyWarmThightskirtBlack: {
    name: 'womanLowerbodyWarmThightskirtBlack',
    gender: 'female',
    type: 'thightskirt',
    category: 'lowerbody',
    percentage: 15,
    svg: womanLowerbodyWarmThightskirtBlack,
  },
  womanLowerbodyWarmThightskirtBlue: {
    name: 'womanLowerbodyWarmThightskirtBlue',
    gender: 'female',
    type: 'thightskirt',
    category: 'lowerbody',
    percentage: 15,
    svg: womanLowerbodyWarmThightskirtBlue,
  },
  womanLowerbodyWarmThightskirtBrown: {
    name: 'womanLowerbodyWarmThightskirtBrown',
    gender: 'female',
    type: 'thightskirt',
    category: 'lowerbody',
    percentage: 15,
    svg: womanLowerbodyWarmThightskirtBrown,
  },
  womanLowerbodyWarmTrousersBlack: {
    name: 'womanLowerbodyWarmTrousersBlack',
    gender: 'female',
    type: 'trousersWarm',
    category: 'lowerbody',
    percentage: 15,
    svg: womanLowerbodyWarmTrousersBlack,
  },
  womanLowerbodyWarmTrousersBlue: {
    name: 'womanLowerbodyWarmTrousersBlue',
    gender: 'female',
    type: 'trousersWarm',
    category: 'lowerbody',
    percentage: 15,
    svg: womanLowerbodyWarmTrousersBlue,
  },
  womanLowerbodyWarmTrousersGray: {
    name: 'womanLowerbodyWarmTrousersGray',
    gender: 'female',
    type: 'trousersWarm',
    category: 'lowerbody',
    percentage: 15,
    svg: womanLowerbodyWarmTrousersGray,
  },
  womanLowerbodyWarmTrousersLightBlue: {
    name: 'womanLowerbodyWarmTrousersLightBlue',
    gender: 'female',
    type: 'trousersWarm',
    category: 'lowerbody',
    percentage: 15,
    svg: womanLowerbodyWarmTrousersLightBlue,
  },
  womanShoeEveryday: {
    name: 'womanShoeEveryday',
    gender: 'female',
    type: 'shoesEverday',
    category: 'shoes',
    percentage: 50,
    svg: womanShoeEveryday,
  },
  womanShoeRain: {
    name: 'womanShoeRain',
    gender: 'female',
    type: 'rubberboots',
    category: 'shoes',
    percentage: 0,
    svg: womanShoeRain,
  },
  womanShoeWarm: {
    name: 'womanShoeWarm',
    gender: 'female',
    type: 'shoesWarm',
    category: 'shoes',
    percentage: 20,
    svg: womanShoeWarm,
  },
  womanShoeCold: {
    name: 'womanShoeCold',
    gender: 'female',
    type: 'shoesCold',
    category: 'shoes',
    percentage: 80,
    svg: womanShoeCold,
  },
  womanUpperbodyColdCollartopBlack: {
    name: 'womanUpperbodyColdCollartopBlack',
    gender: 'female',
    type: 'collartop',
    category: 'upperbody',
    percentage: 70,
    svg: womanUpperbodyColdCollartopBlack,
  },
  womanUpperbodyColdCollartopBlueviolet: {
    name: 'womanUpperbodyColdCollartopBlueviolet',
    gender: 'female',
    type: 'collartop',
    category: 'upperbody',
    percentage: 70,
    svg: womanUpperbodyColdCollartopBlueviolet,
  },
  womanUpperbodyColdCollartopGray: {
    name: 'womanUpperbodyColdCollartopGray',
    gender: 'female',
    type: 'collartop',
    category: 'upperbody',
    percentage: 70,
    svg: womanUpperbodyColdCollartopGray,
  },
  womanUpperbodyColdCollartopWhite: {
    name: 'womanUpperbodyColdCollartopWhite',
    gender: 'female',
    type: 'collartop',
    category: 'upperbody',
    percentage: 70,
    svg: womanUpperbodyColdCollartopWhite,
  },
  womanUpperbodyColdPulloverPink: {
    name: 'womanUpperbodyColdPulloverPink',
    gender: 'female',
    type: 'pullover',
    category: 'upperbody',
    percentage: 65,
    svg: womanUpperbodyColdPulloverPink,
  },
  womanUpperbodyColdPulloverRed: {
    name: 'womanUpperbodyColdPulloverRed',
    gender: 'female',
    type: 'pullover',
    category: 'upperbody',
    percentage: 65,
    svg: womanUpperbodyColdPulloverRed,
  },
  womanUpperbodyColdPulloverTurquoise: {
    name: 'womanUpperbodyColdPulloverTurquoise',
    gender: 'female',
    type: 'pullover',
    category: 'upperbody',
    percentage: 65,
    svg: womanUpperbodyColdPulloverTurquoise,
  },
  womanUpperbodyColdTopRed: {
    name: 'womanUpperbodyColdTopRed',
    gender: 'female',
    type: 'top',
    category: 'upperbody',
    percentage: 50,
    svg: womanUpperbodyColdTopRed,
  },
  womanUpperbodyColdTopTurquoise: {
    name: 'womanUpperbodyColdTopTurquoise',
    gender: 'female',
    type: 'top',
    category: 'upperbody',
    percentage: 50,
    svg: womanUpperbodyColdTopTurquoise,
  },
  womanUpperbodyColdTopViolet: {
    name: 'womanUpperbodyColdTopViolet',
    gender: 'female',
    type: 'top',
    category: 'upperbody',
    percentage: 50,
    svg: womanUpperbodyColdTopViolet,
  },
  womanUpperbodyColdTopWhite: {
    name: 'womanUpperbodyColdTopWhite',
    gender: 'female',
    type: 'top',
    category: 'upperbody',
    percentage: 50,
    svg: womanUpperbodyColdTopWhite,
  },
  womanUpperbodyWarmCroptopBlue: {
    name: 'womanUpperbodyWarmCroptopBlue',
    gender: 'female',
    type: 'croptop',
    category: 'upperbody',
    percentage: 20,
    svg: womanUpperbodyWarmCroptopBlue,
  },
  womanUpperbodyWarmCroptopDarkgreen: {
    name: 'womanUpperbodyWarmCroptopDarkgreen',
    gender: 'female',
    type: 'croptop',
    category: 'upperbody',
    percentage: 20,
    svg: womanUpperbodyWarmCroptopDarkgreen,
  },
  womanUpperbodyWarmCroptopRed: {
    name: 'womanUpperbodyWarmCroptopRed',
    gender: 'female',
    type: 'croptop',
    category: 'upperbody',
    percentage: 20,
    svg: womanUpperbodyWarmCroptopRed,
  },
  womanUpperbodyWarmStraplesstopGreen: {
    name: 'womanUpperbodyWarmStraplesstopGreen',
    gender: 'female',
    type: 'straplesstop',
    category: 'upperbody',
    percentage: 10,
    svg: womanUpperbodyWarmStraplesstopGreen,
  },
  womanUpperbodyWarmStraplesstopTurquoise: {
    name: 'womanUpperbodyWarmStraplesstopTurquoise',
    gender: 'female',
    type: 'straplesstop',
    category: 'upperbody',
    percentage: 10,
    svg: womanUpperbodyWarmStraplesstopTurquoise,
  },
  womanUpperbodyWarmStraplesstopViolet: {
    name: 'womanUpperbodyWarmStraplesstopViolet',
    gender: 'female',
    type: 'straplesstop',
    category: 'upperbody',
    percentage: 10,
    svg: womanUpperbodyWarmStraplesstopViolet,
  },
  womanUpperbodyStraptopLightblue: {
    name: 'womanUpperbodyStraptopLightblue',
    gender: 'female',
    type: 'straptop',
    category: 'upperbody',
    percentage: 15,
    svg: womanUpperbodyStraptopLightblue,
  },
  womanUpperbodyStraptopLightviolet: {
    name: 'womanUpperbodyStraptopLightviolet',
    gender: 'female',
    type: 'straptop',
    category: 'upperbody',
    percentage: 15,
    svg: womanUpperbodyStraptopLightviolet,
  },
  womanUpperbodyStraptopRed: {
    name: 'womanUpperbodyStraptopRed',
    gender: 'female',
    type: 'straptop',
    category: 'upperbody',
    percentage: 15,
    svg: womanUpperbodyStraptopRed,
  },
  womanUpperbodyStraptopWhitepink: {
    name: 'womanUpperbodyStraptopWhitepink',
    gender: 'female',
    type: 'straptop',
    category: 'upperbody',
    percentage: 15,
    svg: womanUpperbodyStraptopWhitepink,
  },
  womanUpperbodyTshirtLightgray: {
    name: 'womanUpperbodyTshirtLightgray',
    gender: 'female',
    type: 't-shirt',
    category: 'upperbody',
    percentage: 25,
    svg: womanUpperbodyTshirtLightgray,
  },
  womanUpperbodyTshirtViolet: {
    name: 'womanUpperbodyTshirtViolet',
    gender: 'female',
    type: 't-shirt',
    category: 'upperbody',
    percentage: 25,
    svg: womanUpperbodyTshirtViolet,
  },
  womanHairLongFringeBlond: {
    name: 'womanHairLongFringeBlond',
    gender: 'female',
    type: 'longFringeHair',
    category: 'hair',
    svg: womanHairLongFringeBlond,
  },
  womanHairLongFringeBrown: {
    name: 'womanHairLongFringeBrown',
    gender: 'female',
    type: 'longFringeHair',
    category: 'hair',
    svg: womanHairLongFringeBrown,
  },
  womanHairLongFringeOrange: {
    name: 'womanHairLongFringeOrange',
    gender: 'female',
    type: 'longFringeHair',
    category: 'hair',
    svg: womanHairLongFringeOrange,
  },
  womanHairLongFringeBlack: {
    name: 'womanHairLongFringeBlack',
    gender: 'female',
    type: 'longFringeHair',
    category: 'hair',
    svg: womanHairLongFringeBlack,
  },
  womanHairLongStraightBlond: {
    name: 'womanHairLongStraightBlond',
    gender: 'female',
    type: 'longStraightHair',
    category: 'hair',
    svg: womanHairLongStraightBlond,
  },
  womanHairLongStraightBrown: {
    name: 'womanHairLongStraightBrown',
    gender: 'female',
    type: 'longStraightHair',
    category: 'hair',
    svg: womanHairLongStraightBrown,
  },
  womanHairLongStraightOrange: {
    name: 'womanHairLongStraightOrange',
    gender: 'female',
    type: 'longStraightHair',
    category: 'hair',
    svg: womanHairLongStraightOrange,
  },
  womanHairLongStraightBlack: {
    name: 'womanHairLongStraightBlack',
    gender: 'female',
    type: 'longStraightHair',
    category: 'hair',
    svg: womanHairLongStraightBlack,
  },
  womanHairLongWavyBlond: {
    name: 'womanHairLongWavyBlond',
    gender: 'female',
    type: 'longWavytHair',
    category: 'hair',
    svg: womanHairLongWavyBlond,
  },
  womanHairLongWavyBrown: {
    name: 'womanHairLongWavyBrown',
    gender: 'female',
    type: 'longWavytHair',
    category: 'hair',
    svg: womanHairLongWavyBrown,
  },
  womanHairLongWavyOrange: {
    name: 'womanHairLongWavyOrange',
    gender: 'female',
    type: 'longWavytHair',
    category: 'hair',
    svg: womanHairLongWavyOrange,
  },
  womanHairLongWavyBlack: {
    name: 'womanHairLongWavyBlack',
    gender: 'female',
    type: 'longWavytHair',
    category: 'hair',
    svg: womanHairLongWavyBlack,
  },
  womanHairPigtailBraidBlond: {
    name: 'womanHairPigtailBraidBlond',
    gender: 'female',
    type: 'braid',
    category: 'hair',
    svg: womanHairPigtailBraidBlond,
  },
  womanHairPigtailBraidBrown: {
    name: 'womanHairPigtailBraidBrown',
    gender: 'female',
    type: 'braid',
    category: 'hair',
    svg: womanHairPigtailBraidBrown,
  },
  womanHairPigtailBraidOrange: {
    name: 'womanHairPigtailBraidOrange',
    gender: 'female',
    type: 'braid',
    category: 'hair',
    svg: womanHairPigtailBraidOrange,
  },
  womanHairPigtailBraidBlack: {
    name: 'womanHairPigtailBraidBlack',
    gender: 'female',
    type: 'braid',
    category: 'hair',
    svg: womanHairPigtailBraidBlack,
  },
  womanHairPigtailDuttBlond: {
    name: 'womanHairPigtailDuttBlond',
    gender: 'female',
    type: 'dutt',
    category: 'hair',
    svg: womanHairPigtailDuttBlond,
  },
  womanHairPigtailDuttBrown: {
    name: 'womanHairPigtailDuttBrown',
    gender: 'female',
    type: 'dutt',
    category: 'hair',
    svg: womanHairPigtailDuttBrown,
  },
  womanHairPigtailDuttOrange: {
    name: 'womanHairPigtailDuttOrange',
    gender: 'female',
    type: 'dutt',
    category: 'hair',
    svg: womanHairPigtailDuttOrange,
  },
  womanHairPigtailDuttBlack: {
    name: 'womanHairPigtailDuttBlack',
    gender: 'female',
    type: 'dutt',
    category: 'hair',
    svg: womanHairPigtailDuttBlack,
  },
  womanHairPigtailPigtailBlond: {
    name: 'womanHairPigtailPigtailBlond',
    gender: 'female',
    type: 'pigtail',
    category: 'hair',
    svg: womanHairPigtailPigtailBlond,
  },
  womanHairPigtailPigtailBrown: {
    name: 'womanHairPigtailPigtailBrown',
    gender: 'female',
    type: 'pigtail',
    category: 'hair',
    svg: womanHairPigtailPigtailBrown,
  },
  womanHairPigtailPigtailOrange: {
    name: 'womanHairPigtailPigtailOrange',
    gender: 'female',
    type: 'pigtail',
    category: 'hair',
    svg: womanHairPigtailPigtailOrange,
  },
  womanHairPigtailPigtailBlack: {
    name: 'womanHairPigtailPigtailBlack',
    gender: 'female',
    type: 'pigtail',
    category: 'hair',
    svg: womanHairPigtailPigtailBlack,
  },
  womanHairShortCurlyBlond: {
    name: 'womanHairShortCurlyBlond',
    gender: 'female',
    type: 'shortCurlyHair',
    category: 'hair',
    svg: womanHairShortCurlyBlond,
  },
  womanHairShortCurlyBrown: {
    name: 'womanHairShortCurlyBrown',
    gender: 'female',
    type: 'shortCurlyHair',
    category: 'hair',
    svg: womanHairShortCurlyBrown,
  },
  womanHairShortCurlyOrange: {
    name: 'womanHairShortCurlyOrange',
    gender: 'female',
    type: 'shortCurlyHair',
    category: 'hair',
    svg: womanHairShortCurlyOrange,
  },
  womanHairShortCurlyBlack: {
    name: 'womanHairShortCurlyBlack',
    gender: 'female',
    type: 'shortCurlyHair',
    category: 'hair',
    svg: womanHairShortCurlyBlack,
  },
  womanHairShortFringeBlond: {
    name: 'womanHairShortFringeBlond',
    gender: 'female',
    type: 'shortFringeHair',
    category: 'hair',
    svg: womanHairShortFringeBlond,
  },
  womanHairShortFringeBrown: {
    name: 'womanHairShortFringeBrown',
    gender: 'female',
    type: 'shortFringeHair',
    category: 'hair',
    svg: womanHairShortFringeBrown,
  },
  womanHairShortFringeOrange: {
    name: 'womanHairShortFringeOrange',
    gender: 'female',
    type: 'shortFringeHair',
    category: 'hair',
    svg: womanHairShortFringeOrange,
  },
  womanHairShortFringeBlack: {
    name: 'womanHairShortFringeBlack',
    gender: 'female',
    type: 'shortFringeHair',
    category: 'hair',
    svg: womanHairShortFringeBlack,
  },
  womanHairShortStraightBlond: {
    name: 'womanHairShortStraightBlond',
    gender: 'female',
    type: 'shortStraightHair',
    category: 'hair',
    svg: womanHairShortStraightBlond,
  },
  womanHairShortStraightBrown: {
    name: 'womanHairShortStraightBrown',
    gender: 'female',
    type: 'shortStraightHair',
    category: 'hair',
    svg: womanHairShortStraightBrown,
  },
  womanHairShortStraightOrange: {
    name: 'womanHairShortStraightOrange',
    gender: 'female',
    type: 'shortStraightHair',
    category: 'hair',
    svg: womanHairShortStraightOrange,
  },
  womanHairShortStraightBlack: {
    name: 'womanHairShortStraightBlack',
    gender: 'female',
    type: 'shortStraightHair',
    category: 'hair',
    svg: womanHairShortStraightBlack,
  },
  weatherPredictionHail: {
    name: 'weatherPredictionHail',
    type: 'weatherIconHail',
    category: 'weatherIcon',
    svg: weatherPredictionHail,
  },
  weatherPredictionRain: {
    name: 'weatherPredictionRain',
    type: 'weatherIconRain',
    category: 'weatherIcon',
    svg: weatherPredictionRain,
  },
  weatherPredictionSnow: {
    name: 'weatherPredictionSnow',
    type: 'weatherIconSnow',
    category: 'weatherIcon',
    svg: weatherPredictionSnow,
  },
  weatherPredictionSun: {
    name: 'weatherPredictionSun',
    type: 'weatherIconSun',
    category: 'weatherIcon',
    svg: weatherPredictionSun,
  },
  weatherPredictionThunderstorm: {
    name: 'weatherPredictionThunderstorm',
    type: 'weatherIconThunderstorm',
    category: 'weatherIcon',
    svg: weatherPredictionThunderstorm,
  },
  weatherToolsCap: {
    name: 'weatherToolsCap',
    type: 'weatherIconCap',
    category: 'weatherIcon',
    svg: weatherToolsCap,
  },
  weatherToolsGloves: {
    name: 'weatherToolsGloves',
    type: 'weatherIconGloves',
    category: 'weatherIcon',
    svg: weatherToolsGloves,
  },
  weatherToolsSuncreme: {
    name: 'weatherToolsSuncreme',
    type: 'weatherIconSuncreme',
    category: 'weatherIcon',
    svg: weatherToolsSuncreme,
  },
  weatherToolsUmbrella: {
    name: 'weatherToolsUmbrella',
    type: 'weatherIconUmbrella',
    category: 'weatherIcon',
    svg: weatherToolsUmbrella,
  },
  iconsBodyColorBlack: {
    name: 'iconsBodyColorBlack',
    type: 'iconBlack',
    category: 'icon',
    svg: iconsBodyColorBlack,
  },
  iconsBodyColorWhite: {
    name: 'iconsBodyColorWhite',
    type: 'iconWhite',
    category: 'icon',
    svg: iconsBodyColorWhite,
  },
  iconsBodyColorYellow: {
    name: 'iconsBodyColorYellow',
    type: 'iconYellow',
    category: 'icon',
    svg: iconsBodyColorYellow,
  },
  iconsGenderMan: {
    name: 'iconsGenderMan',
    type: 'iconGender',
    category: 'icon',
    svg: iconsGenderMan,
  },
  iconsGenderWoman: {
    name: 'iconsGenderWoman',
    type: 'iconGender',
    category: 'icon',
    svg: iconsGenderWoman,
  },
  iconsHairColorBlond: {
    name: 'iconsHairColorBlond',
    type: 'iconHaircolor',
    category: 'icon',
    svg: iconsHairColorBlond,
  },
  iconsHairColorBrown: {
    name: 'iconsHairColorBrown',
    type: 'iconHaircolor',
    category: 'icon',
    svg: iconsHairColorBrown,
  },
  iconsHairColorOrange: {
    name: 'iconsHairColorOrange',
    type: 'iconHaircolor',
    category: 'icon',
    svg: iconsHairColorOrange,
  },
  iconsHairColorBlack: {
    name: 'iconsHairColorBlack',
    type: 'iconHaircolor',
    category: 'icon',
    svg: iconsHairColorBlack,
  },
  manBodyWhite: {
    name: 'manBodyWhite',
    gender: 'male',
    type: 'body',
    category: 'body',
    svg: manBodyWhite,
  },
  manBodyYellow: {
    name: 'manBodyYellow',
    gender: 'male',
    type: 'body',
    category: 'body',
    svg: manBodyYellow,
  },
  manBodyBlack: {
    name: 'manBodyBlack',
    gender: 'male',
    type: 'body',
    category: 'body',
    svg: manBodyBlack,
  },
  manExtraTrunkBlue: {
    name: 'manExtraTrunkBlue',
    gender: 'male',
    type: 'trunk',
    category: 'extra',
    percentage: 5,
    svg: manExtraTrunkBlue,
  },
  manExtraTrunkGray: {
    name: 'manExtraTrunkGray',
    gender: 'male',
    type: 'trunk',
    category: 'extra',
    percentage: 5,
    svg: manExtraTrunkGray,
  },
  manExtraCapBlue: {
    name: 'manExtraCapBlue',
    gender: 'male',
    type: 'cap',
    category: 'headgear',
    percentage: 100,
    svg: manExtraCapBlue,
  },
  manExtraCapViolet: {
    name: 'manExtraCapViolet',
    gender: 'male',
    type: 'cap',
    category: 'headgear',
    percentage: 100,
    svg: manExtraCapViolet,
  },
  manExtraGloveViolet: {
    name: 'manExtraGloveViolet',
    gender: 'male',
    type: 'gloves',
    category: 'gloves',
    percentage: 100,
    svg: manExtraGloveViolet,
  },
  manExtraGloveBlue: {
    name: 'manExtraGloveBlue',
    gender: 'male',
    type: 'gloves',
    category: 'gloves',
    percentage: 100,
    svg: manExtraGloveBlue,
  },
  manExtraJacketBlue: {
    name: 'manExtraJacketBlue',
    gender: 'male',
    type: 'jacketSpringAutumn',
    category: 'jacket',
    percentage: 50,
    svg: manExtraJacketBlue,
  },
  manExtraJacketWhite: {
    name: 'manExtraJacketWhite',
    gender: 'male',
    type: 'jacketSpringAutumn',
    category: 'jacket',
    percentage: 50,
    svg: manExtraJacketWhite,
  },
  manExtraWinterjacketBlack: {
    name: 'manExtraWinterjacketBlack',
    gender: 'male',
    type: 'jacketWinter',
    category: 'jacket',
    percentage: 100,
    svg: manExtraWinterjacketBlack,
  },
  manExtraWinterjacketBlue: {
    name: 'manExtraWinterjacketBlue',
    gender: 'male',
    type: 'jacketWinter',
    category: 'jacket',
    percentage: 100,
    svg: manExtraWinterjacketBlue,
  },
  manLowerbodyColdBlack: {
    name: 'manLowerbodyColdBlack',
    gender: 'male',
    type: 'trousersCold',
    category: 'lowerbody',
    percentage: 60,
    svg: manLowerbodyColdBlack,
  },
  manLowerbodyColdBlue: {
    name: 'manLowerbodyColdBlue',
    gender: 'male',
    type: 'trousersCold',
    category: 'lowerbody',
    percentage: 60,
    svg: manLowerbodyColdBlue,
  },
  manLowerbodyColdGray: {
    name: 'manLowerbodyColdGray',
    gender: 'male',
    type: 'trousersCold',
    category: 'lowerbody',
    percentage: 60,
    svg: manLowerbodyColdGray,
  },
  manLowerbodyColdGreen: {
    name: 'manLowerbodyColdGreen',
    gender: 'male',
    type: 'trousersCold',
    category: 'lowerbody',
    percentage: 60,
    svg: manLowerbodyColdGreen,
  },
  manLowerbodyWarmMiddleBlack: {
    name: 'manLowerbodyWarmMiddleBlack',
    gender: 'male',
    type: 'trousersWarmMiddle',
    category: 'lowerbody',
    percentage: 30,
    svg: manLowerbodyWarmMiddleBlack,
  },
  manLowerbodyWarmMiddleBlue: {
    name: 'manLowerbodyWarmMiddleBlue',
    gender: 'male',
    type: 'trousersWarmMiddle',
    category: 'lowerbody',
    percentage: 30,
    svg: manLowerbodyWarmMiddleBlue,
  },
  manLowerbodyWarmMiddleGray: {
    name: 'manLowerbodyWarmMiddleGray',
    gender: 'male',
    type: 'trousersWarmMiddle',
    category: 'lowerbody',
    percentage: 30,
    svg: manLowerbodyWarmMiddleGray,
  },
  manLowerbodyWarmShortBlack: {
    name: 'manLowerbodyWarmShortBlack',
    gender: 'male',
    type: 'trousersWarm',
    category: 'lowerbody',
    percentage: 20,
    svg: manLowerbodyWarmShortBlack,
  },
  manLowerbodyWarmShortBlue: {
    name: 'manLowerbodyWarmShortBlue',
    gender: 'male',
    type: 'trousersWarm',
    category: 'lowerbody',
    percentage: 20,
    svg: manLowerbodyWarmShortBlue,
  },
  manLowerbodyWarmShortGray: {
    name: 'manLowerbodyWarmShortGray',
    gender: 'male',
    type: 'trousersWarm',
    category: 'lowerbody',
    percentage: 20,
    svg: manLowerbodyWarmShortGray,
  },
  manLowerbodyWarmShortGreen: {
    name: 'manLowerbodyWarmShortGreen',
    gender: 'male',
    type: 'trousersWarm',
    category: 'lowerbody',
    percentage: 20,
    svg: manLowerbodyWarmShortGreen,
  },
  manShoesRubberboots: {
    name: 'manShoesRubberboots',
    gender: 'male',
    type: 'rubberboots',
    category: 'shoes',
    percentage: 0,
    svg: manShoesRubberboots,
  },
  manShoesSneakers: {
    name: 'manShoesSneakers',
    gender: 'male',
    type: 'shoesSneakers',
    category: 'shoes',
    percentage: 30,
    svg: manShoesSneakers,
  },
  manShoesWinter: {
    name: 'manShoesWinter',
    gender: 'male',
    type: 'shoesCold',
    category: 'shoes',
    percentage: 90,
    svg: manShoesWinter,
  },
  manUpperbodyColdCollarpulloverBlack: {
    name: 'manUpperbodyColdCollarpulloverBlack',
    gender: 'male',
    type: 'collarpullover',
    category: 'upperbody',
    percentage: 85,
    svg: manUpperbodyColdCollarpulloverBlack,
  },
  manUpperbodyColdCollarpulloverBlue: {
    name: 'manUpperbodyColdCollarpulloverBlue',
    gender: 'male',
    type: 'collarpullover',
    category: 'upperbody',
    percentage: 85,
    svg: manUpperbodyColdCollarpulloverBlue,
  },
  manUpperbodyColdCollarpulloverGreen: {
    name: 'manUpperbodyColdCollarpulloverGreen',
    gender: 'male',
    type: 'collarpullover',
    category: 'upperbody',
    percentage: 85,
    svg: manUpperbodyColdCollarpulloverGreen,
  },
  manUpperbodyColdCollarpulloverViolet: {
    name: 'manUpperbodyColdCollarpulloverViolet',
    gender: 'male',
    type: 'collarpullover',
    category: 'upperbody',
    percentage: 85,
    svg: manUpperbodyColdCollarpulloverViolet,
  },
  manUpperbodyColdLongshirtBlue: {
    name: 'manUpperbodyColdLongshirtBlue',
    gender: 'male',
    type: 'longshirt',
    category: 'upperbody',
    percentage: 60,
    svg: manUpperbodyColdLongshirtBlue,
  },
  manUpperbodyColdLongshirtBrown: {
    name: 'manUpperbodyColdLongshirtBrown',
    gender: 'male',
    type: 'longshirt',
    category: 'upperbody',
    percentage: 60,
    svg: manUpperbodyColdLongshirtBrown,
  },
  manUpperbodyColdLongshirtRed: {
    name: 'manUpperbodyColdLongshirtRed',
    gender: 'male',
    type: 'longshirt',
    category: 'upperbody',
    percentage: 60,
    svg: manUpperbodyColdLongshirtRed,
  },
  manUpperbodyColdStraptopBlue: {
    name: 'manUpperbodyColdStraptopBlue',
    gender: 'male',
    type: 'straptop',
    category: 'upperbody',
    percentage: 10,
    svg: manUpperbodyColdStraptopBlue,
  },
  manUpperbodyColdStraptopGray: {
    name: 'manUpperbodyColdStraptopGray',
    gender: 'male',
    type: 'straptop',
    category: 'upperbody',
    percentage: 10,
    svg: manUpperbodyColdStraptopGray,
  },
  manUpperbodyColdStraptopGreen: {
    name: 'manUpperbodyColdStraptopGreen',
    gender: 'male',
    type: 'straptop',
    category: 'upperbody',
    percentage: 10,
    svg: manUpperbodyColdStraptopGreen,
  },
  manUpperbodyColdStraptopWhite: {
    name: 'manUpperbodyColdStraptopWhite',
    gender: 'male',
    type: 'straptop',
    category: 'upperbody',
    percentage: 10,
    svg: manUpperbodyColdStraptopWhite,
  },
  manUpperbodyColdTshirtVBlue: {
    name: 'manUpperbodyColdTshirtVBlue',
    gender: 'male',
    type: 'TshirtV',
    category: 'upperbody',
    percentage: 25,
    svg: manUpperbodyColdTshirtVBlue,
  },
  manUpperbodyColdTshirtVBrown: {
    name: 'manUpperbodyColdTshirtVBrown',
    gender: 'male',
    type: 'TshirtV',
    category: 'upperbody',
    percentage: 25,
    svg: manUpperbodyColdTshirtVBrown,
  },
  manUpperbodyColdTshirtVGray: {
    name: 'manUpperbodyColdTshirtVGray',
    gender: 'male',
    type: 'TshirtV',
    category: 'upperbody',
    percentage: 25,
    svg: manUpperbodyColdTshirtVGray,
  },
  manUpperbodyColdTshirtVWhite: {
    name: 'manUpperbodyColdTshirtVWhite',
    gender: 'male',
    type: 'TshirtV',
    category: 'upperbody',
    percentage: 25,
    svg: manUpperbodyColdTshirtVWhite,
  },
  manUpperbodyColdTshirtUBlack: {
    name: 'manUpperbodyColdTshirtUBlack',
    gender: 'male',
    type: 'TshirtU',
    category: 'upperbody',
    percentage: 20,
    svg: manUpperbodyColdTshirtUBlack,
  },
  manUpperbodyColdTshirtUBlue: {
    name: 'manUpperbodyColdTshirtUBlue',
    gender: 'male',
    type: 'TshirtU',
    category: 'upperbody',
    percentage: 20,
    svg: manUpperbodyColdTshirtUBlue,
  },
  manUpperbodyColdTshirtUViolet: {
    name: 'manUpperbodyColdTshirtUViolet',
    gender: 'male',
    type: 'TshirtU',
    category: 'upperbody',
    percentage: 20,
    svg: manUpperbodyColdTshirtUViolet,
  },
  manUpperbodyColdTshirtUYellow: {
    name: 'manUpperbodyColdTshirtUYellow',
    gender: 'male',
    type: 'TshirtU',
    category: 'upperbody',
    percentage: 20,
    svg: manUpperbodyColdTshirtUYellow,
  },
  manHairFirstBlond: {
    name: 'manHairFirstBlond',
    gender: 'male',
    type: 'firstHair',
    category: 'hair',
    svg: manHairFirstBlond,
  },
  manHairFirstBrown: {
    name: 'manHairFirstBrown',
    gender: 'male',
    type: 'firstHair',
    category: 'hair',
    svg: manHairFirstBrown,
  },
  manHairFirstOrange: {
    name: 'manHairFirstOrange',
    gender: 'male',
    type: 'firstHair',
    category: 'hair',
    svg: manHairFirstOrange,
  },
  manHairFirstBlack: {
    name: 'manHairFirstBlack',
    gender: 'male',
    type: 'firstHair',
    category: 'hair',
    svg: manHairFirstBlack,
  },
  manHairLongBlond: {
    name: 'manHairLongBlond',
    gender: 'male',
    type: 'longHair',
    category: 'hair',
    svg: manHairLongBlond,
  },
  manHairLongBrown: {
    name: 'manHairLongBrown',
    gender: 'male',
    type: 'longHair',
    category: 'hair',
    svg: manHairLongBrown,
  },
  manHairLongOrange: {
    name: 'manHairLongOrange',
    gender: 'male',
    type: 'longHair',
    category: 'hair',
    svg: manHairLongOrange,
  },
  manHairLongBlack: {
    name: 'manHairLongBlack',
    gender: 'male',
    type: 'longHair',
    category: 'hair',
    svg: manHairLongBlack,
  },
  manHairMattBlond: {
    name: 'manHairMattBlond',
    gender: 'male',
    type: 'mattHair',
    category: 'hair',
    svg: manHairMattBlond,
  },
  manHairMattBrown: {
    name: 'manHairMattBrown',
    gender: 'male',
    type: 'mattHair',
    category: 'hair',
    svg: manHairMattBrown,
  },
  manHairMattOrange: {
    name: 'manHairMattOrange',
    gender: 'male',
    type: 'mattHair',
    category: 'hair',
    svg: manHairMattOrange,
  },
  manHairMattBlack: {
    name: 'manHairMattBlack',
    gender: 'male',
    type: 'mattHair',
    category: 'hair',
    svg: manHairMattBlack,
  },
  manHairSecondBlond: {
    name: 'manHairSecondBlond',
    gender: 'male',
    type: 'secondHair',
    category: 'hair',
    svg: manHairSecondBlond,
  },
  manHairSecondBrown: {
    name: 'manHairSecondBrown',
    gender: 'male',
    type: 'secondHair',
    category: 'hair',
    svg: manHairSecondBrown,
  },
  manHairSecondOrange: {
    name: 'manHairSecondOrange',
    gender: 'male',
    type: 'secondHair',
    category: 'hair',
    svg: manHairSecondOrange,
  },
  manHairSecondBlack: {
    name: 'manHairSecondBlack',
    gender: 'male',
    type: 'secondHair',
    category: 'hair',
    svg: manHairSecondBlack,
  },
  manHairWavesBlond: {
    name: 'manHairWavesBlond',
    gender: 'male',
    type: 'wavieHair',
    category: 'hair',
    svg: manHairWavesBlond,
  },
  manHairWavesBrown: {
    name: 'manHairWavesBrown',
    gender: 'male',
    type: 'wavieHair',
    category: 'hair',
    svg: manHairWavesBrown,
  },
  manHairWavesOrange: {
    name: 'manHairWavesOrange',
    gender: 'male',
    type: 'wavieHair',
    category: 'hair',
    svg: manHairWavesOrange,
  },
  manHairWavesBlack: {
    name: 'manHairWavesBlack',
    gender: 'male',
    type: 'wavieHair',
    category: 'hair',
    svg: manHairWavesBlack,
  },
};

export async function getSVGString(name) {
  console.log(`getting svg ${svgs[name].svg}`);
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
