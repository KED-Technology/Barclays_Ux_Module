package com.trodiumuniversity.Barclays.ux;

import javax.baja.naming.BOrd;
import javax.baja.web.js.BJsBuild;

public class BBarclaysModuleJsBuild extends BJsBuild {
    public static final BBarclaysModuleJsBuild INSTANCE = new BBarclaysModuleJsBuild(
            "Barclays", //webdev ID
            new BOrd[] {
                    BOrd.make("module://Barclays/rc/Barclays.built.min.js")
            }
    );

    protected BBarclaysModuleJsBuild(String id, BOrd[] builtFiles) {
        super(id, builtFiles);
    }
}
