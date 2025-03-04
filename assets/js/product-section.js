const productSections = {
    balanceOil: {
        title: "BalanceOil+ | Pure Norwegian Omega-3",
        description: "Our flagship Omega-3 supplement, sourced from pristine Norwegian waters. Clinically proven to optimize your Omega-6:3 ratio in 120 days. Features our proprietary polyphenol complex for enhanced absorption.",
        products: [
            {
                name: "BalanceOil+ Kit with Test",
                description: "High in Omega-3 (EPA + DHA), olive polyphenols and vitamin D3. Adjusts and maintains the Omega-6:3 balance in your body.",
                image: "omega-3-balanceoil-kit-with-test-196.png",
                video: "videos/what_makes_zinzino_balanceoil_different_HD.mp4",
                originalPrice: 530.00,
                price: 196.00,
                savings: 63,
                credits: 14.00,
                kitContents: {
                    firstDelivery: [
                        "2 BalanceOil+, 300 ml",
                        "2 BalanceOil, 100 ml",
                        "2 BalanceTest*"
                    ],
                    note: "You can find one BalanceTest in your first delivery, while your second BalanceTest will be delivered after 120 days so that you can do them at the right time to see both your \"before\" and \"after\" results.",
                    subscription: [
                        "1 BalanceOil+ (300 ml) any flavor or Essent+ Premium (60 softgels)"
                    ]
                },
                subscription: {
                    product: "BalanceOil 1 pc/month",
                    originalFee: 60,
                    fee: 43,
                    credits: 4.00
                }
            },
            {
                name: "BalanceOil+ with Test",
                description: "High in Omega-3 (EPA + DHA), olive polyphenols and vitamin D3. Adjusts and maintains the Omega-6:3 balance in your body.",
                image: "omega-3-balanceoil-100ml-300ml-with-test-135.png",
                video: "videos/balance_concept_short_version_HD.mp4",
                originalPrice: 443.00,
                price: 135.00,
                savings: 70,
                credits: 9.00,
                kitContents: {
                    firstDelivery: [
                        "1 BalanceOil+, 300 ml",
                        "1 BalanceOil, 100 ml",
                        "2 BalanceTest*"
                    ],
                    note: "You can find one BalanceTest in your first delivery, while your second BalanceTest will be delivered after 120 days so that you can do them at the right time to see both your \"before\" and \"after\" results.",
                    subscription: [
                        "1 BalanceOil+ (300 ml) any flavor or Essent+ Premium (60 softgels)"
                    ]
                },
                subscription: {
                    product: "BalanceOil 1 pc/month",
                    originalFee: 60,
                    fee: 43,
                    credits: 4.00
                }
            },
            {
                name: "BalanceOil+ Kit",
                description: "High in Omega-3 (EPA + DHA), olive polyphenols and vitamin D3. Adjusts and maintains the Omega-6:3 balance in your body.",
                image: "omega-3-balance-oil-300 ml.png",
                video: "videos/balanceoil_video_HD.mp4",
                originalPrice: 61.00,
                price: 43.00,
                savings: 30,
                credits: 4.00,
                kitContents: {
                    firstDelivery: [
                        "1 BalanceOil+, 300 ml"
                    ],
                    subscription: [
                        "1 BalanceOil+, 300 ml"
                    ]
                },
                subscription: {
                    product: "BalanceOil 1 pc/month",
                    originalFee: 60,
                    fee: 43,
                    credits: 4.00
                }
            },
            {
                name: "BalanceOil+ Tutti Frutti",
                description: "Kid-friendly Omega-3 supplement with delicious Tutti Frutti flavor. Same powerful benefits in a taste children love.",
                image: "zinzino-balance-oil-tutti-frutti.png",
                video: "videos/balanceoil_tutti_frutti_HD.mp4",
                originalPrice: 443.00,
                price: 135.00,
                savings: 70,
                credits: 9.00,
                kitContents: {
                    firstDelivery: [
                        "1 BalanceOil+ Tutti Frutti, 300 ml"
                    ],
                    subscription: [
                        "1 BalanceOil+ Tutti Frutti (300 ml)"
                    ]
                },
                subscription: {
                    product: "BalanceOil+ Tutti Frutti 1 pc/month",
                    originalFee: 60,
                    fee: 43,
                    credits: 4.00
                }
            },
            {
                name: "BalanceOil+ Orange Lemon Mint",
                description: "Refreshing citrus and mint flavored Omega-3 supplement. Perfect for those who prefer a lighter taste.",
                image: "omega-3-balance-oil-300 ml.png",
                video: "videos/balance_concept_video_HD.mp4",
                originalPrice: 443.00,
                price: 135.00,
                savings: 70,
                credits: 9.00,
                kitContents: {
                    firstDelivery: [
                        "1 BalanceOil+ Orange Lemon Mint, 300 ml"
                    ],
                    subscription: [
                        "1 BalanceOil+ Orange Lemon Mint (300 ml)"
                    ]
                },
                subscription: {
                    product: "BalanceOil+ Orange Lemon Mint 1 pc/month",
                    originalFee: 60,
                    fee: 43,
                    credits: 4.00
                }
            },
            {
                name: "Balance Test Basic Kit",
                description: "High in Omega-3 (EPA + DHA), olive polyphenols and vitamin D3.",
                image: "zinzino-omega-3-balanceoil-balancetest-115.png",
                originalPrice: 417.00,
                price: 115.00,
                savings: 72,
                credits: 8.00,
                kitContents: {
                    firstDelivery: [
                        "1 BalanceTest*",
                        "1 FREE BalanceOil+ (300 ml) any flavor or Essent+ Premium (60 softgels)"
                    ],
                    note: "*To see both your \"before\" and \"after\" results, you'll get your first BalanceTest in your first delivery, and as long as you keep your \"subscribe and save\" order active, you'll get your second BalanceTest delivered FREE after 120 days.",
                    subscription: [
                        "1 BalanceOil+ (300 ml) any flavor or Essent+ Premium (60 softgels)"
                    ]
                },
                subscription: {
                    product: "BalanceOil 1 pc/month",
                    originalFee: 60,
                    fee: 43,
                    credits: 4.00
                },
                badges: ["Most Popular"],
                highlight: true
            }
        ]
    },
    premiumBalance: {
        title: "Premium BalanceOil+ | Extra Virgin Olive Oil Enhanced",
        description: "Experience our most exclusive Omega-3 formula, enhanced with hand-picked Spanish extra virgin olive oil. Up to 30% higher polyphenol content for maximum bioavailability and antioxidant protection.",
        products: [
            {
                name: "Premium BalanceOil+ with Test",
                description: "Our most exclusive Omega-3 supplement. Made with premium extra virgin olive oil from pre-harvested olives, containing up to 30x more polyphenols.",
                image: "zinzino-omega-3-balanceoil-premium-10ml-300ml.png",
                video: "videos/balanceoil_premium_HD.mp4",
                originalPrice: 471.00,
                price: 150.00,
                savings: 68,
                credits: 10.00,
                kitContents: {
                    firstDelivery: [
                        "1 Premium BalanceOil+, 300 ml",
                        "1 Premium BalanceOil+, 100 ml",
                        "2 BalanceTest*"
                    ],
                    note: "You can find one BalanceTest in your first delivery, while your second BalanceTest will be delivered after 120 days so that you can do them at the right time to see both your \"before\" and \"after\" results.",
                    subscription: [
                        "1 Premium BalanceOil+ (300 ml)"
                    ]
                },
                subscription: {
                    product: "BalanceOil Premium 1 pc/month",
                    originalFee: 88,
                    fee: 63,
                    credits: 5.00
                },
                isPremium: true
            },
            {
                name: "Premium BalanceOil+ Kit with Test",
                description: "Experience our most exclusive Omega-3 supplement with enhanced polyphenol content from premium pre-harvested olives.",
                image: "zinzino-omega-3-balanceoil-premium-kit-with-test.png",
                originalPrice: 586.00,
                price: 226.00,
                savings: 61,
                credits: 16.00,
                kitContents: {
                    firstDelivery: [
                        "2 Premium BalanceOil+, 300 ml",
                        "2 Premium BalanceOil+, 100 ml",
                        "2 BalanceTest*"
                    ],
                    note: "You can find one BalanceTest in your first delivery, while your second BalanceTest will be delivered after 120 days so that you can do them at the right time to see both your \"before\" and \"after\" results.",
                    subscription: [
                        "1 Premium BalanceOil+ (300 ml)"
                    ]
                },
                subscription: {
                    product: "BalanceOil Premium 1 pc/month",
                    originalFee: 88,
                    fee: 63,
                    credits: 5.00
                },
                isPremium: true
            },
            {
                name: "Premium Balance Test Basic Kit",
                description: "Start your premium wellness journey with our Balance Test and receive a FREE Premium BalanceOil+.",
                image: "zinzino-omega-3-balance-test-basic-premium-kit.png",
                originalPrice: 445.00,
                price: 138.00,
                savings: 69,
                credits: 10.00,
                kitContents: {
                    firstDelivery: [
                        "1 BalanceTest*",
                        "1 FREE Premium BalanceOil+ (300 ml)"
                    ],
                    note: "*To see both your \"before\" and \"after\" results, you'll get your first BalanceTest in your first delivery, and as long as you keep your \"subscribe and save\" order active, you'll get your second BalanceTest delivered FREE after 120 days.",
                    subscription: [
                        "1 Premium BalanceOil+ (300 ml)"
                    ]
                },
                subscription: {
                    product: "BalanceOil Premium 1 pc/month",
                    originalFee: 88,
                    fee: 63,
                    credits: 5.00
                },
                isPremium: true
            },
            {
                name: "BalanceOil+ Premium without Test",
                description: "With 4 times higher polyphenolic content.",
                image: "zinzino-balance-oil-premium.png",
                originalPrice: 89.00,
                price: 63.00,
                savings: 29,
                credits: 5.00,
                kitContents: {
                    firstDelivery: [
                        "1 Premium BalanceOil+, 300 ml"
                    ],
                    subscription: [
                        "1 Premium BalanceOil+, 300 ml"
                    ]
                },
                subscription: {
                    product: "BalanceOil Premium 1 pc/month",
                    originalFee: 88,
                    fee: 63,
                    credits: 5.00
                },
                isPremium: true
            }
        ]
    },
    aquaX: {
        title: "BalanceOil+ AquaX | Water-Mixable Omega-3",
        description: "Revolutionary water-mixable Omega-3 with no fishy taste or texture. Perfect for those who struggle with traditional fish oils. Same powerful benefits in an easy-to-take format.",
        products: [
            {
                name: "BalanceOil+ AquaX Kit with Test",
                description: "Adjust your Omega-3 levels with water soluble formula of BalanceOil. High in Omega-3 (EPA+DHA), olive polyphenols and vitamin D3.",
                image: "balance-oil-aquax-kit-with-test.png",
                video: "videos/balanceoil_aquax_HD.mp4",
                originalPrice: 556.00,
                price: 208.00,
                savings: 63,
                credits: 14.00,
                kitContents: {
                    firstDelivery: [
                        "2 BalanceOil+ AquaX, 300 ml",
                        "2 BalanceOil+ AquaX, 100 ml",
                        "2 BalanceTest*"
                    ],
                    note: "You can find one BalanceTest in your first delivery, while your second BalanceTest will be delivered after 120 days so that you can do them at the right time to see both your \"before\" and \"after\" results.",
                    subscription: [
                        "1 BalanceOil+ AquaX (300 ml)"
                    ]
                },
                subscription: {
                    product: "BalanceOil AquaX 300 ml, 1 pc/month",
                    originalFee: 70,
                    fee: 52,
                    credits: 5.00
                }
            },
            {
                name: "BalanceOil+ AquaX with Test",
                description: "Water-mixable Omega-3 oil that adjusts and maintains your Omega-6:3 balance. High in EPA, DHA and olive polyphenols.",
                image: "balance-oil-aquax-with-test.png",
                originalPrice: 456.00,
                price: 139.00,
                savings: 70,
                credits: 10.00,
                kitContents: {
                    firstDelivery: [
                        "1 BalanceOil+ AquaX, 300 ml",
                        "1 BalanceOil+ AquaX, 100 ml",
                        "2 BalanceTest*"
                    ],
                    note: "You can find one BalanceTest in your first delivery, while your second BalanceTest will be delivered after 120 days so that you can do them at the right time to see both your \"before\" and \"after\" results.",
                    subscription: [
                        "1 BalanceOil+ AquaX (300 ml)"
                    ]
                },
                subscription: {
                    product: "BalanceOil AquaX 300 ml, 1 pc/month",
                    originalFee: 70,
                    fee: 52,
                    credits: 5.00
                }
            },
            {
                name: "Balance Test Basic AquaX Kit",
                description: "Start your wellness journey with our Balance Test and receive a FREE BalanceOil+ AquaX.",
                image: "balance-test-basic-aquax-kit.png",
                originalPrice: 430.00,
                price: 127.00,
                savings: 70,
                credits: 9.00,
                kitContents: {
                    firstDelivery: [
                        "1 BalanceTest*",
                        "1 FREE BalanceOil+ AquaX (300 ml)"
                    ],
                    note: "*To see both your \"before\" and \"after\" results, you'll get your first BalanceTest in your first delivery, and as long as you keep your \"subscribe and save\" order active, you'll get your second BalanceTest delivered FREE after 120 days.",
                    subscription: [
                        "1 BalanceOil+ AquaX (300 ml)"
                    ]
                },
                subscription: {
                    product: "BalanceOil AquaX 300 ml, 1 pc/month",
                    originalFee: 70,
                    fee: 52,
                    credits: 5.00
                }
            },
            {
                name: "BalanceOil+ AquaX without Test",
                description: "Water-mixable Omega-3 oil that adjusts and maintains your Omega-6:3 balance.",
                image: "BalanceOil+ AquaX without Test.png",
                originalPrice: 74.00,
                price: 52.00,
                savings: 30,
                credits: 5.00,
                kitContents: {
                    firstDelivery: [
                        "1 BalanceOil+ AquaX, 300 ml"
                    ],
                    subscription: [
                        "1 BalanceOil+ AquaX, 300 ml"
                    ]
                },
                subscription: {
                    product: "BalanceOil AquaX 300 ml, 1 pc/month",
                    originalFee: 70,
                    fee: 52,
                    credits: 5.00
                }
            }
        ]
    },
    vegan: {
        title: "BalanceOil+ Vegan | Plant-Based Omega-3",
        description: "100% plant-based Omega-3 from sustainable marine microalgae. Delivers the same EPA & DHA benefits as fish oil, with added SDA and GLA for enhanced absorption. Perfect for vegetarians and vegans.",
        products: [
            {
                name: "BalanceOil+ Vegan Kit with Test",
                description: "Vegan Omega-3 from micro-algae, high in EPA, DHA, SDA + GLA. Olive polyphenols, echium seed oil and vitamin D3. Includes BalanceTest to determine your Omega-3 health profile.",
                image: "vegan-omega-3-balanceoil-vegan-kit-with-test.png",
                video: "videos/balanceoil_vegan_HD.mp4",
                originalPrice: 580.00,
                price: 243.00,
                savings: 58,
                credits: 14.00,
                kitContents: {
                    firstDelivery: [
                        "2 BalanceOil+ Vegan, 300 ml",
                        "2 BalanceOil+ Vegan, 100 ml",
                        "2 BalanceTest*"
                    ],
                    note: "You can find one BalanceTest in your first delivery, while your second BalanceTest will be delivered after 120 days so that you can do them at the right time to see both your \"before\" and \"after\" results.",
                    subscription: [
                        "1 BalanceOil+ Vegan (300 ml)"
                    ]
                },
                subscription: {
                    product: "BalanceOil Vegan, 1 pc/month",
                    originalFee: 108,
                    fee: 79,
                    credits: 5.00
                },
                isVegan: true
            },
            {
                name: "BalanceOil+ Vegan with Test",
                description: "Plant-based Omega-3 supplement derived from micro-algae. Rich in EPA, DHA, and olive polyphenols for optimal Omega-6:3 balance.",
                image: "vegan-omega-3-balance-test-basic-vegan-kit.png",
                originalPrice: 468.00,
                price: 153.00,
                savings: 67,
                credits: 10.00,
                kitContents: {
                    firstDelivery: [
                        "1 BalanceOil+ Vegan, 300 ml",
                        "1 BalanceOil+ Vegan, 100 ml",
                        "2 BalanceTest*"
                    ],
                    note: "You can find one BalanceTest in your first delivery, while your second BalanceTest will be delivered after 120 days so that you can do them at the right time to see both your \"before\" and \"after\" results.",
                    subscription: [
                        "1 BalanceOil+ Vegan (300 ml)"
                    ]
                },
                subscription: {
                    product: "BalanceOil Vegan, 1 pc/month",
                    originalFee: 108,
                    fee: 79,
                    credits: 5.00
                },
                isVegan: true
            },
            {
                name: "Balance Test Basic Vegan Kit",
                description: "Start your plant-based wellness journey with our Balance Test and receive a FREE BalanceOil+ Vegan.",
                image: "vegan-omega-3-balance-test-basic-vegan-kit.png",
                originalPrice: 468.00,
                price: 153.00,
                savings: 67,
                credits: 10.00,
                kitContents: {
                    firstDelivery: [
                        "1 BalanceTest*",
                        "1 FREE BalanceOil+ Vegan (300 ml)"
                    ],
                    note: "*To see both your \"before\" and \"after\" results, you'll get your first BalanceTest in your first delivery, and as long as you keep your \"subscribe and save\" order active, you'll get your second BalanceTest delivered FREE after 120 days.",
                    subscription: [
                        "1 BalanceOil+ Vegan (300 ml)"
                    ]
                },
                subscription: {
                    product: "BalanceOil Vegan, 1 pc/month",
                    originalFee: 108,
                    fee: 79,
                    credits: 5.00
                },
                isVegan: true
            },
            {
                name: "BalanceOil+ Vegan without Test",
                description: "Plant-based Omega-3 supplement that maintains your Omega-6:3 balance naturally.",
                image: "vegan-omega-3-oil-without-test.png",
                originalPrice: 112.00,
                price: 79.00,
                savings: 29,
                credits: 5.00,
                kitContents: {
                    firstDelivery: [
                        "1 BalanceOil+ Vegan, 300 ml"
                    ],
                    subscription: [
                        "1 BalanceOil+ Vegan, 300 ml"
                    ]
                },
                subscription: {
                    product: "BalanceOil Vegan, 1 pc/month",
                    originalFee: 108,
                    fee: 79,
                    credits: 5.00
                },
                isVegan: true
            }
        ]
    },
    essent: {
        title: "Essent+ | Premium Omega-3 Capsules",
        description: "Concentrated Omega-3 in convenient capsule form. Each capsule contains our signature polyphenol complex and vitamin D3. Perfect for those who prefer pills over liquid supplements.",
        products: [
            {
                name: "Essent+ Premium Kit with Test",
                description: "This ultra-pure, molecularly-tested Polyphenol Omega Balance food supplement safely adjusts and maintains Omega-6:3 balance while protecting cells from rusting (oxidation) and supporting normal brain function, heart function and the immune system.",
                image: "omega-3-pills-essent-premium-kit-with-test.png",
                originalPrice: 530.00,
                price: 196.00,
                savings: 63,
                credits: 14.00,
                kitContents: {
                    firstDelivery: [
                        "2 Essent+ Premium, 60 Softgels",
                        "2 BalanceOil+, 100 ml",
                        "2 BalanceTest*"
                    ],
                    note: "You can find one BalanceTest in your first delivery, while your second BalanceTest will be delivered after 120 days so that you can do them at the right time to see both your \"before\" and \"after\" results.",
                    subscription: [
                        "1 Essent+ Premium, 60 Softgels"
                    ]
                },
                subscription: {
                    product: "Essent+ Premium, 1 box/month",
                    originalFee: 60,
                    fee: 43,
                    credits: 4.00
                }
            },
            {
                name: "Essent+ Premium with Test",
                description: "This ultra-pure, molecularly-tested Polyphenol Omega Balance food supplement safely adjusts and maintains Omega-6:3 balance while protecting cells from rusting (oxidation) and supporting normal brain function, heart function and the immune system.",
                image: "omega-3-pills-essent-premium-with-test.png",
                originalPrice: 456.00,
                price: 135.00,
                savings: 70,
                credits: 9.00,
                kitContents: {
                    firstDelivery: [
                        "1 Essent+ Premium, 60 Softgels",
                        "1 BalanceOil+, 100 ml",
                        "1 BalanceTest*"
                    ],
                    note: "You can find one BalanceTest in your first delivery, while your second BalanceTest will be delivered after 120 days so that you can do them at the right time to see both your \"before\" and \"after\" results.",
                    subscription: [
                        "1 Essent+ Premium, 60 Softgels"
                    ]
                },
                subscription: {
                    product: "Essent+ Premium, 1 box/month",
                    originalFee: 60,
                    fee: 43,
                    credits: 4.00
                }
            },
            {
                name: "Essent+ Premium without Test",
                description: "This ultra-pure, molecularly-tested Polyphenol Omega Balance food supplement safely adjusts and maintains Omega-6:3 balance while protecting cells from rusting (oxidation) and supporting normal brain function, heart function and the immune system.",
                image: "omega-3-essent-premium-fish-oil-pills-without-test.png",
                originalPrice: 61.00,
                price: 43.00,
                savings: 30,
                credits: 4.00,
                kitContents: {
                    firstDelivery: [
                        "1 Essent+ Premium, 60 softgels"
                    ],
                    subscription: [
                        "1 Essent+ Premium, 60 softgels"
                    ]
                },
                subscription: {
                    product: "Essent+ Premium, 1 box/month",
                    originalFee: 60,
                    fee: 43,
                    credits: 4.00
                }
            },
            {
                name: "Balance Test Basic Essent+ Kit",
                description: "High in Omega-3 (EPA + DHA), olive polyphenols and vitamin D3.",
                image: "omega-3 pills-balance-test-basic-essent-Kit.png",
                originalPrice: 417.00,
                price: 115.00,
                savings: 72,
                credits: 8.00,
                kitContents: {
                    firstDelivery: [
                        "1 BalanceTest*",
                        "1 FREE Essent+ Premium or BalanceTest"
                    ],
                    note: "*To see both your \"before\" and \"after\" results, you'll get your first BalanceTest in your first delivery, and as long as you keep your \"subscribe and save\" order active, you'll get your second BalanceTest delivered FREE after 120 days.",
                    subscription: [
                        "1 Essent+ Premium or BalanceTest"
                    ]
                },
                subscription: {
                    product: "Essent+ Premium, 1 box/month",
                    originalFee: 60,
                    fee: 43,
                    credits: 4.00
                }
            }
        ]
    },
    healthProtocol: {
        title: "Health Protocol | Complete Omega-3 System",
        description: "Our comprehensive Omega-3 wellness system. Combines BalanceTest with premium supplements for a personalized approach to optimal health. Track your progress with before and after testing.",
        products: [
            {
                name: "Health Protocol Basic Kit",
                description: "Order now and get 1 FREE Balance product (BalanceOil+ or Essent).",
                image: "Zinzino Health Protocol Basic Kit.png",
                video: "videos/health_protocol_concept_HD.mp4",
                originalPrice: 333.00,
                price: 184.00,
                savings: 45,
                kitContents: {
                    firstDelivery: [
                        "1 BalanceOil+, 300 ml",
                        "1 Xtend, 60 tablets",
                        "1 ZinoBiotic, 180 g",
                        "2 BalanceTest*"
                    ],
                    note: "You can find one BalanceTest in your first delivery, while your second BalanceTest will be delivered after 120 days so that you can do them at the right time to see both your \"before\" and \"after\" results.",
                    subscription: [
                        "1 BalanceOil+, 300 ml",
                        "1 Xtend, 60 tablets",
                        "1 ZinoBiotic, 180 g"
                    ]
                },
                subscription: {
                    product: "Subscription Health Protocol Basic",
                    originalFee: 150,
                    fee: 109,
                    credits: 10.00
                }
            },
            {
                name: "Health Protocol+ Basic Kit",
                description: "Order now and get 1 FREE Balance product (BalanceOil+ or Essent).",
                image: "health-protocol-basic-kit.png",
                originalPrice: 347.00,
                price: 194.00,
                savings: 44,
                kitContents: {
                    firstDelivery: [
                        "1 BalanceOil+, 300 ml",
                        "1 Xtend+, 60 capsules",
                        "1 ZinoBiotic, 180 g",
                        "2 BalanceTest*"
                    ],
                    note: "You can find one BalanceTest in your first delivery, while your second BalanceTest will be delivered after 120 days so that you can do them at the right time to see both your \"before\" and \"after\" results.",
                    subscription: [
                        "1 BalanceOil+, 300 ml",
                        "1 Xtend+, 60 capsules",
                        "1 ZinoBiotic, 180 g"
                    ]
                },
                subscription: {
                    product: "Subscription Health Protocol+ Basic",
                    originalFee: 165,
                    fee: 119,
                    credits: 11.00
                }
            },
            {
                name: "Health Protocol Premium Kit",
                description: "Order now and get 1 FREE Balance product (BalanceOil+ or Essent) and 1 FREE Viva, 60 tablets pack.",
                image: "health-protocol-premium-kit.png",
                originalPrice: 423.00,
                price: 218.00,
                savings: 48,
                kitContents: {
                    firstDelivery: [
                        "1 BalanceOil+, 300 ml",
                        "2 Xtend, 60 tablets",
                        "1 ZinoBiotic, 180 g",
                        "1 Viva+, 60 tablets",
                        "2 BalanceTest*"
                    ],
                    note: "You can find one BalanceTest in your first delivery, while your second BalanceTest will be delivered after 120 days so that you can do them at the right time to see both your \"before\" and \"after\" results.",
                    subscription: [
                        "1 BalanceOil+, 300 ml",
                        "1 Xtend, 60 tablets",
                        "1 ZinoBiotic, 180 g",
                        "1 Viva+, 60 tablets"
                    ]
                },
                subscription: {
                    product: "Subscription Health Protocol Premium",
                    originalFee: 190,
                    fee: 144,
                    credits: 13.00
                }
            },
            {
                name: "Health Protocol+ Premium Kit",
                description: "Order now and get 1 FREE Balance product (BalanceOil+ or Essent) and 1 FREE Viva, 60 tablets pack.",
                image: "health-protocol-premium-kit-238.png",
                originalPrice: 451.00,
                price: 238.00,
                savings: 47,
                kitContents: {
                    firstDelivery: [
                        "1 BalanceOil+, 300 ml",
                        "2 Xtend+, 60 capsules",
                        "1 ZinoBiotic+, 180 g",
                        "1 Viva+, 60 tablets",
                        "2 BalanceTest*"
                    ],
                    note: "You can find one BalanceTest in your first delivery, while your second BalanceTest will be delivered after 120 days so that you can do them at the right time to see both your \"before\" and \"after\" results.",
                    subscription: [
                        "1 BalanceOil+, 300 ml",
                        "2 Xtend+, 60 capsules",
                        "1 ZinoBiotic+, 180 g",
                        "1 Viva+, 60 tablets"
                    ]
                },
                subscription: {
                    product: "Subscription Health Protocol+ Premium",
                    originalFee: 205,
                    fee: 164,
                    credits: 15.00
                }
            },
            {
                name: "Health Protocol Basic Kit without test",
                description: "Order now and get 1 FREE Balance product (BalanceOil+ or Essent).",
                image: "Zinzino Health Protocol Basic Kit.png",
                originalPrice: 155.00,
                price: 109.00,
                savings: 30,
                kitContents: {
                    firstDelivery: [
                        "1 BalanceOil+, 300 ml",
                        "1 Xtend, 60 tablets",
                        "1 ZinoBiotic, 180 g"
                    ],
                    subscription: [
                        "1 BalanceOil+, 300 ml",
                        "1 Xtend, 60 tablets",
                        "1 ZinoBiotic, 180 g"
                    ]
                },
                subscription: {
                    product: "Subscription Health Protocol Basic",
                    originalFee: 150,
                    fee: 109,
                    credits: 10.00
                }
            },
            {
                name: "Health Protocol+ Basic Kit without test",
                description: "Order now and get 1 FREE Balance product (BalanceOil+ or Essent).",
                image: "health-protocol-basic-kit.png",
                originalPrice: 169.00,
                price: 119.00,
                savings: 30,
                kitContents: {
                    firstDelivery: [
                        "1 BalanceOil+, 300 ml",
                        "1 Xtend+, 60 capsules",
                        "1 ZinoBiotic, 180 g"
                    ],
                    subscription: [
                        "1 BalanceOil+, 300 ml",
                        "1 Xtend+, 60 capsules",
                        "1 ZinoBiotic, 180 g"
                    ]
                },
                subscription: {
                    product: "Subscription Health Protocol+ Basic",
                    originalFee: 165,
                    fee: 119,
                    credits: 11.00
                }
            },
            {
                name: "Health Protocol Premium Kit without test",
                description: "Order now and get 1 FREE Balance product (BalanceOil+ or Essent) and 1 FREE Viva, 60 tablets pack.",
                image: "health-protocol-premium-kit.png",
                originalPrice: 245.00,
                price: 142.00,
                savings: 42,
                kitContents: {
                    firstDelivery: [
                        "1 BalanceOil+, 300 ml",
                        "2 Xtend, 60 tablets",
                        "1 ZinoBiotic, 180 g",
                        "1 Viva+, 60 tablets"
                    ],
                    subscription: [
                        "1 BalanceOil+, 300 ml",
                        "1 Xtend, 60 tablets",
                        "1 ZinoBiotic, 180 g",
                        "1 Viva+, 60 tablets"
                    ]
                },
                subscription: {
                    product: "Subscription Health Protocol Premium",
                    originalFee: 190,
                    fee: 144,
                    credits: 13.00
                }
            }
        ]
    },
    revoo: {
        title: "R.E.V.O.O | Extra Virgin Olive Oil",
        description: "Revolutionary Extra Virgin Olive Oil, specifically selected for its high polyphenol content. Enhances the absorption of Omega-3 and provides powerful antioxidant protection. Direct from certified Spanish olive groves.",
        products: [
            {
                name: "R.E.V.O.O Kit",
                description: "Revolutionary Extra Virgin Olive Oil with up to 30 times higher polyphenol content compared to ordinary olive oil",
                image: "zinzino-balance-oil-premium.png",
                video: "videos/r.e.v.o.o_oliveoil_launch_HD.mp4",
                originalPrice: 336.00,
                price: 158.00,
                savings: 53,
                credits: 14.00,
                subscription: {
                    product: "R.E.V.O.O, 1pc/month",
                    originalFee: 112,
                    fee: 79,
                    credits: 7.00
                }
            }
        ]
    }
};

