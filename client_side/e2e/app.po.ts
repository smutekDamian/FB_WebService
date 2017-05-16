import { browser, element, by } from 'protractor';

export class AngularTourOfHeroesPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('start-root h1')).getText();
  }
}
