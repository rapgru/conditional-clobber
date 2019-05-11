/*
svg.js


*/

/*
returns
{
  clothing: {
    type: 'fullbody' | 'seperate',
    fullbody: '',
    upperbody: '',
    lowerbody: '',
    jacket: '',
  },
  shoes: '',
  headgear: '',
  gloves: '',
}
*/
export function predict(weather, gender) {
  return {
    clothing: {
      type: 'fullbody',
      fullbody: 'womanDressStraplessBlue',
    },
    shoes: 'womanShoeEveryday',
    headgear: '',
    gloves: '',
  };
}
