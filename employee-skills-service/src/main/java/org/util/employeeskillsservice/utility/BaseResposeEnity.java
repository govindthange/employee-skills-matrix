package org.util.employeeskillsservice.utility;

import org.springframework.http.HttpStatusCode;

public class BaseResposeEnity {
    private HttpStatusCode status;
    private String message;
    private Object data;

    public BaseResposeEnity(HttpStatusCode status, String message, Object data) {
        this.status = status;
        this.message = message;
        this.data = data;
    }
    public HttpStatusCode getStatus() {
        return status;
    }
    public BaseResposeEnity setStatus(HttpStatusCode status) {
        this.status = status;
        return this;
    }
    public String getMessage() {
        return message;
    }
    public BaseResposeEnity setMessage(String message) {
        this.message = message;
        return this;

    }
    public Object getData() {
        return data;
    }
    public BaseResposeEnity setData(Object data) {
        this.data = data;
        return this;
    }
}