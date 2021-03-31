$('#to_quiz').click(function() {
    $('#register').hide();
    $('#quiz').show();
    $('#progress_step1').addClass('active');
    $('#progress_step2,#progress_step3').removeClass('active');
    $('#progress_step1,#progress_step2,#progress_step3').removeClass('complete');

});  
$('#back_register').click(function() {
    $('#quiz').hide();
    $('#register').show();
});  


$('#to_step2').click(function() {
    $('#step1').hide();
    $('#step2').show();
    $('#progress_step1').addClass('complete');
    $('#progress_step2').addClass('active');
});    
$('#back_step1').click(function() {
    $('#step2').hide();
    $('#step1').show();
    $('#progress_step2,#progress_step3').removeClass('active');
    $('#progress_step1,#progress_step2,#progress_step3').removeClass('complete');
});    



$('#to_step3').click(function() {
    $('#step1,#step2').hide();
    $('#step3').show();
});  
$('#back_step2').click(function() {
    $('#step3').hide();
    $('#step2').show();
});  



$('#to_step4').click(function() {
    $('#step1,#step2,#step3').hide();
    $('#step4').show();
});  
$('#back_step3').click(function() {
    $('#step4').hide();
    $('#step3').show();
});  


$('#to_step5').click(function() {
    $('#step1,#step2,#step3,#step4').hide();
    $('#step5').show();
}); 
$('#back_step4').click(function() {
    $('#step5').hide();
    $('#step4').show();
}); 


$('#to_step6').click(function() {
    $('#step1,#step2,#step3,#step4,#step5').hide();
    $('#step6').show();
});
$('#back_step5').click(function() {
    $('#step6').hide();
    $('#step5').show();
    
}); 


$('#to_step7').click(function() {
    $('#step1,#step2,#step3,#step4,#step5,#step6').hide();
    $('#step7').show();
    $('#progress_step1').addClass('complete');
    $('#progress_step2').addClass('complete');
    $('#progress_step3').addClass('active');
});    
$('#back_step6').click(function() {
    $('#step7').hide();
    $('#step6').show();

    $('#progress_step1').addClass('complete');
    $('#progress_step2').addClass('active');
    $('#progress_step2').removeClass('complete');
    $('#progress_step3').removeClass('active');
});    





// DATE OF BIRTH
var date = document.getElementById('dob');

function checkValue(str, max) {
  if (str.charAt(0) !== '0' || str == '00') {
    var num = parseInt(str);
    if (isNaN(num) || num <= 0 || num > max) num = 1;
    str = num > parseInt(max.toString().charAt(0)) 
          && num.toString().length == 1 ? '0' + num : num.toString();
  };
  return str;
};

date.addEventListener('input', function(e) {
  this.type = 'tel';
  var input = this.value;
  if (/\D\/$/.test(input)) input = input.substr(0, input.length - 3);
  var values = input.split('/').map(function(v) {
    return v.replace(/\D/g, '')
  });
  if (values[0]) values[0] = checkValue(values[0], 12);
  if (values[1]) values[1] = checkValue(values[1], 31);
  var output = values.map(function(v, i) {
    return v.length == 2 && i < 2 ? v + ' / ' : v;
  });
  this.value = output.join('').substr(0, 14);
});




// PHONE NUMBER
$("#phone").keydown(function(e) {
  var actualValue = e.key;
  var baseMask = '(###) ###-####';
  var valueInput = this.value.match(/\d/g);
  if (actualValue !== 'Backspace' && /[^\d]/.test(actualValue)) {
      return false;
  }
  if (actualValue === 'Backspace') {
      if (!valueInput) {
          return false;
      }
      valueInput.pop();
      actualValue = '#';
  }
  var numsValues = valueInput ? valueInput.concat(actualValue) : [actualValue];
  $.each(numsValues, function() {
      baseMask = baseMask.replace(/\#/, this);
  });
  $(this).val(baseMask);
  return false;
});


// SUB OPTION SHOW

$('#opt9').click(function(){
    $('#whereIssue').show()
});
$('#opt8,#opt10').click(function(){
    $('#whereIssue').hide()
});

$('#opt17').click(function(){
    $('#Prescribed').show()
});
$('#opt18,#opt19').click(function(){
    $('#Prescribed').hide()
});

$('#opt18').click(function(){
    $('#Prescription').show()
});
$('#opt17,#opt19').click(function(){
    $('#Prescription').hide()
});





// FILE UPLOAD

function readURL(input) {
    if (input.files && input.files[0]) {
  
      var reader = new FileReader();
  
      reader.onload = function(e) {
        $('.image-upload-wrap').hide();
  
        $('.file-upload-image').attr('src', e.target.result);
        $('.file-upload-content').show();
  
        $('.image-title').html(input.files[0].name);
      };
  
      reader.readAsDataURL(input.files[0]);
  
    } else {
      removeUpload();
    }
  }
  
  function removeUpload() {
    $('.file-upload-input').replaceWith($('.file-upload-input').clone());
    $('.file-upload-content').hide();
    $('.image-upload-wrap').show();
  }
  $('.image-upload-wrap').bind('dragover', function () {
          $('.image-upload-wrap').addClass('image-dropping');
      });
      $('.image-upload-wrap').bind('dragleave', function () {
          $('.image-upload-wrap').removeClass('image-dropping');
  });
  