import { GetIpRespond } from '@src/interfaces';
import $ from 'jquery';

export function juziAnalysis() {
  $.getJSON('https://json.geoiplookup.io/?callback=?').then(
    (res: GetIpRespond) => {
      console.log(res);
    }
  );
}
