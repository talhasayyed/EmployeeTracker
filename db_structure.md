```
CREATE TABLE Roles (
    role_id INTEGER PRIMARY KEY AUTOINCREMENT,
    role_name TEXT NOT NULL UNIQUE
);

CREATE TABLE Employees (
    employee_id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    role_id INTEGER NOT NULL,
    manager_id INTEGER,
    FOREIGN KEY (role_id) REFERENCES Roles(role_id),
    FOREIGN KEY (manager_id) REFERENCES Employees(employee_id)
);

CREATE TABLE Projects (
    project_id INTEGER PRIMARY KEY AUTOINCREMENT,
    project_name TEXT NOT NULL,
    description TEXT,
    start_date DATE,
    end_date DATE
);

CREATE TABLE Tasks (
    task_id INTEGER PRIMARY KEY AUTOINCREMENT,
    project_id INTEGER NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    status TEXT NOT NULL DEFAULT 'Pending',
    created_at DATETIME DEFAULT (datetime('now')),
    due_date DATE,
    FOREIGN KEY (project_id) REFERENCES Projects(project_id),
    CHECK (status IN ('Pending','InProgress','Completed'))
);

CREATE TABLE TaskAllocations (
    task_allocation_id INTEGER PRIMARY KEY AUTOINCREMENT,
    task_id INTEGER NOT NULL,
    employee_id INTEGER NOT NULL,
    assigned_by INTEGER NOT NULL,
    assigned_at DATETIME DEFAULT (datetime('now')),
    FOREIGN KEY (task_id) REFERENCES Tasks(task_id),
    FOREIGN KEY (employee_id) REFERENCES Employees(employee_id),
    FOREIGN KEY (assigned_by) REFERENCES Employees(employee_id),
    UNIQUE (task_id, employee_id)
);

```