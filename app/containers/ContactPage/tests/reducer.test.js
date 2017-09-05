
import { fromJS } from 'immutable';
import contactPageReducer from '../reducer';

describe('contactPageReducer', () => {
  it('returns the initial state', () => {
    expect(contactPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
