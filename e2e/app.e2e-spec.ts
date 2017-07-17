import { FormsAMPage } from './app.po';

describe('forms-am App', () => {
  let page: FormsAMPage;

  beforeEach(() => {
    page = new FormsAMPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('audi works!');
  });
});
