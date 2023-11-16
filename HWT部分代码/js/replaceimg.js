var images = document.querySelectorAll('.image');

images.forEach(function(image) {
    image.addEventListener('click', function() {
        if (this.dataset.toggle === 'original') {
            this.src = this.dataset.new;
            this.dataset.toggle = 'new';
        } else {
            this.src = this.dataset.original;
            this.dataset.toggle = 'original';
        }
    });
});