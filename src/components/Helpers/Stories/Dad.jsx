import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Picture from '../Picture';
import Closing from './Closing';
import arrowDown from '../../../images/arrow-down.png'

const content = {
  intro: {
    en: "The year 1959...",
    zh: "1959年...",
    es: "El año 1959...",
    vi: "Năm 1959", 
  },
  p1: {
    en: "I was born in Chợ Lớn village near Saigon right as the Vietnam War was starting to escalate. Life was relatively normal much of my childhood, but everything changed in 1968— the worst year I could remember. The Viet Cong and North Vietnamese Army attacked Saigon on Tết- Vietnamese New Years. The streets of Saigon were littered with destruction and the bodies of my classmates. Counter attacks by the Americans indiscriminately bombed civilian villages.",
    zh: "我出生在西贡的Chợ Lớn村，当时正值越南战争开始升级。在我童年的大部分时间中，生活都是相对普通的，但一切都在1968年发生了变化。那是我记忆中最糟糕的一年，越共和北越军隊在越南新年Tết那天攻打西贡。西贡的街道到处都受到了破坏，而我同学也無辜的死去。美国人朝平民村庄反击，胡乱轰炸。",
    es: "",
    vi: "Tôi sinh ra ở làng Chợ Lớn cạnh Sài Gòn vừa lúc Chiến tranh Việt Nam bắt đầu leo thang. Thời thơ ấu của tôi, cuộc sống tương đối bình thường, nhưng mọi thứ thay đổi vào năm 1968 - năm tồi tệ nhất mà tôi có thể nhớ. Việt Cộng và Quân đội Bắc Việt tấn công Sài Gòn vào đúng dịp Tết, ngày mừng năm mới của người Việt. Đường phố Sài Gòn ngổn ngang với những đống đổ nát và thi thể bạn bè tôi. Người Mỹ phản công bằng cách ném bom bừa bãi vào các làng mạc dân sự.", 
  },
  p2: {
    en: "The whirring of helicopters was synonymous with evacuating my village home.  My mother, father, two brothers, and four sisters would find sanctuary at the bottom of a nearby water well. The thought of death crossed my mind each time. As the sounds of helicopters faded away, we would emerge only to see our house roof with fresh bullet holes. When staying at home became increasingly dangerous, my family and I would seek refuge at a nearby South Vietnamese army base and return to our home during the day to tend our vegetable farm.",
    zh: "直升机的呼啸声成了撤离村庄家园的信号。我的母亲、父亲、两个兄弟和四个姐妹会在附近的水井底找避难所，死亡就在身邊時刻為伍。當直升机的声音渐渐远去，在我们從避難處出来时，只见房顶上多添了新的弹孔。随着呆在家里变得越来越危险，我和家人就会到附近的南越军基地寻求庇护，白天则是回到家里照料我们的菜地。",
    es: "",
    vi: "Âm thanh vù vù của những chiếc trực thăng đồng nghĩa rằng chúng tôi phải di tản khỏi căn nhà ở quê. Mẹ, cha, hai anh trai và bốn chị em tôi thường tìm nơi trú ẩn dưới đáy giếng gần đó. Mỗi lần như vậy, suy nghĩ về cái chết đều hiện lên trong đầu tôi. Khi tiếng trực thăng xa dần, chúng tôi ngoi lên chỉ để nhìn thấy mái nhà của mình găm đầy những vết đạn còn mới. Khi mà việc ở lại nhà ngày càng trở nên nguy hiểm, tôi và gia đình xin tị nạn tại một căn cứ quân đội Nam Việt Nam gần đó và về nhà vào ban ngày để chăm sóc vườn rau của gia đình.", 
  },
  p3: {
    en: "South Vietnam eventually regained control of Saigon, but North Vietnam inevitably won the war on April 30th, 1975. What followed was what many saw coming: a communist regime that prevented any type of economic mobility and discriminated against the Hoa people. The Hoa people are a Vietnamese ethnic minority group composed of individuals of Chinese descent. The descrimination stemmed from conflict with China in the Sino-Vietnamese War. If I biked in the city, police officers would often stop me and ask for identification. As soon as they realized I was Chinese, they would confiscate my bike or threaten my life.",
    zh: "南越最终夺回了西贡的控制权，但北越不可避免地在1975年4月30日赢得了战争。随之而来的是许多人之前就料到的：一个阻止任何类型的经济流动且歧视清化人的共产主义政权。清化人是越南的少数民族，由华裔组成。歧视源于中越战争中与中国的矛盾。如果我在市区骑车，警察经常会拦住我，要求我出示证件。他们一旦发现我是中国人，就会没收我的自行车，或者威胁我的生命。",
    es: "",
    vi: "Việt Nam Cộng Hòa cuối cùng đã giành lại quyền kiểm soát Sài Gòn, nhưng Bắc Việt rốt cuộc đã chiến thắng và kết thúc cuộc chiến vào ngày 30 tháng 4 năm 1975. Những điều xảy ra tiếp theo là điều nhiều người đã tiên đoán: một chế độ cộng sản ngăn cấm mọi hình thức cải thiện địa vị kinh tế và phân biệt đối xử với người Hoa. Người Hoa là một nhóm dân tộc thiểu số Việt Nam bao gồm những người gốc Trung Quốc. Sự phân biệt đối xử nảy sinh từ xung đột với Trung Quốc trong Chiến tranh biên giới Việt-Trung. Nếu tôi đạp xe trong thành phố, công an thường chặn tôi lại và yêu cầu xuất trình giấy tờ. Ngay khi vừa nhận ra tôi là người Hoa, họ sẽ tịch thu xe đạp hoặc đe dọa đến tính mạng của tôi.", 
  },
  p4: {
    en: "One night I went to the city to eat pho. Next to me were two police officers. As I was plucking basil leaves off a stem for my soup, a familiar man without his left arm entered the restaurant. It was my neighbor who had recently been caught attempting to avoid military service. He’d been taken from his home by the police and purposely sent to a front line combat division. After losing his arm, he was eventually discharged. Angry about his disfigurement, he revealed a M69 hand grenade and tossed it in my direction near the police officers. I was facing the other way and couldn’t react when I heard the grenade explode. My face and head was covered in blood. I immediately ran to the nearest taxi and asked to go to Chợ Rẫy hospital. There a doctor said if we didn't pay for a blood donor, then I was going to die. Just as my hopes of survival dwindled, a classmate of my older brother’s was able to pay for my surgery. I am still good friends with him today.",
    zh: "有一天晚上，我去市里吃河粉。在我的旁边有两个警察。当我正从罗勒茎上摘下叶子放进汤里的时候，一个熟悉的没有左臂的男人走进了餐厅。那是我的邻居，他最近因企图逃避兵役而被抓；他被警察从家里带走，特意送到了前线作战师。在失去手臂后，他终于可以退伍了。他对自己的缺陷感到愤怒，拿出了一枚M69手榴弹，并把它扔向和我身在同方向的警察。我当时并没有面向他，当我听到手榴弹爆炸时，我来不及反应，因而受波及導至我的脸上和头上都是血。我立刻到Chợ Rẫy医院就診，但那里的医生確说，如果我们負擔手術費用，那么我就会死。就在我生还的希望越来越小的时候，我哥哥的一个同学为我支付了手术费。直到今日，我和他还是好朋友。",
    es: "",
    vi: "Một đêm nọ, tôi lên thành phố để ăn phở. Ngồi kế bên tôi là hai viên cảnh sát. Khi tôi đang ngắt rau húng quế để bỏ vào bát nước dùng, một người đàn ông tôi quen bị cụt tay trái bước vào nhà hàng. Đó là hàng xóm của tôi, người vừa mới đây đã bị bắt quả tang trốn nghĩa vụ quân sự. Anh ta đã bị cảnh sát bắt rồi đưa ra một đơn vị chiến đấu ở tiền tuyến. Sau khi mất cánh tay, cuối cùng anh cũng được xuất ngũ. Giận dữ vì mình bị tàn phế, anh ta lấy ra một quả lựu đạn M69 và ném nó về hướng tôi đang ngồi, cạnh hai viên cảnh sát. Tôi đang quay mặt về hướng khác và không kịp phản ứng khi nghe tiếng lựu đạn nổ. Mặt và đầu tôi phủ đầy máu. Tôi chạy ngay đến chiếc taxi gần nhất và yêu cầu chở đến bệnh viện Chợ Rẫy. Ở đó, bác sĩ nói rằng nếu chúng tôi không trả tiền cho người hiến máu thì tôi sẽ chết. Vừa lúc hi vọng sống của tôi ngày càng mong manh thì một người bạn cùng lớp với anh trai tôi đã trả tiền để tôi được phẫu thuật. Cho đến hôm nay tôi và anh ta vẫn là bạn tốt.", 
  },
  p5: {
    en: "When I returned to school after the war, I met a classmate who grew and sold coffee beans. I became interested in his business, and he taught me how to roast coffee beans. My family had a one acre plot of farmland growing watercress, bok choy, and other vegetables. The farm brought us very little income, and I wanted to start roasting coffee beans to supplement our needs. My older brother, two older sisters, and I pooled money to purchase a coffee roaster and started a coffee business. We quickly found success, making a lot of money— about $500 a day ($2,145 today).",
    zh: "战后返校时，我认识了一位种植和销售咖啡豆的同学。我对他的生意开始产生兴趣，他就教我如何烘焙咖啡豆。我家有一亩地的农田，种着水芹、青菜等蔬菜。农场给我们带来的收入微乎其微，我想开始烘焙咖啡豆来补贴我们的需求。我和哥哥、两个姐姐凑钱买了一台咖啡烘焙机，开始做咖啡生意。我们很快就成功了，赚了很多钱——每天大约有300元（相当于今天的1287元）。",
    es: "",
    vi: "Khi trở lại trường sau chiến tranh, tôi gặp một người bạn cùng lớp trồng và bán hạt cà phê. Tôi bắt đầu hứng thú với công việc kinh doanh của anh ta, và anh đã dạy tôi cách rang cà phê. Gia đình tôi có một mảnh đất rộng một mẫu để trồng cải xoong, cải ngọt và các loại rau khác. Khu vườn mang lại cho chúng tôi rất ít thu nhập, và tôi muốn bắt đầu rang cà phê để cải thiện cuộc sống cho gia đình. Anh trai, hai chị gái và tôi đã gom góp tiền để mua một máy rang cà phê và bắt đầu kinh doanh cà phê. Chúng tôi nhanh chóng thành công bước đầu và kiếm được rất nhiều tiền— khoảng 300 đô la mỗi ngày (tương đương 1.287 đô la ngày nay).", 
  },
  p6: {
    en: "We continued the business for about a year, but my family and I knew this was not sustainable. If caught, we would be sent to prison and re-education camps. My older sister's boyfriend's family had been building a boat to escape Vietnam. They were charging $2,500 per person ($10,720 today) for a spot on the 400 person wooden boat.",
    zh: "我们继续经营了大约一年，但我和我的家人都知道这不是长久之计。如果被抓，我们会被送进监狱和再教育营。我姐姐男友的家人一直在建造一艘船，想要逃离越南。他们对400人的木船收取每人2500元（相当于今天的10720元）的船位费。",
    es: "",
    vi: "Chúng tôi tiếp tục công việc kinh doanh trong khoảng một năm, nhưng tôi và gia đình biết công việc này không bền vững. Nếu bị bắt, chúng tôi sẽ bị đưa vào tù và trại cải tạo. Gia đình bạn trai của chị gái tôi đã đóng thuyền để trốn khỏi Việt Nam. Họ tính phí 2.500 đô la mỗi người (tương đương 10.720 đô la ngày nay) cho một chỗ trên chiếc thuyền gỗ 400 người.", 
  },
  p7: {
    en: "The end of the Vietnam War caused a mass exodus of people on water — these refugees were colloquially referred to as boat people. Between the years 1975 and 1995, over 800,000 refugees escaped Vietnam. Death estimates vary between 100,000 to 1,000,000 due to storms, diseases, starvation, and pirates. Boat captains would pay off the Vietnamese Navy patrol for safe passage to international waters. These boats weren't intended for deep, open waters, and success usually meant being saved by a passing freighter. If never rescued, refugees could be stranded at sea for weeks, having to endure the elements and pirates. It was a risky choice— flee communism for a better life or lose your life trying.",
    zh: "越战结束后，大规模的水上人口外流——这些难民被俗称为船民。1975年至1995年间，有超过80万难民逃离越南。由于风暴、疾病、饥饿和海盗等原因，死亡人数估计在10万到100万之间。船长们会花钱买通越南海军巡逻队，以获得前往国际水域的安全通道。这些船并不适合在深海、开阔的水域航行，而通常只有被路过的货船所救才可能成功抵达目的地。如果从未被救起，难民可能会在海上滞留数周，不得不忍受风雨和海盗的侵袭。这是一个冒险的选择——但为了逃离共产主义，获得更好得生活，这值得用生命去冒险。",
    es: "",
    vi: "Chiến tranh Việt Nam kết thúc đã tạo ra một làn sóng di cư ồ ạt bằng đường thủy— những người tị nạn này thường được gọi chung là thuyền nhân. Từ năm 1975 đến 1995, hơn 800.000 người tị nạn đã trốn khỏi Việt Nam. Ước tính số người chết dao động từ 100.000 đến 1.000.000 người do bão, bệnh tật, chết đói và cướp biển. Thuyền trưởng sẽ trả tiền cho lực lượng tuần tra Hải quân Việt Nam để đổi lấy đường đi an toàn đến hải phận quốc tế. Những chiếc thuyền này thường không được thiết kế dành cho những vùng nước biển sâu và rộng. Đối với chúng, thành công nghĩa là được cứu bởi một tàu chở hàng đi ngang qua. Nếu không được cứu, những người tị nạn có thể bị mắc kẹt trên biển trong nhiều tuần, phải chịu đựng mưa bão và cướp biển. Đó là một lựa chọn mạo hiểm - chạy trốn khỏi chủ nghĩa cộng sản để sống một cuộc đời tốt hơn hoặc cố gắng cho đến chết.", 
  },
  p8: {
    en: "Facing discrimination as Chinese-Vietnamese people and a communist system taking everything from us, the decision was easy for my family. In 1979, 14 of us: My four sisters, two brothers, four nephews, my two brother-in-laws, my sister-in-law, and me would buy a spot on the boat in hopes of escaping Vietnam. My parents would stay, waiting for us in case we would need to return. The 14 of us walked about an hour to get to our departure location: Rạch Giá, Kien Giang, Vietnam. The Navy patrol unit stationed there was informed of our arrangement and was to escort us to international waters. Unbeknownst to our boat captain, the Navy patrol unit had sold additional seats to others on our boat. 300 more people joined our 400 person boat for a total of 700 hopeful passengers. We paid the captain $2,500 per person and boarded the ship. Everybody was tightly squeezed next to each other with barely any room.  As we were approaching international waters, we gave the Navy patrol unit the rest of our Vietnamese currency as it was worthless elsewhere in the world. The patrol boat departed, and we continued our journey. Almost as soon as we started to move, the motor broke. We were stranded and surely going to die without even leaving Vietnam waters. I started to regret sending my siblings and me on the same boat. Pressing on my mind was the idea that my mother would soon hear the news that all her children and grandchildren died on the same boat. There was no doubt in my mind that my parents would’ve committed suicide. The navy patrol boat that gave us safe passage had already turned back and almost out of view; however, it suddenly turned around and headed our way. The patrol boat's captain noticed we barely moved and came back to tow us. We stayed near Rạch Giá until the motor was fixed.",
    zh: "作为华裔越南人，面对歧视，面对共产主义制度从我们身上夺走的一切，我的家人不难做出决定。1979年，我们14个人——我的四个姐姐，两个哥哥，四个侄子，两个姐夫，小姨，还有我——一起买了船票，希望能逃离越南。我的父母会留下来，等着我们，以防我们需要回去。我们14个人走了大约一个小时才到达出发地点：越南建江的Rạch Giá。驻扎在那里的海军巡逻队得知我们的安排后，要护送我们到国际水域。我们的船长不知道，海军巡逻队已将额外的座位卖给了我们船上的其他人。另外有300人上了我们这艘400人的船，带着希望的乘客总共达到了700名。我们付给船长，每人是2500元，然后就上了船。上船后，大家紧紧地挤在一起，几乎没有任何空间。当我们接近国际水域时，我们把剩下的越南货币都给了海军巡逻队，因为这些货币在世界其他地方没有任何价值。巡逻艇离开了，我们继续我们的行程。几乎就在我们开始出发的时候，马达就坏了。我们被搁浅了，甚至还没有离开越南水域，我们絕望的以為必死无疑。我开始后悔把我和兄弟姐妹送上同一条船。压在我心头的是，母亲很快就会得到她的孩子们和孙儿们都死在同一条船上的消息。在我的脑海里，毫无疑问，我的父母会自杀的。给我们提供安全通道的海军巡逻艇已经返回，几乎看不见了；但是，它突然掉头，向我们这边驶来。巡逻艇的船长注意到我们几乎没有移动，就回来把我们拖走了。我们停留在Rạch Giá附近，一直到马达修好。",
    es: "",
    vi: "Đối mặt với sự phân biệt đối xử với tư cách là người Việt gốc Hoa và chế độ cộng sản lấy đi mọi thứ của chúng tôi, gia đình tôi đã quyết định một cách dễ dàng. Năm 1979, 14 người chúng tôi: Bốn chị gái, hai anh trai, bốn cháu trai, hai anh rể, chị dâu tôi và tôi mua chỗ ngồi trên con thuyền đó với hy vọng trốn thoát khỏi Việt Nam. Cha mẹ tôi ở lại, đợi chúng tôi phòng trường hợp chúng tôi cần quay lại. 14 người chúng tôi đi bộ khoảng một giờ đến địa điểm khởi hành: Rạch Giá, Kiên Giang, Việt Nam. Đơn vị tuần tra của Hải quân đóng tại đó đã được thông báo về kế hoạch của chúng tôi và sẽ hộ tống chúng tôi ra hải phận quốc tế. Thuyền trưởng của chúng tôi không hề hay biết, đơn vị tuần tra của Hải quân đã bán thêm chỗ cho những người khác trên thuyền của chúng tôi. Thêm 300 người gia nhập con thuyền 400 người của chúng tôi thành tổng số 700 hành khách mang đầy hy vọng. Chúng tôi trả cho thuyền trưởng 2.500 đô la/người và lên tàu. Mọi người chen chúc nhau chật cứng không còn chỗ trống. Khi chúng tôi tiếp cận hải phận quốc tế, chúng tôi đã trao cho đơn vị tuần tra của Hải quân số tiền Việt Nam còn lại của mình vì ở những nơi khác trên thế giới, chúng vô giá trị. Tàu tuần tra rời đi, và chúng tôi tiếp tục cuộc hành trình. Gần như ngay khi chúng tôi bắt đầu di chuyển thì động cơ bị hỏng. Chúng tôi bị mắc kẹt và chắc chắn sẽ chết nếu không rời khỏi vùng biển Việt Nam. Tôi bắt đầu hối hận vì đã đưa các anh chị em và mình lên cùng một con thuyền. Trong đầu tôi khắc khoải ý nghĩ rằng mẹ tôi sẽ sớm nghe tin tất cả con cháu bà đều chết trên cùng một con thuyền. Trong tâm trí tôi lúc đó không nghi ngờ gì nữa rằng cha mẹ mình sẽ tự tử. Chiếc tàu tuần tra của hải quân hộ tống chúng tôi đã quay trở lại bờ và gần như khuất tầm nhìn; tuy nhiên, con tàu đột ngột quay đầu và đi về hướng chúng tôi. Thuyền trưởng tàu tuần tra đã thấy chúng tôi gần như không di chuyển và quay lại để kéo chúng tôi. Chúng tôi ở lại gần Rạch Giá cho đến khi sửa xong động cơ.", 
  },
  p9: {
    en: "Our second attempt wasn't met with mechanical failure but with pirates. We all had heard of the horrific stories and heinous acts by pirates: pillaging, abduction, rape. Soon after entering international waters, we were attacked by pirates— eight times. With each attack, we were stripped of more and more of our belongings and equipment. The eighth confrontation, however, was merciful. The pirate leader, who was Chinese, noticed most of us were Chinese-Vietnamese refugees. We begged him in Cantonese (a Chinese dialect) to spare our boat. The Chinese pirate felt pity and gave us water and food. We continued our journey, eating dry bread and drinking what little water we had. It was a miserable time and many of us got seasick and had high fever. Finally after four days, we could see land. In one of the most dramatic mood changes I have witnessed, the boat's demeanor of despair and misery turned into joy and optimism. Families were hugging each other and crying. It was one of the happiest moments of my life.",
    zh: "我们的第二次尝试并没有遇到机械故障，但却遇到了海盗。我们都听说过海盗的恐怖故事和令人发指的行为：抢劫、绑架、强奸。进入国际水域后不久，我们就遭到了海盗的袭击——八次。每一次袭击，我们都被剥夺了越来越多的财物和装备。然而，第八次的对抗是仁慈的。海盗头目是中国人，他注意到我们大多数人都是中越难民。我们用广东话（中国方言）求他放过我们的船。中国海盗觉得我们可怜，就给我们水喝，给我们食物吃。我们继续赶路，吃干面包，喝我们仅有的一点水。这是一段悲惨的时光，我们中的许多人晕船，还发高烧。四天后，我们终于可以看到大陆了。这是我见过的情绪变化最戏剧的时刻，船上的绝望和痛苦的举止一下子变成了欢乐和乐观。家人们互相拥抱，哭泣。这是我一生中最幸福的时刻之一。",
    es: "",
    vi: "Lần ra khơi thứ hai của chúng tôi không gặp trục trặc kỹ thuật mà lại gặp cướp biển. Tất cả chúng ta đều đã nghe kể về những câu chuyện khủng khiếp và những hành động tàn ác của bọn cướp biển: cướp bóc, bắt cóc, hãm hiếp. Ngay sau khi tiến vào hải phận quốc tế, chúng tôi đã bị cướp biển tấn công— tám lần. Sau mỗi đợt tấn công, chúng tôi bị tước đoạt ngày càng nhiều tài sản và thiết bị của mình. Tuy nhiên, lần đối đầu thứ tám có phần từ bi hơn. Tên cầm đầu toán cướp biển là người Hoa đã nhận ra hầu hết chúng tôi là người Việt gốc Hoa tị nạn. Chúng tôi cầu xin hắn bằng tiếng Quảng Đông (một phương ngữ tiếng Trung), tha cho thuyền chúng tôi. Tên cướp biển người Hoa cảm thấy thương hại và cho chúng tôi nước và đồ ăn. Chúng tôi tiếp tục cuộc hành trình của mình, ăn bánh mì khô và uống chút nước còn lại. Đó là khoảng thời gian khốn khổ, nhiều người trong chúng tôi bị say sóng và sốt cao. Cuối cùng, sau bốn ngày, chúng tôi đã nhìn thấy đất liền. Một trong những thay đổi tâm trạng xúc động nhất mà tôi từng chứng kiến, đó là khi trạng thái tuyệt vọng và đau khổ của con thuyền đã biến thành niềm vui và sự lạc quan. Những gia đình ôm lấy nhau và khóc. Đó là một trong những khoảnh khắc hạnh phúc nhất trong cuộc đời tôi.", 
  },
  p10: {
    en: "Upon arrival in Palau Bidong Island, Malaysia, we were greeted by the sight of other emigres at a UN-designated temporary refugee camp. Finding another country to call home required a sponsor from that country. The task seemed nearly impossible, my family and I were simple farmers who knew nobody outside of Vietnam. During our escape, one of my young nephews had developed a high fever that permanently damaged his brain. It came to our attention that Switzerland recently started a refugee program to help handicap individuals. Soon thereafter my oldest sister and her husband applied and moved with both their sons to Switzerland. My 2nd older sister's husband had family in Australia, so she headed there. The rest of my family had to wait 14 months before someone could sponsor us.",
    zh: "抵达马来西亚帕劳比东岛后，我们在联合国指定的临时难民营看到了其他移民。要找到另一个作为家的国家，需要有该国的担保人。这个任务几乎是不可能完成的。我和我的家人都是简单的农民，完全不认识在越南以外的国家的人。在我们逃亡的过程中，我的一个小侄子发了高烧，使他的大脑受到永久性损伤。我们注意到，瑞士最近启动了一项帮助残障人士的难民计划。此后不久，我的大姐和她的丈夫提出申请，并带着他们的两个儿子搬到了瑞士。我二姐的丈夫在澳大利亚有家人，所以她去了澳大利亚。我家剩下的人要等14个月才能有人为我们担保。",
    es: "",
    vi: "Khi đến đảo Palau Bidong, Malaysia, bóng dáng những người di cư khác tại một trại tị nạn tạm thời do LHQ chỉ định đã chào đón chúng tôi. Tìm một quốc gia để trở thành quê hương mới yêu cầu phải có một nhà tài trợ từ quốc gia đó. Nhiệm vụ này gần như bất khả thi, gia đình tôi và tôi chỉ là những người nông dân chất phác, không biết một ai ngoài đất nước Việt Nam. Trong thời gian chúng tôi trốn chạy, một trong những đứa cháu nhỏ của tôi đã bị sốt cao khiến não thằng bé bị tổn thương vĩnh viễn. Chúng tôi nhận thấy rằng gần đây Thụy Sĩ khởi động một chương trình tị nạn nhằm giúp đỡ những người tàn tật. Ngay sau đó, chị cả của tôi và chồng đã nộp đơn và cùng cả hai đứa con trai chuyển đến Thụy Sĩ. Chồng của chị gái thứ 2 của tôi có gia đình ở Úc, vậy nên chị đã sang đó. Những thành viên còn lại trong gia đình tôi phải đợi 14 tháng cho đến khi có người có thể tài trợ cho chúng tôi.", 
  },
  p11: {
    en: "After the long wait, we finally saw a path out of the camp. The US was willing to accept my entire family on the basis of my older brother’s military service with the South Vietnamese army. My older brother had served in the South Vietnamese army, so the U.S was willing to accept my entire family. Our sponsor was a Catholic social service center in Utica, New York. As I got on the plane departing Malaysia, I couldn't help but feel so lucky and blessed that I've been given a second chance at life. We arrived in America in 1980 without knowing any English and without a penny to our name. We enrolled in an English as a second language school and began our assimilation to American culture.",
    zh: "经过漫长的等待，我们终于看到了一条离开营地的路。美国愿意接受我全家，理由是我大哥在南越军中服役。我哥哥曾在南越军队服役，所以美国愿意接受我全家。我们的担保人是纽约尤蒂卡的一个天主教社会服务中心。当我坐上离开马来西亚的飞机时，我不禁感到非常幸运，因为我得到了重生的机会。1980年，我们在不懂英语、身无分文的情况下来到美国。我们进入了一所英语为第二语言的学校，并开始了解美国文化。",
    es: "",
    vi: "Sau thời gian dài chờ đợi, cuối cùng chúng tôi cũng nhìn thấy một con đường ra khỏi trại tị nạn. Hoa Kỳ sẵn sàng chấp nhận toàn bộ gia đình tôi nhờ vào việc anh trai tôi đi nghĩa vụ quân sự trong quân đội miền Nam Việt Nam. Anh trai tôi đã từng phục vụ trong quân đội miền Nam Việt Nam, vì vậy Hoa Kỳ sẵn sàng chấp nhận cả gia đình tôi. Nhà tài trợ của chúng tôi là một trung tâm dịch vụ xã hội Công giáo ở Utica, New York. Khi lên chuyến bay khởi hành từ Malaysia, tôi không khỏi cảm thấy mình thật may mắn và hạnh phúc khi được trao cơ hội thứ hai trong đời. Chúng tôi đến Mỹ vào năm 1980 mà không biết một chút tiếng Anh nào và không một xu dính túi. Chúng tôi đăng ký vào một trường dạy tiếng Anh làm ngôn ngữ thứ hai và bắt đầu quá trình hòa nhập với văn hóa Mỹ.", 
  },
  p12: {
    en: "After finishing English school, my brother and I moved to Philadelphia, Pennsylvania. Philly had a sizable Chinatown and presented a lot more opportunities for us. My first job was a dishwasher. I worked from 3:00pm to 2:00am at 'China Noon'. The manager's wife eventually approached me and offered to train me to become a waiter which earned slightly more money. Afterwards, I started working at another restaurant, ‘Joe’s Peking Duck House’. After working initially as a waiter, I was promoted and ended up becoming the front house manager. During my stint, I became very good friends with three chefs at the restaurant who were also Chinese-Vietnamese refugees. We shared a lot of the same mentality and decided to quit and start our own restaurant. It opened two blocks down, and was called 'Friendly Peking Duck Inn. Our restaurant was very successful. Charles Barkley, NBA Hall of Fame player, was one of my most frequent patrons! My stake in the restaurant was eventually sold to the other three co-founders as I had wanted to open up another small restaurant in Temple University called ‘Kevin Express’.",
    zh: "英语学校毕业后，我和哥哥搬到了宾夕法尼亚州的费城。费城有一个规模不小的唐人街，为我们提供了更多的机会。我的第一份工作是洗碗工。我在“中国正午”从下午3点工作到凌晨2点。经理的妻子最终找到我，提出要把我培训成服务员，收入略高一些。之后，我开始在另一家餐厅“乔氏北京烤鸭馆”工作。我从最初的服务员，经过提拔，最后成为了前厅经理。在工作期间，我和餐厅的三位厨师成为了很好的朋友，他们也是华裔越南难民。我们有很多相同的心态，于是决定辞职，自己开饭店。我们的饭店开在两条街外，名字叫“友好北京烤鸭客栈”。我们的饭店非常成功。NBA名人堂球员查尔斯·巴克利是我们的常客之一！我在餐厅的股份最终卖给了其他三位联合创始人，因为我想在天普大学开另一家名为“凯文快餐”的小餐馆。",
    es: "",
    vi: "Sau khi học xong trường Anh ngữ, tôi và anh trai chuyển đến Philadelphia, Pennsylvania. Philly có một khu phố Tàu khá lớn và mang đến cho chúng tôi nhiều cơ hội hơn. Công việc đầu tiên của tôi là làm người rửa chén. Tôi làm việc từ 3 giờ chiều đến 2 giờ sáng tại 'China Noon'. Vợ của người quản lý cuối cùng đã đến gặp tôi và đề nghị đào tạo tôi trở thành bồi bàn, vốn có thể kiếm được nhiều tiền hơn một chút. Sau đó, tôi bắt đầu làm việc tại một nhà hàng khác, \'Joe\'s Peking Duck House\'. Sau khi khởi đầu với công việc bồi bàn, tôi được thăng chức và cuối cùng trở thành quản lý nhà hàng. Trong thời gian làm việc, tôi đã trở thành bạn rất thân với ba người đầu bếp tại nhà hàng này, họ cũng là người tị nạn Việt Nam gốc Hoa. Chúng tôi có chung lý tưởng và quyết định nghỉ việc rồi bắt đầu mở nhà hàng của riêng mình. Nhà hàng được mở cách đó hai dãy nhà, được mang tên \'Friendly Peking Duck Inn\'. Nhà hàng của chúng tôi đã rất thành công. Charles Barkley, cầu thủ NBA có tên trong sảnh danh vọng Hall of Fame, là một trong những khách quen thường xuyên nhất của tôi! Cuối cùng tôi đã bán cổ phần của mình cho ba người đồng sáng lập kia vì tôi muốn mở một nhà hàng nhỏ khác ở Đại học Temple mang tên \'Kevin Express\'.", 
  },
  p13: {
    en: "September 11th is easily recognized as the attack on the World Trade Center in Manhattan. I remember the date for a different reason. On September 11th, 1991, I was on my way to pick up my younger brother at the airport. I had asked my brother if he could come back up to Philly to help with my new restaurant. As I approached the airport, I received a call from one of my younger sisters. \"The plane crashed\", she said as I could hear her crying. I turned the car around and headed for my mother's house to break the news to her. My grandma was completely heartbroken and cried for many months. This was probably my saddest moment in my life, knowing that if I just told him to not come up, he would still be alive. I sold my restaurant after realizing I didn’t want to do the restaurant business anymore.",
    zh: "一提到9月11日，很容易想到的是曼哈顿世贸中心的袭击。我记住这个日子的原因却不同。1991年9月11日，我正在去机场接弟弟的路上。之前我问弟弟是否可以回到费城来给我的新餐馆帮忙。当我到达机场的时候，我接到了其中一个妹妹的电话。我听到她边哭边说：“飞机坠毁了。” 我调转车头，去我妈家里，把这个消息告诉她。我妈的心彻底碎了。她哭了好几个月。这大概是我一生中最难过的时刻，我心想如果我不叫他来帮我，他就不会遇难。我意识到自己不想再做餐馆生意后，就把餐馆卖了。",
    es: "",
    vi: "Ngày 11 tháng 9 thường được nhớ đến là ngày xảy ra cuộc tấn công vào Trung tâm Thương mại Thế giới ở Manhattan. Tôi nhớ về ngày này vì một lý do khác. Vào ngày 11 tháng 9 năm 1991, tôi đang trên đường đến đón em trai mình tại sân bay. Tôi đã hỏi anh trai mình liệu anh có thể quay lại Philly để giúp tôi mở nhà hàng mới không. Khi tôi gần tới sân bay, tôi nhận được cuộc gọi từ một trong những người em gái của mình. \"Máy bay rơi rồi\", tôi nghe con bé vừa nói vừa khóc nức nở. Tôi quay xe về nhà mẹ để báo cho bà biết tin dữ. Mẹ tôi đã hoàn toàn sụp đổ và khóc thương em tôi nhiều tháng trời. Đây có lẽ là khoảnh khắc buồn nhất trong cuộc đời tôi, vì biết rằng chỉ cần tôi nói với em ấy rằng đừng đến, có lẽ nó sẽ vẫn còn sống. Tôi đã bán nhà hàng sau khi nhận ra rằng tôi không muốn kinh doanh nhà hàng nữa.", 
  },
  p14: {
    en: "In 1991, my brother and I came to Laredo, Texas but were immediately disappointed. I returned to Philly; because business was still hard in Philly, I decided to give Laredo another chance. In 1993, I returned to Laredo and started a toy store downtown called K.V. Toys. While running the toy store, I met the most motherly, responsible, and loving person— my wife.",
    zh: "1991年，我和哥哥来到德克萨斯州的拉雷多，但马上就失望了。我回到了费城，但因为在费城的生意还是很难做，我决定再给拉雷多一次机会。1993年，我回到拉雷多，在市中心开了一家名为“K.V.玩具”的玩具店。在经营玩具店的过程中，我遇到了最有母爱又肩负责任感与爱心的人——我的妻子。",
    es: "",
    vi: "Năm 1991, tôi và anh trai đến Laredo, Texas nhưng ngay lập tức thất vọng. Tôi trở lại Philly; bởi vì công việc kinh doanh vẫn ở Philly vẫn còn khó khăn nên tôi quyết định cho Laredo một cơ hội nữa. Năm 1993, tôi trở lại Laredo và bắt đầu một cửa hàng đồ chơi ở trung tâm thành phố có tên là K.V. Toys. Trong lúc điều hành cửa hàng đồ chơi, tôi đã gặp người phụ nữ ân cần, có trách nhiệm và giàu tình yêu thương nhất, chính là vợ tôi.", 
  },
  p15: {
    en: "Unfortunately shortly after, the peso became seriously devalued and business took a turn for the worse. As a consequence I decided to diversify my business and open the first Vietnamese restaurant in Laredo on San Bernardo Avenue. The restaurant did fine, but we still didn't make much money. On a trip to Houston, I had stopped at a gas station and noticed gambling machines. I knew the potential of casinos as I was familiar with Jersey City and was quite surprised that they were legal in Texas. I asked a cop friend of mine if he could check, and he came back telling me it was perfectly legal. I immediately started looking for machines, but I couldn't afford them. Each machine cost roughly $5,000. I eventually met a vendor in Dallas, and he agreed to lease me the machine. With that, I opened up the first casino room or 'maquinita' in Laredo on San Bernardo Avenue. I closed the toy store and restaurant to focus on the game room. In 2003, Texas outlawed casinos, and I closed down the establishment.",
    zh: "不幸的是，不久之后，比索严重贬值，生意变得更糟。因此，我决定拓宽我的生意，并在拉雷多的圣贝尔纳多大道上开了第一家越南餐馆。餐馆的生意很好，但我们仍然没有赚到多少钱。在休斯敦的一次旅行中，我曾在一个加油站驻足，并注意到了赌博机。我知道赌场的潜力，因为我对泽西城很熟悉，我也很惊讶，赌场在德克萨斯州竟然是合法的。我问我的一个警察朋友能不能查一下，他回来告诉我这是完全合法的。我立即开始寻找机器，但我买不起。每台机器的价格大概是5000美元。最后我在达拉斯遇到了一个供应商，他同意把机器租给我。就这样，我在拉雷多的圣贝尔纳多大道上开了第一家赌房或叫“maquinita”。我关闭了玩具店和餐馆，专心经营博彩室。2003年，德克萨斯州取缔了赌场，我就关闭了这家赌房。",
    es: "",
    vi: "Thật không may, ngay sau đó, đồng peso đã mất giá trầm trọng và hoạt động kinh doanh trở nên tồi tệ hơn. Do đó, tôi quyết định đa dạng hóa hoạt động kinh doanh của mình và mở nhà hàng Việt Nam đầu tiên ở Laredo trên Đại lộ San Bernardo. Nhà hàng này hoạt động ổn, nhưng chúng tôi vẫn không kiếm được nhiều tiền lắm. Trong một chuyến đi đến Houston, tôi đã dừng lại ở một trạm xăng và để ý đến những chiếc máy đánh bạc. Tôi biết tiềm năng của các sòng bạc vì tôi đã quen thuộc với Thành phố Jersey và khá ngạc nhiên rằng ở Texas, chúng hợp pháp. Tôi nhờ anh bạn mình làm cảnh sát xem anh ta có thể kiểm tra được không. Rồi anh ta quay trở lại nói với tôi rằng điều đó hoàn toàn hợp pháp. Tôi ngay lập tức bắt đầu tìm kiếm máy móc, nhưng tôi không đủ tiền mua. Mỗi chiếc máy có giá khoảng 5.000 đô la. Cuối cùng tôi đã gặp một nhà cung cấp ở Dallas và anh ta đồng ý cho tôi thuê máy. Cùng với chiếc máy đó, tôi đã mở phòng đánh bạc hay còn gọi là máy 'maquinita' đầu tiên ở Laredo trên Đại lộ San Bernardo. Tôi đóng cửa cửa hàng đồ chơi và nhà hàng để tập trung vào phòng chơi game. Năm 2003, Texas cấm các sòng bạc ngoài vòng pháp luật và tôi đã đóng cửa cơ sở này.", 
  },
  conclusion: {
    en: "I consider myself lucky in many regards. If not for my brother's classmate, I would have died from my grenade injuries. If not for the Navy patrol boat turning back to tow us back to safety, I would have been dead at sea. I have seen many horrible things in my life, but I have also seen the goodness in people's hearts. I try to be as friendly and empathetic as possible to people because others’ friendliness and empathy were what kept me alive. I want my children to be good people and to never limit themselves. Despite all the trials and tribulations, I would do it all again just to see my beautiful wife and three children.",
    zh: "我觉得自己在很多方面都很幸运。如果不是哥哥的同学，我早就被手榴弹炸伤而死了。在我的一生中，我见过许多可怕的事情，但我也看到了人们心中的善良。我尽量对人友好，富有同情心，因为是别人的友好和同情心让我得以生活。我希望我的孩子們都能成为好人，永远不要限制自己。尽管经历了那么多磨难，但只要能看到我美丽的妻子和三个孩子，所有的磨難就都有了價值。",
    es: "",
    vi: "Tôi tự xem mình là người may mắn về nhiều mặt. Nếu không có người bạn cùng lớp của anh trai tôi, tôi đã chết vì vết thương do lựu đạn. Nếu không có chiếc tàu tuần tra của Hải quân quay lại kéo chúng tôi về nơi an toàn thì tôi đã chết trên biển. Tôi đã thấy nhiều điều kinh khủng trong đời mình, nhưng tôi cũng đã nhìn thấy những điều tốt đẹp trong lòng người. Tôi cố gắng trở nên thân thiện và đồng cảm nhất có thể với mọi người bởi vì sự thân thiện và đồng cảm của người khác là điều đã giúp tôi tồn tại. Tôi muốn con mình trở thành người tốt và không bao giờ giới hạn bản thân. Bất chấp mọi thử thách và gian khổ, tôi sẽ vẫn sẵn sàng làm lại y như xưa chỉ để nhìn thấy người vợ xinh đẹp và ba đứa con của mình.", 
  },
  newspaperInstructions: {
    en: "Click to see article",
    zh: "点击查看文章",
    es: "Haga clic para ver el artículo",
    vi: "Bấm để xem bài viết", 
  },
};

