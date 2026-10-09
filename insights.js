// ============================================================
// 旅游看板洞察投影 — 请勿手改
// 权威：data/canonical/travel-insights.json
// 重新生成：ir industry generate-dashboard
// ============================================================

const INSIGHTS = {
  "meta": {
    "basedOnTravelJsonUpdatedAt": "2026-10-03",
    "confirmedAt": {
      "weekly": "2026-10-09",
      "monthly": "2026-10-09",
      "quarterly": "2026-08-31"
    },
    "stale": {
      "weekly": false,
      "monthly": false,
      "quarterly": false
    }
  },
  "weekly": {
    "zh": [
      {
        "tag": "risk",
        "title": "酒店 RevPAR 同比下降 10.5%",
        "body": "9/27–10/3 酒店 RevPAR 同比 <span class=\"num-highlight\">-10.5%</span>，入住率 <span class=\"num-highlight\">-4.1%</span>、ADR <span class=\"num-highlight\">-6.7%</span>，量价同时走弱。下一周重点看房价降幅能否收窄。",
        "refs": [
          "weekly.hotelRevPAR@9/27-10/3",
          "weekly.hotelOccupancy@9/27-10/3",
          "weekly.hotelADR@9/27-10/3"
        ]
      }
    ],
    "en": [
      {
        "tag": "risk",
        "title": "Hotel RevPAR fell 10.5% year over year",
        "body": "During September 27–October 3, hotel RevPAR fell <span class=\"num-highlight\">10.5% YoY</span>, as occupancy declined <span class=\"num-highlight\">4.1%</span> and ADR fell <span class=\"num-highlight\">6.7%</span>. Both volume and price weakened; watch whether the decline in room rates narrows the following week.",
        "refs": [
          "weekly.hotelRevPAR@9/27-10/3",
          "weekly.hotelOccupancy@9/27-10/3",
          "weekly.hotelADR@9/27-10/3"
        ]
      }
    ]
  },
  "monthly": {
    "zh": [
      {
        "tag": "highlight",
        "title": "8月酒店 RevPAR 小幅转正",
        "body": "8月酒店 RevPAR 同比 <span class=\"num-highlight\">+0.3%</span>，较7月 -4.0% 回正；ADR +0.6%，入住率仍为 -0.4%。回正幅度较小，后续看房价能否保持正增长。",
        "refs": [
          "monthly.hotelRevPAR@8月",
          "monthly.hotelRevPAR@7月",
          "monthly.hotelADR@8月",
          "monthly.hotelOccupancy@8月"
        ]
      },
      {
        "tag": "highlight",
        "title": "8月国内航空客流维持正增长",
        "body": "8月国内客运量同比民航局口径 <span class=\"num-highlight\">+4.8%</span>、三大航 <span class=\"num-highlight\">+5.1%</span>，均延续7月的正增长。民航局口径较7月加快约0.7个百分点，三大航略降约0.2个百分点；后续看假期后客流能否保持。",
        "refs": [
          "monthly.domAviationCAAC@8月",
          "monthly.domAviationBig3@8月",
          "monthly.domAviationCAAC@7月",
          "monthly.domAviationBig3@7月"
        ]
      },
      {
        "tag": "risk",
        "title": "国际航班运力仍低于2019年",
        "body": "8月国际航班运力较2019年 <span class=\"num-highlight\">-11.5%</span>，较7月 -11.9% 的缺口小幅收窄；国际及港澳台客运量同比民航局 +2.1%、三大航 +5.4%。后续关注换季后的增班是否继续缩小运力缺口。",
        "refs": [
          "monthly.intlCapacity@8月",
          "monthly.intlCapacity@7月",
          "monthly.intlAviationCAAC@8月",
          "monthly.intlAviationBig3@8月"
        ]
      }
    ],
    "en": [
      {
        "tag": "highlight",
        "title": "Hotel RevPAR edged back into growth in August",
        "body": "Hotel RevPAR rose <span class=\"num-highlight\">0.3% YoY</span> in August, compared with a 4.0% decline in July. ADR increased 0.6%, while occupancy remained down 0.4%; the return to growth was slight, and the next test is whether room rates stay positive.",
        "refs": [
          "monthly.hotelRevPAR@8月",
          "monthly.hotelRevPAR@7月",
          "monthly.hotelADR@8月",
          "monthly.hotelOccupancy@8月"
        ]
      },
      {
        "tag": "highlight",
        "title": "Domestic air traffic maintained growth in August",
        "body": "Domestic passenger traffic rose <span class=\"num-highlight\">4.8% YoY</span> on the CAAC measure and <span class=\"num-highlight\">5.1%</span> for the three major airlines in August, extending July’s growth. The CAAC measure accelerated by about 0.7 percentage points, while the three-airline measure eased by about 0.2 points; watch whether traffic holds up after the holiday period.",
        "refs": [
          "monthly.domAviationCAAC@8月",
          "monthly.domAviationBig3@8月",
          "monthly.domAviationCAAC@7月",
          "monthly.domAviationBig3@7月"
        ]
      },
      {
        "tag": "risk",
        "title": "International flight capacity remained below 2019",
        "body": "International flight capacity in August was <span class=\"num-highlight\">11.5% below 2019</span>, a slightly narrower gap than July’s 11.9%. International and regional passenger traffic rose 2.1% YoY on the CAAC measure and 5.4% for the three major airlines; watch whether the next schedule change narrows the capacity gap further.",
        "refs": [
          "monthly.intlCapacity@8月",
          "monthly.intlCapacity@7月",
          "monthly.intlAviationCAAC@8月",
          "monthly.intlAviationBig3@8月"
        ]
      }
    ]
  },
  "quarterly": {
    "zh": [
      {
        "tag": "highlight",
        "title": "Q2 酒店 RevPAR 仍为正 +2.0%",
        "body": "Q2 酒店 RevPAR 同比 <span class=\"num-highlight\">+2.0%</span>，ADR <span class=\"num-highlight\">+2.9%</span>、入住率 <span class=\"num-highlight\">-0.8%</span>，较 Q1 的 +4.8% 放缓但未转负。增长完全由房价贡献，量已经在收缩。Q3 若 ADR 跟着松动，RevPAR 转负的风险不小。",
        "refs": [
          "quarterly.q2.hotelRevPAR",
          "quarterly.q2.hotelADR",
          "quarterly.q2.hotelOccupancy",
          "quarterly.q1.hotelRevPAR"
        ]
      },
      {
        "tag": "highlight",
        "title": "铁路两季稳增，Q2 +4.6%",
        "body": "Q2 铁路客运量同比 <span class=\"num-highlight\">+4.6%</span>，Q1 <span class=\"num-highlight\">+5.7%</span>，是上半年唯一两个季度都稳在 4% 以上的指标。航空在这两季大幅摆动，铁路撑住了国内出行的基本盘。Q3 能否延续要看暑运收官后的通道客流。",
        "refs": [
          "quarterly.q2.railway",
          "quarterly.q1.railway",
          "quarterly.q2.domAviationCAAC"
        ]
      },
      {
        "tag": "risk",
        "title": "Q2 国内航空转负，摆动逾 10 个百分点",
        "body": "Q2 国内航空客运量同比民航局口径 <span class=\"num-highlight\">-5.2%</span>、三大航 <span class=\"num-highlight\">-6.0%</span>，Q1 分别为 +5.5% 和 +5.5%，摆动 10.7 与 11.5 个百分点。二季度传统淡季叠加航司主动收运力。Q3 能否回正，是全年国内航空读数的分水岭。",
        "refs": [
          "quarterly.q2.domAviationCAAC",
          "quarterly.q2.domAviationBig3",
          "quarterly.q1.domAviationCAAC",
          "quarterly.q1.domAviationBig3"
        ]
      },
      {
        "tag": "risk",
        "title": "Q2 国际运力缺口扩大至 -14.0%",
        "body": "Q2 国际航班运力（对比 2019 年）<span class=\"num-highlight\">-14.0%</span>，Q1 -9.6%，缺口反向走阔 4.4 个百分点；国际客运量增速同步从 Q1 +10.3% 降到 <span class=\"num-highlight\">+2.7%</span>，三大航从 +12.8% 降到 +1.2%。运力恢复没有跟上一季度的势头。Q3 的增班节奏决定缺口会不会继续走阔。",
        "refs": [
          "quarterly.q2.intlCapacity",
          "quarterly.q1.intlCapacity",
          "quarterly.q2.intlAviationCAAC",
          "quarterly.q1.intlAviationCAAC",
          "quarterly.q2.intlAviationBig3",
          "quarterly.q1.intlAviationBig3"
        ]
      },
      {
        "tag": "outlook",
        "title": "Q3 国内航空能否回正",
        "body": "三季度覆盖整个暑运，是全年国内出行最集中的一段。关键看国内航空能否摆脱二季度的负增长、酒店 RevPAR 在入住率下滑时能否守住正增长、国际运力缺口会不会继续走阔。旺季弹性能否抵掉二季度的拖累，是全年读数的主要变量。",
        "refs": [
          "quarterly.q2.domAviationCAAC",
          "quarterly.q2.hotelRevPAR",
          "quarterly.q2.intlCapacity"
        ]
      }
    ],
    "en": [
      {
        "tag": "highlight",
        "title": "Q2 hotel RevPAR still positive at +2.0%",
        "body": "Q2 hotel RevPAR was <span class=\"num-highlight\">+2.0%</span> YoY, with ADR at <span class=\"num-highlight\">+2.9%</span> and occupancy at <span class=\"num-highlight\">-0.8%</span>, slowing from +4.8% in Q1 but not turning negative. All of the growth came from rate while volume was already contracting. If ADR softens in Q3, the risk of RevPAR turning negative is material.",
        "refs": [
          "quarterly.q2.hotelRevPAR",
          "quarterly.q2.hotelADR",
          "quarterly.q2.hotelOccupancy",
          "quarterly.q1.hotelRevPAR"
        ]
      },
      {
        "tag": "highlight",
        "title": "Railway steady across both quarters, Q2 +4.6%",
        "body": "Q2 railway passenger volume was <span class=\"num-highlight\">+4.6%</span> YoY after <span class=\"num-highlight\">+5.7%</span> in Q1, the only indicator holding above 4% in both quarters of the first half. Aviation swung sharply across those two quarters while railway held the floor for domestic travel. Whether Q3 sustains it depends on trunk-route traffic after the summer season.",
        "refs": [
          "quarterly.q2.railway",
          "quarterly.q1.railway",
          "quarterly.q2.domAviationCAAC"
        ]
      },
      {
        "tag": "risk",
        "title": "Q2 domestic aviation turns negative, a swing above 10pp",
        "body": "Q2 domestic air passenger volume was <span class=\"num-highlight\">-5.2%</span> YoY on the CAAC measure and <span class=\"num-highlight\">-6.0%</span> for the Big 3, against +5.5% and +5.5% in Q1, swings of 10.7pp and 11.5pp. The traditional second-quarter lull combined with airlines cutting capacity. Whether Q3 returns to growth is the dividing line for the full-year domestic aviation reading.",
        "refs": [
          "quarterly.q2.domAviationCAAC",
          "quarterly.q2.domAviationBig3",
          "quarterly.q1.domAviationCAAC",
          "quarterly.q1.domAviationBig3"
        ]
      },
      {
        "tag": "risk",
        "title": "Q2 international capacity gap widens to -14.0%",
        "body": "Q2 international flight capacity was <span class=\"num-highlight\">-14.0%</span> versus 2019 against -9.6% in Q1, the gap widening 4.4pp; international passenger growth slowed from +10.3% in Q1 to <span class=\"num-highlight\">+2.7%</span>, and from +12.8% to +1.2% for the Big 3. Capacity restoration did not keep pace with the first quarter's momentum. The pace of added flights in Q3 will decide whether the gap keeps widening.",
        "refs": [
          "quarterly.q2.intlCapacity",
          "quarterly.q1.intlCapacity",
          "quarterly.q2.intlAviationCAAC",
          "quarterly.q1.intlAviationCAAC",
          "quarterly.q2.intlAviationBig3",
          "quarterly.q1.intlAviationBig3"
        ]
      },
      {
        "tag": "outlook",
        "title": "Can domestic aviation return to growth in Q3",
        "body": "The third quarter covers the entire summer season, the most concentrated stretch of domestic travel demand in the year. The questions are whether domestic aviation can shake off the second quarter's contraction, whether hotel RevPAR can stay positive with occupancy falling, and whether the international capacity gap keeps widening. Whether peak-season strength offsets the second-quarter drag is the main variable for the full-year reading.",
        "refs": [
          "quarterly.q2.domAviationCAAC",
          "quarterly.q2.hotelRevPAR",
          "quarterly.q2.intlCapacity"
        ]
      }
    ]
  }
};
