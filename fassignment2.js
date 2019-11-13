function draw() {

  for (var i = 0; i < document.images.length; i++) {

    if (document.images[i].getAttribute('id') != 'frame') {

      canvas = document.createElement('canvas');
      canvas.setAttribute('width', 132);
      canvas.setAttribute('height', 150);

      document.images[i].parentNode.insertBefore(canvas,document.images[i]);

      ctx = canvas.getContext('2d');

	  ctx.drawImage(document.images[i], 20, 20, 97, 113);

      ctx.drawImage(document.getElementById('frame'), 10, 10);
    }
  }
}