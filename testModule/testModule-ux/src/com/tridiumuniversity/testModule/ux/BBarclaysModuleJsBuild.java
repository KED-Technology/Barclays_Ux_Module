package com.tridiumuniversity.testModule.ux;

import javax.baja.naming.BOrd;
import javax.baja.web.js.BJsBuild;

public class BBarclaysModuleJsBuild extends BJsBuild {
    public static final BBarclaysModuleJsBuild INSTANCE = new BBarclaysModuleJsBuild(
            "Barclays", //webdev ID
            new BOrd[] {
                    BOrd.make("module://testModule/rc/testModule.built.min.js")
            }
    );

    protected BBarclaysModuleJsBuild(String id, BOrd[] builtFiles) {
        super(id, builtFiles);
    }
}

