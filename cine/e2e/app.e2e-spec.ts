import { CinePage } from './app.po';

describe('cine App', () => {
  let page: CinePage;

  beforeEach(() => {
    page = new CinePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
