import svgImport from 'svg.js';
import femaleBody from 'raw-loader!@/assets/svgData/01_Charakter_Weiblich.svg'
import femaleHair from 'raw-loader!@/assets/svgData/02_Blond.svg'

/*
This Service merges all needed SVG images into one.
It loads the pictures with a raw-loader and gives it uniq names

If any sort of clothing is not needed the 'rendertPicture.svg();' is left blank.
*/

export function renderPrediction() {
  const svgService = svgImport();
  const rendertPicture = svgService.svg('drawing').size(200, 600);

  // Add body
  rendertPicture.svg(femaleBody);

  // Add hair from settings
  rendertPicture.svg(femaleHair);

  // Add shirt
  rendertPicture.svg(/* Load shirt */);

  // Add jacket if needed
  rendertPicture.svg(/* Load jacket */);

  // Add trousers
  rendertPicture.svg(/* Load trousers */);

  // Add shoes if needed
  rendertPicture.svg(/* Load shoes */);

  return rendertPicture;
}
