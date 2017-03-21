import validator from 'card-validator';

import { exists } from './index';

export default CardValidator = (() => {
	const cvv = (digits) => {
		if (exists(digits)) {
			const cvv = digits.toString();
			const max_length = cvv.length > 3 ? 4 : 3; // This allows for American Express 4 digit CVV's

			return validator.cvv(cvv, max_length).isValid;
		} else {
			return false;
		}
	};

	const expiration = (expires) => {
		return exists(expires) && validator.expirationDate(expires).isValid;
	};

	const expirationMonth = (month) => {
		return exists(month) && validator.expirationMonth(month.toString()).isValid;
	};

	const expirationYear = (year) => {
		return exists(year) && validator.expirationYear(year.toString()).isValid;
	};

	const number = (digits) => {
		return exists(digits) && validator.number(digits.toString()).isValid;
	};

	const postal = (digits) => {
		return exists(digits) && validator.postalCode(digits.toString()).isValid;
	};

	return {
		cvv,
		expiration,
		expirationMonth,
		expirationYear,
		number,
		postal
	}
})();
