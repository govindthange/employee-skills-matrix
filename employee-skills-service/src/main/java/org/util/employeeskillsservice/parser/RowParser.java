package org.util.employeeskillsservice.parser;

import org.apache.commons.csv.CSVRecord;

import java.lang.reflect.InvocationTargetException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public interface RowParser<E> {
    void parse();
}
