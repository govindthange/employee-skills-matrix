--
-- PostgreSQL database cluster dump
--

SET default_transaction_read_only = off;

SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;



\connect postgres

--
-- PostgreSQL database dump
--

-- Dumped from database version 15.1 (Debian 15.1-1.pgdg110+1)
-- Dumped by pg_dump version 15.1 (Debian 15.1-1.pgdg110+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: employee; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.employee (
    code bigint NOT NULL,
    designation character varying(255),
    github_url character varying(255),
    linkedin_url character varying(255),
    localtion character varying(255),
    mobile_number character varying(255),
    name character varying(255),
    office_email_id character varying(255),
    years_of_experience character varying(255)
);


ALTER TABLE public.employee OWNER TO admin;

--
-- Name: employee_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public.employee_seq
    START WITH 1
    INCREMENT BY 50
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.employee_seq OWNER TO admin;

--
-- Name: employee_skills; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.employee_skills (
    employee_id bigint NOT NULL,
    skills_id bigint NOT NULL
);


ALTER TABLE public.employee_skills OWNER TO admin;

--
-- Name: skill; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.skill (
    id bigint NOT NULL,
    skill character varying(255),
    tag character varying(255),
    employee_code bigint,
    employee_id bigint
);


ALTER TABLE public.skill OWNER TO admin;

--
-- Name: skill_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public.skill_seq
    START WITH 1
    INCREMENT BY 50
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.skill_seq OWNER TO admin;

--
-- Name: employee employee_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.employee
    ADD CONSTRAINT employee_pkey PRIMARY KEY (code);


--
-- Name: skill skill_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.skill
    ADD CONSTRAINT skill_pkey PRIMARY KEY (id);


--
-- Name: employee_skills uk_5s5s2i3l7oesk9ve7i52tfs35; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.employee_skills
    ADD CONSTRAINT uk_5s5s2i3l7oesk9ve7i52tfs35 UNIQUE (skills_id);


--
-- Name: skill fk399v2jjwoquykyqru83woj54j; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.skill
    ADD CONSTRAINT fk399v2jjwoquykyqru83woj54j FOREIGN KEY (employee_code) REFERENCES public.employee(code);


--
-- Name: skill fkeqkx730icjs5oq845i9b286fn; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.skill
    ADD CONSTRAINT fkeqkx730icjs5oq845i9b286fn FOREIGN KEY (employee_id) REFERENCES public.employee(code);


--
-- PostgreSQL database dump complete
--

--
-- PostgreSQL database cluster dump complete
--