function showProductDetails(product) {
    const modal = document.getElementById('productDetailsModal');
    if (!modal) return;

    // Set modal title
    modal.querySelector('.modal-title').textContent = product.name;
    
    // Set product image
    const productImage = modal.querySelector('.product-image');
    productImage.src = `assets/images/products/${product.image}`;
    productImage.alt = product.name;
    
    // Set product video if available
    const videoContainer = modal.querySelector('.product-video');
    const video = videoContainer.querySelector('video');
    if (product.video) {
        video.src = product.video;
        video.load(); // Force the video to reload with new source
        videoContainer.classList.remove('d-none');
    } else {
        videoContainer.classList.add('d-none');
    }
    
    // Set badges
    modal.querySelector('.badge.bg-premium').classList.toggle('d-none', !product.isPremium);
    modal.querySelector('.badge.bg-success').classList.toggle('d-none', !product.isVegan);
    modal.querySelector('.badge.bg-info').classList.toggle('d-none', !(product.badges && product.badges.includes('Most Popular')));
    
    // Set description
    modal.querySelector('.product-description').textContent = product.description;
    
    // Set pricing
    modal.querySelector('.current-price').textContent = `$${product.price.toFixed(2)}`;
    modal.querySelector('.original-price').textContent = `$${product.originalPrice.toFixed(2)}`;
    modal.querySelector('.savings-badge').textContent = `Save ${product.savings}%`;
    modal.querySelector('.credits').textContent = product.credits ? `${product.credits.toFixed(2)} credits` : '';
    
    // Set subscription info
    modal.querySelector('.subscription-price').textContent = `$${product.subscription.fee.toFixed(2)}`;
    modal.querySelector('.subscription-credits').textContent = 
        product.subscription.credits ? `${product.subscription.credits.toFixed(2)} credits per month` : '';
    
    // Set kit contents if available
    const kitContentsSection = modal.querySelector('.kit-contents');
    if (product.kitContents) {
        kitContentsSection.classList.remove('d-none');
        
        // First delivery
        const firstDeliveryList = modal.querySelector('.first-delivery-list');
        firstDeliveryList.innerHTML = product.kitContents.firstDelivery
            .map(item => `<li>${item}</li>`)
            .join('');
        
        // Subscription delivery
        const subscriptionList = modal.querySelector('.subscription-list');
        subscriptionList.innerHTML = product.kitContents.subscription
            .map(item => `<li>${item}</li>`)
            .join('');
        
        // Kit note
        if (product.kitContents.note) {
            modal.querySelector('.kit-note').textContent = product.kitContents.note;
        }
    } else {
        kitContentsSection.classList.add('d-none');
    }
    
    // Initialize quantity handlers
    const quantityInput = modal.querySelector('.quantity-input');
    modal.querySelector('.quantity-decrease').onclick = () => {
        if (quantityInput.value > 1) quantityInput.value--;
    };
    modal.querySelector('.quantity-increase').onclick = () => {
        if (quantityInput.value < 10) quantityInput.value++;
    };
    
    // Add to cart handler
    modal.querySelector('.add-to-cart-btn').onclick = () => {
        const quantity = parseInt(quantityInput.value);
        addToCart(product, quantity);
        bootstrap.Modal.getInstance(modal).hide();
    };

    // Initialize Zinzino Partner component
    fetch('/components/zinzino-partner.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('zinzino-partner-container').innerHTML = html;
            initZinzinoPartner({
                price: `$${product.price.toFixed(2)}`,
                originalPrice: `$${product.originalPrice.toFixed(2)}`,
                savings: `${product.savings}%`,
                credits: product.credits.toFixed(2),
                buyLink: `https://www.zinzino.com/shop/2016354642/${product.name.toLowerCase().replace(/\s+/g, '-')}`
            });
        })
        .catch(error => console.error('Error loading Zinzino partner component:', error));
    
    // Show modal
    new bootstrap.Modal(modal).show();
}

