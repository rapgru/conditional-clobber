import convertXML from 'xml-js';
import { getSVGString } from '@/services/picture-service/svgs';
import jsonQ from 'jsonq';
import _ from 'lodash';

export async function renderPrediction(prediction) {
  // This is the SVG all other will get merged in
  let mainSVG = "<?xml version='1.0' encoding='utf-8'?> <svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 200 600' style='enable-background:new 0 0 200 600;' xml:space='preserve'>";

  const sortPrediction = _.zip(_.range(prediction.length), prediction).map(x => ({ number: x[0], prediction: x[1] }));

  // The following forEach swaps all class names for unique class names
  const processed = sortPrediction.map(async (svgName) => {
    let currentSvg = await getSVGString(svgName.prediction);
    let svgJSON = JSON.parse(convertXML.xml2json(currentSvg));
    svgJSON = jsonQ(svgJSON);

    const array = svgJSON.find('class').unique();
    array.forEach((element) => {
      const tmp = new RegExp(element, 'g');
      currentSvg = currentSvg.replace(tmp, element + svgName.prediction);
    });

    // Next comes the code for merging the current SVG into the main svg
    currentSvg = currentSvg.replace("<?xml version='1.0' encoding='utf-8'?>", '');
    currentSvg = currentSvg.replace('</svg>', '');

    const svgTagStartPosition = currentSvg.search('<svg');
    const svgTagEndPosition = currentSvg.indexOf('>', svgTagStartPosition);
    const svgTag = currentSvg.substring(svgTagStartPosition, svgTagEndPosition + 1);
    currentSvg = currentSvg.replace(svgTag, '');
    return { number: svgName.number, svg: currentSvg };
  });

  const res = await Promise.all(processed);

  mainSVG += _.sortBy(res, 'number').map(x => x.svg).join();
  mainSVG += '</svg>';

  return mainSVG;
}
