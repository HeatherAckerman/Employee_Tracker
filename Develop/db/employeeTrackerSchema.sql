drop database employeeTracker;
create database employeeTracker;
use employeeTracker;

create table department(
    id int,
    departmentName varchar(30) not null
);

create table role(
    id int auto_increment primary key,
    roleTitle varchar(30) not null,
    salary decimal (4,2) not null,
    departmentId int not null
);

create table employee(
    id int auto_increment primary key,
    firstName varchar(30) not null,
    lastName varchar(30) not null,
    roleId int,
    managerId int
);

insert into department (id, departmentName)
values (1, "Housekeeping");
insert into department (id, departmentName)
values (2, "It");
insert into department (id, departmentName)
values (3, "Management");
insert into department (id, departmentName)
values (4, "Security");

insert into role (roleTitle, salary, departmentId)
values ("Security", 17.00, 4);
insert into role (roleTitle, salary, departmentId)
values ("Janitor", 15.00, 1);
insert into role (roleTitle, salary, departmentId)
values ("Management", 40.00, 3);
insert into role (roleTitle, salary, departmentId)
values ("Wizard", 35.00, 2);


insert into employee (firstName, lastName, roleId, managerId)
values ("Joe", "Smith", 1, 03);
insert into employee (firstName, lastName, roleId, managerId)
values ("Betty", "Kryer", 3, 0);
insert into employee (firstName, lastName, roleId, managerId)
values ("Larry", "Perry", 2, 03);
insert into employee (firstName, lastName, roleId, managerId)
values ("Shawna", "Dawson", 4, 03);