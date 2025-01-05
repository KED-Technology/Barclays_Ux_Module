define(['nmodule/testModule/rc/testModule'], function (testModule) {
  'use strict';

  describe("nmodule/testModule/rc/testModule", function () {
    it("can extol its own virtues", function () {
      expect(testModule.extolVirtues()).toBe('testModule is great!');
    });
  });
});
