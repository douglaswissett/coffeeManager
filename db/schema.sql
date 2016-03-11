drop table if exists orders;

create table orders(
  order_id serial primary key unique,
  drink_name varchar(50),
  size varchar(1),
  price numeric,
  ready boolean,
  comments text
)
