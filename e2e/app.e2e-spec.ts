import { NiceFishTestPage } from './app.po';

describe('nice-fish-test App', () => {
  let page: NiceFishTestPage;

  beforeEach(() => {
    page = new NiceFishTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
