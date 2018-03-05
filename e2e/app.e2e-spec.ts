import { CCMPage } from './app.po';

describe('CCM App', () => {
  let page: CCMPage;

  beforeEach(() => {
    page = new CCMPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to Angular Crypto Coin Management App!');
  });
});