const Dad = ({lang, pictures}) => {
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
      <section id="dad">
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

              <div class="image-double-container">
                <div class="image-double-bottom">
                  <div class="img-container">
                    <Picture picture={pictures.mapOfSaigon}/>
                  </div>
                  <p>{pictures.mapOfSaigon.caption[lang]}</p>
                </div>
                <div class="image-double-top">
                  <p>{pictures.grandmaGrandpa.caption[lang]}</p>
                  <div class="img-container">
                    <Picture picture={pictures.grandmaGrandpa}/>
                  </div>
                </div>
              </div>

              <div class="text-section">
                <p>
                  {content.p2[lang]}
                </p>
              </div>

              <div class="image-single-container">
                <div class="img-large-container">
                  <Picture picture={pictures.familyVietnam}/>
                </div>
                <p>{pictures.familyVietnam.caption[lang]}</p>
              </div>

              <div class="text-section">
                <p>
                  {content.p3[lang]}
                </p>
              </div>

              <div class="image-double-container">
                <div class="image-double-top">
                  <p>{pictures.fragments.caption[lang]}</p>
                  <div class="img-container">
                    <Picture picture={pictures.fragments}/>
                  </div>
                </div>
                <div class="image-double-bottom">
                  <div class="img-container">
                    <Picture picture={pictures.dadVietnam}/>
                  </div>
                  <p>{pictures.dadVietnam.caption[lang]}</p>
                </div>
              </div>

              <div class="text-section">
                <p>
                  {content.p4[lang]}
                </p>
              </div>

              <div class="image-single-container">
                <div class="img-mid-container">
                  <Picture picture={pictures.dadMalaysia}/>
                </div>
                <p>{pictures.dadMalaysia.caption[lang]}</p>
              </div>

              <div class="text-section">
                <p>
                  {content.p5[lang]}
                </p>
              </div>

              <div class="image-double-container">
                <div class="image-double-bottom">
                  <div class="img-container">
                    <Picture picture={pictures.boat}/>
                  </div>
                  <p>{pictures.boat.caption[lang]}</p>
                </div>
                <div class="image-double-top">
                  <p>{pictures.immigrationMap.caption[lang]}</p>
                  <div class="img-container">
                    <Picture picture={pictures.immigrationMap}/>
                  </div>
                </div>
              </div>

              <div class="text-section">
                <p>
                  {content.p6[lang]}
                </p>
              </div>
              <div class="image-single-container">
                <div class="img-mid-container">
                  <Picture picture={pictures.brotherBoat}/>
                </div>
                <p>{pictures.brotherBoat.caption[lang]}</p>
              </div>

              <div class="text-section">
                <p>
                  {content.p7[lang]}
                </p>
              </div>
              <div class="image-single-container">
                <div class="img-mid-container">
                  <Picture picture={pictures.journey}/>
                </div>
                <p>{pictures.journey.caption[lang]}</p>
              </div>

              <div class="text-section">
                <p>
                  {content.p8[lang]}
                </p>
              </div>
              <div class="image-single-container">
                <div class="img-large-container">
                  <Picture picture={pictures.familyBidong}/>
                </div>
                <p>{pictures.familyBidong.caption[lang]}</p>
              </div>

              <div class="text-section">
                <p>
                  {content.p9[lang]}
                </p>
              </div>
              <div class="image-double-container">
                <div class="image-double-bottom">
                  <p>{pictures.bidong.caption[lang]}</p>
                  <div class="img-container">
                    <Picture picture={pictures.bidong}/>
                  </div>
                </div>
                <div class="image-double-top">
                  <div class="img-container">
                    <Picture picture={pictures.nephew}/>
                  </div>
                  <p>{pictures.nephew.caption[lang]}</p>
                </div>
              </div>

              <div class="text-section">
                <p>
                  {content.p10[lang]}
                </p>
              </div>
              <div class="image-single-container">
                <div class="img-large-container">
                  <Picture picture={pictures.friendlyPekingDuck}/>
                </div>
                <p>{pictures.friendlyPekingDuck.caption[lang]}</p>
              </div>

              <div class="text-section">
                <p>
                  {content.p11[lang]}
                </p>
              </div>
              <div class="image-single-container">
                <div class="img-mid-container">
                  <Picture picture={pictures.friendlyPekingDuckLocation}/>
                </div>
                <p>{pictures.friendlyPekingDuckLocation.caption[lang]}</p>
              </div>

              <div class="text-section">
                <p>
                  {content.p12[lang]}
                </p>
              </div>
              <div class="image-double-container" style={{marginTop: 50}}>
                <div class="image-double-top">
                  <a href="https://drive.google.com/file/d/1jgbeLzGvm91fD3SrMfRjHlVGyTbyhQz4/view?usp=sharing" target="_blank">
                    <div class="img-container">
                      <Picture picture={pictures.friendlyPekingDuckNewspaper1}/>
                    </div>
                  </a>
                  <p>{pictures.friendlyPekingDuckNewspaper1.caption[lang]}</p>
                </div>
                <div class="image-double-top">
                  <div className="newspaper-instructions no-select">
                    <img src={arrowDown} className="arrow" />
                    <h5>{content.newspaperInstructions[lang]}</h5>
                  </div>
                  <a href="https://drive.google.com/file/d/1vTRoXBKQsD2OtIkL1i_MDcO2eFSD3pIQ/view?usp=sharing" target="_blank">
                    <div class="img-container">
                      <Picture picture={pictures.friendlyPekingDuckNewspaper2}/>
                    </div>
                  </a>
                  <p>{pictures.friendlyPekingDuckNewspaper2.caption[lang]}</p>
                </div>
              </div>

              <div class="text-section">
                <p>
                  {content.p13[lang]}
                </p>
              </div>
              <div class="image-double-container">
                <div class="image-double-bottom">
                  <p>{pictures.crashNewspaper.caption[lang]}</p>
                  <div class="img-container">
                    <Picture picture={pictures.crashNewspaper}/>
                  </div>
                </div>
                <div class="image-double-top">
                  <div class="img-container">
                    <Picture picture={pictures.crashPraying}/>
                  </div>
                  <p>{pictures.crashPraying.caption[lang]}</p>
                </div>
              </div>

              <div class="text-section">
                <p>
                  {content.p14[lang]}
                </p>
              </div>
              <div class="image-double-container">
                <div class="image-double-top">
                  <div class="img-container">
                    <Picture picture={pictures.restaurantMenu}/>
                  </div>
                  <p>{pictures.restaurantMenu.caption[lang]}</p>
                </div>
                <div class="image-double-bottom">
                  <p>{pictures.restaurantLaredo.caption[lang]}</p>
                  <div class="img-container">
                    <Picture picture={pictures.restaurantLaredo}/>
                  </div>
                </div>
              </div>

              <div class="text-section">
                <p>
                  {content.p15[lang]}
                </p>
              </div>
              <div class="image-single-container">
                <div class="img-large-container">
                  <Picture picture={pictures.dadDuck}/>
                </div>
                <p>{pictures.dadDuck.caption[lang]}</p>
              </div>
              <div class="image-single-container">
                <div class="img-large-container">
                  <Picture picture={pictures.dadToyStore}/>
                </div>
                <p>{pictures.dadToyStore.caption[lang]}</p>
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

export default Dad;
