import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Language } from '../../LanguageConstant';
import Closing from './Closing';

const content = {
  intro: {
    en: "The year 1966...",
    zh: "1966 年...",
    es: "El año 1961...",
    vi: "Năm 1966...", 
  },
  p1: {
    en: "I was born in Zhaoqing, China. Under the communist labor system, workers were given a strict wage of about 420 Yuan a year (about $18,000 in US dollars today). Property ownership was virtually non-existent and economic mobility was all but unattainable. Individual rights taken for granted in the US were sparse under party rule. Speaking out of line would yield the consequence of public shaming on the streets and moreover the possibility of being taken to re-education camps, an experience my grandmother knew all too well.",
    zh: "我出生在中国肇庆。在共产主义的劳动制度下，工人们的工资严格地被规定为每年约420 元人民币（现今大约是1.8 万美元）。那时几乎不存在财产所有权，而且几乎不可能实现经济流动。在美国被视为理所当然的个人权利，在当时共产党的统治下，却极为稀有。说话出格会导致在大街上被公开羞辱，更有可能被带到再教育营去接受教育，这是我祖母非常熟悉的经历。",
    es: "",
    vi: "Tôi sinh ra ở Triệu Khánh, Trung Quốc. Dưới chế độ lao động của cộng sản, công nhân được trả một mức lương khoảng 420 Nhân dân tệ một năm (khoảng 18.000 đô la Mỹ ngày nay). Quyền sở hữu tài sản hầu như không tồn tại và tình trạng kinh tế gần như không thể cải thiện. Các quyền cá nhân được coi là đương nhiên ở Hoa Kỳ tồn tại rất ít dưới sự cai trị của đảng. Việc lên tiếng không theo số đông sẽ dẫn đến hậu quả là bị xã hội miệt thị và hơn nữa là có khả năng bị đưa vào trại cải tạo, một trải nghiệm mà bà tôi biết quá rõ.", 
  },
  p2: {
    en: "In 1978, China opened its borders and allowed its citizens to immigrate to Hong Kong. I was 12 at the time and didn't really understand why my parents were so adamant on moving. After all, leaving China meant leaving behind government provided benefits like public housing and food stamps and a great deal of familiarity with the community around us. It wasn’t until later in life that I realized the difficulties my parents had to endure at the hands of the state. The expropriation of their hard-earned wealth was but an example epitomizing the hardship they had to go through.",
    zh: "1978 年，中国开放了国门，允许其公民移民到香港。那时候我才12 岁，我真不明白为什么我的父母那么执着地要搬家。毕竟，离开中国意味着要放弃政府提供的福利，比如公共住房和食品券，以及对我们周围社区的充分了解等等。直到晚年，我才意识到父母在政府的控制下不得不忍受的种种困难。他们来之不易的财富被没收了，而这只是他们所经历的艰难困苦的一个例证。",
    es: "",
    vi: "Năm 1978, Trung Quốc mở cửa biên giới và cho phép công dân nhập cư vào Hồng Kông. Khi đó, tôi 12 tuổi và thực sự không hiểu tại sao cha mẹ tôi lại kiên quyết ra đi đến vậy. Xét cho cùng, rời Trung Quốc có nghĩa là bỏ lại những phúc lợi mà chính phủ cung cấp như nhà ở công cộng và phiếu thực phẩm cũng như rất nhiều sự quen thuộc với cộng đồng xung quanh chúng tôi. Mãi đến sau này khi lớn lên, tôi mới nhận ra những khó khăn mà cha mẹ tôi phải chịu đựng dưới sự cai trị của nhà nước. Việc chiếm đoạt của cải mà họ cực khổ lắm mới kiếm được chỉ là một ví dụ điển hình cho sự khó khăn mà cha mẹ tôi phải trải qua.", 
  },
  p3: {
    en: "Even in retrospect, the decision my parents had to make continues to feel like an impossible quandary. I’m still unsure I would have the resolve to take the leap of faith they took. To them the dichotomy was clear: stay in China forever stagnant with no chance of economic mobility or struggle to live in Hong Kong.",
    zh: "现在回想起来，我父母当时不得不做出的决定仍然让人觉得难以置信。我仍然不确定我是否有决心像他们那样去跨越信仰的鸿沟。对他们来说，两种选择显然是对立的：留在中国，永远停滞不前，没有经济流动性的机会；或在香港挣扎着求生。",
    es: "",
    vi: "Ngay cả khi nhìn lại, tôi vẫn cảm thấy quyết định mà cha mẹ tôi phải đưa ra là một tình thế tiến thoái lưỡng nan không thể giải quyết. Tôi vẫn không chắc mình có được quyết tâm để đặt niềm tin vào điều mà cha mẹ tôi đã tin tưởng hay không. Đối với họ, sự khác biệt giữa việc ra đi và ở lại rất rõ ràng: ở lại Trung Quốc mãi mãi trì trệ và không có cơ hội cải thiện tình trạng kinh tế hoặc là chật vật để sống ở Hồng Kông.", 
  },
  p4: {
    en: "The move to Hong Kong was abrupt, but familiar. School was largely the same with the major distinction of no longer having to study the Little Red Book: 'Quotations from Chairman Mao Tse-tung'. Nevertheless, everyday life in Hong Kong brought some major changes. In China, the government heavily regulated everything. Every family would be allocated a voucher giving them permission to purchase essential items (meat, oil). Meanwhile Hong Kong brought a wider degree of freedom. There one could simply walk to the market and purchase a meal.",
    zh: "搬到香港很唐突，但也能接受。学校基本上是相同的，主要区别在于不必再学习红宝书《毛主席语录》了。然而，香港的日常生活使我们的生活方式发生了重大变化。在中国，政府严格监管着一切。每个家庭可获得一张代金券，允许人们购买生活必需品（肉、油等）。而在香港生活却有更大程度的自由。在那里，人们可以简单地步行到市场购买餐点。",
    es: "",
    vi: "Việc chuyển đến Hồng Kông rất đột ngột, nhưng cũng quen thuộc. Trường học hầu hết đều tương tự nhưng điểm khác biệt lớn chính là không còn phải học Sách Đỏ Nhỏ: \"Những câu nói của Chủ tịch Mao Trạch Đông\". Tuy nhiên, cuộc sống hàng ngày ở Hồng Kông đã mang lại một số thay đổi lớn. Ở Trung Quốc, chính phủ quản lý chặt chẽ mọi thứ. Mỗi gia đình sẽ được cấp một phiếu mua hàng cho phép họ mua các mặt hàng thiết yếu (thịt, dầu). Trong khi đó, Hồng Kông có mức độ tự do cao hơn. Ở đó, người ta có thể chỉ cần đi chợ và mua đồ ăn.", 
  },
  p5: {
    en: "Perhaps most importantly, immigrating to Hong Kong meant starting over with little money. We couldn't afford daycare for my baby brother, so I had to raise and feed him for most of my teenage years. A typical day began by cooking steamed buns at 4:00am for my parent's food stall, attending school, and later in the evenings returning to help my parents. Financial hardship meant I couldn’t afford end of school year field trips. When explaining my absence, I would often find myself hiding a sense of embarrassment while telling my classmates I was busy that day. My living arrangements consisted of a simple room, no larger than an average bedroom, that accommodated me and six other family members. I eventually dropped out of secondary school and moved to working with my parents and later at a factory. I was too poor to go to school, but I also never had the time. Money was especially tight and raising my younger brother was a responsibility I had. It still hurts me to this day to have been told I was too poor to study and not have been given a chance.",
    zh: "對我們而言，移民到香港意味着从零开始。我们负担不起小弟弟的日托费用，所以我不得不在青少年时期放下學業，用大部分的时间去分擔家記和照看弟弟。典型的一天是从凌晨4:00 到我父母的食品摊上烹饪馒头开始的，然后去上学，晚上再回来帮父母干活。经济上的困难使我负担不起学年结束时的实地考察旅行；在面對其他人的詢問，只能尴尬的告诉同学们那天我很忙，草草塘瑟了原因。我的生活空間就是一个简单的房间，不比普通的卧室大，其中容纳了我和其他六个家庭成员。我最终从中学辍学了，转而与父母一起工作，后来又到一家工厂打工。我太穷了，没钱去上学，而且我也没有时间读书。手头特别紧，养育弟弟是我的责任。到如今我还是很伤心，因为有人告诉我，我穷得连学习的机会都没有。",
    es: "",
    vi: "Có lẽ điều quan trọng nhất là việc di cư đến Hồng Kông có nghĩa là bắt đầu lại với số tiền ít ỏi. Chúng tôi không đủ tiền để em trai tôi đi nhà trẻ, vì vậy tôi phải nuôi nấng và cho em tôi ăn trong phần lớn thời niên thiếu của mình. Một ngày điển hình bắt đầu bằng việc làm món bánh bao lúc 4 giờ sáng cho quầy bán đồ ăn của cha mẹ tôi, đi học và sau đó trở về phụ giúp cha mẹ vào buổi tối. Khó khăn về tài chính khiến tôi không có tiền để tham gia các chuyến đi thực tế cuối năm học. Khi giải thích về việc vắng mặt, tôi thường thấy mình che giấu cảm giác xấu hổ khi nói với các bạn cùng lớp rằng hôm đó tôi bận. Chỗ ở của tôi có một căn phòng đơn giản, không lớn hơn một phòng ngủ trung bình, đủ chỗ cho tôi và sáu thành viên khác trong gia đình. Cuối cùng, tôi đã bỏ học cấp hai để làm việc cùng cha mẹ và sau đó là đi làm ở nhà máy. Tôi quá nghèo để có thể đi học, nhưng tôi cũng không bao giờ có thời gian. Tiền bạc cực kỳ eo hẹp và tôi phải có trách nhiệm nuôi dạy em trai. Cho đến tận bây giờ, tôi vẫn còn đau lòng khi nói rằng mình quá nghèo để học tập và không được trao cơ hội.", 
  },
  p6: {
    en: "During my time in China, I remember my father being a sweet and kind person to my family and me. He would take me out to the Seven Star Crags, beautiful limestone crags that I loved seeing. This all changed when we moved to Hong Kong. He became increasingly cold and isolated from my family and me. This shift became more apparent in his everyday actions. Although we had enough money to purchase normal food, my father would deliberately wait until the market closed to purchase scraps and leftovers at a discount. He would pocket the savings, never once giving back to the family. I took these interactions to heart, it was like he didn't care about me and wished I’d just go away. To feel completely forgotten and unwanted by a parent was so demoralizing that I often wished we’d never left communist China.",
    zh: "在中国期间，我记得父亲对我和家人都和蔼可亲。 他会带我去七星岩遊玩，因为我喜欢看美丽的石灰岩峭壁。 然而在我们移居到香港后，一切都变了。 他变得越来越冷漠，与我和家人越来越疏远了，这种转变在他的日常行为中更加明显。尽管我们有足够的钱来购买普通食品，但我父亲还是会故意等到市场即將打洋之前用折扣价购买残羹剩饭。他会把节省下来的钱装进自己的口袋，再也不还给家人。我想就这些行为与他交流，但他好像根本不在乎我，只希望我离得远远的。被父完全遗弃的感觉是如此令人沮丧，以至于我常常希望我们从未离开过共产主义的中国。",
    es: "",
    vi: "Trong thời gian ở Trung Quốc, tôi còn nhớ cha tôi là một người ngọt ngào và tốt bụng với gia đình và tôi. Ông ấy sẽ đưa tôi đi chơi Thất Tinh Nham, những mỏm đá vôi tuyệt đẹp mà tôi thích ngắm nhìn. Tất cả điều này đã thay đổi khi chúng tôi chuyển đến Hồng Kông. Ông ngày càng trở nên lạnh nhạt cũng như tách biệt với tôi và gia đình. Sự thay đổi này trở nên rõ ràng hơn trong hành động hàng ngày của ông. Mặc dù chúng tôi có đủ tiền để mua thức ăn bình thường, nhưng cha tôi vẫn cố tình đợi cho đến khi tan chợ để mua đồ vụn và thức ăn thừa được giảm giá. Ông bỏ túi tiền tiết kiệm, không đưa lại cho gia đình một lần nào. Tôi ghi nhớ những hành động này, điều đó giống như ông ấy không quan tâm đến tôi và mong tôi đi khỏi. Cảm giác bị cha mẹ hoàn toàn lãng quên và không cần đến khiến tôi nản lòng đến mức tôi thường ước rằng chúng tôi chưa bao giờ rời khỏi Trung Quốc cộng sản.", 
  },
  p7: {
    en: "On June 4th 1989 the Tiananmen Square massacre happened in Beijing. Chinese troops shot and killed many (estimates vary from several hundred to several thousand) student protestors who were protesting the slow pace of reform. Although  China had made great strides in economic reform, many democratic issues lagged behind. Reducing corruption, freedom of speech, and freedom of press were some of the demands that the protestors wanted.",
    zh: "1989 年6 月4 日，北京发生了天安门广场惨案。中国军队开枪打死了许多抗议改革步伐缓慢的学生（估计从几百到几千）。尽管中国在经济改革方面取得了巨大的进步，但许多民主问题仍然滞后。抗议者提出了减少腐败﹑言论自由和新闻自由的要求。",
    es: "",
    vi: "Vào ngày 4 tháng 6 năm 1989, vụ thảm sát trên Quảng trường Thiên An Môn đã xảy ra ở Bắc Kinh. Quân đội Trung Quốc đã bắn và giết nhiều sinh viên biểu tình (ước tính từ vài trăm đến vài nghìn) phản đối tiến độ cải cách chậm chạp. Mặc dù Trung Quốc đã đạt được những bước tiến lớn trong cải cách kinh tế, nhưng nhiều vấn đề dân chủ vẫn còn tồn đọng. Giảm tham nhũng, tự do ngôn luận và tự do báo chí là một số yêu cầu mà những người biểu tình mong muốn.", 
  },
  p8: {
    en: "I learned about the events immediately on the news. I was disgusted by the actions of the CCP and could only feel sorrow for the protestors. The next day, I joined protests against the CCP on Hennessy Road in Hong Kong.",
    zh: "我通过新闻立即得知了这件事。我对中共的行为感到厌恶，只能为抗议者感到悲伤。第二天，我参加了在香港轩尼诗道举行的反对中共的抗议活动。",
    es: "",
    vi: "Tôi biết ngay về các sự kiện này qua tin tức. Tôi kinh tởm những hành động của ĐCSTQ và chỉ có thể cảm thấy đau buồn cho những người biểu tình. Ngày hôm sau, tôi tham gia các cuộc biểu tình chống ĐCSTQ trên đường Hennessy ở Hồng Kông.", 
  },
  p9: {
    en: "In 1990, I booked a round trip ticket to Seattle, Washington mainly to visit family. After contemplating returning back to Hong Kong, I decided to apply to immigrate and stay. A friend of mine told me about the city of Laredo. I was told it was a fast growing city with many business opportunities thanks to its proximity to Mexico. In 1991, I came to Laredo. I enrolled in a course in Laredo Community College to learn English and began work at a toy store downtown. I eventually met the most hardworking, caring, and easygoing person in the world— my husband.",
    zh: "1990 年，我订了一张到华盛顿州西雅图的往返机票，主要是去美国探亲。回到香港后，经过考虑，我决定申请移民居留美国。一位朋友向我介绍了拉雷多市，从而得知，由于毗邻墨西哥，在这座发展迅速的城市里有很多商业机会。1991 年，我来到拉雷多。我在拉雷多社区学院修学了一门英语课程，并在市中心的一家玩具店开始工作。最终，我遇到了世界上最勤奋、最体贴、最随和的人——我的丈夫。",
    es: "",
    vi: "Năm 1990, tôi đặt vé khứ hồi đến Seattle, Washington chủ yếu để thăm gia đình. Sau khi suy tính về việc trở lại Hồng Kông, tôi đã quyết định nộp đơn xin nhập cư và ở lại Hoa Kỳ. Một người bạn của tôi đã kể cho tôi nghe về thành phố Laredo. Tôi được biết đây là một thành phố đang phát triển nhanh chóng với nhiều cơ hội kinh doanh nhờ gần với Mexico. Năm 1991, tôi đến Laredo. Tôi đăng ký một khóa học tại trường Cao đẳng Cộng đồng Laredo để học tiếng Anh và bắt đầu làm việc tại một cửa hàng đồ chơi ở trung tâm thành phố. Cuối cùng, tôi đã gặp được người chăm chỉ, chu đáo và dễ tính nhất trên thế giới - đó là chồng tôi.", 
  },
  conclusion: {
    en: "As I think back to my upbringing, I can't help but be tearful for the struggle and poverty that I had to endure. The experience of having a mostly unloving father made me vow to never let those feelings of unhappiness reach my children. The only thing I’ve ever wanted is for my children to have a better life than mine. I don't want my children to ever let their future be decided by anybody other than themselves. Despite everything I’ve gone through, I would do it all again for my amazing husband and beautiful children.",
    zh: "回想自己的成长历程，我不禁为自己不得不承受的挣扎和苦难而流泪。有一个几乎毫无爱心的父亲的经历，让我发誓绝不把那些不快乐的感觉传给我的孩子。我唯一的愿望就是让我的孩子过得比我好；我不想让别人来决定孩子们的未来。不管我曾经经历过什么，为了我出色的丈夫和心愛的孩子们，我都要勇敢和堅強。",
    es: "",
    vi: "Khi nghĩ lại quá trình trưởng thành của mình, tôi không khỏi ứa nước mắt vì sự vất vả và nghèo khó mà tôi phải chịu đựng. Trải nghiệm về việc có một người cha hầu như không yêu thương khiến tôi thề sẽ không bao giờ để cho các con của mình chịu những cảm giác bất hạnh đó. Điều duy nhất tôi mong muốn chính là các con tôi có một cuộc sống tốt hơn cuộc sống của tôi. Tôi không muốn các con tôi để tương lai của mình do ai khác quyết định ngoài bản thân chúng. Bất chấp mọi thứ tôi đã trải qua, tôi sẽ làm lại mọi thứ vì người chồng tuyệt vời và những đứa con xinh đẹp của mình.", 
  },
};

