
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#2563EB',
                secondary: '#059669',
                accent: '#D97706',
                dark: '#1E293B',
                light: '#F8FAFC'
            }
        }
    }
};

// 成员数据
const members = [
    {
        id: 1,
        name: "刘子琛",
        role: "负责人",
        bio: "刘子琛，一名对程序开发与算法研究抱有浓厚热情的探索者。在开发者社区中持续学习与实践，是我保持技术敏锐度和精进能力的核心方式。目前，我的技术积累聚焦于几个关键领域：人工智能（AI）的自然语言处理（NLP），对相关核心模型原理与应用场景有较为扎实的理解；数据结构与算法，这是解决复杂工程问题的基石，通过持续的刷题和项目实践锻炼逻辑思维与优化能力。作为本项目的第一负责人‌，我怀着极大的热忱与全体成员并肩作战。我坚信，通过我们扎实的技术功底、严谨的工作态度和紧密的协作，能够不断攻克难关，推动项目在技术创新与应用落地上取得突破。衷心期待并全力以赴，‌助力我们的项目行稳致远，越走越好‌！",
        photo: "./photos/liuzichen.jpg",
        
    },
    {
        id: 2,
        name: "李知蔓",
        role: "程序员",
        bio: "来自四川成都，人工智能专业大二学生，本项目主要程序员之一，主要负责项目网站代码的编写。平时精神状态良好，从不内耗自己只会外耗别人，时不时发发疯。是一个淡淡的人，如果你把我惹毛了我就毛绒绒地走开，让你一脚踢在棉花上。第五人格极端爱好者来的。",
        photo: "./photos/lizhiman.jpg",
    },
    {
        id: 3,
        name: "杨晨",
        role: "程序员",
        bio: "我叫杨晨，来自湖南邵阳，是本项目的一名程序员。说实话，开发网站对于一名0前端基础的人来说并不容易。我热衷于探索新事物，常对自己说“广泛涉猎，精研其一”。现在我还在广泛涉猎的阶段，我希望我能学习到许多实用技能与知识，比如现在正在学习的前端开发。以后确定自己喜欢的方向并为之努力。我的朋友叫我宅男，尽管我本人并不认同，但从我的行为来看，似乎有那么几分相似。喜欢白毛，喜欢看番，打点galgame，买了抱枕，买了fufu，买了痛包，尽管自己从来没有背出去过。目前正在努力戒除游戏，减少看b站的次数，将我的时间充分利用，看番，看电影，看点文章，学点新技术，学点新知识，涨点新见识。谢谢大家~",
        photo: "./photos/yangchen.jpg",
        
    },
    {
        id: 4,
        name: "熊欣微扬",
        role: "程序员",
        bio: "大家好，我是熊欣微扬，来自重庆。人工智能专业大二的学生。很高兴这次能和大家一起合作，参与到这个网站开发的项目。我主要负责了项目计划，日志撰写，美术等素材的收集整理和相关的页面设计工作。我的MBTI是enfj，性格比较开朗。平常喜欢打排球，游泳。希望大家多多关照，成为朋友。",
        photo: "./photos/xiongxinweiyang.jpg",
    },
    {
        id: 5,
        name: "王若麟",
        role: "数据查找",
        bio: "大家好，我是王若麟，主要负责本组的资料采集与整理，网页内容设计方面。就性格来说我可能算是ISFP，不够外向，但也常常有莫名的社死环节[笑]。我不太擅长进行领导工作，比较重视大家做事时的感受，因此在团队里，我倾向于倾听、理解和支持别人，希望通过沟通让大家都能舒服自在。不过有时我也有与他人不同的看法，常常会试图说服别人，如果无法解决分歧就尽量找个折中的办法。我认为团队合作中，团结是最重要的。我平时喜欢看一些影视作品、美术作品等，也关注平面设计、作品内容呈现相关，希望我们的网站能让大家有所收获，看得开心！",
        photo: "./photos/wangruolin.jpg",
       
    },
    {
        id: 6,
        name: "顾茜",
        role: "宣传设计",
        bio: "大家好，我叫顾茜，来自宁夏，主要负责宣传视频这块，MBTI为entj，性格上较为随性，但在负责的板块上追求完美🥰，经常会有人读错我的名字，已经习以为常了…个人爱好的话，比较喜欢打农药和吃鸡，喜欢看奔跑吧兄弟。说实话，刚接触当前负责的业务模块时，对毫无相关经验的我来说确实是不小的挑战， 我一直很喜欢“多看多学，慢慢来也没关系”这句话，现在正处在主动吸收新知识的阶段。无论是项目里需要用到的专业技能，还是日常感兴趣的内容，我都愿意花时间去了解，比如最近正在跟着教程学习剪辑，希望能一点点把知识变成自己的能力，未来找到最适合自己深耕的方向。身边朋友总说我是“慢节奏爱好者”，虽然我觉得自己只是喜欢把时间花在喜欢的事上，但细想确实如此——爱看小说，只是很少主动跟人分享这些小爱好。 谢谢大家~",
        photo: "./photos/guqian.jpg",
        
    }
];


const modal = document.getElementById('member-modal');
const closeModal = document.getElementById('close-modal');
const memberBtns = document.querySelectorAll('.member-btn');
const memberPhoto = document.getElementById('member-photo');
const memberName = document.getElementById('member-name');
const memberRole = document.getElementById('member-role');
const memberBio = document.getElementById('member-bio');
const memberSkills = document.getElementById('member-skills');
const memberContact = document.getElementById('member-contact');

// 打开弹窗
function openModal(memberId) {
    const member = members.find(m => m.id === memberId);
    if (!member) return;
    
    // 填充数据
    memberPhoto.src = member.photo;
    memberName.textContent = member.name;
    memberRole.textContent = member.role;
    memberBio.textContent = member.bio;
    
    
    // 显示弹窗
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// 关闭弹窗
function closeModalFunc() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}


memberBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const memberId = parseInt(btn.getAttribute('data-member'));
        openModal(memberId);
    });
});

closeModal.addEventListener('click', closeModalFunc);

// 点击外部关闭弹窗
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModalFunc();
    }
});

// ESC键关闭弹窗
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModalFunc();
    }
});
    