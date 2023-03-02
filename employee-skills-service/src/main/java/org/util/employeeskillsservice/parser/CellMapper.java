package org.util.employeeskillsservice.parser;

import org.apache.commons.csv.CSVRecord;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public interface CellMapper<E> {
    void map(String cell, String value, E obj);


}
