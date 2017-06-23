import { RichliraPage } from './app.po';

describe('richlira App', () => {
  let page: RichliraPage;

  beforeEach(() => {
    page = new RichliraPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
