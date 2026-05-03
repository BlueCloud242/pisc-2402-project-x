const integratedQuotes = [
  {
    quote: "Trưởng thành là khi ta nhận ra rằng, đôi khi im lặng cũng là một lời giải thích.",
    character: "Nguyễn Nhật Ánh",
    movie: "Tôi Thấy Hoa Vàng Trên Cỏ Xanh",
    personal: "Không biết dáng vẻ trưởng thành của chúng ta sẽ trông như thế nào nhỉ?"
  },
  {
    quote: "You are the only person who can define your limit.",
    character: "Gusteau",
    movie: "Ratatouille",
    personal: "Có một câu tớ luôn tự nhủ rằng tớ sẽ không để bất kì ai định hình con người tớ, không ai có quyền nói rằng tớ không làm được khi bản thân tớ chưa bỏ cuộc, và những lời nhận xét của họ không làm nên giá trị của tớ. Đừng để họ làm cậu chùn bước nhé!"
  },
  {
    quote: "Always remember: You are braver than you believe, stronger than you seem, and smarter than you think.",
    character: "Christopher Robin",
    movie: "Winnie the Pooh",
    personal: "Cậu mạnh mẽ lắm đấy, tớ không nghi ngờ điều đó và tớ cũng mong cậu sẽ thật sự vững vàng nữa. Nhưng mà yếu lòng chút cũng đâu sai đúng không? Nếu mệt rồi thì hãy dừng lại nghỉ một chút."
  },
  {
    quote: "Just keep swimming.",
    character: "Dory",
    movie: "Finding Nemo",
    personal: "Nếu cả đời này không rực rỡ thì sao? thì cậu vẫn sống mà, chỉ cần cậu còn tin vào bản thân thì điều gì cũng vượt qua được, chúng ta sẽ không dừng lại dễ dàng như vậy, chậm cũng được nhưng chắc chắn không đứng yên."
  },
  {
    quote: "Đừng buồn quá lâu, vì cuộc đời còn nhiều điều đáng để mỉm cười.",
    character: "Nguyễn Nhật Ánh",
    movie: "Mắt Biếc",
    personal: "Buồn cũng được, khóc cũng được, trống rỗng cũng được. Nhưng hứa với tớ là đừng để nó ở lại quá lâu nhé, đừng để nó đánh gục cậu."
  },
  {
    quote: "Có những ngày thế giới bỗng nhiên trở nên dịu dàng một cách lạ lùng.",
    character: "Nguyễn Nhật Ánh",
    movie: "Cây Chuối Non Đi Giày Xanh",
    personal: "Mong rằng ngày hôm nay của cậu sẽ thật dịu dàng. Mong cậu gặp được những người tử tế, lưu lại được những khoảng khắc tuyệt đẹp. Tớ gửi cậu cái ôm nhé, hy vọng cậu sẽ luôn mỉm cười đối diện với thế giới này ^_^"
  },
  {
    quote: "Everything is possible, even the impossible.",
    character: "Mary Poppins",
    movie: "Mary Poppins Returns",
    personal: "Cậu có tin vào phép màu không? Tớ nghĩ việc chúng ta gặp nhau trong hơn 8 tỷ người ngoài kia đã là một phép màu, và dù không biết mai sau thế nào nhưng tớ sẽ trân trọng từng khoảng khắc lúc này."
  },
  {
    quote: "Tớ không lười, tớ chỉ đang ở chế độ tiết kiệm năng lượng thôi.",
    character: "Nguyễn Nhật Ánh",
    movie: "Chúc một ngày tốt lành",
    personal: "Nếu thấy kiệt sức hãy cứ cho phép bản thân lười một chút, nằm dài nghe nhạc hoặc ngủ một giấc thật sâu. Nạp đủ năng lượng rồi mới có thể tỏa sáng tiếp được chứ nhỉ ^_^"
  },
  {
    quote: "Life moves pretty fast. If you don't stop and look around once in a while, you could miss it.",
    character: "Ferris Bueller",
    movie: "Ferris Bueller's Day Off",
    personal: "Thỉnh thoảng Híu thử nhắm mắt lại rồi hít thở thật sâu và thở ra, ngồi yên lặng như thế vài phút rồi mở mắt ra ngắm nhìn mọi thứ xung quanh, tớ tin là cậu sẽ cảm thấy lòng mình thật nhẹ và mọi thứ thật tuyệt vời. Dừng lại một chút để nạp thêm năng lượng nhé."
  },
  {
    quote: "Cứ sai đi vì cuộc đời cho phép.",
    character: "Tiên Tiên",
    movie: "Vì tôi còn sống",
    personal: "Đừng quá khắt khe với bản thân, chỉ cần sau mỗi lần sai, cậu lại thấy mình lớn hơn một chút là được rồi."
  },
  {
    quote: "Always be a first-rate version of yourself, instead of a second-rate version of somebody else.",
    character: "Judy Garland",
    movie: "Judy Garland",
    personal: "Giữa một môi trường hoàn toàn mới, tớ mong cậu vẫn giữ được những bản sắc của riêng cậu, vẫn vững vàng và mạnh mẽ bình tĩnh đối diện vấn đề. Là phiên bản tốt nhất của bản thân nhe."
  },
  {
    quote: "Đi thật xa để trở về.",
    character: "Soobin Hoàng Sơn",
    movie: "Đi thật xa để trở về",
    personal: 'Cậu cứ đi thật xa, học được thật nhiều điều, mang thật nhiều trải nghiệm thú vị và trở về quê hương nhé. Không biết tương lai có điều gì thay đổi không nhưng dù cậu chọn thế nào mọi người cũng sẽ ủng hộ cậu, nhớ nhé tớ cũng rất ủng hộ cậu.'
  }
];


