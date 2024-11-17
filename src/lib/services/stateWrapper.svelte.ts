export default class StateWrapper<T> {
	value: T;
	constructor(initialValue: T) {
		this.value = initialValue;
	}

	update(newValue: T) {
		this.value = newValue;
	}
}
