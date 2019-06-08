import convertXML from 'xml-js';
import { getSVGString } from '@/services/picture-service/svgs';
import jsonQ from 'jsonq';

export async function renderPrediction(prediction) {
  // This is the SVG all other will get merged in
  let mainSVG = "<?xml version='1.0' encoding='utf-8'?> <svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 200 600' style='enable-background:new 0 0 200 600;' xml:space='preserve'>";

  // The following forEach swaps all class names for unique class names
  const processed = prediction.map(async (svgName) => {
    let currentSvg = await getSVGString(svgName);
    let svgJSON = JSON.parse(convertXML.xml2json(currentSvg));
    svgJSON = jsonQ(svgJSON);

    const array = svgJSON.find('class').unique();
    array.forEach((element) => {
      const tmp = new RegExp(element, 'g');
      currentSvg = currentSvg.replace(tmp, element + svgName);
    });

    // Next comes the code for merging the current SVG into the main svg
    currentSvg = currentSvg.replace("<?xml version='1.0' encoding='utf-8'?>", '');
    currentSvg = currentSvg.replace('</svg>', '');

    const svgTagStartPosition = currentSvg.search('<svg');
    const svgTagEndPosition = currentSvg.indexOf('>', svgTagStartPosition);
    const svgTag = currentSvg.substring(svgTagStartPosition, svgTagEndPosition + 1);
    currentSvg = currentSvg.replace(svgTag, '');
    mainSVG += currentSvg;
  });

  const res = await Promise.all(processed);

  mainSVG += res.join();
  mainSVG += '</svg>';

  return mainSVG;
}
