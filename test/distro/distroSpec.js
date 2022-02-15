const {
  expect
} = require('chai');


describe('validate module', function() {

  it('should expose CJS bundle', function() {

    // given
    const {
      validate,
      validateAll,
      getSchemaVersion,
      validateZeebe,
      validateAllZeebe,
      getZeebeSchemaVersion
    } = require('../../dist');

    // then
    expect(validate).to.exist;
    expect(validateAll).to.exist;
    expect(getSchemaVersion).to.exist;
    expect(validateZeebe).to.exist;
    expect(validateAllZeebe).to.exist;
    expect(getZeebeSchemaVersion).to.exist;
  });
});