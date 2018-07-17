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
    it('throws an error if title is blank', () => {
      expect( function(){ listing.setTitle('') }).toThrowError('Please enter an argument');
    });
    it('throws an error if title is under 140 characters', () => {
      expect( function(){ listing.setTitle('A'.repeat(141)) }).toThrowError('Argument too long');
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
    it('throws an error if title is blank', () => {
      expect( function(){ listing.setDescription('') }).toThrowError('Please enter an argument');
    });
    it('throws an error if title is under 320 characters', () => {
      expect( function(){ listing.setDescription('A'.repeat(321)) }).toThrowError('Argument too long');
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
    it('throws an error if price is not an integer', () => {
      expect( function(){ listing.setPrice('hello') }).toThrowError('Argument not an integer');
    });
  });
});
