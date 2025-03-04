import sqlite3
import os

def init_db():
    # Create or connect to database
    db_path = 'omega3.db'
    if os.path.exists(db_path):
        os.remove(db_path)
    
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()

    # Create products table
    cursor.execute('''
    CREATE TABLE products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        description TEXT,
        volume TEXT,
        variant TEXT,
        is_vegan BOOLEAN DEFAULT 0,
        is_premium BOOLEAN DEFAULT 0,
        is_water_soluble BOOLEAN DEFAULT 0,
        has_test BOOLEAN DEFAULT 0,
        image TEXT
    )
    ''')

    # Create pricing table
    cursor.execute('''
    CREATE TABLE pricing (
        product_id INTEGER PRIMARY KEY,
        retail_price DECIMAL(10,2),
        premier_price DECIMAL(10,2),
        savings_percentage INTEGER,
        credits_required DECIMAL(5,2),
        FOREIGN KEY (product_id) REFERENCES products(id)
    )
    ''')

    # Create subscription table
    cursor.execute('''
    CREATE TABLE subscriptions (
        product_id INTEGER PRIMARY KEY,
        monthly_retail DECIMAL(10,2),
        monthly_premier DECIMAL(10,2),
        monthly_credits DECIMAL(5,2),
        subscription_description TEXT,
        FOREIGN KEY (product_id) REFERENCES products(id)
    )
    ''')

    # Insert product data
    products = [
        # BalanceOil+ Products
        (
            'BalanceOil+ Kit with Test',
            'High in Omega-3 (EPA + DHA), olive polyphenols and vitamin D3. Adjusts and maintains the Omega-6:3 balance in your body.',
            '300 ml',
            'Kit with Test',
            0,  # is_vegan
            0,  # is_premium
            0,  # is_water_soluble
            1,  # has_test
            'balanceoil-kit-test.jpg'
        ),
        (
            'BalanceOil+ Premium with Test',
            'With 4 times higher polyphenolic content.',
            '300 ml',
            'Premium with Test',
            0,
            1,
            0,
            1,
            'balanceoil-premium-test.jpg'
        ),
        (
            'BalanceOil+ AquaX with Test',
            'Adjust your Omega-3 levels with water soluble formula of BalanceOil. High in Omega-3 (EPA+DHA), olive polyphenols and vitamin D3.',
            '300 ml',
            'AquaX with Test',
            0,
            0,
            1,
            1,
            'balanceoil-aquax-test.jpg'
        ),
        (
            'BalanceOil+ Vegan with Test',
            'Vegan Omega-3 from micro-algae, high in EPA, DHA, SDA + GLA. Olive polyphenols, echium seed oil and vitamin D3.',
            '300 ml',
            'Vegan with Test',
            1,
            0,
            0,
            1,
            'balanceoil-vegan-test.jpg'
        )
    ]

    cursor.executemany('INSERT INTO products (name, description, volume, variant, is_vegan, is_premium, is_water_soluble, has_test, image) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', products)

    # Insert pricing data
    pricing = [
        (1, 530.00, 196.00, 63, 14.00),  # BalanceOil+ Kit with Test
        (2, 471.00, 150.00, 68, 10.00),  # BalanceOil+ Premium with Test
        (3, 456.00, 139.00, 70, 10.00),  # BalanceOil+ AquaX with Test
        (4, 468.00, 153.00, 67, 10.00)   # BalanceOil+ Vegan with Test
    ]

    cursor.executemany('INSERT INTO pricing (product_id, retail_price, premier_price, savings_percentage, credits_required) VALUES (?, ?, ?, ?, ?)', pricing)

    # Insert subscription data
    subscriptions = [
        (1, 60.00, 43.00, 4.00, 'BalanceOil 1 pc/month'),
        (2, 88.00, 63.00, 5.00, 'BalanceOil Premium 1 pc/month'),
        (3, 70.00, 52.00, 5.00, 'BalanceOil AquaX 300 ml, 1 pc/month'),
        (4, 108.00, 79.00, 5.00, 'BalanceOil Vegan, 1 pc/month')
    ]

    cursor.executemany('INSERT INTO subscriptions (product_id, monthly_retail, monthly_premier, monthly_credits, subscription_description) VALUES (?, ?, ?, ?, ?)', subscriptions)

    conn.commit()
    conn.close()

if __name__ == '__main__':
    init_db()
    print("Database created successfully!")
