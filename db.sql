create table users(
    id_user serial primary key,
    name varchar(40), -- customer name & store name
    email varchar(50),
    password text,
    phone varchar(20),
    user_type integer, -- 0 admin, 1 customer, 2 seller
    image text,
    main_address integer,
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
    category text,
    description text
);

create table orders(
    id_order serial primary key,
    userid integer references users(id_user) on delete cascade,
    item integer references product(id_product) on delete cascade,
    quantity integer,
    color varchar(20),
    size integer,
    status integer -- 0 paid, 1 unpaid
);

create table address(
    id_address serial primary key,
    userid integer references users(id_user) on delete cascade,
    address_name varchar(40), -- ex: rumah, kantor, gudang
    recipient_name varchar(40),
    recipient_phone varchar(20),
    address text,
    post_code varchar(10),
    city varchar(40)
);

create table chat(
    id serial primary key,
    sender integer references users(id_user) on delete cascade,
    receiver integer references users(id_user) on delete cascade,
    message text,
    date_time date
);

create table transactions(
    id serial primary key,
    userid integer references users(id_user) on delete cascade,
    id_order integer references orders(id_order) on delete cascade,
    payment_method varchar(30),
    total_price integer,
    transaction_date date
);
