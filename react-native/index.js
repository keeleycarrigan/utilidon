import {
	Dimensions,
	ListView
} from 'react-native';

export const makeListSrc = (opts = {}) =>
	(new ListView.DataSource(Object.assign({}, { rowHasChanged: (r1, r2) => r1 !== r2 }, opts)));

export const { height: device_height, width: device_width } = Dimensions.get('window');

export const getDeviceSize = () => Dimensions.get('window');