let isJarClickable = true;
let lastQuoteIndex = -1; 
let isMusicPlaying = false; 


let litStars = JSON.parse(localStorage.getItem('piscesLitStars')) || [];

document.addEventListener('DOMContentLoaded', () => {
  updateConstellation(); 

  const jar = document.getElementById('jar');
  const starsContainer = document.getElementById('starsContainer');
  const bgMusic = document.getElementById('bgMusic'); 

  const allStarImages = [
    'sao-1.png', 'sao-2.png', 'sao-3.png',
    'sao-4.png', 'sao-5.png', 'sao-6.png'
  ];

  jar.addEventListener('click', () => {
    if (!isMusicPlaying && bgMusic) {
        bgMusic.volume = 0.4; 
        bgMusic.play();
        isMusicPlaying = true;
    }

    if (!isJarClickable) return;

    isJarClickable = false;
    starsContainer.innerHTML = '';
    starsContainer.classList.remove('hidden');

    const shuffledStars = [...allStarImages].sort(() => 0.5 - Math.random());
    const selectedStars = shuffledStars.slice(0, 3);

    for (let i = 0; i < 3; i++) {
      const star = document.createElement('div');
      star.className = `star falling`;
      star.style.animationDelay = `${i * 0.15}s`;
      star.style.background = `url('${selectedStars[i]}') center/contain no-repeat`;
      
      star.addEventListener('click', () => {
        showFlipCard(selectedStars[i]); 
      });

      starsContainer.appendChild(star);
    }

    setTimeout(() => { isJarClickable = true; }, 2500);
  });

  window.showFlipCard = function(starImageUrl) {
    let randomQuoteIndex;
    do {
      randomQuoteIndex = Math.floor(Math.random() * integratedQuotes.length);
    } while (randomQuoteIndex === lastQuoteIndex);
    
    lastQuoteIndex = randomQuoteIndex;
    const item = integratedQuotes[randomQuoteIndex];

    document.getElementById('movieQuote').textContent = `"${item.quote}"`;
    document.getElementById('movieInfo').textContent = `— ${item.character}, ${item.movie}`;
    document.getElementById('personalMessage').textContent = item.personal;

    
    if (!litStars.includes(randomQuoteIndex)) {
        litStars.push(randomQuoteIndex);
        localStorage.setItem('piscesLitStars', JSON.stringify(litStars));
        updateConstellation();
    }

    document.getElementById('flipCardFront').style.background = `url('${starImageUrl}')`;

    const overlay = document.getElementById('flip-overlay');
    overlay.classList.add('show');

    setTimeout(() => {
      document.getElementById('flipCardInner').classList.add('is-flipped');
    }, 800); 
  };

  window.closeFlipCard = function() {
    document.getElementById('flipCardInner').classList.remove('is-flipped');
    setTimeout(() => {
      document.getElementById('flip-overlay').classList.remove('show');
      document.getElementById('starsContainer').innerHTML = ''; 
      isJarClickable = true;
    }, 600); 
  };
});


function updateConstellation() {
    const count = litStars.length;
    document.getElementById('starCount').textContent = count;

    
    litStars.forEach(index => {
        const starNode = document.getElementById(`star-node-${index}`);
        if (starNode) {
            starNode.classList.add('glow');
        }
    });

    
    if (count === 12) {
        document.getElementById('starCountText').innerHTML = 
            `<span class="completed-msg">
                🌟 Chòm sao Song Ngư đã hoàn thiện!<br>
                26/02 - Ngày một con cá nhỏ quyết định rời vùng biển an toàn để chinh phục đại dương!
            </span>`;
    }
}
