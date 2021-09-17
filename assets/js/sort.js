
$('.sort').click(function () {
  $(this).toggleClass('open');
  $('.options__place', this).toggleClass('open');
  $('.options__way',this).toggleClass('open');
});

/*селектор по площадке */
$('.options__place li').click(function(){
  let selection = $(this).text();
     dataValue = $(this).attr('data-value');
  $('.selected__place span').text(selection);
  $('.sort').attr('data-selected-value', dataValue);
});
/*селектор по направлению */
$('.options__way li').click(function(){
  let selection = $(this).text();
   dataValue = $(this).attr('data-value');
  $('.selected__way span').text(selection);
  $('.sort').attr('data-selected-value', dataValue);
});

$(function() {

  let place = $("[data-place]");
  way = $("[data-way]");
  
/*Фильтр по площадке */
  place.on("click", function (event) {
    event.preventDefault();
    
    let checkPlace = $(this).data('place');

    if (checkPlace == 'AllPlace') {
      $("[data-checkplace]").show();
    } else {
      $("[data-checkplace]").each(function () {
        let workCheckPlace = $(this).data('checkplace');
        if (workCheckPlace != checkPlace) {
          $(this).hide();
        } else {
          $(this).show();
        }
      });
    }
  });

/*Фильтр по направлению */
  way.on("click", function (event) {
    event.preventDefault();
    
    let checkWay = $(this).data('way');
    console.log(checkWay);

    if (checkWay == 'AllWay') {
      $("[data-checkway]").show();
    } else {
      $("[data-checkway]").each(function () {
        let workCheckWay = $(this).data('checkway');
        if (workCheckWay != checkWay) {
          $(this).hide();
        } else {
          $(this).show();
        }
      });
    }

  });
  
    
});
