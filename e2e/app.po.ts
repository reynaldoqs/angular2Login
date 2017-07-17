import { browser, element, by } from 'protractor';

export class FormsAMPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('audi-root h1')).getText();
  }
}
