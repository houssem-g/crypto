CREATE TABLE products ( 
    id INT(11 Primary KEY,
    `name` VARCHAR(255),
    category_id INT(11),
    category_name VARCHAR(255),
    price NUMERIC(10, 2)
    )
select category_name, AVG(price) as avgPrice
from products
group by category_name
