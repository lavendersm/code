import { DglistPage } from './app.po';

describe('dglist App', () => {
  let page: DglistPage;

  beforeEach(() => {
    page = new DglistPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
