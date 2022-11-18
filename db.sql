create table users(
    id_user serial primary key,
    name varchar(40), -- customer name & store name
    email varchar(50),
    password text,
    phone varchar(20),
    user_type integer, -- 0 customer, 1 seller
    image text,
    user_created date
);

create table customer(
    id_customer integer primary key references users(id_user) on delete cascade,
    gender integer, -- 0 male, 1 female
    birth_date date
);

create table seller(
    id_seller integer primary key references users(id_user) on delete cascade,
    store_desc text
);

create table product(
    id_product serial primary key,
    seller integer references seller(id_seller) on delete cascade,
    product_name varchar(50),
    price integer,
    stock integer,
    condition integer, -- 0 baru, 1 bekas
    photo text,
    color text,
    size integer, -- 0 XS, 1 S, 2 M, 3 L, 4 XL
    category text
);

create table order(
    id_order serial primary key,
    user integer references users(id_user) on delete cascade,
    item integer references product(id_product) on delete cascade,
    quantity integer,
    color varchar(20),
    size integer,
    status integer -- 0 paid, 1 unpaid
);