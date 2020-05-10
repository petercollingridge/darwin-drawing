// Functions for loading images of animals, so I can try to mimic them

const images = {
    tiger: {
        filename: 'tiger.jpg',
        scale: 0.3,
        dx: 50,
        dy: 100
    },
    fox: {
        filename: 'fox.jpg',
        scale: 0.6,
        dx: 80,
    }
};

function addImage(callback, { filename, scale=1, dx=0, dy=0 }) {
    const image = new Image();
    image.src = 'images/' + filename;
    image.onload = function() {
        const imgWidth = image.width * scale;
        const imgHeight = image.height * scale;
        ctx.drawImage(image, dx, dy, imgWidth, imgHeight);
        callback();
    }
}

function addImageOfAnimal(animal, drawFunction) {
    const img = images[animal];
    addImage(callback=drawFunction, img);
}
