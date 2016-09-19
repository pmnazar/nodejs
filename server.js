var db = require( 'db' );
db.connect();

var user = require( './user' ),
	log = require( 'logger' )( module );

function run() {
	var vasya = new user.User( 'Вася' ),
		petya = new user.User( 'Петя' );
	
	vasya.hello( petya );
	log( db.getPhrases( 'Run successful' ) );
}

if ( module.parent ) {
	exports.run = run;
} else {
	run();
}