import { AngularGroceryPage } from './app.po';

describe('angular-grocery App', () => {
  let page: AngularGroceryPage;

  beforeEach(() => {
    page = new AngularGroceryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
