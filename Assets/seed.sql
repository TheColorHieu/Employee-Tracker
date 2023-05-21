-- here we are adding data to our tables 
INSERT INTO departments (department_name) VALUES
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

INSERT INTO roles (title, salary, department_id) VALUE
('Sales Lead', 100000, 1),
('Salesperson', 80000, 1),
('Lead Engineer', 150000),
('Software Engineer', 120000, 2),
('Account Manager', 160000, 3),
('Accountant', 125000, 3),
('Legal Team Lead', 250000, 4),
('Lawyer', 190000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
('John', 'Doe', 1, 1),
('Mike', 'Chan', 2, 1),
('Ashley', 'Rodriguez', 3, 1),
('Kevin', 'Tupik', 4, 3),
('Kunal', 'Singh', 5, 1),
('Malia', 'Brown', 6, 5),
('Sarah', 'Lourd', 7, 1),
('Tom', 'Allen', 8, 7);