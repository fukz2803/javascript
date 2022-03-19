
$(function(){
    const $btn_submit = $('.btn-submit');
    const $input_height = $('.height');
    const $input_weight = $('.weight');
    const $inputs = $('.input');
    
    let height, weight;
    let isValid;

    $btn_submit.on('click',function(){
        isValid = checkInputs();
        console.log(isValid);
    });
    
    function checkInputs(){
        height = $input_height.trim();
        weight = $input_weight.trim();

        isValid = true;

        if (weight == ''){
            isValid = false;
            setErrorFor($input_weight, "Cân nặng không được để trống");
        }
        else if (!isNumber(weight)){
            setErrorFor($input_weight, "Không đúng định dạng");
        }
        else {
            setSuccessFor($input_weight);
        }

        if (height == ''){
            isValid = false;
            setErrorFor($input_height, "Cân nặng không được để trống");
        }
        else if (!isNumber(weight)){
            setErrorFor($input_height, "Không đúng định dạng");
        }
        else {
            setSuccessFor($input_height);
        }

        return isValid;
    };

    function setErrorFor(input, message){
        const parent = input.parentElement;
        parent.classList.add('error');
        const small = parent.querySelector('small');
        small.innerText = message;
    };

    function setSuccessFor(input) {
        const parent = input.parentElement;
        parent.classList.add("success");
    }

    function isNumber(number){
        return /^\d+$/.test(num);
    }

});

