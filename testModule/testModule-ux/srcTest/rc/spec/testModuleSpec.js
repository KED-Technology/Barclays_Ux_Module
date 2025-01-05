define([ 'nmodule/testModule/rc/testModule' ], function (testModule) {
  'use strict';

  describe("nmodule/testModule/rc/testModule", () => {
    it("can extol its own virtues", () => {
      expect(testModule.extolVirtues()).toBe('testModule is great!');
    });
  });
});
