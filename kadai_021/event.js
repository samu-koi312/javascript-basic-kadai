const twoSec = document.getElementById('btn');


twoSec.addEventListener('click', () => {
    setTimeout(() => {
        const h2 = document.querySelector('#text');
        h2.textContent = 'ボタンをクリックしました';
    }, 2000);
})