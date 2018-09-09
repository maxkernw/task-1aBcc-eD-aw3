import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display mav title', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Reddit Reader');
  });

  it('search should have expected default value', () => {
    page.navigateTo();
    expect(page.getInput()).toEqual('sweden');
  });

  it('limit should have expected default value', () => {
    page.navigateTo();
    expect(page.getSelect()).toEqual('10');
  });

  it('title should have expected default value', () => {
    page.navigateTo();
    expect(page.getTitle()).toEqual('/r/sweden');
  });
});
