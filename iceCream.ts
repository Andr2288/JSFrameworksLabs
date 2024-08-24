function calculateIceCreamPrice(): void {
    const SMALL_CUP_PRICE = 10;
    const LARGE_CUP_PRICE = 25;

    const CHOCOLATE_PRICE = 5;
    const CARAMEL_PRICE = 6;
    const BERRIES_PRICE = 10;

    const MARSHMALLOW_PRICE = 5;

    const sizeInput: string | null = prompt(
        'Виберіть розмір морозива: маленький або великий:',
    );
    if (!sizeInput) {
        alert('Ви не вибрали розмір.');
        return;
    }

    let sizePrice = 0;
    if (sizeInput.toLowerCase() === 'маленький') {
        sizePrice = SMALL_CUP_PRICE;
    } else if (sizeInput.toLowerCase() === 'великий') {
        sizePrice = LARGE_CUP_PRICE;
    } else {
        alert('Некоректний вибір розміру.');
        return;
    }

    const toppingsInput: string | null = prompt(
        'Виберіть начинки (шоколад, карамель, ягоди). Введіть через кому:',
    );
    if (!toppingsInput) {
        alert('Ви не вибрали жодної начинки.');
        return;
    }

    const toppings: string[] = toppingsInput.toLowerCase().split(',');
    let toppingsPrice = 0;

    toppings.forEach((topping) => {
        topping = topping.trim();
        if (topping === 'шоколад') {
            toppingsPrice += CHOCOLATE_PRICE;
        } else if (topping === 'карамель') {
            toppingsPrice += CARAMEL_PRICE;
        } else if (topping === 'ягоди') {
            toppingsPrice += BERRIES_PRICE;
        } else {
            alert(`Начинка ${topping} не знайдена.`);
        }
    });

    const marshmallowInput: string | null = prompt(
        'Чи бажаєте додати маршмелоу? (так або ні):',
    );
    const marshmallowPrice =
        marshmallowInput && marshmallowInput.toLowerCase() === 'так'
            ? MARSHMALLOW_PRICE
            : 0;

    const totalPrice = sizePrice + toppingsPrice + marshmallowPrice;
    alert(`Загальна вартість вашого морозива: ${totalPrice} грн.`);
}

calculateIceCreamPrice();
