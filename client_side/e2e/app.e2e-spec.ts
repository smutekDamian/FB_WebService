import { AngularTourOfHeroesPage } from './app.po';

describe('angular-tour-of-heroes App', () => {
  let page: AngularTourOfHeroesPage;

  beforeEach(() => {
    page = new AngularTourOfHeroesPage();
  });

  it('should display message saying start works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('start works!');
  });
});
