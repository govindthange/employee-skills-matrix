package org.util.employeeskillsservice.parser;

import org.springframework.stereotype.Component;
import org.util.employeeskillsservice.model.CellCallBack;
import org.util.employeeskillsservice.model.Tags;

import java.util.HashMap;
import java.util.Map;


public class EmployeeCellCallback {

    Map<String, CellCallBack> callbacks;

    public EmployeeCellCallback() {
        System.out.println("Initilise EmployeeCellCallback");
        this.callbacks = new HashMap<>();
        System.out.println("Compeleted Initilise EmployeeCellCallback");
    }



    public void registerCallback(String key, CellCallBack callback) {
        callbacks.put(key, callback);
    }


    public CellCallBack getRegisterCallback(String key) {
        return callbacks.get(key);
    }

}
