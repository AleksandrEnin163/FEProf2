const images = ['https://images.pexels.com/photos/249798/pexels-photo-249798.png', 'https://images.pexels.com/photos/5700184/pexels-photo-5700184.jpeg', 'https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg'];

const div_img = document.createElement('div');
document.body.append(div_img);

for (const iterator of images) {
    const img = document.createElement('img');
    img.setAttribute('src', iterator);
    img.classList.add('img');
    const big_link = document.createElement('a');
    big_link.innerText = iterator;
    big_link.setAttribute('href', iterator);
    big_link.classList.add('a');
    div_img.append(img);
    document.body.append(div_img)
    img.addEventListener('click', () => {
        document.body.append(big_link);
    })
}