package com.tridiumuniversity.testModule.ux;

import javax.baja.naming.BOrd;
import javax.baja.nre.annotations.NiagaraSingleton;
import javax.baja.nre.annotations.NiagaraType;
import javax.baja.sys.BSingleton;
import javax.baja.sys.Context;
import javax.baja.web.BIFormFactorMini;
import javax.baja.web.BIOffline;
import javax.baja.web.js.BIJavaScript;
import javax.baja.web.js.JsInfo;

@NiagaraType
@NiagaraSingleton
public class BBarclaysWidget extends BSingleton
        implements BIJavaScript, BIFormFactorMini, BIOffline
{
    private BBarclaysWidget() {}

    public JsInfo getJsInfo(Context cx) { return JS_INFO; }

    private static final JsInfo JS_INFO = JsInfo.make(
            //BOrd.make("module://testModule/rc/testModuleWidget.js"),
            BOrd.make("module://testModule/rc/Public/js/jquery.js"),
            BBarclaysModuleJsBuild.TYPE
    );
}
