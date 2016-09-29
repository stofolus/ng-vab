import { NgVabPage } from './app.po';

describe('ng-vab App', function() {
  let page: NgVabPage;

  beforeEach(() => {
    page = new NgVabPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
