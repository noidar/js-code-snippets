class Emitter {
	constructor() {

		this.events = {};
	}

	addEventListener(type, listener) {

		if (!this.events[type]) {
			this.events[type] = [];
		}

		this.events[type].push(listener);
	}


	dispatch(type) {
		this.events[type].forEach((listener) => {
			listener();
		})
	}
}

// example usage
const emt = new Emitter();

emt.addEventListener('log', () => console.log('Client log, update settings'));
emt.addEventListener('log', () => console.log('Clear sesion'));

emt.dispatch('log');