function loadProducts() {
    const container = document.getElementById('products-container');
    const sectionTemplate = document.getElementById('product-section-template');
    const cardTemplate = document.getElementById('product-card-template');
    
    if (!container || !sectionTemplate || !cardTemplate) {
        console.error('Required elements not found');
        return;
    }

    container.innerHTML = '';

    Object.entries(productSections).forEach(([key, section]) => {
        const sectionClone = sectionTemplate.content.cloneNode(true);
        
        // Set section title and description
        sectionClone.querySelector('.section-title').textContent = section.title;
        sectionClone.querySelector('.section-description').textContent = section.description;
        
        const productsGrid = sectionClone.querySelector('.products-grid');
        
        // Add products
        section.products.forEach(product => {
            const cardClone = cardTemplate.content.cloneNode(true);
            const card = cardClone.querySelector('.product-card');
            
            // Set product image
            const img = cardClone.querySelector('.card-img-top');
            img.src = `assets/images/products/${product.image}`;
            img.alt = product.name;
            
            // Set badges
            if (product.isPremium) {
                cardClone.querySelector('.badge.bg-premium').classList.remove('d-none');
            }
            if (product.isVegan) {
                cardClone.querySelector('.badge.bg-success').classList.remove('d-none');
            }
            if (product.badges && product.badges.includes('Most Popular')) {
                cardClone.querySelector('.badge.bg-info').classList.remove('d-none');
            }
            
            // Set product details
            cardClone.querySelector('.card-title').textContent = product.name;
            cardClone.querySelector('.card-text').textContent = product.description;
            
            // Set pricing
            cardClone.querySelector('.original-price').textContent = `$${product.originalPrice.toFixed(2)}`;
            cardClone.querySelector('.current-price').textContent = `$${product.price.toFixed(2)}`;
            cardClone.querySelector('.savings-badge').textContent = `Save ${product.savings}%`;
            cardClone.querySelector('.credits').textContent = product.credits ? `${product.credits.toFixed(2)} credits` : '';
            
            // Set view details click handler
            cardClone.querySelector('.view-details-btn').onclick = () => showProductDetails(product);
            
            // Add to grid
            productsGrid.appendChild(cardClone);
        });
        
        container.appendChild(sectionClone);
    });
}

// Add to cart function
function addToCart(product, quantity = 1) {
    // TODO: Implement cart functionality
    console.log(`Added ${quantity} x ${product.name} to cart`);
    // You can implement the actual cart functionality here
}

// Load products when the document is ready
document.addEventListener('DOMContentLoaded', loadProducts);
