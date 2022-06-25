import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingBar from 'react-top-loading-bar'

export default class News extends Component {

    
    articles = [
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Ryan Gaydos",
            "title": "Jack Nicklaus reacts to Tiger Woods' Masters plan: 'If his body holds up, could he do it again?' - Fox News",
            "description": "Tiger Woods hasn’t competed in a high-level golf event since the 2020 Masters.",
            "url": "https://www.foxnews.com/sports/jack-nicklaus-reacts-tiger-woods-masters",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2022/04/Jack-Nicklaus-Tiger-Woods.jpg",
            "publishedAt": "2022-04-06T12:00:10Z",
            "content": "Tiger Woods intends to play at the Masters this week, more than a year after suffering devastating leg injuries in a car crash in Los Angeles.\r\nWoods made his intentions known Tuesday during a press … [+2360 chars]"
        },
        {
            "source": {
                "id": "independent",
                "name": "Independent"
            },
            "author": "Oliver O'Connell",
            "title": "Biden news – live: President jokes about ‘good old days’ with Obama as he pauses student loan debt sixth time - The Independent",
            "description": "Follow the latest live updates here",
            "url": "https://www.independent.co.uk/news/world/americas/us-politics/biden-news-today-student-loans-obama-scotus-b2051808.html",
            "urlToImage": "https://static.independent.co.uk/2022/04/05/19/SEI97285802.jpg?quality=75&width=1200&auto=webp",
            "publishedAt": "2022-04-06T11:50:20Z",
            "content": "Barack Obama visited the White House on Tuesday for his first public event at the executive mansion since he left office. He participated in a celebration of the Affordable Care Act, aka Obamacare, a… [+7545 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Analysis by Simone McCarthy and Yong Xiong, CNN",
            "title": "As the world reacts in horror to Bucha, China's state media strikes a different tone - CNN",
            "description": "Shocking images showing the bodies of civilians scattered across the streets of Bucha, a suburb of the Ukrainian capital of Kyiv, have sparked global horror in recent days and raised the urgency of ongoing investigations into alleged Russian war crimes. But a…",
            "url": "https://www.cnn.com/2022/04/06/china/china-reacts-bucha-ukraine-atrocities-intl-hnk-mic/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220406015616-zhang-jun-file-03112022-super-tease.jpg",
            "publishedAt": "2022-04-06T11:44:00Z",
            "content": "A version of this story appeared in CNN's Meanwhile in China newsletter, a three-times-a-week update exploring what you need to know about the country's rise and how it impacts the world. Sign up her… [+4948 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NBCSports.com"
            },
            "author": "Michael David Smith",
            "title": "Bills extend Stefon Diggs’ contract - NBC Sports",
            "description": "Bills wide receiver Stefon Diggs had two years remaining on the five-year, $72 million contract. But when the wide receiver market exploded this offseason, it became clear that Diggs was going to want a raise sooner rather than later.The Bills have given him …",
            "url": "https://profootballtalk.nbcsports.com/2022/04/06/bills-extend-stefon-diggs-contract/",
            "urlToImage": "https://profootballtalk.nbcsports.com/wp-content/uploads/sites/25/2022/04/GettyImages-1365000231-e1649244489493.jpg",
            "publishedAt": "2022-04-06T11:28:00Z",
            "content": "Bills wide receiver Stefon Diggs had two years remaining on the five-year, $72 million contract. But when the wide receiver market exploded this offseason, it became clear that Diggs was going to wan… [+960 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Pope kisses Ukrainian flag, condemns 'the massacre of Bucha' - Reuters.com",
            "description": "Pope Francis on Wednesday condemned \"the massacre of Bucha\" and kissed a Ukrainian flag sent from the town where tied bodies shot at close range littered the streets after Russian troops withdrew and bodies poked out of a mass grave at a church.",
            "url": "https://www.reuters.com/world/europe/pope-holding-ukrainian-flag-condemns-atrocities-such-massacre-bucha-2022-04-06/",
            "urlToImage": "https://www.reuters.com/resizer/FZdgH5t9pKBr2RG6L_JdUCrgPGg=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/SU7LITQKGZLI3CNHIUHQQ7R4EE.jpg",
            "publishedAt": "2022-04-06T11:07:00Z",
            "content": "VATICAN CITY, April 6 (Reuters) - Pope Francis on Wednesday condemned \"the massacre of Bucha\" and kissed a Ukrainian flag sent from the town where tied bodies shot at close range littered the streets… [+2515 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Diana Olick",
            "title": "Surging interest rates push mortgage demand down more than 40% from a year ago - CNBC",
            "description": "Fast-rising mortgage rates are cutting demand for home loans drastically.",
            "url": "https://www.cnbc.com/2022/04/06/surging-interest-rates-push-mortgage-demand-down-more-than-40percent-from-a-year-ago.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/106816771-1609190676733-gettyimages-1229723653-AFP_8VJ2Q2.jpeg?v=1613056691&w=1920&h=1080",
            "publishedAt": "2022-04-06T11:00:01Z",
            "content": "Rising interest rates are crushing the mortgage market, as precious few homeowners can now benefit from a refinance and more potential homebuyers become priced out.\r\nTotal mortgage application volume… [+2050 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MarketWatch"
            },
            "author": "Steve Goldstein",
            "title": "Here's the first Wall Street recession call of the new inflation era - MarketWatch",
            "description": "Critical information for the U.S. trading day",
            "url": "https://www.marketwatch.com/story/heres-the-first-wall-street-recession-call-of-the-new-inflation-era-11649242514",
            "urlToImage": "https://images.mktw.net/im-519287/social",
            "publishedAt": "2022-04-06T10:55:00Z",
            "content": "One of the big questions over the past week or so is whether to listen to the bond markets apparent warning that the U.S. economy may slide into recession after the Federal Reserve goes into a tighte… [+146 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Times"
            },
            "author": "Alex Marshall",
            "title": "Ed Sheeran Wins ‘Shape of You’ Plagiarism Case - The New York Times",
            "description": "The singer “neither deliberately, nor subconsciously” stole from another songwriter when writing his 2017 hit, a British judge ruled.",
            "url": "https://www.nytimes.com/2022/04/06/arts/music/ed-sheeran-plagiarism-shape-of-you-ruling.html",
            "urlToImage": "https://static01.nyt.com/images/2022/04/06/arts/06sheeran01/06sheeran01-facebookJumbo.jpg",
            "publishedAt": "2022-04-06T10:38:42Z",
            "content": "But Mr. Chokri, giving evidence, claimed that he knew Mr. Sheeran personally and that he had once met him at a branch of Nandos, a chicken restaurant. Mr. Sheeran must have heard the song through the… [+722 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Times"
            },
            "author": "Jesus Jiménez",
            "title": "Ukraine-Russia War: Latest News and Live Updates - The New York Times",
            "description": "The measures will require unanimous approval and are expected to go to a vote on Wednesday. The escalation in economic pressure came after President Volodymyr Zelensky delivered a fiery speech to the U.N. Security Council.",
            "url": "https://www.nytimes.com/live/2022/04/06/world/ukraine-russia-war-news",
            "urlToImage": "https://static01.nyt.com/images/2022/04/06/world/06ukraine-blog-promo-615am-est/merlin_205040922_351d62e0-4c27-4dfe-9f1f-9e260cbbd982-facebookJumbo.jpg",
            "publishedAt": "2022-04-06T10:25:05Z",
            "content": "LUBMIN, Germany Past a nudist beach and a sleepy marina, a gigantic mesh of metallic pipes rises from the pine forest behind the tiny village of Lubmin on Germanys Baltic coast.If few people have hea… [+10844 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Jennifer Rankin",
            "title": "EU and US sanctions against Russia could target Putin’s daughters - The Guardian",
            "description": "EU considering bans on coal, banks and shipping as Poland and Baltic states push for stronger measures",
            "url": "https://amp.theguardian.com/world/2022/apr/06/eu-sanction-russia-reports-putin-daughters-ukraine",
            "urlToImage": "https://i.guim.co.uk/img/media/79312f891b05fffee3ea378129f1c41f13baffe0/310_235_2639_1584/master/2639.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=8ff477d86e9c45f8b0f55ba792884cc7",
            "publishedAt": "2022-04-06T10:22:00Z",
            "content": "The EU and the US are expected to announce further measures against Russia, with reports that sanctions targeting the daughters of President Vladimir Putin were under consideration.\r\nA day after Ukra… [+5964 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Ben Beaumont-Thomas",
            "title": "Bobby Rydell, US pop idol of the early 1960s, dies aged 79 - The Guardian",
            "description": "Singer, drummer and actor had five US Top 10 hits, and inspired the Beatles to write She Loves You",
            "url": "https://amp.theguardian.com/music/2022/apr/06/bobby-rydell-us-pop-idol-of-the-early-1960s-dies-aged-79",
            "urlToImage": null,
            "publishedAt": "2022-04-06T08:56:00Z",
            "content": "Pop and rockSinger, drummer and actor had five US Top 10 hits, and inspired the Beatles to write She Loves You\r\nBobby Rydell, who enjoyed numerous US hits during the teen pop craze of the early 1960s… [+2608 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Jennifer Deaton and Lauren Said-Moorhouse, CNN",
            "title": "Ukraine's Zelensky questions UN Security Council's mandate in speech on alleged Russian atrocities - CNN",
            "description": "Ukrainian President Volodymyr Zelensky accused Russian troops of indiscriminately killing civilians \"for their pleasure\" in an emotionally-charged address to the United Nations Security Council on Tuesday, a day after he visited the Kyiv suburb of Bucha, wher…",
            "url": "https://www.cnn.com/2022/04/05/world/zelensky-ukraine-united-nations-speech-intl/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220405105004-03-un-ukraine-zelensky-super-tease.jpg",
            "publishedAt": "2022-04-06T08:31:00Z",
            "content": "(CNN)Ukrainian President Volodymyr Zelensky accused Russian troops of indiscriminately killing civilians \"just for their pleasure\" in an emotionally-charged address to the United Nations Security Cou… [+5905 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Post"
            },
            "author": "Kenneth Garger",
            "title": "Portland State University student Amara Marluke fatally shot near campus, suspect charged - New York Post ",
            "description": "Amara Marluke was fatally shot in what investigators believe was a domestic violence incident at about 1 a.m. near Southwest College Street and Sixth Avenue.",
            "url": "https://nypost.com/2022/04/06/portland-state-university-student-amara-marluke-fatally-shot-near-campus-suspect-charged/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2022/04/portland-state-university.png?w=1024",
            "publishedAt": "2022-04-06T08:06:00Z",
            "content": "A 19-year-old Portland State University student was gunned down near the campus early Monday and a former football player at the school has been charged in her murder, reports said.\r\nAmara Marluke, a… [+1780 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "WYFF4 Greenville"
            },
            "author": null,
            "title": "2 injured in shooting at Upstate business, suspected shooter dead, sheriff says - WYFF4 Greenville",
            "description": "Shooting happened Tuesday night",
            "url": "https://www.wyff4.com/article/one-dead-several-injured-in-shooting-coroner-says/39644527",
            "urlToImage": "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/shooting-at-frankishe-png-1649231012.png?crop=0.880xw:1.00xh;0,0&resize=1200:*",
            "publishedAt": "2022-04-06T07:44:00Z",
            "content": "ANDERSON COUNTY, S.C. —The Anderson County Sheriff's Office said someone fired shots at a business Tuesday night.\r\nAccording to Sheriff Chad McBride, the shooting happened around 10:30 p.m. at Franki… [+645 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Elliot Smith",
            "title": "European stocks fall amid hawkish Fed comments, new Russia sanctions; Stoxx 600 down 1.6% - CNBC",
            "description": "European markets fell on Wednesday against a backdrop of hawkish comments from U.S. Federal Reserve officials and further sanctions against Russia.",
            "url": "https://www.cnbc.com/2022/04/06/europe-markets-hawkish-fed-comments-new-russia-sanctions.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/106857847-1616498236767-gettyimages-1230341907-AFP_8XV99P.jpeg?v=1616498387&w=1920&h=1080",
            "publishedAt": "2022-04-06T06:12:40Z",
            "content": "LONDON European markets declined on Wednesday against a backdrop of hawkish comments from U.S. Federal Reserve officials and further sanctions against Russia.\r\nThe pan-European Stoxx 600 fell 1.6% by… [+2406 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Oklahoma House passes near-total abortion ban with threat of prison for providers - Reuters.com",
            "description": "Oklahoma lawmakers on Tuesday passed a bill that would make it illegal to perform an abortion in the state except in medical emergencies, penalizing those who do with up to $100,000 in fines and 10 years in prison.",
            "url": "https://www.reuters.com/world/us/oklahoma-house-passes-near-total-abortion-ban-with-threat-prison-providers-2022-04-05/",
            "urlToImage": "https://www.reuters.com/resizer/hW2Ulz2yVs0MfYasTz9VQ6tl7O0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/XX4MJP2N6VMPLJNLXA7IYQTX4U.jpg",
            "publishedAt": "2022-04-06T05:59:00Z",
            "content": "April 5 (Reuters) - Oklahoma lawmakers on Tuesday passed a bill that would make it illegal to perform an abortion in the state except in medical emergencies, penalizing those who do with up to $100,0… [+2695 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ESPN"
            },
            "author": "Dave McMenamin",
            "title": "Los Angeles Lakers eliminated from playoff contention with loss to Phoenix Suns, win by San Antonio Spurs - ESPN",
            "description": "A season that started with championship promise for the Lakers ended with them failing to qualify for the play-in tournament. A loss to the Suns on Tuesday coupled with a Spurs win officially eliminated Los Angeles from playoff contention.",
            "url": "https://www.espn.com/nba/story/_/id/33680640/los-angeles-lakers-eliminated-playoff-contention-loss-phoenix-suns-win-san-antonio-spurs",
            "urlToImage": "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0406%2Fr995924_1296x729_16%2D9.jpg",
            "publishedAt": "2022-04-06T05:01:20Z",
            "content": "PHOENIX -- A season that started with championship promise for the Los Angeles Lakers ended with the pain of failing to even qualify for the play-in tournament.\r\nTuesday's 121-110 loss to the Phoenix… [+3802 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "One in 13 people test positive, Britain reports surge in covid-19 cases | World English News | WION - WION",
            "description": null,
            "url": "https://www.youtube.com/supported_browsers?next_url=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DUKspzWSIfN8",
            "urlToImage": null,
            "publishedAt": "2022-04-06T05:00:08Z",
            "content": "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "LIVE: Australia PM Morrison holds news conference on AUKUS - Reuters",
            "description": "Australian Prime Minister Scott Morrison holds a news conference after Britain, the United States and Australia agreed to cooperate on hypersonic weapons. #R...",
            "url": "https://www.youtube.com/watch?v=1uyVu8SkxBk",
            "urlToImage": "https://i.ytimg.com/vi/1uyVu8SkxBk/maxresdefault.jpg",
            "publishedAt": "2022-04-06T03:20:53Z",
            "content": null
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Amir Vera, Abby Bustin",
            "title": "Indiana State Police identify the 'I-65 killer' after a 30-year investigation - CNN",
            "description": "After more than 30 years, authorities have identified the man responsible for the murders of three women and the sexual assault of another along the Interstate 65 corridor in Kentucky and Indiana, according to an Indiana State Police news release distributed …",
            "url": "https://www.cnn.com/2022/04/05/us/indiana-i-65-killer-identified/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/220405180914-indiana-i-65-killer-identified-02.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2022-04-06T03:20:00Z",
            "content": "After more than 30 years, authorities have identified the man responsible for the murders of three women and the sexual assault of another along the Interstate 65 corridor in Kentucky and Indiana, ac… [+1691 chars]"
        }
    ]
    static defaultProps={
        country:"in",
        pageSize:6,
        category:'general',
    }

    static propTypes={
        country : PropTypes.string,
        pageSize :PropTypes.number,
        category: PropTypes.string,
    }
    async componentDidMount() {
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6e853deb71584eb8990d0f81ecf074a3&page=1&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json();
        this.props.setProgress(50);
        // console.log(parsedData);
        this.setState({
            articles: parsedData.articles,loading: false,
            page: 1,
            totalResults:parsedData.totalResults
        })
        this.props.setProgress(100);
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: this.articles,
            loading: true,
            page: 1,
            totalResults:0
        }
        document.title=this.props.category.toUpperCase() + ' NEWS' +' | TOP HEADLINES';

    }

    async updateNews(){
        const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6e853deb71584eb8990d0f81ecf074a3&page=${this.state.page }&pageSize=${this.props.pageSize}`;

        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json();

        this.setState({
            // page: this.state.page - 1,
            articles: parsedData.articles,
            totalResults:parsedData.totalResults,
            loading:false,
        })
    }

    handlePrev = async (event) => {

        this.setState({
            page: this.state.page - 1,
        })
        this.updateNews();
    }
    handleNext = async (event) => {

            this.setState({
                page: this.state.page + 1,
                
            })
            this.updateNews();
    }

    fetchMoreData = async () => {
        
        this.setState({page : this.state.page+1});
        
        const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6e853deb71584eb8990d0f81ecf074a3&page=${this.state.page }&pageSize=${this.props.pageSize}`;

        let data = await fetch(url);
        let parsedData = await data.json();

        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults:parsedData.totalResults,
            loading:false,
        })

      };

    render() {
        return (
            <div className='container my-3'>
                <h1 className='text-center my-2'>NewsMonkey - Daily dose of {this.state.category} news</h1>
                {this.state.loading && <Spinner/>}
                <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.articles.length!==this.state.totalResults}
          loader={<Spinner/>}
        >   
            <div className="container">
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title.slice(0, 35)} description={element.description ? element.description.slice(0, 88) : ""} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                        </div>
                    })}
                </div>
                </div>
                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} className="btn btn-outline-dark" onClick={this.handlePrev}>&larr; Previous</button>
                    <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-outline-dark" onClick={this.handleNext}>Next &rarr;</button>
                </div> */}
            </div>
            
        )
    }
}
