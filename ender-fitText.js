/*!
* ender-fitText 1.0.2
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Ported to ender by François Robichet http://francois.robichet.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: Jun 14 19:30:00 2012
*/

!(function($) {
    $.ender({
        fitText: function(kompressor, options) {

            // Setup options
            var compressor = kompressor || 1
              , settings = {
                    minFontSize : options.minFontSize || Number.NEGATIVE_INFINITY
                  , maxFontSize : options.maxFontSize || Number.POSITIVE_INFINITY
                };

            return this.each(function() {
                // Store the object
                var $this = $(this)

                // Resizer() resizes items based on the object width divided by the compressor * 10
                var resizer = function () {
                    $this.css('font-size', Math.max(Math.min($this.width() / (compressor * 10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)))
                }

                // Call once to set.
                resizer();

                // Call on resize. Opera debounces their resize by default.
                $(window).on('resize', resizer);
            })
        }
    }, true)
})(ender)