const datapizza = [
    {
        name: 'Цыпленок карри',
        img: require('../assets/img/pizzas/karry.webp'),
        maindescription: 'Цыпленок, ананасы, соус карри, красный лук, сладкий перец, моцарелла, фирменный томатный соус',
        description: '30 см, традиционное тесто, 640 г',
        // price: 500,
        count: 1,
        content: {
            ingridient0: 'Цыпленок,',
            ingridient1: 'ананасы,',
            ingridient2: 'соус карри,',
            ingridient3: 'красный лук,',
            ingridient4: 'моцарелла',

        },
        size: {
            small: {
                name: 'Маленькая',
                checked: false,
                price: 500,
            },
            middle: {
                name: 'Средняя',
                checked: true,
                price: 639,
            },
            big: {
                name: 'Большая',
                checked: false,
                price: 750,
            },
        },
        paste: {
            traditional: true,
            thin: false,
        },       
        addon: {
            chees: {
                name: 'Сыр',
                checked: false,
                img: '',
                price: 50
            },
            grass: {
                name: 'Итальянские травы',
                checked: false,
                img: '',
                price: 40
            },
            sausage: {
                name: 'Пепперони',
                checked: false,
                img: '',
                price: 60
            },
        },
    },
    {
        name: 'Маргарита',
        img: require('../assets/img/pizzas/karry.webp'),
        maindescription: 'Бекон, сыры чеддер и пармезан, моцарелла, томаты, красный лук, чеснок, фирменный соус альфредо, итальянские травы',
        description: '30 см, традиционное тесто, 640 г',
        // price: 639,
        count: 1,
        content: {
            ingridient0: 'Цыпленок,',
            ingridient1: 'ананасы,',
            ingridient2: 'соус карри,',
            ingridient3: 'красный лук,',
            ingridient4: 'моцарелла',

        },
        size: {
            small: {
                name: 'Маленькая',
                checked: false,
                price: 650,
            },
            middle: {
                name: 'Средняя',
                checked: true,
                price: 800,
            },
            big: {
                name: 'Большая',
                checked: false,
                price: 950,
            },
        },
        paste: {
            traditional: true,
            thin: false,
        },       
        addon: {
            chees: {
                name: 'Сыр',
                checked: false,
                img: '',
                price: 50
            },
            grass: {
                name: 'Итальянские травы',
                checked: false,
                img: '',
                price: 40
            },
            sausage: {
                name: 'Пепперони',
                checked: false,
                img: '',
                price: 60
            },
        },
    },
    {
        name: 'Сырная',
        img: require('../assets/img/pizzas/karry.webp'),
        maindescription: 'Моцарелла, сыры чеддер и пармезан, фирменный соус альфредо',
        description: '30 см, традиционное тесто, 640 г',
        // price: 639,
        count: 1,
        content: {
            ingridient0: 'Цыпленок,',
            ingridient1: 'ананасы,',
            ingridient2: 'соус карри,',
            ingridient3: 'красный лук,',
            ingridient4: 'моцарелла',

        },
        size: {
            small: {
                name: 'Маленькая',
                checked: false,
                price: 600,
            },
            middle: {
                name: 'Средняя',
                checked: true,
                price: 680,
            },
            big: {
                name: 'Большая',
                checked: false,
                price: 750,
            },
        },
        paste: {
            traditional: true,
            thin: false,
        },       
        addon: {
            chees: {
                name: 'Сыр',
                checked: false,
                img: '',
                price: 50
            },
            grass: {
                name: 'Итальянские травы',
                checked: false,
                img: '',
                price: 40
            },
            sausage: {
                name: 'Пепперони',
                checked: false,
                img: '',
                price: 60
            },
        },
    }
]
export default datapizza

