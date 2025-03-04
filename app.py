from flask import Flask, jsonify, send_from_directory
import sqlite3
import os

app = Flask(__name__, static_folder='assets')

def get_db_connection():
    conn = sqlite3.connect('omega3.db')
    conn.row_factory = sqlite3.Row
    return conn

@app.route('/api/products')
def get_products():
    conn = get_db_connection()
    cursor = conn.cursor()
    
    cursor.execute('''
        SELECT 
            p.*,
            pr.retail_price,
            pr.premier_price,
            pr.savings_percentage,
            pr.credits_required,
            s.monthly_retail,
            s.monthly_premier,
            s.monthly_credits,
            s.subscription_description
        FROM products p
        LEFT JOIN pricing pr ON p.id = pr.product_id
        LEFT JOIN subscriptions s ON p.id = s.product_id
    ''')
    
    products = []
    for row in cursor.fetchall():
        product = {
            'id': row['id'],
            'name': row['name'],
            'description': row['description'],
            'volume': row['volume'],
            'variant': row['variant'],
            'is_vegan': bool(row['is_vegan']),
            'is_premium': bool(row['is_premium']),
            'is_water_soluble': bool(row['is_water_soluble']),
            'has_test': bool(row['has_test']),
            'image': row['image'],
            'pricing': {
                'retail': float(row['retail_price']),
                'premier': float(row['premier_price']),
                'savings': row['savings_percentage'],
                'credits': float(row['credits_required'])
            },
            'subscription': {
                'monthly_retail': float(row['monthly_retail']),
                'monthly_premier': float(row['monthly_premier']),
                'monthly_credits': float(row['monthly_credits']),
                'description': row['subscription_description']
            }
        }
        products.append(product)
    
    conn.close()
    return jsonify(products)

@app.route('/')
def index():
    return send_from_directory('.', 'omega-3-supplements.html')

@app.route('/assets/<path:path>')
def serve_assets(path):
    return send_from_directory('assets', path)

if __name__ == '__main__':
    app.run(debug=True, port=5000)
