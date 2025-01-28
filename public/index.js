var swiper = new Swiper(".mySwiper", {
  on: {
    slideChange: function() {
      const activeIndex = this.activeIndex;
      let title = '';
      let description = '';

      const content = {
        0: {title: 'Candle X', description: 'Description for Candle X'},
        1: {title: 'Candle Y', description: 'Description for Candle Y'},
        2: {title: 'Candle Z', description: 'Description for Candle Z'}
      };

      const slideContent = content[activeIndex] || {title: 'error', description: 'No description available'};
      
      document.getElementById('headTitle').innerText = slideContent.title;
      document.getElementById('candleDescr').innerText = slideContent.description;
    }
  }
});

const input = document.getElementById('candleZ');
    const displayValue = document.getElementById('currentValue');

    input.addEventListener('input', function() {
        displayValue.innerText = this.value; // Aktualizuje wyświetlaną wartość
    });