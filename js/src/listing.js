var Listing = function(){
  this._title = '';
  this._price = 0;
  this._description = '';
};

Listing.prototype.getTitle = function(){
  return this._title;
};

Listing.prototype.setTitle = function(title){
  this._title = title;
};

Listing.prototype.getDescription = function(){
  return this._description;
};

Listing.prototype.setDescription = function(description){
  this._description = description;
};

Listing.prototype.getPrice = function(){
  return this._price;
};

Listing.prototype.setPrice = function(price){
  this._price = price;
};
