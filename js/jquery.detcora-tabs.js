/*jquery detcora tabs*/

;(function ($) {

    var defaults = {
        classNavigation: '.tab-navigation',
        classTabs: '.tabs-container',
        classTab: '.tab',
        tabsEffect: 'fadeIn'
    };

    $.fn.detcoraTabs = function(options){

        var $that = this;

        return this.each(function () {
            if (options) {
                $.extend(defaults, options);
            }

            var Tabs = function () {

                this.navigationItems = $that.find(defaults.classNavigation).find('li');

                this.tabsItemContainer = $that.find(defaults.classTabs);

                this.tabsItem = $that.find(defaults.classTabs).find(defaults.classTab);

                var activeIndex = localStorage.getItem('activeSlide');

                this.go = function(index) {
                    this.tabsItemContainer.height(this.tabsItem.eq(index).outerHeight());
                    this.navigationItems
                        .removeClass('current')
                        .eq(index).addClass('current');
                    this.tabsItem
                        .removeClass('current animated ' + defaults.tabsEffect)
                        .eq(index).addClass('current animated ' + defaults.tabsEffect);
                    activeIndex = localStorage.setItem("activeSlide", index);

                };

                this.init = function () {
                    this.go(activeIndex);
                };



            };

            var tabs = new Tabs();
            tabs.init();

            tabs.navigationItems.on('click', function () {
                tabs.go($(this).index());
            });
        });

    }
})(jQuery);