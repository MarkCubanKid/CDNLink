<script>
  
  var videoContainer = $('<div>').addClass('video-container');
  var video = $('<video muted>').attr({
    autoplay: true,
    loop: true,
    muted: true
  });
  var videoSource = $('<source>').attr({
    src: 'https://demo-labs-library.s3.amazonaws.com/newVideoLuggage.mp4',
    type: 'video/mp4'
  });

  video.append(videoSource);
  videoContainer.append(video);

  $('.fw-helpcenter').addClass('fw-helpcenter-custom').removeClass('fw-helpcenter');
  $('.fw-helpcenter-custom').prepend(videoContainer);
  $('.fw-helpcenter-custom .container').addClass('container-custom').removeClass('container');

  $('.col-md-9').addClass('col-md-9-custom').removeClass('col-md-9');
  $('.col-md-9-custom').find('input[type="text"]').addClass('input-text-custom');

  $('head').append('<style>' +
    '.fw-helpcenter-custom { background-color: transparent; padding: 0; }' +
    '.video-container { position: relative; width: 100%; height: 0; padding-bottom: 40.25%; overflow: hidden; }' +
    '.video-container video { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; }' +
    '.col-md-9-custom { position: absolute; top: 40%; left: 50%; transform: translate(-50%, -50%); z-index: 1; padding: 20px; background-color: #ffffff00; border-radius: 5px; }' +
    '.input-text-custom { width: 100%; max-width: 400px; padding: 10px; font-size: 16px; }' +
    '.input-group { align-items: center; justify-content: center }' +
    '.col-md-9-custom h1 { display: flex;align-items: center;justify-content: center;color:#221e1c'+
    '</style>');

$('.fw-nav-wrapper').css({ 'background-color': '#221e1c', 'border-bottom': '#221e1c' });
  $('.collapse.navbar-collapse').css('background-color','#221e1c');
  $('.navbar-nav.flex-row.align-items-center.ps-8.fw-nav-dropdown-wrapper').css('background-color','#221e1c');

$('.fw-brand-logo').attr('src', 'https://i.ibb.co/b3fbcyq/Screenshot-2023-08-23-at-10-42-42-AM-removebg-preview.png');
  $('.fw-brand-logo').attr('data-src', 'https://i.ibb.co/b3fbcyq/Screenshot-2023-08-23-at-10-42-42-AM-removebg-preview.png');
$('.fs-22.semi-bold.fw-brand-name.ms-4').text('');
$('.btn.fw-secondary-button').css("color","#a58d38");
$(".nav-item").children("a[href^='/en/support/tickets/new']").css("border-color","#b0973b");
$('.btn.fw-secondary-button').css('background-color','#221e1c')
  
$('.fw-category-icon').each(function() { var href = $(this).closest('.fw-horizontal').attr('href'); if (href === '/en/support/solutions') { $(this).html('<img src="https://i.ibb.co/k1qfSfK/Smartphone-Flat.png" alt="New Icon">'); } });
$('.fw-category-icon').each(function() { var href = $(this).closest('.fw-horizontal').attr('href'); if (href === '/en/support/tickets') { $(this).html('<img src="https://i.ibb.co/dPM9F1V/Sticky-notes-Flat.png" alt="New Icon">'); } });
$('.fw-category-icon').each(function() { var href = $(this).closest('.fw-horizontal').attr('href'); if (href === '/en/support/tickets/new') { $(this).html('<img src="https://i.ibb.co/gvxDFBY/Travel-Bag-Flat.png" alt="New Icon">'); } });
$(".container-fluid") .find('.fw-section-heading') .filter(function() { return $(this).find('a[href="/en/support/solutions"]').length > 0; }) .find('h2') .css('color', '#221e1c');
$(".container-fluid") .find('.fw-section-heading a[href="/en/support/solutions"]') .css('color', '#b0973c');
  $("footer .fw-credit").css('background-color','#221e1c')
  $("footer .fw-credit").css('color','#b0973b')
  $(".portal--light").css('--fw-tab-active-color','#b0973b')
   $(".portal--light").css('--fw-tab-active-text-color','#221e1c !important')
  $(".portal--light").css('--fw-header-text-color','#b0973b')
   
   
      
</script>

