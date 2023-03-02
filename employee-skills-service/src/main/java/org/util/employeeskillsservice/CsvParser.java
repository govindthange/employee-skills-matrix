package org.util.employeeskillsservice;

import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVParser;
import org.apache.commons.csv.CSVRecord;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Service;
import org.util.employeeskillsservice.parser.RowParser;

import java.io.FileReader;

@Service
public class CsvParser {
    @EventListener(ApplicationReadyEvent.class)
    public void doSomethingAfterStartup() {
        readCsv();
    }

    public void readCsv() {
        String csvFile = "matrix.csv";

        try (FileReader filereader = new FileReader(csvFile);
             CSVParser csvParser = new CSVParser(filereader, CSVFormat.DEFAULT.withFirstRecordAsHeader()
                     .withIgnoreHeaderCase()
                     .withTrim()
             )) {
            Iterable<CSVRecord> csvRecords = csvParser.getRecords();
            RowParser rowParser = new EmployeeRowParser(csvRecords);
            rowParser.parse();



        } catch(Exception ex) {
            System.out.println(ex);
        }
    }
}
