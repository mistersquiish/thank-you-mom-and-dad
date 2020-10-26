import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { pictures } from '../Pictures';

const content = {
  title: {
    en: "Foreword",
    zh: "前言",
    es: "Prefacio",
    vi: "Lời tựa",
  },
  message1: {
    en: "Maa and De. It's what I call the two people who inspire me most. They're the ones who taught me to always aim higher. They're the ones who made sure my siblings and I were never hungry, always bringing us a tray of fruit or a bowl of fried rice at the perfect time. They're the ones who would stay up late helping me finish a school project or homework. They're the ones who would volunteer to sleep on the hotel room floor if there weren't enough beds. They're the ones who support everything I do. The word \"love\" isn't really a word my family used, but love manifests in nearly everything my parents do. I love you Maa and De as much as De loves Heineken.",
    zh: "爸爸和妈妈。他们就是我所说的对我最有启发的两个人。是他们教会我永远要有更高的目标。是他们保证我和我的兄弟姐妹永远不会挨饿，他们总能在最恰当的时候给我们送来一盘水果或一碗炒饭。是他们熬夜帮我完成学校的项目或作业。在酒店房间床位不够的时候，是他们主动睡在房间的地板上。是他们在支持我所做的一切。其实我的家人并不常说“爱”这个词，但“爱”却几乎体现在了我父母做的所有事情上。爸爸妈妈，我对你们的爱就像爸爸爱喜力啤酒一样多。",
    es: "Maa y De.",
    vi: "Maa và De. Đó là cái tên mà tôi dùng để gọi hai con người truyền cảm hứng cho tôi nhất. Họ là những người dạy tôi phải luôn hướng tới những điều cao cả. Họ là những người không bao giờ để cho tôi và các anh chị em phải đói bụng, luôn mang cho chúng tôi nào là khay hoa quả, nào là bát cơm rang vào những lúc chúng tôi cần nhất. Họ là những người không ngại thức đêm thức hôm giúp tôi làm cho xong bài nghiên cứu hoặc bài tập về nhà. Họ luôn là người tranh ngủ trên nền nhà mỗi khi trong phòng khách sạn không có đủ giường. Họ chính là những người luôn ủng hộ tất cả mọi thứ tôi làm. Gia đình chúng tôi không quen nói chữ “Tình yêu”, nhưng tất cả những gì bố mẹ tôi làm lúc nào cũng có tình yêu đong đầy. Con yêu bố mẹ, Maa và De, nhiều như cách De yêu bia Heineken.", 
  },
  message2: {
    en: "This website is dedicated not just to my two amazing parents, but two immigrants who courageously left everything behind in search of better opportunities. Immigrants like my parents shouldn't be demonized as criminals or freeloaders. They are the hard-working, ambitious, and good people that truly embody the American dream. From escaping communism in Vietnam and the authoritarian regime in China, my parent's journey to America was not without hardship and uncertainty. I wanted to document their story and honor their sacrifice.",
    zh: "这个网站不仅是献给我的两位伟大的父母，也是献给这两位为了寻求更好的机会而勇敢地抛开一切的移民。像我父母这样的移民，不应该被妖魔化为罪犯或不劳而获的人。他们是勤劳、有抱负、善良的人。是他们赋予了美国梦的真正意义。从逃离越南的共产主义和中国的专制政权开始，我父母来到美国的旅程并非没有艰辛和犹豫。我想记录他们的故事，纪念他们的牺牲。",
    es: "",
    vi: "Tôi lập ra trang web này không chỉ để ca ngợi hai vị phụ huynh tuyệt vời của tôi, mà còn là để vinh danh hai người nhập cư can đảm đã bỏ lại sau lưng tất cả để ra đi tìm cuộc sống mới tốt đẹp hơn. Những người nhập cư như bố mẹ tôi không nên bị vu cho cái danh tội phạm hoặc ăn bám. Họ là những người chăm chỉ, tham vọng, thiện lương và là hiện thân tiêu biểu cho Giấc mơ Mỹ. Phải chạy trốn từ cộng sản ở Việt Nam cho đến chế độ độc tài ở Trung Quốc, hành trình tới Mỹ của bố mẹ tôi chưa bao giờ là sóng yên biển lặng. Tôi muốn tường thuật lại câu chuyện của bố mẹ tôi và tôn vinh những sự hy sinh của họ. ", 
  },
  message3: {
    en: "I found my parent's story extremely moving and captivating, so I had it translated to reach a wider audience (simply click on the bottom right icon to change languages).",
    zh: "我发现我父母的故事感人至深，也引人入胜，所以我对故事进行了翻译，为的是让更多的人看到（只需点击右下角的图标就可以切换语言）。",
    es: "",
    vi: "Tôi thấy câu chuyện của họ vô cùng cảm xúc và lay động lòng người nên đã đem đi dịch lại để câu chuyện có thể được biết đến rộng rãi hơn (nhấn vào biểu tượng ở dưới cùng góc phải để thay đổi ngôn ngữ).", 
  },
};

const Foreword = ({lang}) => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="foreword">
      <Container>
          <Fade bottom duration={1000} delay={300} distance="0px">
            <h2 className="section-title">
              {content.title[lang]}
            </h2>
          </Fade>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
              <p>
                {content.message1[lang]}
                <br /><br />
                {content.message2[lang]}
                <br /><br />
                {content.message3[lang]}
              </p>
              <div className="image-container">
                <img id="foreword-picture" src={pictures.forewordPicture.img}/>
                <p>{pictures.forewordPicture.caption[lang]}</p>
              </div>
              
              
            </Fade>
      </Container>
    </section>
  );
};

export default Foreword;
