module.exports = function ( module ) {
	return function () {
		var arr = module.filename.split( '/' ),
			doubleName = arr.slice( -2 ),
			args = [ doubleName.join( '/' ) ].concat( [].slice.call( arguments ) );

		console.log.apply( console, args );
	}
};