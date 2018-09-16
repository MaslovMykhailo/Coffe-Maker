const sliderConfig = {
  shiftWidth: 100,
  position: 0,
  count: 1,
  listId: 'gallery-list',
  sizeType: 'vw'
};

const slider = {
  prev: config => () => {
      let list = document.getElementById(config.listId);
      config.position = Math.min(config.position + config.shiftWidth * config.count, 0);
      list.style.marginLeft = config.position + config.sizeType;
  },
  next: config => () => {
      let list = document.getElementById(config.listId);
      let listElem = list.querySelectorAll('li');
      config.position = Math.max(
          config.position - config.shiftWidth * config.count,
          -config.shiftWidth * (listElem.length - config.count)
      );
      list.style.marginLeft = config.position + config.sizeType;
  }
};

document.getElementById('prev').addEventListener('click', slider.prev(sliderConfig));
document.getElementById('next').addEventListener('click', slider.next(sliderConfig));

