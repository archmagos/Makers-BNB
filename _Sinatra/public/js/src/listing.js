var Listing = function(){
  this._title = '';
  this._price = 0;
  this._description = '';
};

Listing.prototype.getTitle = function(){
  return this._title;
};

Listing.prototype.setTitle = function(title){
  if(title === '') throw new Error ('Please enter an argument');
  if(title.length > 140) throw new Error ('Argument too long');
  this._title = title;
};

Listing.prototype.getDescription = function(){
  return this._description;
};

Listing.prototype.setDescription = function(description){
  if(description === '') throw new Error ('Please enter an argument');
  if(description.length > 320) throw new Error ('Argument too long');
  this._description = description;
};

Listing.prototype.getPrice = function(){
  return this._price;
};

Listing.prototype.setPrice = function(price){
  if(isNaN(price)) throw new Error ('Argument not an integer');
  this._price = price;
};
