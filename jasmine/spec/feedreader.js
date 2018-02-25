
$(function() {
   //To test RSS feeds, we will check all feeds to be deifend and not empty
    describe('RSS Feeds', function() {
        
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });  
            it('URL are defined and not empty', function(){

                allFeeds.forEach(function(feed){
                    expect(feed.url).toBeDefined();
                    expect(feed.url).toBeTruthy();
                });
            });

         it('name are defined and not empty',function(){

            allFeeds.forEach(function(feed){
            expect(feed.name).toBeDefined();
            expect(feed.name).toBeTruthy();
            });
         });
    });

    //To test The menu, it should be hidden by deffult, visibil on cilck and hid when click again.
    describe('The menu',function(){

         it('menu elemnts are hidden by default',function(){
            expect($('body').hasClass('menu-hidden')).toBe(true);
          });

          it('visibiliy changes when the menu is clicked to be hidden',function(){
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
          });

          it('visibiliy changes when the menu is clicked to be visibile',function(){
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
          });
    });
    
    //To test entries when loading the feed, it has entry within the feed 
    describe('Initial Entries', function(){

         beforeEach(function(completed){
            loadFeed(0,completed);
         });

        it('there a single .entry element within the .feed container', function(){
            expect($('.entry .feed').length).toBeGreaterThan(0);
        });
    });

    //To test New feed selection, it has to be loadded
    describe ('New Feed Selection',function(){

    beforeEach(function (completed) {
        loadFeed(0, function () {
            firstFeed = $('.feed').html();
            loadFeed(1, function () {
            secondFeed = $('.feed').html();
            completed();
          });
        });
    });
         it ('has been loaded', function(){
            expect(firstFeed).not.toEqual(secondFeed);
         });
    });
}());