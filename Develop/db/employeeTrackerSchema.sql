create database employeeTracker;
use employeeTracker;

create table department(
    id int auto_increment primary key,
    departmentName varchar(30) not null
);

create table role(
    id int auto_increment primary key,
    roleTitle varchar(30) not null,
    salary decimal (4,2) not null,
    departmentId int not null
)

create table employee(
    id int auto_increment primary key,
    firstName varchar(30) not null,
    lastName varchar(30) not null,
    roleId int
);