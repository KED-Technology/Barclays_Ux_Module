define(['nmodule/Barclays/rc/Barclays'], function (Barclays) {
  'use strict';

  describe("nmodule/Barclays/rc/Barclays", () => {
    it("can extol its own virtues", () => {
      expect(Barclays.extolVirtues()).toBe('Barclays is great!');
    });
  });
});
