-- Individual Products
INSERT INTO products (name, description, volume, variant, is_vegan, is_premium, is_water_soluble) VALUES
('BalanceOil+', 'High in Omega-3 (EPA + DHA), olive polyphenols and vitamin D3', '300 ml', 'Standard', 0, 0, 0),
('BalanceOil+ Orange Lemon Mint', 'High in Omega-3 (EPA + DHA), olive polyphenols and vitamin D3', '100 ml', 'Orange Lemon Mint', 0, 0, 0),
('BalanceOil+ Premium', 'The superior version of our bestseller', '300 ml', 'Premium', 0, 1, 0),
('BalanceOil+ AquaX', 'Water soluble formula of BalanceOil', '300 ml', 'AquaX', 0, 0, 1),
('BalanceOil+ Vegan', 'Vegan Omega-3 from micro-algae', NULL, 'Vegan', 1, 0, 0),
('Essent+ Premium', 'Polyphenol omega balance food supplement', NULL, 'Standard', 0, 0, 0),
('R.E.V.O.O', 'Revolutionary Extra Virgin Olive Oil', '500 ml', 'Standard', 0, 0, 0),
('Dosage Cups', 'Plastic and dishwasher safe dosage cups', '10 pc', 'Standard', 0, 0, 0);

-- Product Pricing
INSERT INTO pricing (product_id, retail_price, premier_price, credits_required) VALUES
(1, 60.00, 42.00, 4.00),
(2, 24.00, 17.00, 1.50),
(3, 88.00, 62.00, 5.00),
(4, 70.00, 50.00, 5.00),
(5, 108.00, 76.00, 5.00),
(6, 60.00, 42.00, 4.00),
(7, 112.00, 79.00, 7.00),
(8, 16.00, 16.00, 1.00);

-- Kits
INSERT INTO kits (name, description, includes_test, retail_price, premier_price, credits_required, savings_percent) VALUES
('BalanceOil+ Kit with Test', 'Contains BalanceOil+ and testing materials', 1, 508.00, 189.00, 14.00, 63),
('BalanceOil+ Premium Kit with Test', 'Premium version with testing materials', 1, 564.00, 219.00, 16.00, 61),
('BalanceOil+ AquaX Kit with Test', 'Water soluble formula kit with test', 1, 528.00, 199.00, 14.00, 62);

-- Kit Contents
INSERT INTO kit_contents (kit_id, product_id, quantity) VALUES
(1, 1, 1),
(2, 3, 1),
(3, 4, 1);

-- Subscriptions
INSERT INTO subscriptions (kit_id, name, monthly_fee_retail, monthly_fee_premier, credits_required) VALUES
(1, 'BalanceOil 1 pc/month', 60.00, 42.00, 4.00),
(2, 'BalanceOil Premium 1 pc/month', 88.00, 62.00, 5.00),
(3, 'BalanceOil AquaX 300 ml/month', 70.00, 50.00, 5.00);
