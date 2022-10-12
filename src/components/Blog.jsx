import React from "react";
import "./Blog.css";
import Blogcard from "./Blogcard";
import growth from "../images/blogs/growth.jpeg";
import future from "../images/blogs/future.jpeg";
import women from "../images/blogs/women.png";
import benefits from "../images/blogs/benefits.jpeg";
import logo from "../images/logoCroped.png";

const data = [
    {
        img: growth,
        heading:
            "India is the Second-Fastest-Growing freelance market in the world, Says report",
        para: "India is the Second-Fastest-Growing freelance market in the world with a massive increase with a number of freelancers this year.",
        show: "According to a report on 'Freelancing in 2020: An Abundance of Opportunities' by payoneer. Ranked as the Second-Fastest-Growing freelance market in the world India's freelance economy currently consists of an estimated 15 millon freelancers, the report said.The report further highlighted how the pandemic has changed the future of work with increased technology adoption, stating that a permanent change in the global workforce is inevitable. Going forward, while there will still be space for full-time employees, more and more companies will seek remote and freelance workers for a wider variety of tasks, the report said.",
    },
    {
        img: future,
        heading: "What is The Future Of Freelancing In India?",
        para: "Factors such as independence, freedom to choose the kind of work they want to do and better financial prospects are the main reasons. Another key driving force is technology.",
        show: "Most freelancers are remote workers. Technology has made this possible. Newer tech gadgets and digital advancements are enhancing the way freelancers work. Collaborative tools such as Slack, Dropbox, and Google Docs have made working with teams across the globe a piece of cake. According to the McKinsey study, the online marketplace could add $ 2.7 trillion to global GDP by 2025.",
    },
    {
        img: women,
        heading: "A study reveals one in five Indian freelancers is a woman",
        para: "One in every five Indian freelancers is a woman, according to global study by global digital payment services firm Payoneer.",
        show: "Most women in India freelance for online marketplaces, with a major chunk of clients based in the United States and average work times of 2-2.5 hours. How freelancing captured the market and interests of females? Home, children, and social responsibilities take plenty of time in a day. Working two tasks at a time gets tricky. This is where freelance career options help women. With the changing times, many women now prefer to leave their full-time jobs to pick freelancing as it is lucrative.Freelancing career options in India have gained the interest of females because of the benefits it brings along. It offers these opportunity to work provides independence and flexible working hours higher income options The societal structure in India is developed where women are primarily responsible for taking care of household chores and activities. It goes without bias even when they are in a full-time job. This is why freelancing captured the market gradually, especially by women.",
    },
    {
        img: benefits,
        heading: "Benefits of Working as a Freelancer",
        para: "If we visit the statistics, we can find that our country, India, is a storehouse to the second highest number of freelance professionals in the world.",
        show: "Standing only behind the USA. It’s fairly intuitive to understand these numbers. Indians are known worldwide for being extremely skilled and great working partners. English being a popular language in the country helps in breaking continental language barriers and helps freelancers find well paying remote projects across the world, with extremely lucrative pay scales. Even if one looks at jobs within the subcontinent itself, freelancing can come with handsome payouts amidst its other many advantages. In order to deep dive into the real benefits of working as a freelancer, Entrepreneur India spoke to two individuals well qualified to shed light and share experiences on the subject.",
    },
    {
        img: logo,
        heading: "रिब्लिस के साथ कैसे कमाई करें",
        para: "रिब्लिस एक संगठन है जो  कही भी, किसी भी समय काम करने और कमाने के अवसर प्रदान कर रहा है, एक भरोसेमंद और पारदर्शी कंपनी है।",
        show: "हजारों लोग रिब्लिस के साथ काम कर रहे हैं और अपनी आवश्यकता, कौशल और प्रयास के अनुसार कमाई कर रहे हैं। जितनी मेहनत उतनी कमाई! यह आसान है, Google Play Store से रिब्लिस ऐप डाउनलोड करके और अपने मोबाइल पर काम शुरु करने के लिए खुद को पंजीकृत करके रिब्लिस साथी बनें। ऐप डाउनलोड करे, रजिस्टर करे, और अपना काम चालू करे।  पारदर्शी होना रिब्लिस की एक महत्वपूर्ण नीति है, यह दर्शाता है कि आप अपने प्रत्येक कार्य से कितना कमा सकते हैं और आपके द्वारा किये गए सभी सफल कायों का भुगतान आपको समय पर मिलता है। आपका काम, आपकी कमाई, बिना किसी कन्फ्यूजन के, आपके खाते में। रिब्लिस मे विभिन्न प्रकार के कार्य होंगे जो आप रिब्लिस ऐप पर देख सकते हैं और समय-समय पर नए कार्य को देख सकते है। काम की जानकारी रिब्लिस ऐप पर देखे, और अपने पसंद का काम चुने. रिब्लिस केयर सभी सक्रिय रिब्लिस साथियों को बीमा प्रदान करता है, बीमा की राशी आपकी आय से काट ली जाएगी। आपकी सुरक्षा का भी ख्याल रिब्लिस करता है। तो तैयार हो जाये… कभी भी – कही भी काम करें और जितना चाहें उतना कमाएं। रिब्लिस के साथ, जितनी मेहनत उतनी ही कमाई।",
    },
];

function Blog() {
    return (
        <div className="blog">
            <h1>BLOGS</h1>
            <section>
                {data.map((item, index) => {
                    return <Blogcard key={index} item={item} />;
                })}
            </section>
        </div>
    );
}

export default Blog;
