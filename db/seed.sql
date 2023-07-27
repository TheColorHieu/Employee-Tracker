-- here we are adding data to our tables in the database
INSERT INTO department(department_name)
VALUES
('Engine building'),
('Exhaust systems'),
('Suspension'),
('Brake systems'),
('Transmission'),
('Fuel System'),
('Performance tuning'),
('Custom fabrication'),
('Alignment services'),
('Accessories');

INSERT INTO roles(title, salary, department_id)
VALUES
('Sales Lead', 1000.00, 1),
('Salesperson', 800.00, 1),
('Lead Engineer', 1500.00, 2),
('Software Engineer', 1200.00, 2),
('Account Manager', 1600.00, 3),
('Accountant', 1250.00, 3),
('Legal Team Lead', 2500.00, 4),
('Lawyer', 1900.00, 4),
('manager', 500.0, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('John', 'Doe', 1, 1),
('Mike', 'Chan', 2, 1),
('Ashley', 'Rodriguez', 3, 1),
('Kevin', 'Tupik', 4, 3),
('Kunal', 'Singh', 5, 1),
('Malia', 'Brown', 6, 5),
('Sarah', 'Lourd', 7, 1),
('Tom', 'Allen', 8, 7);

