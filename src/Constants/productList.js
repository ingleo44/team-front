const faker = require('faker');
export function productList() {
    return [{
        category: 'tech',
        title: faker.commerce.product(),
        subtitle: faker.lorem.lines(),
        image: 'https://picsum.photos/200',
        description: faker.lorem.paragraph(),
        stock: faker.random.number(100),
        price: faker.commerce.price()
    },
    {
        category: 'tech',
        title: faker.commerce.product(),
        subtitle: faker.lorem.lines(),
        image: 'https://picsum.photos/200',
        description: faker.lorem.paragraph(),
        stock: faker.random.number(100),
        price: faker.commerce.price()
    },
    {
        category: 'tech',
        title: faker.commerce.product(),
        subtitle: faker.lorem.lines(),
        image: 'https://picsum.photos/200',
        description: faker.lorem.paragraph(),
        stock: faker.random.number(100),
        price: faker.commerce.price()
    },
    {
        category: 'services',
        title: faker.commerce.product(),
        subtitle: faker.lorem.lines(),
        image: 'https://picsum.photos/200',
        description: faker.lorem.paragraph(),
        stock: faker.random.number(100),
        price: faker.commerce.price()
    },
    {
        category: 'services',
        title: faker.commerce.product(),
        subtitle: faker.lorem.lines(),
        image: 'https://picsum.photos/200',
        description: faker.lorem.paragraph(),
        stock: faker.random.number(100),
        price: faker.commerce.price()
    },
    {
        category: 'services',
        title: faker.commerce.product(),
        subtitle: faker.lorem.lines(),
        image: 'https://picsum.photos/200',
        description: faker.lorem.paragraph(),
        stock: faker.random.number(100),
        price: faker.commerce.price()
    },
    {
        category: 'services',
        title: faker.commerce.product(),
        subtitle: faker.lorem.lines(),
        image: 'https://picsum.photos/200',
        description: faker.lorem.paragraph(),
        stock: faker.random.number(100),
        price: faker.commerce.price()
    },
    {
        category: 'office',
        title: faker.commerce.product(),
        subtitle: faker.lorem.lines(),
        image: 'https://picsum.photos/200',
        description: faker.lorem.paragraph(),
        stock: faker.random.number(100),
        price: faker.commerce.price()
    }
    ];
}
