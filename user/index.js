var db = require( 'db' ),
	log = require( 'logger' )(module);

function User( name ) {
	this.name = name;
}

User.prototype.hello = function ( who ) {
	log( db.getPhrases( 'Hello' ) + ', ' + who.name );
};

console.log( 'user.js is required' );

exports.User = User;
