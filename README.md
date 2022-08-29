# README

Project Requirements
- Four Tables: 
  - Bookstore (Super Admin)
  - Publisher(Admin)
  - Author
  - Book

#### Bookstore (Super Admin)
- Has a name
- Can add `Publisher`

#### Publisher (Admin)
If Bookstore, add a Publishers to Bookstore list, then Publisher would act as an Admin of its Books and Authors
- Can add `Author`, `Book`
- Can edit `Author`, `Book`
- Can delete `Author`, `Book`

#### Book Object Properties
- id INT
- title STR
- author STR
- isbn STR
- genre STR
- price FLOAT
- current-stock INT
- available BOOL
- publisher STR

