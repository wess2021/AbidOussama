function _0x3330(_0x30a2a9,_0x3b127c){const _0x458935=_0x4589();return _0x3330=function(_0x33305d,_0x6c3da){_0x33305d=_0x33305d-0x195;let _0x5ef7b6=_0x458935[_0x33305d];return _0x5ef7b6;},_0x3330(_0x30a2a9,_0x3b127c);}const _0x3a8a3a=_0x3330;function _0x4589(){const _0x1fc62d=['24aEDSGn','170FYIDCI','1461088peJDMq','fire','showLoading','application/json','60mLBPwS','#email-field','value','#name-field','submit','addEventListener','1eZgBwj','1038PaGUxG','562563pWqxjn','3cxvbAR','error','5435tdnrnk','ajax','POST','Sending...','#contactForm','753958pygqWv','reset','2589509hCTeEs','Please\x20wait\x20while\x20your\x20message\x20is\x20being\x20sent.','719614kqKrxi','querySelector','193611BNJzHP','Error','Message\x20Sent!'];_0x4589=function(){return _0x1fc62d;};return _0x4589();}(function(_0x5b4369,_0x456f52){const _0x58adb9=_0x3330,_0x3b2b00=_0x5b4369();while(!![]){try{const _0x418011=parseInt(_0x58adb9(0x19e))/0x1*(parseInt(_0x58adb9(0x1a8))/0x2)+parseInt(_0x58adb9(0x1a1))/0x3*(-parseInt(_0x58adb9(0x1b3))/0x4)+parseInt(_0x58adb9(0x1a3))/0x5*(-parseInt(_0x58adb9(0x19f))/0x6)+-parseInt(_0x58adb9(0x1ac))/0x7+-parseInt(_0x58adb9(0x1b1))/0x8*(parseInt(_0x58adb9(0x1a0))/0x9)+-parseInt(_0x58adb9(0x1b2))/0xa*(parseInt(_0x58adb9(0x1ae))/0xb)+parseInt(_0x58adb9(0x198))/0xc*(parseInt(_0x58adb9(0x1aa))/0xd);if(_0x418011===_0x456f52)break;else _0x3b2b00['push'](_0x3b2b00['shift']());}catch(_0x4f06c1){_0x3b2b00['push'](_0x3b2b00['shift']());}}}(_0x4589,0x382c1));

// Modern contact form handler for SweetAlert2 and EmailJS

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    // Show loading alert
    Swal.fire({
      title: 'Loading',
      text: 'Sending your message...',
      allowOutsideClick: false,
      didOpen: () => { Swal.showLoading(); }
    });
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form)
      .then(function() {
        Swal.fire({
          icon: 'success',
          title: 'Your message has been sent. Thank you!',
          showConfirmButton: true
        });
        form.reset();
      }, function(error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong. Please try again later.',
          showConfirmButton: true
        });
      });
  });
});