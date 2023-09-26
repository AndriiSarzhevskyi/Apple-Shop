import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createadsrouter = express();

export const createIphones = async () => {

    await prisma.photo.deleteMany(); 
    await prisma.ad.deleteMany();

    const IPhone14 = await prisma.ad.create({
        data: {
            product_name: "Apple iPhone 14 Pro Max 256GB Deep Purple",
            product_type: "phone",
            price: 49662,
            about: "iPhone 14 Pro Max змінює уявлення про те, яким може бути смартфон. Чудовий, постійно увімкнений дисплей Super Retina XDR з діагоналлю 6,7 дюйма та щільністю 460 пікселів на дюйм оснащений новим вирізом Dynamic Island. Dynamic Island — це адаптивний та інтерактивний спосіб, яким телефон показує повідомлення, сповіщення та інші відомості, не відволікаючи вас від того, що ви робите. Дисплей став яскравішим і здатний відображати до 2000 ніт, що робить зображення чітким навіть при яскравому сонячному світлі. Дисплей покритий склом Ceramic Shield, а телефон має клас захисту IP68.",
            CPU: "Apple A16 Bionic",
            color: "Deep Purple",
            memory: 256,
            RAM: 6,
            screen: 6.7,
            screen_type: "Oled",
            rating: 5,
        }
    });

    await prisma.photo.create({
        data:
            { adId: IPhone14.id, fileName: '25153.750.jpeg.jpeg', filePath: '/pictures/IPhone_14_pro_Deep_purple/25153.750.jpeg' }

    });

    await prisma.photo.create({
        data:
            { adId: IPhone14.id, fileName: '25154.750.jpeg', filePath: '/pictures/IPhone_14_pro_Deep_purple/25154.750.jpeg' }
    });

    await prisma.photo.create({
        data:
            { adId: IPhone14.id, fileName: '26424.750.png', filePath: '/pictures/IPhone_14_pro_Deep_purple/26424.750.png' }
    });

    const IPhone142 = await prisma.ad.create({
        data: {
            product_name: "Apple iPhone 14 Pro Max 256GB Silver",
            product_type: "phone",
            price: 49662,
            about: "iPhone 14 Pro Max змінює уявлення про те, яким може бути смартфон. Чудовий, постійно увімкнений дисплей Super Retina XDR з діагоналлю 6,7 дюйма та щільністю 460 пікселів на дюйм оснащений новим вирізом Dynamic Island. Dynamic Island — це адаптивний та інтерактивний спосіб, яким телефон показує повідомлення, сповіщення та інші відомості, не відволікаючи вас від того, що ви робите. Дисплей став яскравішим і здатний відображати до 2000 ніт, що робить зображення чітким навіть при яскравому сонячному світлі. Дисплей покритий склом Ceramic Shield, а телефон має клас захисту IP68.",
            CPU: "Apple A16 Bionic",
            color: "Silver",
            memory: 256,
            RAM: 6,
            screen: 6.7,
            screen_type: "Oled",
            rating: 5
        }
    });

    await prisma.photo.create({
        data:
            { adId: IPhone142.id, fileName: '25222.750.jpeg', filePath: '/pictures/Iphone_14_pro_Silver/25222.750.jpeg' }
    });

    await prisma.photo.create({
        data:
            { adId: IPhone142.id, fileName: '25223.750.png', filePath: '/pictures/Iphone_14_pro_Silver/25223.750.png' }
    });

    await prisma.photo.create({
        data:
            { adId: IPhone142.id, fileName: '26422.750.png', filePath: '/pictures/Iphone_14_pro_Silver/26422.750.png' }
    });

    const IPhone143 = await prisma.ad.create({
        data: {
            product_name: "Apple iPhone 14 Pro Max 256GB Space Black",
            product_type: "phone",
            price: 59111,
            about: "iPhone 14 Pro Max змінює уявлення про те, яким може бути смартфон. Чудовий, постійно увімкнений дисплей Super Retina XDR з діагоналлю 6,7 дюйма та щільністю 460 пікселів на дюйм оснащений новим вирізом Dynamic Island. Dynamic Island — це адаптивний та інтерактивний спосіб, яким телефон показує повідомлення, сповіщення та інші відомості, не відволікаючи вас від того, що ви робите. Дисплей став яскравішим і здатний відображати до 2000 ніт, що робить зображення чітким навіть при яскравому сонячному світлі. Дисплей покритий склом Ceramic Shield, а телефон має клас захисту IP68.",
            CPU: "Apple A16 Bionic",
            color: "Space Black",
            memory: 512,
            RAM: 6,
            screen: 6.7,
            screen_type: "Oled",
            rating: 4
        }
    });

    await prisma.photo.create({
        data:
            { adId: IPhone143.id, fileName: '25305.750.png', filePath: '/pictures/IPhone_14_pro_Black/25305.750.png' },

    });

    await prisma.photo.create({
        data:
            { adId: IPhone143.id, fileName: '25305.750.png', filePath: '/pictures/IPhone_14_pro_Black/25305.750.png' }
    });

    await prisma.photo.create({
        data:
            { adId: IPhone143.id, fileName: '26421.750.png', filePath: '/pictures/IPhone_14_pro_Black/26421.750.png' }
    });

    const IPhone144 = await prisma.ad.create({
        data: {
            product_name: "Apple iPhone 14 128GB Purple",
            product_type: "phone",
            price: 31211,
            about: "За традицією, у вересні Apple випустила безліч новинок, і, звичайно ж, новий iPhone. iPhone 14 цього року не отримав помітних змін у дизайні, але важливі функції помітно оновлені. Подивимося, що нового в iPhone 14.",
            CPU: "Apple A15 Bionic",
            color: "Purple",
            memory: 128,
            RAM: 6,
            screen: 6.1,
            screen_type: "	OLED (Super Retina XDR) 2532 х 1170",
            rating: 4
        }
    });

    await prisma.photo.create({
        data:
            { adId: IPhone144.id, fileName: '25317.750.jpeg', filePath: '/pictures/Iphone_14_Deep_purple/25317.750.jpeg' }
    });

    await prisma.photo.create({
        data:
            { adId: IPhone144.id, fileName: '25305.750.png', filePath: '/pictures/Iphone_14_Deep_purple/25318.750.jpeg' }
    });

    await prisma.photo.create({
        data:
            { adId: IPhone144.id, fileName: '26421.750.png', filePath: '/pictures/Iphone_14_Deep_purple/26566.750.png' }
    });

    const IPhone145 = await prisma.ad.create({
        data: {
            product_name: "Apple iPhone 14 128GB PRODUCT(Red)",
            product_type: "phone",
            price: 44603,
            about: "За традицією, у вересні Apple випустила безліч новинок, і, звичайно ж, новий iPhone. iPhone 14 цього року не отримав помітних змін у дизайні, але важливі функції помітно оновлені. Подивимося, що нового в iPhone 14.",
            CPU: "Apple A15 Bionic",
            color: "Red",
            memory: 512,
            RAM: 6,
            screen: 6.1,
            screen_type: "	OLED (Super Retina XDR) 2532 х 1170",
            rating: 3
        }
    });

    await prisma.photo.create({
        data:
            { adId: IPhone145.id, fileName: '25367.750.jpeg', filePath: '/pictures/Iphone_14_red/25367.750.jpeg' },
    });
    await prisma.photo.create({
        data:
            { adId: IPhone145.id, fileName: '25368.750.jpeg', filePath: '/pictures/Iphone_14_red/25368.750.jpeg' }
    });
    await prisma.photo.create({
        data:
            { adId: IPhone145.id, fileName: '26578.750.png', filePath: '/pictures/Iphone_14_red/26578.750.png' }
    });

    const MacBook = await prisma.ad.create({
        data: {
            product_name: "Apple MacBook Air 13 M1 8/256 7GPU Space Gray Late 2020",
            product_type: "MacBook",
            price: 34782,
            about: "Легкий, як повітря, проте неймовірно потужний - новий MacBook Air! Витончений дизайн, у класичній лінійці кольору, виконаний із переробленого алюмінію, він став найбільш екологічним ноутбуком в історії Mac. Також завдяки ємній батареї та сканеру Touch ID MacBook Air стане вашим найкращим мобільним офісом, адже виконає максимально швидко будь-який запит..",
            CPU: "Apple M1",
            color: "Space Gray",
            memory: 256,
            RAM: 8,
            screen: 13.3,
            screen_type: "IPS",
            rating: 5,
        }
    });

    await prisma.photo.create({
        data:
            { adId: MacBook.id, fileName: '12742.750.png', filePath: '/pictures/Macbook_air_m1/12742.750.png' }
    });

    await prisma.photo.create({
        data:
            { adId: MacBook.id, fileName: '20400.750.png', filePath: '/pictures/Macbook_air_m1/20400.750.png' }
    });
    const MacBook1 = await prisma.ad.create({
        data: {
            product_name: "Apple MacBook Air 13“ Midnight M2 8/256 8GPU 2022",
            product_type: "MacBook",
            price: 45719,
            about: "Легкий, стильний та портативний новий Apple MacBook Air — ідеальний вибір як для студентів, так і професіоналів. MacBook пропонує стабільну та надійну операційну систему, інтуїтивно зрозумілу, зручну та доставляє візуальну насолоду. На роботі MacBook віддають перевагу професіонали з усіх напрямків. Незалежно від того, чи шукаєте ви машину, здатну редагувати відео або запускати щось елементарне, наприклад, електронну таблицю, ви виявите, що MacBook для вас. Доступний MacBook Air 2022 стане чудовою інвестицією.",
            CPU: "Apple M1",
            color: "Midnight",
            memory: 256,
            RAM: 8,
            screen: 13.6,
            screen_type: "IPS",
            rating: 5,
        }
    });

    await prisma.photo.create({
        data:
            { adId: MacBook1.id, fileName: '23385.750.jpeg', filePath: '/pictures/Macbook_air_m2/23385.750.jpeg' }
    });
    await prisma.photo.create({
        data:
            { adId: MacBook1.id, fileName: '27221.750.png', filePath: '/pictures/Macbook_air_m2/27221.750.png' }
    });
}
