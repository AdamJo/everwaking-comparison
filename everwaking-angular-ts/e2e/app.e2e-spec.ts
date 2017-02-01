import { EverwakingTsPage } from './app.po';

describe('everwaking-ts App', function() {
  let page: EverwakingTsPage;

  beforeEach(() => {
    page = new EverwakingTsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
