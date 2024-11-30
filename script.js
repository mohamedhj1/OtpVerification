// احصل على جميع الحقول
const inputs = document.querySelectorAll('.input input');

// التنقل التلقائي بين الحقول
inputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
        if (!/^\d$/.test(e.target.value)) {
            input.value = '';
            return;
        }
        if (index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && input.value === '' && index > 0) {
            inputs[index - 1].focus();
        }
    });
});

// التحقق عند الضغط على زر التحقق
document.querySelector('.btn').addEventListener('click', (e) => {
    e.preventDefault();
    const otp = Array.from(inputs).map((input) => input.value).join('');
    if (otp.length === inputs.length) {
        alert(`Success! Your OTP is: ${otp}`);
    } else {
        alert('Please enter all digits!');
    }
});


