import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: {
        id: "the-washington-post",
        name: "The Washington Post",
      },
      author: "Kelsey Ables, Jennifer Hassan",
      title:
        "What to know about Nipah virus outbreak in India’s Kerala state - The Washington Post",
      description:
        "The virus has killed two so far and infected at least five in the state of Kerala and is considered a priority disease by the WHO for its epidemic potential.",
      url: "https://www.washingtonpost.com/world/2023/09/15/nipah-virus-india-kerala-outbreak/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/YXXDKIBBI3T5SPHISXUNRFTEYQ.JPG&w=1440",
      publishedAt: "2023-09-15T08:42:59Z",
      content:
        "Comment on this story\r\nComment\r\nThe Indian state of Kerala is racing to contain a new outbreak of the deadly Nipah virus, which has killed two people so far and infected at least five, according to g… [+1073 chars]",
    },
    {
      source: {
        id: null,
        name: "Barron's",
      },
      author: "Craig Mellow",
      title: "Vietnam’s Economy Is on Fire. Why Its Stocks Aren’t. - Barron's",
      description:
        "Vietnam’s economy is growing, but there still aren’t many stocks for investors to choose from, even 35 years after Communist leaders launched market reform.",
      url: "https://www.barrons.com/articles/vietnams-economy-is-on-fire-why-its-stocks-arent-fe5efc8f",
      urlToImage: "https://images.barrons.com/im-64906355/social",
      publishedAt: "2023-09-15T07:56:00Z",
      content:
        "Vietnam is a rapidly emerging economic power. So, why isnt it an emerging market? The index gatekeepers at MSCI are sticking with the countrys frontier market status for the foreseeable future, preve… [+3631 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Chris Isidore, Vanessa Yurkevich",
      title:
        "UAW workers launch unprecedented strike against all Big Three automakers - CNN",
      description:
        "The United Auto Workers union is on strike against General Motors, Ford and Stellantis, the first time in its history that it has struck all three of America’s unionized automakers at the same time.",
      url: "https://www.cnn.com/2023/09/15/business/auto-workers-strike/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230914212929-03-uaw-strike-wayne.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-09-15T07:33:00Z",
      content:
        "The United Auto Workers union is on strike against General Motors, Ford and Stellantis, the first time in its history that it has struck all three of Americas unionized automakers at the same time.\r\n… [+7767 chars]",
    },
    {
      source: {
        id: null,
        name: "Pff.com",
      },
      author: "Nathan Jahnke",
      title:
        "NFL Week 2 fantasy football start ’em, sit ’em | Fantasy Football News, Rankings and Projections - Pro Football Focus",
      description:
        "Running back David Montgomery and tight end Hunter Henry are among the best starts for Week 2 of the 2023 NFL season.",
      url: "https://www.pff.com/news/fantasy-football-nfl-week-2-start-em-sit-em-2023",
      urlToImage:
        "https://media.pff.com/2023/09/Montgomery-David-Alamy-scaled.jpg?w=956&h=538",
      publishedAt: "2023-09-15T07:26:25Z",
      content:
        "Anthony Richardson and Tua Tagovailoa are must-starts: Both quarterbacks have fine matchups this week but are at the point where they should be starters regardless of the matchup.\r\nJames Cooks breako… [+2736 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: "Dawn Chmielewski, Kanjyik Ghosh, Dimpal Gulwani",
      title:
        "Mogul Byron Allen makes $10 bln bid for Disney's ABC, other networks - Reuters",
      description:
        'Media entrepreneur Byron Allen has made a $10 billion bid to buy Walt Disney\'s <a href="https://www.reuters.com/markets/companies/DIS.N" target="_blank">(DIS.N)</a> ABC television network and assets including the FX and National Geographic cable channels, a s…',
      url: "https://www.reuters.com/business/media-telecom/disney-holds-talks-with-nexstar-abc-sale-bloomberg-news-2023-09-14/",
      urlToImage:
        "https://www.reuters.com/resizer/zysKTDfzmef9l28FnvwwbAPeT1E=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/2XMAL27ELRI6VLGJ55SLN4TZGE.jpg",
      publishedAt: "2023-09-15T07:07:30Z",
      content:
        "Sept 15 (Reuters) - Media entrepreneur Byron Allen has made a $10 billion bid to buy Walt Disney's (DIS.N) ABC television network and assets including the FX and National Geographic cable channels, a… [+1608 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "Jason Douglas",
      title:
        "China's Economy Shows Fresh Signs of Fragile Recovery - The Wall Street Journal",
      description:
        "Spending in stores climbs, but the property sector continues to threaten growth",
      url: "https://www.wsj.com/world/china/chinas-economy-shows-fresh-signs-of-fragile-recovery-f20b32f2",
      urlToImage: "https://images.wsj.net/im-852644/social",
      publishedAt: "2023-09-15T05:28:00Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Sports Illustrated",
      },
      author: "Karl Rasmussen",
      title:
        "LeSean McCoy Had Epic Message for D’Andre Swift After Huge Game on ‘TNF’ - Sports Illustrated",
      description:
        "The Eagles running back’s big night drew an awesome reaction from the former Philly tailback.",
      url: "https://www.si.com/extra-mustard/2023/09/15/lesean-mccoy-epic-message-eagles-dandre-swift",
      urlToImage:
        "https://www.si.com/.image/ar_1.91%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_1200/MjAwODA3NTE3Mjg1MDAwMzk2/dandreswift.jpg",
      publishedAt: "2023-09-15T04:33:26Z",
      content:
        "Eagles running back D’Andre Swift stole the show on Thursday night, dominating on the ground in Philadelphia’s home-opening win against the Vikings.\r\nSwift racked up 175 rushing yards in the 34–28 wi… [+1060 chars]",
    },
    {
      source: {
        id: null,
        name: "Boston 25 News",
      },
      author: "Frank O'Laughlin",
      title:
        "Tropical storm warnings issued for Mass. as Hurricane Lee heads for New England - Boston 25 News",
      description:
        "Hurricane Lee is heading for New England after a week of wild weather across the region that produced catastrophic flash flooding, sinkholes, soaking thunderstorms, and tornado warnings.",
      url: "https://www.boston25news.com/news/local/tropical-storm-warnings-issued-mass-hurricane-lee-heads-new-england/3ZDDLBFPSVC4HJD543BLRF73WY/",
      urlToImage:
        "https://cmg-cmg-tv-10020-prod.cdn.arcpublishing.com/resizer/c7x0r5XqxtU_iuyGbR5uKJ5gmc8=/1440x810/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/cmg/XCTHFZC3ENE6DDYFON4ZADVMUA.jpg",
      publishedAt: "2023-09-15T03:38:00Z",
      content:
        "BOSTON — Hurricane Lee is heading for New England after a week of wild weather across the region that produced catastrophic flash flooding, sinkholes, strong thunderstorms, and tornado warnings.\r\nLee… [+3452 chars]",
    },
    {
      source: {
        id: "fox-sports",
        name: "Fox Sports",
      },
      author: null,
      title:
        "Vikings vs. Eagles highlights: Eagles win 34-28 on Thursday Night Football - FOX Sports",
      description:
        "Jalen Hurts and the Eagles defeated the Vikings to kick off Week 2 of the NFL season. Here are the highlights!",
      url: "https://www.foxsports.com/stories/nfl/vikings-vs-eagles-live-updates-top-moments-from-thursday-night-football",
      urlToImage:
        "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2023/09/1408/814/09.14.23_NFL-Top-Plays_16x9.jpg?ve=1&tl=1",
      publishedAt: "2023-09-15T03:24:04Z",
      content:
        "Jalen Hurts and the Philadelphia Eagles (2-0) kicked off Week 2 of the 2023 NFL season, taking down the Minnesota Vikings (0-2) at Lincoln Financial Field. Running back D'Andre Swift led the way for … [+4501 chars]",
    },
    {
      source: {
        id: "al-jazeera-english",
        name: "Al Jazeera English",
      },
      author: "Al Jazeera",
      title:
        "Ukraine says Russian missile defence destroyed in Crimea, 2 warships hits - Al Jazeera English",
      description:
        "Russian S-400 ‘Triumf’ surface-to-air missile defence system was reportedly destroyed in ‘special operation’ in Crimea.",
      url: "https://www.aljazeera.com/news/2023/9/15/ukraine-says-russian-missile-defence-destroyed-in-crimea-2-warships-hits",
      urlToImage:
        "https://www.aljazeera.com/wp-content/uploads/2023/09/2020-08-11T151254Z_1536611547_RC2RBI98JWQJ_RTRMADP_3_RUSSIA-DEFENCE-1694745345.jpg?resize=1920%2C1440",
      publishedAt: "2023-09-15T03:06:34Z",
      content:
        "Ukraine said its forces attacked two Russian patrol ships operating in the Black Sea and destroyed a sophisticated Triumf surface-to-air missile defence system in Russian-occupied Crimea, with milita… [+4574 chars]",
    },
    {
      source: {
        id: null,
        name: "ksltv.com",
      },
      author: ", Andrew Adams",
      title:
        "Young Republicans, political observers weigh in on Romney decision to not run again - KSL.com",
      description:
        "As Sen. Mitt Romney announced Wednesday that he would not seek re-election, young Republicans labeled the move as wise while longtime political observers said both parties were now faced with tough questions about the future of their leadership.",
      url: "https://ksltv.com/586901/young-republicans-political-observers-weigh-in-on-romney-decision-to-not-run-again/",
      urlToImage:
        "https://ksltv.com/wp-content/uploads/2023/09/Screenshot-2023-09-13-at-11.59.58-AM.png",
      publishedAt: "2023-09-15T03:03:05Z",
      content:
        "SALT LAKE CITY As Sen. Mitt Romney announced Wednesday that he would not seek re-election, young Republicans labeled the move as wise while longtime political observers said both parties were now fac… [+2992 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Melanie Zanona, Annie Grayer, Manu Raju",
      title: "Kevin McCarthy stares down another right-wing revolt - CNN",
      description:
        "Facing renewed threats to his speakership, Kevin McCarthy is making a strategic bet: his critics don’t have the votes to oust him – and if they do, he’ll grind it out on the floor again as he did back in January.",
      url: "https://www.cnn.com/2023/09/14/politics/kevin-mccarthy-right-wing-revolt/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230914112850-01-kevin-mccarthy-091423.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-09-15T02:41:00Z",
      content:
        "Facing renewed threats to his speakership, Kevin McCarthy is making a strategic bet: his critics dont have the votes to oust him and if they do, hell grind it out on the floor again as he did back in… [+11271 chars]",
    },
    {
      source: {
        id: null,
        name: "[Removed]",
      },
      author: null,
      title: "[Removed]",
      description: "[Removed]",
      url: "https://removed.com",
      urlToImage: null,
      publishedAt: "1970-01-01T00:00:00Z",
      content: "[Removed]",
    },
    {
      source: {
        id: null,
        name: "WPVI-TV",
      },
      author: null,
      title:
        "Escaped Pa. prisoner manhunt: Captured killer Danelo Cavalcante sent to maximum-security prison where Bill Cosby did time - WPVI-TV",
      description:
        'Cavalcante, who is also facing homicide charges in his native Brazil, "is in a specialized observation unit for classification and security reasons."',
      url: "https://6abc.com/danelo-cavalcante-maximum-security-prison-pa-prisoner-manhunt-escaped-murderer/13784395/",
      urlToImage:
        "https://cdn.abcotvs.com/dip/images/13780103_091323-wpvi-main-cavalcante-10pm-video-vid.jpg?w=1600",
      publishedAt: "2023-09-15T01:49:13Z",
      content:
        "Captured killer Danelo Cavalcante woke up Thursday in a maximum-security Pennsylvania state prison that has never had a successful escape and once housed comedian Bill Cosby.\r\nThe 34-year-old former … [+5813 chars]",
    },
    {
      source: {
        id: "espn",
        name: "ESPN",
      },
      author: null,
      title:
        "Jets QB Aaron Rodgers says surgery for torn Achilles 'went great' - ESPN - ESPN",
      description:
        'New York Jets quarterback Aaron Rodgers said Thursday that surgery to repair a torn Achilles tendon in his left leg "went great."',
      url: "https://www.espn.com/nfl/story/_/id/38402084/jets-qb-aaron-rodgers-says-surgery-torn-achilles-went-great",
      urlToImage:
        "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0913%2Fr1224138_1296x729_16%2D9.jpg",
      publishedAt: "2023-09-15T01:32:00Z",
      content:
        'Sep 14, 2023, 09:32 PM ET\r\nNew York Jets quarterback Aaron Rodgers said Thursday that surgery to repair a torn Achilles tendon in his left leg "went great."\r\nThe 39-year-old Rodgers suffered the seas… [+1949 chars]',
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Marshall Cohen, Kara Scannell, Hannah Rabinowitz",
      title: "Hunter Biden indicted on gun charges - CNN",
      description:
        "President Joe Biden’s son, Hunter Biden, has been indicted by special counsel David Weiss in connection with a gun he purchased in 2018, the first time in US history the Justice Department has charged the child of a sitting president.",
      url: "https://www.cnn.com/2023/09/14/politics/hunter-biden/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230830120900-01-house-oversight-hunter-biden.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-09-15T01:24:00Z",
      content:
        "President Joe Bidens son, Hunter Biden, has been indicted by special counsel David Weiss in connection with a gun he purchased in 2018, the first time in US history the Justice Department has charged… [+6825 chars]",
    },
    {
      source: {
        id: "the-washington-post",
        name: "The Washington Post",
      },
      author: "Widlore Mérancourt, Samantha Schmidt, Amanda Coletta",
      title:
        "Dominican Republic closes border with Haiti, further stoking tensions - The Washington Post",
      description:
        "The neighbors share the Caribbean island of Hispaniola and a long history of strained relations.",
      url: "https://www.washingtonpost.com/world/2023/09/14/dominican-republic-closes-border-with-haiti-further-stoking-tensions/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/EWDOJAHCNFVPCXS7F7HJYZPPQU.JPG&w=1440",
      publishedAt: "2023-09-15T01:17:00Z",
      content:
        "Comment on this story\r\nComment\r\nPORT-AU-PRINCE, Haiti The Dominican Republic had already begun building a wall at its border with Haiti. Then it cracked down on immigration, deporting tens of thousan… [+7919 chars]",
    },
    {
      source: {
        id: "abc-news",
        name: "ABC News",
      },
      author: "Deena Zaru",
      title:
        "Tory Lanez denied bond as he appeals 10-year sentence in shooting of Megan Thee Stallion - ABC News",
      description:
        "Lanez was convicted in Dec. 2022 of shooting and injuring the hip-hop star.",
      url: "https://abcnews.go.com/US/tory-lanez-denied-bond-appeals-10-year-sentence/story?id=103185176",
      urlToImage:
        "https://i.abcnewsfe.com/a/83cad888-57b9-42f1-a7e3-eac831732b97/rapper-tory-lanez-ap-moe-013-230808_1691533579213_hpMain_16x9.jpg?w=992",
      publishedAt: "2023-09-15T01:16:28Z",
      content:
        "Rapper Tory Lanez was denied bond by a Los Angeles County Superior Court judge during a hearing on Thursday afternoon as his new legal team appeals his 10-year sentence in the shooting of hip-hop sta… [+3601 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title:
        "US Surgeons Transplant Pig Kidney In Brain-Dead Human In 61-Day Experiment - NDTV",
      description:
        "US surgeons who transplanted a genetically modified pig kidney into a brain-dead patient announced Thursday they had ended their experiment after a record-breaking 61 days.",
      url: "https://www.ndtv.com/world-news/us-surgeons-report-longest-successful-pig-to-human-kidney-transplant-4391339",
      urlToImage:
        "https://c.ndtvimg.com/2019-09/v1t8enpc_doctor-surgery-generic-_625x300_18_September_19.jpg",
      publishedAt: "2023-09-15T00:33:43Z",
      content:
        "The US surgeon team had conducted the experiment into a brain-dead patient. (Representational)\r\nWashington: US surgeons who transplanted a genetically modified pig kidney into a brain-dead patient an… [+2711 chars]",
    },
    {
      source: {
        id: null,
        name: "KGW.com",
      },
      author: "Ashley Grams",
      title:
        "OHSU scientists discover condition that contributes to Alzheimer's by triggering a cascade of degeneration among immune cells in the brain - KGW.com",
      description:
        "Studying the brains of patients who had died with Alzheimer's, the researchers discovered that cells responsible for removing debris in the brain had been dying off.",
      url: "https://www.kgw.com/article/news/health/healthier-together/ohsu-scientists-discover-new-cause-alzheimers/283-9473cf8d-5ae7-4f47-bca4-8e572e01727f",
      urlToImage:
        "https://media.kgw.com/assets/KGW/images/ded05c93-88d6-4b75-9d07-84b069d18f32/ded05c93-88d6-4b75-9d07-84b069d18f32_1140x641.jpg",
      publishedAt: "2023-09-15T00:17:00Z",
      content:
        "PORTLAND, Ore. Alzheimer's disease is a devastating yet common condition, made all the more painful by the fact that there's no cure and the disease is difficult to study. But after seven years of wo… [+3048 chars]",
    },
  ];

  constructor() {
    //console.log("this is news constructor");
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  componentDidMount() {
    //console.log("this is news componentDidMount");
  }

  render() {
    //console.log("this is news render");
    return (
      <>
        <div className="container my-3">
          <h2 style={{ color: this.props.theme === "light" ? "#000" : "#FFF" }}>
            Top Headlines
          </h2>
          <div className="row">
            {/* <div className="col-md-3">
              <NewsItem
                title={this.state.articles[10].title}
                description={this.state.articles[10].description}
                imageUrl={this.state.articles[10].urlToImage}
              />
            </div> */}
            {this.state.articles.map((news) => {
              return (
                news.title !== "[Removed]" && (
                  <div className="col-md-3" key={news.url}>
                    <NewsItem
                      title={`${news.title.slice(0, 40)} ...`}
                      description={`${news.description.slice(0, 80)} ...`}
                      imageUrl={news.urlToImage}
                      url={news.url}
                      theme={this.props.theme}
                    />
                  </div>
                )
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default News;
