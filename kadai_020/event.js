const clickBtn = document.getElementById('btn');

clickBtn.addEventListener('click', () => {
    const h2 = document.querySelector('#text')
    h2.textContent = 'ボタンをクリックしました';
});