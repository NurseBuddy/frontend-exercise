import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

const carers = [
    { id: 1, name: 'Tom', lastName: 'hanks' },
    { id: 2, name: 'Harry', lastName: 'Barrie' },
    { id: 3, name: 'Meghan', lastName: 'Fox' },
    { id: 4, name: 'Alice', lastName: 'Malice' },
    { id: 5, name: 'Iris', lastName: 'Boris' },
    { id: 6, name: 'Omar', lastName: 'Monk' }];

mock.onGet('/carers').reply(200, carers);

mock.onGet(/\/carer\/\d+/).reply((config) => {
    try {
        const num = parseInt(config.url.substring('/carer/'.length), 10);
        const carer = carers.find((c) => c.id === num);

        if (carer) {
            return [200, carer];
        }
        return [404, { message: 'not found' }];
    } catch (e) {
        return [400, { message: 'invalid request' }];
    }
});

export default axios;
