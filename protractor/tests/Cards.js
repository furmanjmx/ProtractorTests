var fixtures = require('./fixtures');

describe('p2y', function () {

    it('Card 2 card test', function () {

        browser.get('http://p2y.com.ua');

        var card = fixtures.cards[0];
        var form = element(by.css('.form'));
        // fill form
        element(by.model('model.cardNumber')).sendKeys(card.number);
        element(by.model('model.expMonth')).sendKeys(card.expired.month);
        element(by.model('model.expYear')).sendKeys(card.expired.year);
        element(by.model('model.cvv')).sendKeys(card.cvv);
        element(by.model('model.phoneNumber')).sendKeys('931254212');
        element(by.model('model.receiver.cardNumber')).sendKeys(card.number);
        element(by.model('model.amount')).sendKeys('1');

        form.submit();
    });

});