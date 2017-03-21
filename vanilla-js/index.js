import { isArray } from 'lodash';

import CardValidator from './cc-validation';


export const objToArray = (obj) => isArray(obj) ? obj : (Object.keys(obj).map((key) => obj[key]));

export const exists = (value) => typeof(value) !== 'undefined' && value !== null && value !== false;

export const toTitleCase = (string = '') =>
	(string.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()));

export const keyNameToTitle = (key) =>
	(toTitleCase(key.replace(/-|_/g, ' ')));

export { CardValidator }
