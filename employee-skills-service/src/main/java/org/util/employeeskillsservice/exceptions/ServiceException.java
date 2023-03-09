package org.util.employeeskillsservice.exception;

public class ServiceException extends Exception {

    boolean formatted;

    private static final long serialVersionUID = 1L;

    public ServiceException() {
        super();
    }

    public ServiceException(String arg0, Throwable arg1) {
        super(arg0, arg1);
    }

    public ServiceException(boolean hasFormattedMessage, String arg0) {
        super(arg0);

        this.formatted = hasFormattedMessage;
    }

    public ServiceException(String arg0) {
        super(arg0);
    }

    public ServiceException(Throwable arg0) {
        super(arg0);
    }

    public boolean isFormatted() {
        return formatted;
    }

    public void setFormatted(boolean formatted) {
        this.formatted = formatted;
    }
}