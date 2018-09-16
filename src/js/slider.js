const slider = {
  prev: config => () => {
      config.otherBehaviorBefore();

      let list = document.getElementById(config.listId);
      config.position = Math.min(config.position + config.shiftWidth * config.count, 0);
      list.style.marginLeft = config.position + config.sizeType;

      config.otherBehaviorAfter();
  },
  next: config => () => {
      config.otherBehaviorBefore();

      let list = document.getElementById(config.listId);
      let listElem = list.querySelectorAll('li');
      config.position = Math.max(
          config.position - config.shiftWidth * config.count,
          -config.shiftWidth * (listElem.length - config.count)
      );
      list.style.marginLeft = config.position + config.sizeType;

      config.otherBehaviorAfter();
  }
};

const gallerySliderConfig = {
    shiftWidth: 100,
    position: 0,
    count: 1,
    listId: 'gallery-list',
    sizeType: 'vw',
    otherBehaviorBefore: () => {
        let list = document.getElementById('gallery-list');
        let p = -parseInt(list.style.marginLeft) / 100 || 0;

        let curSlideImgs = list.querySelectorAll('li')[p].children;
        curSlideImgs[0].classList.remove('visible');
        curSlideImgs[2].classList.remove('visible');

        curSlideImgs[0].classList.add('hidden');
        curSlideImgs[2].classList.add('hidden');
    },
    otherBehaviorAfter: () => {
        let list = document.getElementById('gallery-list');
        let p = -parseInt(list.style.marginLeft) / 100 + 1 || 0;
        document.getElementById('slider-position').firstChild.textContent = p + ' ';

        let curSlideImgs = list.querySelectorAll('li')[p-1].children;
        curSlideImgs[0].classList.remove('hidden');
        curSlideImgs[2].classList.remove('hidden');

        curSlideImgs[0].classList.add('visible');
        curSlideImgs[2].classList.add('visible');
    }
};


document.getElementById('prev').addEventListener('click', slider.prev(gallerySliderConfig));
document.getElementById('next').addEventListener('click', slider.next(gallerySliderConfig));

