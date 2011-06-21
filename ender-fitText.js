/*!    
* ender-fitText 1.0
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Ported to ender by François Robichet http://francois.robichet.com
* Released under the WTFPL license 
* http://sam.zoy.org/wtfpl/
*
* Date: Thu May 05 14:23:00 2011 -0600
*/

!(function($) {
	$.ender({
		fitText: function(kompressor) {
	
			return this.each(function() {
				var $this = $(this),                                      // store the object
					origFontSize = parseFloat($this.css('font-size')),   // init the font sizes
					compressor = kompressor || 1;                        // set the compressor

				// Resizer() resizes items based on the object width divided by the compressor * 10
				var resizer = function() {
					$this.css('font-size', Math.min($this.width() / (compressor * 10), origFontSize));
				};

				// Call once to set.
				resizer();

				// Call on resize. Opera debounces their resize by default. 
                $(window).resize(resizer);
			});
		}
	}, true);
})(ender);