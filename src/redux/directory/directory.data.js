export const DIRECTORY_DATA = {
    sections: [
        {
            id: 1,
            title: 'Phones',
            imgUrl: './images/directory_phone.jpg',
            routeName: 'phones',
            OperatingSystems: [
                {
                    id: 1,
                    name: 'Android',
                    brands: [
                        {
                            id: 1,
                            name: 'Samsung'
                        },
                        {
                            id: 2,
                            name: 'Redmi'
                        },
                        {
                            id: 3,
                            name: 'Tecno'
                        },
                        {
                            id: 4,
                            name: 'Infinix'
                        }
                    ]
                },
                {
                    id: 2,
                    name: 'IOS',
                    brands: [
                        'Apple'
                    ]
                }
            ],
            items: [
                {
                    id: 1,
                    name: 'Samsung Galaxy',
                    OperatingSystem: 'Android',
                    brand: 'Samsung',
                    imgUrl: './images/phone_imgs/samsung_galaxy.jpg',
                    price: 190000,
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                },
                {
                    id: 2,
                    name: 'Redmi Note 9',
                    OperatingSystem: 'Android',
                    brand: 'Redmi',
                    imgUrl: './images/phone_imgs/redmi.jpg',
                    price: 170000,
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                },
                {
                    id: 3,
                    name: 'Tecno P1',
                    OperatingSystem: 'Android',
                    brand: 'Tecno',
                    imgUrl: './images/phone_imgs/tecno.jpg',
                    price: 150000,
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                },
                {
                    id: 4,
                    name: 'Infinix hot 6',
                    OperatingSystem: 'Android',
                    brand: 'Infinix',
                    imgUrl: './images/phone_imgs/infinix.jpg',
                    price: 175000,
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                },
                {
                    id: 5,
                    name: 'iPhone 12 pro max',
                    OperatingSystem: 'IOS',
                    brand: 'Apple',
                    imgUrl: './images/phone_imgs/iphone.jpeg',
                    price: 350000,
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                }
            ]
        },
        {
            id: 2,
            title: 'Laptops',
            imgUrl: './images/directory_laptop.jpg',
            routeName: 'laptops',
            brands: [
                {
                    id: 1,
                    name: 'Lenovo'
                },
                {
                    id: 2,
                    name: 'HP'
                },
                {
                    id: 3,
                    name: 'Dell'
                },
                {
                    id: 4,
                    name: 'Apple'
                },
                {
                    id: 5,
                    name: 'Asus'
                },
                {
                    id: 6,
                    name: 'Acer'
                },
                {
                    id: 7,
                    name: 'Toshiba'
                }
            ],
            items: [
                {
                    id: 1,
                    name: 'Lenovo ThinkPad',
                    brand: 'Lenovo',
                    imgUrl: './images/laptop_imgs/lenovo.jpeg',
                    price: 220000,
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                },
                {
                    id: 2,
                    name: 'Hp Elitebook',
                    brand: 'HP',
                    imgUrl: './images/laptop_imgs/hp.jpeg',
                    price: 240000,
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                },
                {
                    id: 3,
                    name: 'Dell Latitude',
                    brand: 'Dell',
                    imgUrl: './images/laptop_imgs/dell.jpg',
                    price: 194000,
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                },
                {
                    id: 4,
                    name: 'MacBook 2015',
                    brand: 'Apple',
                    imgUrl: './images/laptop_imgs/apple.jpg',
                    price: 520000,
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                },
                {
                    id: 5,
                    name: 'Asus Notebook',
                    brand: 'Asus',
                    imgUrl: './images/laptop_imgs/asus.jpeg',
                    price: 420000,
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                },
                {
                    id: 6,
                    name: 'Acer Notebook',
                    brand: 'Acer',
                    imgUrl: './images/laptop_imgs/acer.jpeg',
                    price: 450000,
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                },
                {
                    id: 7,
                    name: 'Toshiba Notebook',
                    brand: 'Toshiba',
                    imgUrl: './images/laptop_imgs/toshiba.jpg',
                    price: 290000,
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                }
            ]
        },
        {
            id: 3,
            title: 'Power Banks',
            imgUrl: './images/directory_power_bank.jpg',
            routeName: 'power_banks',
            brands: [
                {
                    id: 1,
                    name: 'Oraimo'
                },
                {
                    id: 2,
                    name: 'New Age'
                },
                {
                    id: 3,
                    name: 'Amazon'
                },
                {
                    id: 4,
                    name: 'Samsung'
                }
            ],
            items: [
                {
                    id: 1,
                    name: 'Oraimo 30000mAh',
                    brand: 'Oraimo',
                    imgUrl: './images/power_bank_imgs/oraimo.jpeg',
                    price: 25000,
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                },
                {
                    id: 2,
                    name: 'New Age 30000mAh',
                    brand: 'New Age',
                    imgUrl: './images/power_bank_imgs/new_age.jpeg',
                    price: 24000,
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                },
                {
                    id: 3,
                    name: 'Amazon 30000mAh',
                    brand: 'Amazon',
                    imgUrl: './images/power_bank_imgs/amazon.jpeg',
                    price: 19000,
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                },
                {
                    id: 4,
                    name: 'Samsung 30000mAh',
                    brand: 'Samsung',
                    imgUrl: './images/power_bank_imgs/samsung.jpeg',
                    price: 19500,
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                }
            ]
        },
        {
            id: 4,
            title: 'Airpods',
            imgUrl: './images/directory_airpod.jpg',
            routeName: 'airpods',
            size: 'large',
            brands: [
                {
                    id: 1,
                    name: 'Apple'
                },
                {
                    id: 2,
                    name: 'Oraimo'
                },
                {
                    id: 3,
                    name: 'New Age'
                }
            ],
            items: [
                {
                    id: 1,
                    name: 'Apple 2nd generation',
                    brand: 'Apple',
                    imgUrl: './images/airpod_imgs/apple.jpeg',
                    price: 75000,
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                },
                {
                    id: 2,
                    name: 'Oraimo 2nd generation',
                    brand: 'Oraimo',
                    imgUrl: './images/airpod_imgs/oraimo.jpeg',
                    price: 35000,
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                },
                {
                    id: 3,
                    name: 'New Age 2nd generation',
                    brand: 'New Age',
                    imgUrl: './images/airpod_imgs/apple.jpeg',
                    price: 42000,
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                }
            ]
        }
    ]
}