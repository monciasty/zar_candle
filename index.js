var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true, 
  },
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

     
      this.pagination.update();
    }
  }
});

  
  
function setupCounter(decrementId, incrementId, inputId) {
      const adding = document.getElementById(inputId);
      const decrementButton = document.getElementById(decrementId);
      const incrementButton = document.getElementById(incrementId);

      decrementButton.addEventListener('click', () => {
          let currentValue = parseInt(adding.value);
          if (currentValue > 0) {
              adding.value = currentValue - 1;
          }

          decrementButton.style.backgroundColor = '#AC9181';
          decrementButton.style.color = '#ffffff';

            setTimeout(() => {
              decrementButton.style.backgroundColor = '#ffffff'; 
              decrementButton.style.color = '#AC9181'; 
          }, 100);

      });

      incrementButton.addEventListener('click', () => {
          let currentValue = parseInt(adding.value);
          adding.value = currentValue + 1;

          incrementButton.style.backgroundColor = '#AC9181';
          incrementButton.style.color = '#ffffff';
          
          setTimeout(() => {
            incrementButton.style.backgroundColor = '#ffffff'; 
            incrementButton.style.color = '#AC9181'; 
        }, 100);

      });
  }

  setupCounter('decrementX', 'incrementX', 'candleX');
  setupCounter('decrementY', 'incrementY', 'candleY');
  setupCounter('decrementZ', 'incrementZ', 'candleZ');
  setupCounter('decrementA', 'incrementA', 'candleA');
