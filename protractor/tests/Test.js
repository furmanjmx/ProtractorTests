describe('p2y', function () {

    var person = [
        {
            "number": 5591587543706253,
            "cvv": 160,
            "expired": {
                "month": "01",
                "year": "20"
            }
        },
        {
            "number": 4621236605015438,
            "cvv": 160,
            "expired": {
                "month": "01",
                "year": "20"
            }
        },
        {
            "number": 5513877294352240,
            "cvv": 160,
            "expired": {
                "month": "01",
                "year": "20"
            },
            "3ds_code": 123456
        },
        {
            "number": 5473959513413611,
            "cvv": 160,
            "expired": {
                "month": "01",
                "year": "20"
            },
            "3ds_code": 123456
        },
        {
            "number": 5232747764071184,
            "cvv": 160,
            "expired": {
                "month": "01",
                "year": "20"
            }
        },
        {
            "number": 4556051556352501,
            "cvv": 160,
            "expired": {
                "month": "01",
                "year": "20"
            }
        },
        {
            "number": 4485713355355987,
            "cvv": 160,
            "expired": {
                "month": "01",
                "year": "20"
            },
            "3ds_code": 123456
        },
        {
            "number": 4716894147386794,
            "cvv": 160,
            "expired": {
                "month": "01",
                "year": "20"
            },
            "3ds_code": 123456
        }
    ];

    it('Card 2 card test', function () {

        browser.get('http://p2y.com.ua');

        var form = element(by.css('.form'));
        
        element(by.model('model.cardNumber')).sendKeys(person[0].number);
        element(by.model('model.expMonth')).sendKeys(person[0].expired.month);
        element(by.model('model.expYear')).sendKeys(person[0].expired.year);
        element(by.model('model.cvv')).sendKeys(person[0].cvv);
        element(by.model('model.phoneNumber')).sendKeys('931254212');
        element(by.model('model.receiver.cardNumber')).sendKeys(person[0].number);
        element(by.model('model.amount')).sendKeys('1');

        form.submit();
    });

});