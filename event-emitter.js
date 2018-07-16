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

	// remove a listener 
	// listener function must be named
	removeEventListener(type, listener) {
		if (this.hasEventListener(type)) {

			const index = this.events[type].indexOf(listener);

			// removes function from names events pool
			if (index !== -1) {
				this.events[type].splice(index, 1);
			}
		}
	}

	// return a boolean if exist in events obj type of events
	hasEventListener(type) {
		return this.events[type];
	}


}

// example usage
const emt = new Emitter();

const removeUser = () => { console.log('Perform logic to remove user') }
const removeComments = () => { console.log('remove Comments') }

emt.addEventListener('log', () => console.log('Client log, update settings'));
emt.addEventListener('log', () => console.log('Clear sesion'));


emt.dispatch('log');

// mimic real-world app when needed perform events
emt.addEventListener('log-out', removeUser);
emt.addEventListener('log-out', removeComments);

emt.removeEventListener('log-out', removeComments);

emt.dispatch('log-out');