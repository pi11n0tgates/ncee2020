
const constants = {
  serverPort: "3001",
  appName: '高校录取分数线查询',
  title: {
    homepage: "首页",
    stats: "看数据",
    institute: "查学校",
    forum: "讨论区",
    post: "贴文",
    about: "关于",
    search: "搜索",
    login: "登入",
    user: "用户"
  },
  dayOfNCEE: new Date(2021, 5, 7), // 5 is the index of June (0 for January and 11 for December)
  topicTypes: [
    {id: '0', name: "讨论"},
    {id: '1', name: "咨询"},
    {id: '2', name: "闲谈"},
    {id: '3', name: "经验"},
  ],
  shortDateOptions: {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  },
  extendedDateOptions: {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  },
  regions: [
    { region_name: '北京市', region_id: '11' },
    { region_name: '天津市', region_id: '12' },
    { region_name: '河北省', region_id: '13' },
    { region_name: '山西省', region_id: '14' },
    { region_name: '内蒙古自治区', region_id: '15' },
    { region_name: '辽宁省', region_id: '21' },
    { region_name: '吉林省', region_id: '22' },
    { region_name: '黑龙江省', region_id: '23' },
    { region_name: '上海市', region_id: '31' },
    { region_name: '江苏省', region_id: '32' },
    { region_name: '浙江省', region_id: '33' },
    { region_name: '安徽省', region_id: '34' },
    { region_name: '福建省', region_id: '35' },
    { region_name: '江西省', region_id: '36' },
    { region_name: '山东省', region_id: '37' },
    { region_name: '河南省', region_id: '41' },
    { region_name: '湖北省', region_id: '42' },
    { region_name: '湖南省', region_id: '43' },
    { region_name: '广东省', region_id: '44' },
    { region_name: '广西壮族自治区', region_id: '45' },
    { region_name: '海南省', region_id: '46' },
    { region_name: '重庆市', region_id: '50' },
    { region_name: '四川省', region_id: '51' },
    { region_name: '贵州省', region_id: '52' },
    { region_name: '云南省', region_id: '53' },
    { region_name: '西藏自治区', region_id: '54' },
    { region_name: '陕西省', region_id: '61' },
    { region_name: '甘肃省', region_id: '62' },
    { region_name: '青海省', region_id: '63' },
    { region_name: '宁夏回族自治区', region_id: '64' },
    { region_name: '新疆维吾尔自治区', region_id: '65' },
    { region_name: '香港特别行政区', region_id: '81' },
    { region_name: '澳门特别行政区', region_id: '82' }
  ],
  cities: [
    { "city_id": "1302", "city_name": "唐山市" },
    { "city_id": "1301", "city_name": "石家庄市" },
    { "city_id": "4101", "city_name": "郑州市" },
    { "city_id": "3101", "city_name": "上海市" },
    { "city_id": "2201", "city_name": "长春市" },
    { "city_id": "3701", "city_name": "济南市" },
    { "city_id": "6101", "city_name": "西安市" },
    { "city_id": "6528", "city_name": "巴音郭楞蒙古自治州" },
    { "city_id": "1401", "city_name": "太原市" },
    { "city_id": "4306", "city_name": "岳阳市" },
    { "city_id": "5201", "city_name": "贵阳市" },
    { "city_id": "4201", "city_name": "武汉市" },
    { "city_id": "3401", "city_name": "合肥市" },
    { "city_id": "3201", "city_name": "南京市" },
    { "city_id": "3210", "city_name": "扬州市" },
    { "city_id": "6401", "city_name": "银川市" },
    { "city_id": "3202", "city_name": "无锡市" },
    { "city_id": "6501", "city_name": "乌鲁木齐市" },
    { "city_id": "2202", "city_name": "吉林市" },
    { "city_id": "1507", "city_name": "呼伦贝尔市" },
    { "city_id": "3601", "city_name": "南昌市" },
    { "city_id": "3208", "city_name": "淮安市" },
    { "city_id": "2301", "city_name": "哈尔滨市" },
    { "city_id": "5301", "city_name": "昆明市" },
    { "city_id": "4413", "city_name": "惠州市" },
    { "city_id": "1408", "city_name": "运城市" },
    { "city_id": "4403", "city_name": "深圳市" },
    { "city_id": "5117", "city_name": "达州市" },
    { "city_id": "3416", "city_name": "亳州市" },
    { "city_id": "4303", "city_name": "湘潭市" },
    { "city_id": "4601", "city_name": "海口市" },
    { "city_id": "5101", "city_name": "成都市" },
    { "city_id": "1201", "city_name": "天津市" },
    { "city_id": "4104", "city_name": "平顶山市" },
    { "city_id": "4301", "city_name": "长沙市" },
    { "city_id": "4212", "city_name": "咸宁市" },
    { "city_id": "4409", "city_name": "茂名市" },
    { "city_id": "2307", "city_name": "伊春市" },
    { "city_id": "5326", "city_name": "文山壮族苗族自治州" },
    { "city_id": "4304", "city_name": "衡阳市" },
    { "city_id": "3206", "city_name": "南通市" },
    { "city_id": "4602", "city_name": "三亚市" },
    { "city_id": "3502", "city_name": "厦门市" },
    { "city_id": "3209", "city_name": "盐城市" },
    { "city_id": "4114", "city_name": "商丘市" },
    { "city_id": "3408", "city_name": "安庆市" },
    { "city_id": "5001", "city_name": "重庆市" },
    { "city_id": "4116", "city_name": "周口市" },
    { "city_id": "1101", "city_name": "北京市" },
    { "city_id": "3710", "city_name": "威海市" },
    { "city_id": "3709", "city_name": "泰安市" },
    { "city_id": "4514", "city_name": "崇左市" },
    { "city_id": "4401", "city_name": "广州市" },
    { "city_id": "3707", "city_name": "潍坊市" },
    { "city_id": "3501", "city_name": "福州市" },
    { "city_id": "3415", "city_name": "六安市" },
    { "city_id": "4202", "city_name": "黄石市" },
    { "city_id": "4312", "city_name": "怀化市" },
    { "city_id": "3717", "city_name": "菏泽市" },
    { "city_id": "3303", "city_name": "温州市" },
    { "city_id": "1501", "city_name": "呼和浩特市" },
    { "city_id": "1307", "city_name": "张家口市" },
    { "city_id": "4105", "city_name": "安阳市" },
    { "city_id": "3402", "city_name": "芜湖市" },
    { "city_id": "3302", "city_name": "宁波市" },
    { "city_id": "4107", "city_name": "新乡市" },
    { "city_id": "3608", "city_name": "吉安市" },
    { "city_id": "3702", "city_name": "青岛市" },
    { "city_id": "5323", "city_name": "楚雄彝族自治州" },
    { "city_id": "1407", "city_name": "晋中市" },
    { "city_id": "2101", "city_name": "沈阳市" },
    { "city_id": "8202", "city_name": "离岛" },
    { "city_id": "3607", "city_name": "赣州市" },
    { "city_id": "4108", "city_name": "焦作市" },
    { "city_id": "3301", "city_name": "杭州市" },
    { "city_id": "3205", "city_name": "苏州市" },
    { "city_id": "4503", "city_name": "桂林市" },
    { "city_id": "5119", "city_name": "巴中市" },
    { "city_id": "4501", "city_name": "南宁市" },
    { "city_id": "2102", "city_name": "大连市" },
    { "city_id": "2109", "city_name": "阜新市" },
    { "city_id": "4452", "city_name": "揭阳市" },
    { "city_id": "3405", "city_name": "马鞍山市" },
    { "city_id": "5325", "city_name": "红河哈尼族彝族自治州" },
    { "city_id": "6590", "city_name": "自治区直辖县级行政区划" },
    { "city_id": "3203", "city_name": "徐州市" },
    { "city_id": "5107", "city_name": "绵阳市" },
    { "city_id": "3310", "city_name": "台州市" },
    { "city_id": "8201", "city_name": "澳门半岛" },
    { "city_id": "6108", "city_name": "榆林市" },
    { "city_id": "3507", "city_name": "南平市" },
    { "city_id": "1410", "city_name": "临汾市" },
    { "city_id": "3715", "city_name": "聊城市" },
    { "city_id": "6207", "city_name": "张掖市" },
    { "city_id": "2224", "city_name": "延边朝鲜族自治州" },
    { "city_id": "3706", "city_name": "烟台市" },
    { "city_id": "1304", "city_name": "邯郸市" },
    { "city_id": "6201", "city_name": "兰州市" },
    { "city_id": "4418", "city_name": "清远市" },
    { "city_id": "5134", "city_name": "凉山彝族自治州" },
    { "city_id": "1306", "city_name": "保定市" },
    { "city_id": "3503", "city_name": "莆田市" },
    { "city_id": "1309", "city_name": "沧州市" },
    { "city_id": "3609", "city_name": "宜春市" },
    { "city_id": "4408", "city_name": "湛江市" },
    { "city_id": "5106", "city_name": "德阳市" },
    { "city_id": "4510", "city_name": "百色市" },
    { "city_id": "2103", "city_name": "鞍山市" },
    { "city_id": "6104", "city_name": "咸阳市" },
    { "city_id": "3308", "city_name": "衢州市" },
    { "city_id": "2310", "city_name": "牡丹江市" },
    { "city_id": "3611", "city_name": "上饶市" },
    { "city_id": "1303", "city_name": "秦皇岛市" },
    { "city_id": "3604", "city_name": "九江市" },
    { "city_id": "3207", "city_name": "连云港市" },
    { "city_id": "6212", "city_name": "陇南市" },
    { "city_id": "2305", "city_name": "双鸭山市" },
    { "city_id": "4310", "city_name": "郴州市" },
    { "city_id": "1404", "city_name": "长治市" },
    { "city_id": "4206", "city_name": "襄阳市" },
    { "city_id": "5104", "city_name": "攀枝花市" },
    { "city_id": "6301", "city_name": "西宁市" },
    { "city_id": "1411", "city_name": "吕梁市" },
    { "city_id": "3306", "city_name": "绍兴市" },
    { "city_id": "5226", "city_name": "黔东南苗族侗族自治州" },
    { "city_id": "8102", "city_name": "九龙半岛" },
    { "city_id": "5114", "city_name": "眉山市" },
    { "city_id": "4290", "city_name": "省直辖县级行政区划" },
    { "city_id": "3716", "city_name": "滨州市" },
    { "city_id": "2104", "city_name": "抚顺市" },
    { "city_id": "2311", "city_name": "黑河市" },
    { "city_id": "4203", "city_name": "十堰市" },
    { "city_id": "6105", "city_name": "渭南市" },
    { "city_id": "4512", "city_name": "河池市" },
    { "city_id": "1509", "city_name": "乌兰察布市" },
    { "city_id": "2108", "city_name": "营口市" },
    { "city_id": "4113", "city_name": "南阳市" },
    { "city_id": "2327", "city_name": "大兴安岭地区" },
    { "city_id": "2106", "city_name": "丹东市" },
    { "city_id": "3506", "city_name": "漳州市" },
    { "city_id": "3413", "city_name": "宿州市" },
    { "city_id": "3212", "city_name": "泰州市" },
    { "city_id": "2306", "city_name": "大庆市" },
    { "city_id": "4311", "city_name": "永州市" },
    { "city_id": "3412", "city_name": "阜阳市" },
    { "city_id": "6403", "city_name": "吴忠市" },
    { "city_id": "1505", "city_name": "通辽市" },
    { "city_id": "8101", "city_name": "香港岛" },
    { "city_id": "3307", "city_name": "金华市" },
    { "city_id": "5205", "city_name": "毕节市" },
    { "city_id": "8103", "city_name": "新界" },
    { "city_id": "4111", "city_name": "漯河市" },
    { "city_id": "5206", "city_name": "铜仁市" },
    { "city_id": "3505", "city_name": "泉州市" },
    { "city_id": "4404", "city_name": "珠海市" },
    { "city_id": "3309", "city_name": "舟山市" },
    { "city_id": "4103", "city_name": "洛阳市" },
    { "city_id": "4402", "city_name": "韶关市" },
    { "city_id": "5105", "city_name": "泸州市" },
    { "city_id": "2110", "city_name": "辽阳市" },
    { "city_id": "3211", "city_name": "镇江市" },
    { "city_id": "3404", "city_name": "淮南市" },
    { "city_id": "6502", "city_name": "克拉玛依市" },
    { "city_id": "4407", "city_name": "江门市" },
    { "city_id": "4115", "city_name": "信阳市" },
    { "city_id": "3703", "city_name": "淄博市" },
    { "city_id": "5329", "city_name": "大理白族自治州" },
    { "city_id": "2107", "city_name": "锦州市" },
    { "city_id": "1310", "city_name": "廊坊市" },
    { "city_id": "2112", "city_name": "铁岭市" },
    { "city_id": "3403", "city_name": "蚌埠市" },
    { "city_id": "4305", "city_name": "邵阳市" },
    { "city_id": "2303", "city_name": "鸡西市" },
    { "city_id": "1403", "city_name": "阳泉市" },
    { "city_id": "2203", "city_name": "四平市" },
    { "city_id": "4307", "city_name": "常德市" },
    { "city_id": "5113", "city_name": "南充市" },
    { "city_id": "3204", "city_name": "常州市" },
    { "city_id": "5303", "city_name": "曲靖市" },
    { "city_id": "2302", "city_name": "齐齐哈尔市" },
    { "city_id": "3711", "city_name": "日照市" },
    { "city_id": "4419", "city_name": "东莞市" },
    { "city_id": "4453", "city_name": "云浮市" },
    { "city_id": "4412", "city_name": "肇庆市" },
    { "city_id": "1409", "city_name": "忻州市" },
    { "city_id": "5227", "city_name": "黔南布依族苗族自治州" },
    { "city_id": "6103", "city_name": "宝鸡市" },
    { "city_id": "1504", "city_name": "赤峰市" },
    { "city_id": "1308", "city_name": "承德市" },
    { "city_id": "5204", "city_name": "安顺市" },
    { "city_id": "3602", "city_name": "景德镇市" },
    { "city_id": "1506", "city_name": "鄂尔多斯市" },
    { "city_id": "4509", "city_name": "玉林市" },
    { "city_id": "3610", "city_name": "抚州市" },
    { "city_id": "1502", "city_name": "包头市" },
    { "city_id": "4211", "city_name": "黄冈市" },
    { "city_id": "5305", "city_name": "保山市" },
    { "city_id": "4302", "city_name": "株洲市" },
    { "city_id": "1529", "city_name": "阿拉善盟" },
    { "city_id": "2208", "city_name": "白城市" },
    { "city_id": "5118", "city_name": "雅安市" },
    { "city_id": "5108", "city_name": "广元市" },
    { "city_id": "4106", "city_name": "鹤壁市" },
    { "city_id": "6529", "city_name": "阿克苏地区" },
    { "city_id": "3605", "city_name": "新余市" },
    { "city_id": "4309", "city_name": "益阳市" },
    { "city_id": "3213", "city_name": "宿迁市" },
    { "city_id": "6205", "city_name": "天水市" },
    { "city_id": "6531", "city_name": "喀什地区" },
    { "city_id": "5203", "city_name": "遵义市" },
    { "city_id": "2309", "city_name": "七台河市" },
    { "city_id": "1311", "city_name": "衡水市" },
    { "city_id": "2105", "city_name": "本溪市" },
    { "city_id": "4690", "city_name": "省直辖县级行政区划" },
    { "city_id": "3606", "city_name": "鹰潭市" },
    { "city_id": "4313", "city_name": "娄底市" },
    { "city_id": "5306", "city_name": "昭通市" },
    { "city_id": "3714", "city_name": "德州市" },
    { "city_id": "6504", "city_name": "吐鲁番市" },
    { "city_id": "4420", "city_name": "中山市" },
    { "city_id": "3705", "city_name": "东营市" },
    { "city_id": "3603", "city_name": "萍乡市" },
    { "city_id": "5401", "city_name": "拉萨市" },
    { "city_id": "1525", "city_name": "锡林郭勒盟" },
    { "city_id": "3708", "city_name": "济宁市" },
    { "city_id": "5223", "city_name": "黔西南布依族苗族自治州" },
    { "city_id": "4210", "city_name": "荆州市" },
    { "city_id": "6540", "city_name": "伊犁哈萨克自治州" },
    { "city_id": "3417", "city_name": "池州市" },
    { "city_id": "4209", "city_name": "孝感市" },
    { "city_id": "2312", "city_name": "绥化市" },
    { "city_id": "3406", "city_name": "淮北市" },
    { "city_id": "2308", "city_name": "佳木斯市" },
    { "city_id": "6532", "city_name": "和田地区" },
    { "city_id": "4331", "city_name": "湘西土家族苗族自治州" },
    { "city_id": "6110", "city_name": "商洛市" },
    { "city_id": "1503", "city_name": "乌海市" },
    { "city_id": "4110", "city_name": "许昌市" },
    { "city_id": "5110", "city_name": "内江市" },
    { "city_id": "5120", "city_name": "资阳市" },
    { "city_id": "3304", "city_name": "嘉兴市" },
    { "city_id": "1508", "city_name": "巴彦淖尔市" },
    { "city_id": "4117", "city_name": "驻马店市" },
    { "city_id": "6530", "city_name": "克孜勒苏柯尔克孜自治州" },
    { "city_id": "1522", "city_name": "兴安盟" },
    { "city_id": "4102", "city_name": "开封市" },
    { "city_id": "2304", "city_name": "鹤岗市" },
    { "city_id": "6109", "city_name": "安康市" },
    { "city_id": "4405", "city_name": "汕头市" },
    { "city_id": "4511", "city_name": "贺州市" },
    { "city_id": "2204", "city_name": "辽源市" },
    { "city_id": "3411", "city_name": "滁州市" },
    { "city_id": "4205", "city_name": "宜昌市" },
    { "city_id": "3311", "city_name": "丽水市" },
    { "city_id": "3704", "city_name": "枣庄市" },
    { "city_id": "4213", "city_name": "随州市" },
    { "city_id": "1402", "city_name": "大同市" },
    { "city_id": "4406", "city_name": "佛山市" },
    { "city_id": "3407", "city_name": "铜陵市" },
    { "city_id": "6523", "city_name": "昌吉回族自治州" },
    { "city_id": "4308", "city_name": "张家界市" },
    { "city_id": "6527", "city_name": "博尔塔拉蒙古自治州" },
    { "city_id": "1405", "city_name": "晋城市" },
    { "city_id": "3713", "city_name": "临沂市" },
    { "city_id": "4502", "city_name": "柳州市" },
    { "city_id": "4504", "city_name": "梧州市" },
    { "city_id": "6203", "city_name": "金昌市" },
    { "city_id": "4415", "city_name": "汕尾市" },
    { "city_id": "1305", "city_name": "邢台市" },
    { "city_id": "5115", "city_name": "宜宾市" },
    { "city_id": "4207", "city_name": "鄂州市" },
    { "city_id": "6210", "city_name": "庆阳市" },
    { "city_id": "4507", "city_name": "钦州市" },
    { "city_id": "6102", "city_name": "铜川市" },
    { "city_id": "5111", "city_name": "乐山市" },
    { "city_id": "6107", "city_name": "汉中市" },
    { "city_id": "4109", "city_name": "濮阳市" },
    { "city_id": "5132", "city_name": "阿坝藏族羌族自治州" },
    { "city_id": "2205", "city_name": "通化市" },
    { "city_id": "1406", "city_name": "朔州市" },
    { "city_id": "6543", "city_name": "阿勒泰地区" },
    { "city_id": "4417", "city_name": "阳江市" },
    { "city_id": "2113", "city_name": "朝阳市" },
    { "city_id": "6206", "city_name": "武威市" },
    { "city_id": "3508", "city_name": "龙岩市" },
    { "city_id": "3504", "city_name": "三明市" },
    { "city_id": "5307", "city_name": "丽江市" },
    { "city_id": "6230", "city_name": "甘南藏族自治州" },
    { "city_id": "3418", "city_name": "宣城市" },
    { "city_id": "4228", "city_name": "恩施土家族苗族自治州" },
    { "city_id": "4451", "city_name": "潮州市" },
    { "city_id": "4505", "city_name": "北海市" },
    { "city_id": "5304", "city_name": "玉溪市" },
    { "city_id": "5202", "city_name": "六盘水市" },
    { "city_id": "5308", "city_name": "普洱市" },
    { "city_id": "6202", "city_name": "嘉峪关市" },
    { "city_id": "2111", "city_name": "盘锦市" },
    { "city_id": "6402", "city_name": "石嘴山市" },
    { "city_id": "4208", "city_name": "荆门市" },
    { "city_id": "3305", "city_name": "湖州市" },
    { "city_id": "6106", "city_name": "延安市" },
    { "city_id": "3509", "city_name": "宁德市" },
    { "city_id": "6404", "city_name": "固原市" },
    { "city_id": "6505", "city_name": "哈密市" },
    { "city_id": "4112", "city_name": "三门峡市" },
    { "city_id": "2114", "city_name": "葫芦岛市" },
    { "city_id": "6542", "city_name": "塔城地区" },
    { "city_id": "3410", "city_name": "黄山市" },
    { "city_id": "4508", "city_name": "贵港市" },
    { "city_id": "5103", "city_name": "自贡市" },
    { "city_id": "6211", "city_name": "定西市" },
    { "city_id": "5328", "city_name": "西双版纳傣族自治州" },
    { "city_id": "5309", "city_name": "临沧市" },
    { "city_id": "6328", "city_name": "海西蒙古族藏族自治州" },
    { "city_id": "5109", "city_name": "遂宁市" },
    { "city_id": "6229", "city_name": "临夏回族自治州" },
    { "city_id": "4513", "city_name": "来宾市" },
    { "city_id": "5404", "city_name": "林芝市" },
    { "city_id": "6209", "city_name": "酒泉市" },
    { "city_id": "4190", "city_name": "省直辖县级行政区划" },
    { "city_id": "2206", "city_name": "白山市" },
    { "city_id": "2207", "city_name": "松原市" },
    { "city_id": "6208", "city_name": "平凉市" },
    { "city_id": "6302", "city_name": "海东市" },
    { "city_id": "6204", "city_name": "白银市" },
    { "city_id": "5116", "city_name": "广安市" },
    { "city_id": "5331", "city_name": "德宏傣族景颇族自治州" },
    { "city_id": "5133", "city_name": "甘孜藏族自治州" },
    { "city_id": "4416", "city_name": "河源市" },
    { "city_id": "4414", "city_name": "梅州市" },
  ],

  types: [
    {type_id: '1', type_name: '理科'},
    {type_id: '2', type_name: '文科'}
  ],
  instituteCategories: [
    "综合类",
    "理工类",
    "语言类",
    "艺术类",
    "农林类",
    "民族类",
    "医药类",
    "师范类",
    "财经类",
    "体育类",
    "政法类",
    "军事类",
    "其他",
  ],
  instituteLabels: [
    '985',
    '211',
    '双一流',
    '本科',
    '专科',
    '公办',
    '民办',
    '合作办学',
  ],
  sampleData: [
    {
      id: 104,
      instname: "中山大学",
      homepage: "http://www.sysu.edu.cn",
      tel: "020-84036491",
      email: "adado@mail.sysu.edu.cn",
      icon: "https://static-data.eol.cn/upload/logo/104.jpg",
      labels: ["本科", "综合类", "公办", "211", "985", "一流大学建设高校"],
      location: "广东，广州市",
      brief: ""
    },
    {
      id: 105,
      instname: "华南理工大学",
      homepage: "http://www.scut.edu.cn/",
      tel: "020-84036491",
      email: "admit@scut.edu.cn",
      icon: "https://static-data.eol.cn/upload/logo/105.jpg",
      labels: ["本科", "理工类", "公办", "211", "985", "一流大学建设高校"],
      location: "广东，广州市"
    },
    {
      id: 106,
      instname: "暨南大学",
      homepage: "http://www.jnu.edu.cn",
      tel: "020-85220130",
      email: "ozsb@jnu.edu.cn",
      icon: "https://static-data.eol.cn/upload/logo/106.jpg",
      labels: ["本科", "综合类", "公办", "211", "一流学科建设高校"],
      location: "广东，广州市"
    },
    {
      id: 284,
      instname: "深圳大学",
      homepage: "http://zs.szu.edu.cn",
      tel: "0755-26536235",
      email: "zsb@szu.edu.cn",
      icon: "https://static-data.eol.cn/upload/logo/284.jpg",
      labels: ["本科", "综合类", "公办"],
      location: "广东，深圳市"
    },
    {
      id: 293,
      instname: "广州大学",
      homepage: "http://www.gzhu.edu.cn",
      tel: "020-39366232",
      email: "zhaosb@gzhu.edu.cn",
      icon: "https://static-data.eol.cn/upload/logo/293.jpg",
      labels: ["本科", "综合类", "公办"],
      location: "广东，广州市"
    },
    {
      id: 286,
      instname: "广东工业大学",
      homepage: "http://www.gdut.edu.cn",
      tel: "020-39322681",
      email: "zsb@gdut.edu.cn",
      icon: "https://static-data.eol.cn/upload/logo/286.jpg",
      labels: ["本科", "理工类", "公办"],
      location: "广东，广州市"
    },
    {
      id: 98,
      instname: "华南师范大学",
      homepage: "http://www.scnu.edu.cn",
      tel: "020-85211098",
      email: "zsb02@scnu.edu.cn",
      icon: "https://static-data.eol.cn/upload/logo/98.jpg",
      labels: ["本科", "综合类", "公办", "211", "一流学科建设高校"],
      location: "广东，广州市"
    },
    {
      id: 302,
      instname: "广东财经大学",
      homepage: "http://www.gdufe.edu.cn",
      tel: "020-84096844",
      email: "zsb@gdufe.edu.cn",
      icon: "https://static-data.eol.cn/upload/logo/302.jpg",
      labels: ["本科", "财经类", "公办"],
      location: "广东，广州市"
    },
    {
      id: 290,
      instname: "广东外语外贸大学",
      homepage: "http://www.gdufs.edu.cn",
      tel: "020-36204310",
      email: "zsb@gdufs.edu.cn",
      icon: "https://static-data.eol.cn/upload/logo/290.jpg",
      labels: ["本科", "语言类", "公办"],
      location: "广东，广州市"
    },
    {
      id: 287,
      instname: "华南农业大学",
      homepage: "http://www.scau.edu.cn",
      tel: "020-85283652",
      email: "zsb@scau.edu.cn",
      icon: "https://static-data.eol.cn/upload/logo/287.jpg",
      labels: ["本科", "综合类", "公办"],
      location: "广东，广州市"
    },
    {
      id: 288,
      instname: "广东海洋大学",
      homepage: "http://www.gdou.edu.cn",
      tel: "0759-2396115",
      email: "zsb@gdou.edu.cn",
      icon: "https://static-data.eol.cn/upload/logo/288.jpg",
      labels: ["本科", "农林类", "公办"],
      location: "广东，湛江市"
    },
    {
      id: 960,
      instname: "南方医科大学",
      homepage: "http://www.smu.edu.cn/",
      tel: "020-61648502",
      email: "zsb@smu.edu.cn",
      icon: "https://static-data.eol.cn/upload/logo/960.jpg",
      labels: ["本科", "医药类", "公办"],
      location: "广东，广州市"
    },
    {
      id: 2054,
      instname: "北京师范大学珠海分校",
      homepage: "http://www.bnuz.edu.cn",
      tel: "0756-3683333",
      email: "zsb@bnuz.edu.cn",
      icon: "https://static-data.eol.cn/upload/logo/2054.jpg",
      labels: ["本科", "其他", "民办"],
      location: "广东，珠海市"
    },
    {
      id: 1031,
      instname: "广东金融学院",
      homepage: "http://www.gduf.edu.cn",
      tel: "020-37215393",
      email: "zsb@scau.edu.cn",
      icon: "https://static-data.eol.cn/upload/logo/1031.jpg",
      labels: ["本科", "财经类", "公办"],
      location: "广东，广州市"
    },
    {
      id: 295,
      instname: "广州医科大学",
      homepage: "http://www.gzhmu.edu.cn/",
      tel: "020-81340278",
      email: "zs8134@126.com",
      icon: "https://static-data.eol.cn/upload/logo/295.jpg",
      labels: ["本科", "医药类", "公办"],
      location: "广东，广州市"
    },
    {
      id: 283,
      instname: "汕头大学",
      homepage: "http://www.stu.edu.cn",
      tel: "0754-86503666",
      email: "zsb@bnuz.edu.cn",
      icon: "https://static-data.eol.cn/upload/logo/283.jpg",
      labels: ["本科", "其他", "公办"],
      location: "广东，汕头市"
    },
    {
      id: 1031,
      instname: "北京师范大学-香港浸会大学联合国际学院",
      homepage: "https://uic.edu.cn/cn",
      tel: "0756-3520011",
      email: "admission@uic.edu.cn",
      icon: "https://static-data.eol.cn/upload/logo/1275.jpg",
      labels: ["本科", "综合类", "合作办学"],
      location: "广东，珠海市"
    },
    {
      id: 102,
      instname: "厦门大学",
      homepage: "http://www.xmu.edu.cn/",
      tel: "0592-2188888",
      email: "zs@xmu.edu.cn",
      icon: "https://static-data.eol.cn/upload/logo/102.jpg",
      labels: ["本科", "综合类", "公办", "211", "985", "一流大学建设高校"],
      location: "福建，厦门市"
    },
    {
      id: 99,
      instname: "四川大学",
      homepage: "http://www.scu.edu.cn",
      tel: "028-86081605",
      email: "nic8401@scu.edu.cn",
      icon: "https://static-data.eol.cn/upload/logo/99.jpg",
      labels: ["本科", "综合类", "公办", "211", "985", "一流大学建设高校"],
      location: "四川，成都市"
    },
    {
      id: 42,
      instname: "武汉大学",
      homepage: "http://www.whu.edu.cn",
      tel: "027-68754231",
      email: "wlxxs@whu.edu.cn",
      icon: "https://static-data.eol.cn/upload/logo/42.jpg",
      labels: ["本科", "综合类", "公办", "211", "985", "一流大学建设高校"],
      location: "湖北，武汉市"
    },
    {
      id: 31,
      instname: "北京大学",
      homepage: "http://www.pku.edu.cn/",
      tel: "010-62751407",
      email: "bdzsb@pku.edu.cn",
      icon: "https://static-data.eol.cn/upload/logo/31.jpg",
      labels: ["本科", "综合类", "公办", "211", "985", "一流大学建设高校"],
      location: "北京，海淀区"
    },
    {
      id: 140,
      instname: "清华大学",
      homepage: "http://www.tsinghua.edu.cn",
      tel: "010-62782051",
      email: "zsb@mail.tsinghua.edu.cn",
      icon: "https://static-data.eol.cn/upload/logo/140.jpg",
      labels: ["本科", "综合类", "公办", "211", "985", "一流大学建设高校"],
      location: "北京，海淀区"
    },
    {
      id: 46,
      instname: "中国人民大学",
      homepage: "http://www.ruc.edu.cn",
      tel: "400-012-3517",
      email: "zsb@ruc.edu.cn",
      icon: "https://static-data.eol.cn/upload/logo/46.jpg",
      labels: ["本科", "综合类", "公办", "211", "985", "一流大学建设高校"],
      location: "北京，海淀区"
    },
  ],
  
}

export default constants;