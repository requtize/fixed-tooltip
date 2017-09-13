/**
 * Available for use under the MIT License (http://en.wikipedia.org/wiki/MIT_License)
 * 
 * Copyright (c) 2017 by Adam Banaszkiewicz
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 * @version 0.0.1
 * @date    2017.09.13
 * @author  Adam Banaszkiewicz
 */

(function ($, w) {
    var FixedTooltip = function (element, options) {
        this.element = element;
        this.options = options;
        this.tooltip;

        this.init = function () {
            this.options = $.extend({}, FixedTooltip.Defaults, this.options);

            this.tooltip = $(this.options.template);
            this.tooltip.find('.ct-text').html(this.element.attr(this.options.attrText));
            this.tooltip.appendTo('body');

            if(this.options.removeTitleAttr)
                this.element.removeAttr('title');

            this.bindEvents();
            this.hide();
        };

        this.bindEvents = function () {
            var self = this;

            this.element.hover(function () {
                self.show();
            }, function () {
                self.hide();
            });
        };

        this.show = function () {
            this.updateTooltipPosition();

            this.tooltip
                .removeClass(this.options.classHidden)
                .addClass(this.options.classShowed);

            return this;
        };

        this.hide = function () {
            this.tooltip
                .removeClass(this.options.classShowed)
                .addClass(this.options.classHidden);

            return this;
        };

        this.updateTooltipPosition = function () {
            var ep = this.getElementDetails();

            this.tooltip.css({
                left: ep.offsetLeft + ((ep.width / 2) - (this.tooltip.outerWidth() / 2)),
                top:  ep.offsetTop - this.tooltip.outerHeight() - this.options.offset,
            });
        };

        this.getElementDetails = function () {
            return {
                height:     this.element.outerHeight(),
                width:      this.element.outerWidth(),
                offsetTop:  this.element.offset().top,
                offsetLeft: this.element.offset().left
            };
        };
    };

    FixedTooltip.Defaults = {
        template:    '<div class="fixed-tooltip"><span class="ct-text"></span></div>',
        classHidden: 'ft-hidden',
        classShowed: 'ft-showed',
        attrText:    'data-tooltip',
        offset:      6,
        removeTitleAttr: true
    };

    w.FixedTooltip = FixedTooltip;

    $.fn.fixedTooltip = function(options) {
        this.each(function () {
            (new FixedTooltip($(this), options)).init();
        });

        return this;
    };
})(jQuery, window);
