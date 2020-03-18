const mongoose = require('mongoose');
const Event = require('./Event');

describe('Event model', () => {
  it('has a required name', () => {
    const events = new Event();
    const { errors } = events.validateSync();

    expect(errors.name.message).toEqual('Path `name` is required.');
  });

  it('has an event name ', () => {
    const events = new Event({
      name: 'Cookies',
      
    });

    expect(events.toJSON()).toEqual({
      _id: expect.any(mongoose.Types.ObjectId),
      name: 'Cookies',
      
    });
  });
});
