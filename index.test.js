const {csv_to_array_object} = require('./dist/index')

describe('test converting csv to array of object', () => {
    test('convert csv to an array of object which should have length of 54555', async() => {
      expect((await csv_to_array_object('dictionary.csv')).length).toBe(54555);
    });
  });