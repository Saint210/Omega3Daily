CREATE TABLE products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT,
    volume TEXT,
    variant TEXT,
    is_vegan BOOLEAN DEFAULT 0,
    is_premium BOOLEAN DEFAULT 0,
    is_water_soluble BOOLEAN DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE pricing (
    product_id INTEGER PRIMARY KEY,
    retail_price DECIMAL(10,2),
    premier_price DECIMAL(10,2),
    credits_required DECIMAL(5,2),
    FOREIGN KEY (product_id) REFERENCES products(id)
);

CREATE TABLE kits (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT,
    includes_test BOOLEAN DEFAULT 0,
    retail_price DECIMAL(10,2),
    premier_price DECIMAL(10,2),
    credits_required DECIMAL(5,2),
    savings_percent INTEGER,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE kit_contents (
    kit_id INTEGER,
    product_id INTEGER,
    quantity INTEGER DEFAULT 1,
    PRIMARY KEY (kit_id, product_id),
    FOREIGN KEY (kit_id) REFERENCES kits(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);

CREATE TABLE subscriptions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    kit_id INTEGER,
    name TEXT NOT NULL,
    monthly_fee_retail DECIMAL(10,2),
    monthly_fee_premier DECIMAL(10,2),
    credits_required DECIMAL(5,2),
    FOREIGN KEY (kit_id) REFERENCES kits(id)
);
