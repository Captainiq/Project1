/** GLOBAL OBJECT **/
var $ = {
	addClass      : function( elem, name ){
		var classes = elem.className.split( ' ' ),
				cIndex  = classes.indexOf( name );
		if( cIndex === -1 ){
			classes.push( name );
		}
		elem.className = classes.join( ' ' );
		return this;
	},	// END addClass
	
	removeClass   : function( elem, name ){
		var classes = elem.className.split( ' ' ),
				cIndex  = undefined;
		function recursive(){
			// use a recursive function to remove all instances
			// of the class name
			cIndex = classes.indexOf( name );
			if( cIndex >= 0 ){
				classes.splice( cIndex, 1 );
				recursive();
			}
		}
		recursive();
		elem.className = classes.join( ' ' );
		return this;
	},	// END removeClass
	
	inputFocus    : function( input, label ){
		var _this = this;
		input.addEventListener( 'focus', function(){
			_this.addClass(    label, 'active'     )
				   .addClass(    label, 'transition' )
				   .removeClass( label, 'inactive'   );
		});
		return this;
	},	// END inputFocus
	
	inputBlur     : function( input, label ){
		var _this = this;
		input.addEventListener( 'blur', function(){
			if( this.value === '' ){
				_this.addClass(    label, 'inactive'   )
					   .addClass(    label, 'transition' )
					   .removeClass( label, 'active'     );
			}
		});
		return this;
	}		// END inputBlur
	
};

window.onload = function(){
	var labels = document.getElementsByClassName( 'element_label' ),
			id     = '',
			label  = undefined,
			input  = undefined,
			type   = undefined;
	for( var i=0, x=labels.length; i<x; i++ ){
		label = labels[i];
		id    = label.getAttribute( 'for' ) || '';
		input = document.getElementById( id );
		type  = input.getAttribute( 'type' ) || input.tagName;
		type  = type.toLowerCase();
		// Make sure the input exists
		// Select, Radio, and Checkboxes would need something 
		//		different
		if( input && ( type === 'password' || type === 'text' || type === 'email' || type === 'tel' || type === 'number' ) ){
			$.inputFocus( input, label )
			 .inputBlur(  input, label );
			if( input.value === '' ){
				$.addClass( label, 'inactive' );
			}else{
				$.addClass( label, 'active'   );
			}
		}// END if( input && type )
	}// END for( labels )
}();

