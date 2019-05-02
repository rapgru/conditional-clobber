/* eslint-disable no-underscore-dangle */
/* eslint-disable func-names */
import convertXML from 'xml-js';
import { getSVGString } from '@/services/picture-service/svgs';
import jsonQ from 'jsonq';

/*
This Service merges all needed SVG images into one.
It loads the pictures with a raw-loader and gives it uniq names

prediction is a JSON which consists of off strings,
for every needed clothing the individual name gets stored in the JSON.

renderPrediction() will then merge it into one picture and return it
*/

export function renderPrediction(prediction) {
  prediction = { body: 'womanBodyWhite' };

  let body = getSVGString(prediction.body);
  let bodyJSON = JSON.parse(convertXML.xml2json(body));
  bodyJSON = jsonQ(bodyJSON);

  const array = bodyJSON.find('class').unique();
  array.forEach((element) => {
    const tmp = new RegExp(element, 'g');
    body = body.replace(tmp, element + prediction.body);
  });

  return body;
}
