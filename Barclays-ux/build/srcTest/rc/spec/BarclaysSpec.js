define(['nmodule/Barclays/rc/Barclays'], function (Barclays) {
  'use strict';

  describe("nmodule/Barclays/rc/Barclays", function () {
    it("can extol its own virtues", function () {
      expect(Barclays.extolVirtues()).toBe('Barclays is great!');
    });
  });
});
