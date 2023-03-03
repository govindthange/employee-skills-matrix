package org.util.employeeskillsservice.parser;

import org.util.employeeskillsservice.callbacks.CellCallBack;

import java.util.HashMap;
import java.util.Map;


public class EmployeeCellCallback {

    Map<String, CellCallBack> callbacks;

    public EmployeeCellCallback() {
        this.callbacks = new HashMap<>();
    }



    public void registerCallback(String key, CellCallBack callback) {
        callbacks.put(key, callback);
    }


    public CellCallBack getRegisterCallback(String key) {
        return callbacks.get(key);
    }

}
