-- PostgreSQL. Учебная схема: выполняйте только в отдельной учебной БД.
CREATE TABLE qa_customers (id integer PRIMARY KEY, name text NOT NULL);
CREATE TABLE qa_orders (
  id integer PRIMARY KEY,
  customer_id integer REFERENCES qa_customers(id),
  status text NOT NULL,
  total numeric(10,2) NOT NULL CHECK (total >= 0)
);
INSERT INTO qa_customers VALUES (1, 'Аня'), (2, 'Борис'), (3, 'Вера');
INSERT INTO qa_orders VALUES
  (101, 1, 'paid', 1000), (102, 1, 'paid', 500),
  (103, 2, 'new', 700), (104, NULL, 'paid', 200);
