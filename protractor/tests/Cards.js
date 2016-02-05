var fixtures = require('./fixtures');
var protractor = require("protractor");

describe('p2y', function () {

    it('Card 2 card test', function () {

        browser.get('http://nebo15.github.io/p2y.web');   // 192.168.1.134:8080
        var card = fixtures.cards[0];
        var form = element(by.css('.form'));
        var confirm = element(by.buttonText('Подтвердить'));
        // fill form
        browser.isElementPresent(by.model('model.cardNumber'));
        element(by.model('model.cardNumber')).sendKeys(card.number);
        element(by.model('model.expMonth')).sendKeys(card.expired.month);
        element(by.model('model.expYear')).sendKeys(card.expired.year);
        element(by.model('model.cvv')).sendKeys(card.cvv);
        element(by.model('model.phoneNumber')).sendKeys('931254212');
        element(by.model('model.receiver.cardNumber')).sendKeys(card.number);
        element(by.model('model.amount')).sendKeys('1');
        // confirm pay
        form.submit();
        browser.isElementPresent(by.buttonText('Подтвердить'));
        confirm.click();

        browser.sleep(500);
        browser.ignoreSynchronization = true;

        browser.isElementPresent(by.model('model.code'));
        element(by.model('model.code')).sendKeys('123456');
        browser.isElementPresent(by.buttonText('Подтвердить'));
        form.submit();

        browser.isElementPresent(by.partialButtonText('Сохранить квитанцию'));
        browser.sleep(500);
        element(by.xpath('/html/body/div[1]/div/div/div[2]/div[1]/div/div[2]/div[1]/ui-view/div/div[1]/div/p/a[1]')).click();
        browser.sleep(10000); //TODO Assert document present on DIR
    });
});