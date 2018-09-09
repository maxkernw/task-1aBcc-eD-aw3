import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.className('brand-name')).getText();
  }

  getInput() {
    return element(by.id('search')).getAttribute('value');
  }

  getSelect() {
    return element(by.id('select-box-limit')).getAttribute('value');
  }

  getTitle() {
    return element(by.className('title')).getText();
  }
}