const Mom = ({lang, pictures}) => {
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
    <div>
      <section id="mom">
        <Container>

            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
              <div class="story-section">
                <div class="text-section">
                  <p>
                    {content.intro[lang]}
                  </p>
                </div>

                <div class="text-section">
                  <p>
                    {content.p1[lang]}
                  </p>
                </div>
                <div class="image-single-container">
                  <img src={pictures.mapOfZhaoqing.img} className="img-large"/>
                  <p>{pictures.mapOfZhaoqing.caption[lang]}</p>
                </div>

                <div class="text-section">
                  <p>
                    {content.p2[lang]}
                  </p>
                </div>
                <div class="image-double-container">
                  <div class="image-double-bottom">
                    <img src={pictures.littleRedBook.img}/>
                    <p>{pictures.littleRedBook.caption[lang]}</p>
                  </div>
                  <div class="image-double-top">
                    <p>{pictures.momYoung.caption[lang]}</p>
                    <img src={pictures.momYoung.img}/>
                  </div>
                </div>

                <div class="text-section">
                  <p>
                    {content.p3[lang]}
                  </p>
                </div>
                <div class="image-single-container">
                  <img src={pictures.uncle.img} className="img-large"/>
                  <p>{pictures.uncle.caption[lang]}</p>
                </div>

                <div class="text-section">
                  <p>
                    {content.p4[lang]}
                  </p>
                </div>
                <div class="image-single-container">
                  <img src={pictures.schoolPicture.img} className="img-mid"/>
                  <p>{pictures.schoolPicture.caption[lang]}</p>
                </div>

                <div class="text-section">
                  <p>
                    {content.p5[lang]}
                  </p>
                </div>
                <div class="image-single-container">
                  <img src={pictures.momWork.img} className="img-mid"/>
                  <p>{pictures.momWork.caption[lang]}</p>
                </div>

                <div class="text-section">
                  <p>
                    {content.p6[lang]}
                  </p>
                </div>
                <div class="image-single-container">
                  <img src={pictures.momCool.img} className="img-mid"/>
                  <p>{pictures.momCool.caption[lang]}</p>
                </div>

                <div class="text-section">
                  <p>
                    {content.p7[lang]}
                  </p>
                </div>
                <div class="image-single-container">
                  <img src={pictures.tiananmenSquare.img} className="img-mid"/>
                  <p>{pictures.tiananmenSquare.caption[lang]}</p>
                </div>

                <div class="text-section">
                  <p>
                    {content.p8[lang]}
                  </p>
                </div>
                <div class="image-single-container">
                  <img src={pictures.momSunset.img} className="img-mid"/>
                  <p>{pictures.momSunset.caption[lang]}</p>
                </div>
                <div class="image-single-container">
                  <img src={pictures.momSitting.img} className="img-mid"/>
                  <p>{pictures.momSitting.caption[lang]}</p>
                </div>

                <div class="text-section">
                  <p>
                    {content.p9[lang]}
                  </p>
                </div>
                <div class="image-single-container">
                  <img src={pictures.vancouver.img} className="img-mid"/>
                  <p>{pictures.vancouver.caption[lang]}</p>
                </div>
                <div class="image-double-container">
                  <div class="image-double-bottom">
                    <img src={pictures.momDadEating.img}/>
                    <p>{pictures.momDadEating.caption[lang]}</p>
                  </div>
                  <div class="image-double-top">
                    <p>{pictures.momDadHongKong.caption[lang]}</p>
                    <img src={pictures.momDadHongKong.img}/>
                  </div>
                </div>
                <div class="image-single-container">
                  <img src={pictures.familyToystore.img} className="img-large"/>
                  <p>{pictures.familyToystore.caption[lang]}</p>
                </div>

                <div class="text-section">
                  <p>
                    {content.conclusion[lang]}
                  </p>
                </div>

              </div>
            </Fade>
        </Container>
        <Closing lang={lang}/>
      </section>
    </div>
  );
};

export default Mom;
