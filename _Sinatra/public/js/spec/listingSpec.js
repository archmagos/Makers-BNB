/*jshint esversion: 6*/

describe('Listing', () => {
  beforeEach(function(){
    listing = new Listing();
  });

  describe('.getTitle', () => {
    it('returns the title', () => {
      listing._title = 'Mary Celeste';
      expect(listing.getTitle()).toEqual('Mary Celeste');
    });
  });

  describe('.setTitle', () => {
    it('sets the title', () => {
      listing.setTitle('Mary Celeste');
      expect(listing.getTitle()).toEqual('Mary Celeste');
    });
  });

  describe('.getDescription', () => {
    it('returns the description', () => {
      listing._description = 'Sweet boat';
      expect(listing.getDescription()).toEqual('Sweet boat');
    });
  });

  describe('.setDescription', () => {
    it('sets the description', () => {
      listing.setDescription('Sweet boat');
      expect(listing.getDescription()).toEqual('Sweet boat');
    });
  });

  describe('.getPrice', () => {
    it('returns the price', () => {
      listing._price = 100;
      expect(listing.getPrice()).toEqual(100);
    });
  });

  describe('.setPrice', () => {
    it('sets the price', () => {
      listing.setPrice(100);
      expect(listing.getPrice()).toEqual(100);
    });
  });
});
