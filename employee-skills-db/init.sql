CREATE TABLE IF NOT EXISTS employees (
    employee_id serial primary key, 
    employee_code int unique, name text, 
    location text,
    designation text, 
    mobile_no bigint, 
    year_of_experience numeric, 
    github_account_url text, 
    linkendin_profile_url text,
    email_id text
);