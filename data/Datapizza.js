const datapizza = [
    {
        name: 'Цыпленок карри',
        img: require('../assets/img/pizzas/karry.webp'),
        maindescription: 'Цыпленок, ананасы, соус карри, красный лук, сладкий перец, моцарелла, фирменный томатный соус',
        // description: '30 см, традиционное тесто, 640 г',
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
                diameter: '25см',
            },
            middle: {
                name: 'Средняя',
                checked: true,
                price: 639,
                diameter: '30см',
            },
            big: {
                name: 'Большая',
                checked: false,
                price: 750,
                diameter: '35см',
            },
        },
        paste: {
            traditional: {
                name: 'традиционное тесто 830г',
                checked: true,
            },
            thin: {
                name: 'тонкое тесто 720 гр',
                checked: false,
            },
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
        // description: '30 см, традиционное тесто, 640 г',
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
                diameter: '25см',
            },
            middle: {
                name: 'Средняя',
                checked: true,
                price: 800,
                diameter: '30см',
            },
            big: {
                name: 'Большая',
                checked: false,
                price: 950,
                diameter: '35см',
            },
        },
        paste: {
            traditional: {
                name: 'традиционное тесто 830г',
                checked: true,
            },
            thin: {
                name: 'тонкое тесто 720 гр',
                checked: false,
            },
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
        // description: '30 см, традиционное тесто, 640 г',
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
                diameter: '25см',
            },
            middle: {
                name: 'Средняя',
                checked: true,
                price: 680,
                diameter: '30см',
            },
            big: {
                name: 'Большая',
                checked: false,
                price: 750,
                diameter: '35см',
            },
        },
        paste: {
            traditional: {
                name: 'традиционное тесто 830г',
                checked: true,
            },
            thin: {
                name: 'тонкое тесто 720 гр',
                checked: false,
            },
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

