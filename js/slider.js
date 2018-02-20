$(document).ready(function() {
    var thisItem = 1,nextItem = 0, range = 0, thisHeight = 70,
    $counter = $('#item_count'), $body = $('body');    

    //for each content item, set an id, and hide.
    $('.content_item').each(function() {
        nextItem++;
        $(this).attr('id', nextItem).hide();
    });

    //range contains how many content items exist
    range = nextItem, nextItem = 2, prevItem = range;

    //display the first content item
    $('#' + thisItem).show();
    $counter.html(thisItem + ' of ' + range);

    //hide old content item, show next item, resize content container
    $('#nextButton').click(function() {
        prevItem = thisItem;
        //update counter
        $counter.html(nextItem + ' of ' + range);
        //set focus to body so button is not selected,
        $body.focus();
        //get height of next content item to resize container
        thisHeight = $('#' + nextItem).height() + 20;
        //resize content container
        $('#content_container').animate({
            height : (thisHeight + 'px')
        }, 1000, 'swing');
        //hide old content item
        $('#' + thisItem).toggle('slide', {
            direction : 'left',
            easing : 'swing'
        }, 1000);
        //show next content item
        $('#' + nextItem).toggle('slide', {
            direction : 'right',
            easing : 'swing'
        }, 1000);

        //set old content item to current item
        thisItem = nextItem;
        //loop to first item if range reached
        if (thisItem >= range) {
            nextItem = 1;prevItem=range-1;
        } else {
            nextItem++;prevItem=thisItem-1;
        }
    });
    //end next click function
    
    
    //hide current content item, resize content container, show previous item 
    $('#prevButton').click(function() {
        
        //If we have reached the end range, the next item will be item #1
        if(nextItem==1){//so set the current item to the last
            thisItem=range;
        }else thisItem = nextItem - 1;

        //update counter
        $counter.html(prevItem + ' of ' + range);
        //set focus to body so button is not selected,
        $body.focus();
        //get height of next content item to resize container
        thisHeight = $('#' + prevItem).height() + 20;
        //resize content container
        $('#content_container').animate({
            height : (thisHeight + 'px')
        }, 1000, 'swing');
        //hide old content item
        $('#' + thisItem).toggle('slide', {
            direction : 'right',
            easing : 'swing'
        }, 1000);
        //show next content item
        $('#' + prevItem).toggle('slide', {
            direction : 'left',
            easing : 'swing'
        }, 1000);

        //set next content item to current item
        nextItem = thisItem;
                
        if (prevItem >= range) {//if at end of items
            nextItem = 1;//first
            prevItem = range -1;
            thisItem = range;
        } else if(prevItem <=1){//if at start of items
            prevItem = range;
            thisItem = 1;
            nextItem = 2;
        }else {//if in the middle of items
            prevItem--;
            thisItem--;
            }
        
    });
    //end prev click function
    
});
//end document ready function