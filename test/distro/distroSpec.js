const {
  expect
} = require('chai');


describe('validate module', function() {

  it('should expose CJS bundle', function() {

    // given
    const { validate, validateAll, getSchemaVersion } = require('../../dist');

    // then
    expect(validate).to.exist;
    expect(validateAll).to.exist;
    expect(getSchemaVersion).to.exist;
  });
});