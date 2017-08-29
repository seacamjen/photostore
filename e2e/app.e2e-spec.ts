import { PhotoStorePage } from './app.po';

describe('photo-store App', () => {
  let page: PhotoStorePage;

  beforeEach(() => {
    page = new PhotoStorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
