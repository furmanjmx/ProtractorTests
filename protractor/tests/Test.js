
describe('p2y. logo', function () {

    it ('should exist', function () {
        browser.get('http://p2y.com.ua');

        var logo = element(by.css('.logo')).element(by.tagName('img'));

        expect(logo).toBeDefined();
        expect(logo.getAttribute('src')).toEqual('https://p2y.com.ua/images/logo.png');
    });

});