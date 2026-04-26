const exerciseCatalog = [
  {
    id: "goblet-squat",
    name: "高脚杯深蹲",
    target: "下肢力量",
    equipment: "哑铃/壶铃",
    prescription: "4 组 x 8-10 次",
    rest: "90 秒",
    load: "用七成力，最后 2 次有挑战但动作稳定",
    cues: ["脚跟不离地", "膝盖朝脚尖方向", "躯干保持稳定"],
    mistakes: ["膝盖内扣", "下蹲时腰背塌陷", "速度过快导致失控"],
    pose: "squat",
    muscles: ["quadriceps", "glutes"]
  },
  {
    id: "db-row",
    name: "单臂哑铃划船",
    target: "背部与肩胛控制",
    equipment: "哑铃/训练凳",
    prescription: "3 组 x 10-12 次/侧",
    rest: "75 秒",
    load: "可完成目标次数，顶峰停 1 秒",
    cues: ["先收肩胛再拉肘", "骨盆保持水平", "手腕中立"],
    mistakes: ["耸肩借力", "身体大幅旋转", "哑铃自由下坠"],
    pose: "row",
    muscles: ["back", "biceps"]
  },
  {
    id: "incline-pushup",
    name: "上斜俯卧撑",
    target: "胸肩推力",
    equipment: "训练凳",
    prescription: "3 组 x 8-12 次",
    rest: "75 秒",
    load: "高度越低强度越高",
    cues: ["身体成一直线", "肘部约 45 度", "推起时呼气"],
    mistakes: ["塌腰", "头前伸", "半程动作"],
    pose: "pushup",
    muscles: ["chest", "triceps"]
  },
  {
    id: "dead-bug",
    name: "死虫式",
    target: "核心稳定",
    equipment: "瑜伽垫",
    prescription: "3 组 x 8-10 次/侧",
    rest: "45 秒",
    load: "腰椎稳定优先于幅度",
    cues: ["肋骨下沉", "腰背轻贴地", "慢速伸展"],
    mistakes: ["腰部拱起", "屏息", "摆动借力"],
    pose: "deadbug",
    muscles: ["core"]
  },
  {
    id: "bike-interval",
    name: "功率车间歇",
    target: "心肺耐力",
    equipment: "功率车",
    prescription: "8 轮 x 40 秒快 / 80 秒慢",
    rest: "主动恢复",
    load: "快段用八成力，慢段用三成力",
    cues: ["保持踏频稳定", "肩颈放松", "快段不憋气"],
    mistakes: ["一开始冲太快", "膝盖外摆", "恢复段完全停止"],
    pose: "bike",
    muscles: ["quadriceps", "cardio"]
  },
  {
    id: "hip-flexor-stretch",
    name: "髋屈肌拉伸",
    target: "灵活度恢复",
    equipment: "瑜伽垫",
    prescription: "2 组 x 40 秒/侧",
    rest: "20 秒",
    load: "轻中度牵拉感",
    cues: ["骨盆后倾", "胸口打开", "缓慢呼吸"],
    mistakes: ["腰椎过伸", "前膝过度前顶", "疼痛仍强撑"],
    pose: "stretch",
    muscles: ["hips"]
  }
];

exerciseCatalog.push(
  { id: "barbell-back-squat", name: "杠铃后蹲", target: "下肢最大力量", equipment: "杠铃/深蹲架", prescription: "4 组 x 5 次", rest: "150 秒", load: "用七到八成力，保留 1-2 次余力", cues: ["杠铃贴稳上背", "全脚掌发力", "髋膝同步伸展"], mistakes: ["膝盖内扣", "骨盆眨眼", "起身时重心前移"], pose: "squat", muscles: ["quadriceps", "glutes"] },
  { id: "romanian-deadlift", name: "罗马尼亚硬拉", target: "髋伸力量", equipment: "杠铃/哑铃", prescription: "4 组 x 6-8 次", rest: "120 秒", load: "用七成力，腘绳肌有张力但腰背稳定", cues: ["髋部后移", "脊柱中立", "杠铃贴腿"], mistakes: ["弯腰拉起", "膝盖锁死", "重量离身体太远"], pose: "hinge", muscles: ["hamstrings", "glutes"] },
  { id: "bench-press", name: "杠铃卧推", target: "胸肩推力", equipment: "杠铃/卧推凳", prescription: "4 组 x 6-8 次", rest: "120 秒", load: "用七到八成力，下降可控", cues: ["肩胛后缩下沉", "手腕中立", "脚跟踩稳"], mistakes: ["肩膀前顶", "杠铃弹胸", "臀部离凳"], pose: "press", muscles: ["chest", "triceps"] },
  { id: "overhead-press", name: "站姿推举", target: "肩部力量", equipment: "杠铃/哑铃", prescription: "3 组 x 6-8 次", rest: "120 秒", load: "用七成力，核心不代偿", cues: ["肋骨下沉", "头部让杠后回正", "手腕在肘上方"], mistakes: ["腰椎过伸", "耸肩过度", "路径绕远"], pose: "press", muscles: ["shoulders", "triceps"] },
  { id: "lat-pulldown", name: "高位下拉", target: "背阔肌训练", equipment: "高位下拉器", prescription: "3 组 x 10-12 次", rest: "75 秒", load: "用七成力，顶峰停顿 1 秒", cues: ["肩胛下沉", "肘向肋骨两侧拉", "胸口微抬"], mistakes: ["身体后仰借力", "手臂先发力", "拉到颈后"], pose: "row", muscles: ["back", "biceps"] },
  { id: "seated-row", name: "坐姿划船", target: "中背与肩胛控制", equipment: "划船器", prescription: "3 组 x 10-12 次", rest: "75 秒", load: "用七成力，肩胛能控制", cues: ["先收肩胛", "胸口打开", "慢速还原"], mistakes: ["圆肩含胸", "身体大幅摆动", "耸肩"], pose: "row", muscles: ["back", "biceps"] },
  { id: "lunge", name: "反向箭步蹲", target: "单腿力量", equipment: "徒手/哑铃", prescription: "3 组 x 8-10 次/侧", rest: "75 秒", load: "用七成力，左右动作对称", cues: ["前脚全脚掌稳定", "身体微前倾", "膝盖对齐脚尖"], mistakes: ["步幅过小", "骨盆倾斜", "前膝内扣"], pose: "squat", muscles: ["quadriceps", "glutes"] },
  { id: "hip-thrust", name: "臀桥推髋", target: "臀部力量", equipment: "杠铃/训练凳", prescription: "4 组 x 8-10 次", rest: "90 秒", load: "用八成力，顶峰夹臀停顿", cues: ["下巴微收", "肋骨下沉", "髋部完全伸展"], mistakes: ["腰部代偿", "脚跟离地", "顶峰不足"], pose: "bridge", muscles: ["glutes", "hamstrings"] },
  { id: "plank", name: "平板支撑", target: "核心抗伸展", equipment: "瑜伽垫", prescription: "3 组 x 30-45 秒", rest: "45 秒", load: "全程可稳定呼吸", cues: ["肋骨下沉", "臀部微收", "颈部放松"], mistakes: ["塌腰", "臀部过高", "憋气"], pose: "plank", muscles: ["core"] },
  { id: "side-plank", name: "侧桥支撑", target: "核心抗侧屈", equipment: "瑜伽垫", prescription: "3 组 x 25-40 秒/侧", rest: "45 秒", load: "骨盆不下沉", cues: ["肩肘垂直", "身体成直线", "持续呼吸"], mistakes: ["肩膀耸起", "骨盆后旋", "颈部紧张"], pose: "plank", muscles: ["core"] },
  { id: "pullup", name: "引体向上", target: "背部拉力", equipment: "单杠/辅助器", prescription: "4 组 x 4-8 次", rest: "120 秒", load: "优先保证全程控制", cues: ["先沉肩", "胸口靠近杠", "慢速下降"], mistakes: ["摆动借力", "半程动作", "颈部前伸"], pose: "row", muscles: ["back", "biceps"] },
  { id: "cable-face-pull", name: "绳索面拉", target: "肩胛与后束", equipment: "绳索器械", prescription: "3 组 x 12-15 次", rest: "60 秒", load: "轻中重量，动作干净", cues: ["肘略高于肩", "肩胛后收", "手拉向眉眼高度"], mistakes: ["腰部后仰", "耸肩", "重量过大"], pose: "row", muscles: ["shoulders", "back"] },
  { id: "calf-raise", name: "提踵", target: "小腿力量", equipment: "器械/台阶", prescription: "4 组 x 10-15 次", rest: "60 秒", load: "顶峰停顿，离心控制", cues: ["脚踝直上直下", "顶峰收缩", "慢速下降"], mistakes: ["弹震借力", "内外翻", "幅度不足"], pose: "calf", muscles: ["calves"] },
  { id: "treadmill-run", name: "跑步机节奏跑", target: "有氧能力", equipment: "跑步机", prescription: "20-30 分钟", rest: "连续训练", load: "能说短句但不能轻松聊天", cues: ["步频稳定", "落地轻", "上身放松"], mistakes: ["步幅过大", "扶把跑", "速度突然拉满"], pose: "run", muscles: ["cardio", "calves"] },
  { id: "rowing-machine", name: "划船机", target: "心肺与全身协调", equipment: "划船机", prescription: "6 轮 x 1 分钟快 / 1 分钟慢", rest: "主动恢复", load: "快段用八成力，慢段可恢复", cues: ["腿先蹬", "髋再开", "手最后拉"], mistakes: ["先拉手", "弓背", "回桨过快"], pose: "row", muscles: ["back", "quadriceps", "cardio"] },
  { id: "box-jump", name: "跳箱", target: "弹跳专项提升", equipment: "跳箱", prescription: "5 组 x 3 次", rest: "120 秒", load: "每次都保持高质量落地", cues: ["摆臂发力", "髋膝踝伸展", "轻柔落地"], mistakes: ["膝盖内扣", "连续疲劳跳", "箱高过高"], pose: "jump", muscles: ["glutes", "quadriceps", "calves"] },
  { id: "medicine-ball-throw", name: "药球前抛", target: "投掷爆发力", equipment: "药球/墙面", prescription: "5 组 x 4 次", rest: "90 秒", load: "轻中重量，速度优先", cues: ["髋部带动躯干", "快速伸臂", "完整随挥"], mistakes: ["只用手臂", "腰部硬扭", "重量过大"], pose: "throw", muscles: ["core", "shoulders"] },
  { id: "band-external-rotation", name: "弹力带肩外旋", target: "肩袖稳定", equipment: "弹力带", prescription: "3 组 x 12-15 次/侧", rest: "45 秒", load: "轻阻力，控制路径", cues: ["肘贴身体", "肩膀放松", "慢速回放"], mistakes: ["身体旋转代偿", "手腕折弯", "耸肩"], pose: "press", muscles: ["shoulders"] },
  { id: "ankle-mobility", name: "踝关节活动度训练", target: "踝部灵活度", equipment: "墙面/弹力带", prescription: "2 组 x 10-12 次/侧", rest: "30 秒", load: "无疼痛范围内推进", cues: ["脚跟不离地", "膝盖朝脚尖", "缓慢移动"], mistakes: ["足弓塌陷", "膝盖内扣", "疼痛中强压"], pose: "stretch", muscles: ["calves"] },
  { id: "thoracic-rotation", name: "胸椎旋转", target: "上背灵活度", equipment: "瑜伽垫", prescription: "2 组 x 8-10 次/侧", rest: "30 秒", load: "舒适牵拉感", cues: ["髋部稳定", "眼睛跟手", "慢速呼吸"], mistakes: ["腰椎代偿", "动作过快", "肩颈紧张"], pose: "stretch", muscles: ["back"] }
);

exerciseCatalog.push(
  { id: "dumbbell-bench-press", category: "chest", name: "哑铃卧推", target: "胸部推力", equipment: "哑铃/卧推凳", prescription: "3 组 x 8-10 次", rest: "90 秒", load: "用七成力，下降可控", cues: ["肩胛稳定", "肘部略低于肩", "推起时不耸肩"], mistakes: ["哑铃碰撞", "肩膀前顶", "下放过快"], pose: "press", muscles: ["chest", "triceps"] },
  { id: "flat-pushup", category: "chest", name: "标准俯卧撑", target: "胸部与手臂推力", equipment: "徒手", prescription: "3 组 x 8-15 次", rest: "75 秒", load: "保留 2 次余力", cues: ["身体成直线", "胸口靠近地面", "手掌稳定推地"], mistakes: ["塌腰", "耸肩", "动作半程"], pose: "pushup", muscles: ["chest", "triceps", "core"] },
  { id: "dumbbell-fly", category: "chest", name: "哑铃飞鸟", target: "胸部水平内收", equipment: "哑铃/训练凳", prescription: "3 组 x 10-12 次", rest: "75 秒", load: "轻中重量，胸部有拉伸感", cues: ["肘微屈固定", "打开到舒适范围", "胸部发力合拢"], mistakes: ["手臂过直", "下放过深", "用肩前束硬拉"], pose: "fly", muscles: ["chest"] },
  { id: "cable-fly", category: "chest", name: "绳索夹胸", target: "胸部持续张力", equipment: "龙门架", prescription: "3 组 x 12-15 次", rest: "60 秒", load: "用六到七成力，顶峰夹胸", cues: ["肩胛稳定", "手臂弧线合拢", "顶峰停顿"], mistakes: ["身体前后晃", "手腕折弯", "耸肩"], pose: "fly", muscles: ["chest"] },
  { id: "pec-deck", category: "chest", name: "器械夹胸", target: "胸部孤立训练", equipment: "蝴蝶机", prescription: "3 组 x 10-15 次", rest: "60 秒", load: "胸部发力清晰", cues: ["背部贴垫", "肘部带动", "慢速还原"], mistakes: ["肩膀前顶", "重量过大", "还原失控"], pose: "fly", muscles: ["chest"] },
  { id: "close-grip-pushup", category: "chest", name: "窄距俯卧撑", target: "胸部与肱三头肌", equipment: "徒手", prescription: "3 组 x 6-12 次", rest: "75 秒", load: "动作稳定优先", cues: ["肘向后收", "身体成直线", "推起完全"], mistakes: ["手腕疼仍硬做", "肘外展过大", "塌腰"], pose: "pushup", muscles: ["chest", "triceps"] },

  { id: "barbell-row", category: "back", name: "杠铃俯身划船", target: "背部厚度", equipment: "杠铃", prescription: "4 组 x 6-8 次", rest: "120 秒", load: "用七到八成力，躯干稳定", cues: ["髋部后移", "杠铃拉向下腹", "肩胛后收"], mistakes: ["弓背", "借力耸肩", "杠铃离身太远"], pose: "row", muscles: ["back", "biceps"] },
  { id: "chest-supported-row", category: "back", name: "俯卧支撑划船", target: "中背训练", equipment: "哑铃/上斜凳", prescription: "3 组 x 10-12 次", rest: "75 秒", load: "顶峰停顿 1 秒", cues: ["胸口贴凳", "肘向后拉", "慢速还原"], mistakes: ["抬头过度", "耸肩", "甩动哑铃"], pose: "row", muscles: ["back", "biceps"] },
  { id: "straight-arm-pulldown", category: "back", name: "直臂下压", target: "背阔肌发力", equipment: "绳索器械", prescription: "3 组 x 12-15 次", rest: "60 秒", load: "轻中重量", cues: ["手臂微屈", "肩胛下沉", "拉到大腿前"], mistakes: ["弯肘变下拉", "腰部后仰", "耸肩"], pose: "row", muscles: ["back"] },
  { id: "reverse-fly", category: "back", name: "反向飞鸟", target: "后束与上背", equipment: "哑铃/器械", prescription: "3 组 x 12-15 次", rest: "60 秒", load: "轻重量，控制轨迹", cues: ["肩胛微收", "手臂向两侧打开", "颈部放松"], mistakes: ["耸肩", "甩动", "腰部代偿"], pose: "fly", muscles: ["back", "shoulders"] },

  { id: "leg-press", category: "legs", name: "腿举", target: "股四头肌与臀部", equipment: "腿举机", prescription: "4 组 x 10-12 次", rest: "120 秒", load: "用七到八成力，膝盖稳定", cues: ["脚掌踩稳", "膝盖对齐脚尖", "不要锁死膝盖"], mistakes: ["下放过深骨盆卷起", "膝盖内扣", "弹震"], pose: "squat", muscles: ["quadriceps", "glutes"] },
  { id: "leg-curl", category: "legs", name: "腿弯举", target: "腘绳肌", equipment: "腿弯举机", prescription: "3 组 x 10-12 次", rest: "75 秒", load: "顶峰收缩明显", cues: ["髋部贴稳", "脚跟向臀部卷", "慢速还原"], mistakes: ["腰部拱起", "速度过快", "脚尖乱摆"], pose: "hinge", muscles: ["hamstrings"] },
  { id: "leg-extension", category: "legs", name: "腿屈伸", target: "股四头肌", equipment: "腿屈伸机", prescription: "3 组 x 10-15 次", rest: "75 秒", load: "膝盖无痛范围", cues: ["顶峰停顿", "慢速下放", "背部贴垫"], mistakes: ["甩腿", "重量过大", "膝痛仍强做"], pose: "squat", muscles: ["quadriceps"] },
  { id: "bulgarian-split-squat", category: "legs", name: "保加利亚分腿蹲", target: "单腿力量与稳定", equipment: "训练凳/哑铃", prescription: "3 组 x 8 次/侧", rest: "90 秒", load: "用七成力，左右均衡", cues: ["前脚踩稳", "身体微前倾", "膝盖稳定"], mistakes: ["步距不合适", "骨盆歪斜", "膝盖内扣"], pose: "squat", muscles: ["quadriceps", "glutes"] },
  { id: "sumo-deadlift", category: "legs", name: "相扑硬拉", target: "髋部与大腿内侧", equipment: "杠铃", prescription: "4 组 x 5 次", rest: "150 秒", load: "用七到八成力，脊柱中立", cues: ["脚尖外展", "膝盖朝脚尖", "髋部靠近杠"], mistakes: ["背部弯曲", "臀部先起", "杠铃离身"], pose: "hinge", muscles: ["glutes", "hamstrings", "quadriceps"] },

  { id: "lateral-raise", category: "shoulders", name: "哑铃侧平举", target: "肩中束", equipment: "哑铃", prescription: "3 组 x 12-15 次", rest: "60 秒", load: "轻中重量，肩部发力", cues: ["手肘微屈", "抬到肩高", "慢速下放"], mistakes: ["耸肩", "甩动", "手腕高于肘太多"], pose: "press", muscles: ["shoulders"] },
  { id: "rear-delt-row", category: "shoulders", name: "后束划船", target: "肩后束", equipment: "哑铃/绳索", prescription: "3 组 x 10-12 次", rest: "60 秒", load: "动作控制优先", cues: ["肘向外打开", "肩胛轻收", "颈部放松"], mistakes: ["拉成背部划船", "耸肩", "重量过大"], pose: "row", muscles: ["shoulders", "back"] },
  { id: "arnold-press", category: "shoulders", name: "阿诺德推举", target: "肩部综合训练", equipment: "哑铃", prescription: "3 组 x 8-10 次", rest: "90 秒", load: "用七成力，路径稳定", cues: ["旋转平滑", "肋骨下沉", "顶端不锁死"], mistakes: ["腰部后仰", "耸肩", "动作过快"], pose: "press", muscles: ["shoulders", "triceps"] },

  { id: "bird-dog", category: "core", name: "鸟狗式", target: "核心抗旋转", equipment: "瑜伽垫", prescription: "3 组 x 8-10 次/侧", rest: "45 秒", load: "骨盆稳定优先", cues: ["腰背平稳", "对侧伸展", "慢速回收"], mistakes: ["骨盆旋转", "塌腰", "抬头过高"], pose: "deadbug", muscles: ["core", "glutes"] },
  { id: "pallof-press", category: "core", name: "绳索抗旋推", target: "核心抗旋转", equipment: "绳索/弹力带", prescription: "3 组 x 10-12 次/侧", rest: "45 秒", load: "躯干不旋转", cues: ["脚站稳", "双手向前推", "肋骨下沉"], mistakes: ["身体被拉转", "耸肩", "腰部代偿"], pose: "press", muscles: ["core"] },
  { id: "hollow-hold", category: "core", name: "空心支撑", target: "核心抗伸展", equipment: "瑜伽垫", prescription: "3 组 x 20-35 秒", rest: "45 秒", load: "腰背贴地优先", cues: ["肋骨下沉", "腿部逐步伸远", "均匀呼吸"], mistakes: ["腰部拱起", "憋气", "颈部紧张"], pose: "deadbug", muscles: ["core"] },

  { id: "elliptical", category: "cardio", name: "椭圆机有氧", target: "低冲击心肺", equipment: "椭圆机", prescription: "20-35 分钟", rest: "连续训练", load: "能持续说短句", cues: ["步幅稳定", "肩颈放松", "手脚协调"], mistakes: ["阻力过高", "身体晃动", "脚跟离踏板"], pose: "run", muscles: ["cardio", "quadriceps"] },
  { id: "jump-rope", category: "cardio", name: "跳绳", target: "协调与心肺", equipment: "跳绳", prescription: "8 轮 x 45 秒", rest: "45 秒", load: "轻快可控", cues: ["前脚掌轻落地", "手腕摇绳", "身体直立"], mistakes: ["跳太高", "肩膀紧张", "膝踝疼仍继续"], pose: "jump", muscles: ["calves", "cardio"] },

  { id: "broad-jump", category: "power", name: "立定跳远", target: "水平爆发力", equipment: "地面标线", prescription: "5 组 x 3 次", rest: "120 秒", load: "每次充分恢复", cues: ["摆臂带动", "髋膝踝伸展", "稳定落地"], mistakes: ["连续疲劳跳", "膝盖内扣", "落地僵硬"], pose: "jump", muscles: ["glutes", "quadriceps", "calves"] },
  { id: "kettlebell-swing", category: "power", name: "壶铃摆动", target: "髋部爆发力", equipment: "壶铃", prescription: "5 组 x 10 次", rest: "90 秒", load: "髋部发力，手臂放松", cues: ["髋部折叠", "快速伸髋", "壶铃到胸高"], mistakes: ["蹲举代偿", "腰拉壶铃", "过度后仰"], pose: "hinge", muscles: ["glutes", "hamstrings", "core"] },
  { id: "sprint-drill", category: "power", name: "短跑加速跑", target: "加速能力", equipment: "跑道", prescription: "6 组 x 20 米", rest: "120 秒", load: "每组质量优先", cues: ["身体前倾", "快速蹬伸", "手臂积极摆动"], mistakes: ["步幅过大", "抬头过早", "疲劳硬冲"], pose: "run", muscles: ["glutes", "calves", "cardio"] },

  { id: "cat-cow", category: "mobility", name: "猫牛式", target: "脊柱活动度", equipment: "瑜伽垫", prescription: "2 组 x 8-10 次", rest: "30 秒", load: "舒适活动范围", cues: ["一节一节活动", "配合呼吸", "肩膝稳定"], mistakes: ["动作过快", "耸肩", "疼痛中硬做"], pose: "stretch", muscles: ["back"] },
  { id: "worlds-greatest-stretch", category: "mobility", name: "弓步转体拉伸", target: "髋与胸椎灵活度", equipment: "瑜伽垫", prescription: "2 组 x 6 次/侧", rest: "30 秒", load: "轻中度牵拉", cues: ["前脚踩稳", "手肘靠近脚内侧", "胸椎旋转"], mistakes: ["前膝内扣", "腰椎硬扭", "屏息"], pose: "stretch", muscles: ["hips", "back"] },
  { id: "wall-slide", category: "mobility", name: "靠墙滑臂", target: "肩胛活动度", equipment: "墙面", prescription: "2 组 x 10-12 次", rest: "30 秒", load: "无痛范围内", cues: ["背部贴墙", "手臂慢上滑", "肋骨下沉"], mistakes: ["腰部拱起", "耸肩", "手腕离墙过多"], pose: "press", muscles: ["shoulders", "back"] }
);

const defaultProfile = {
  name: "陈晨",
  sex: "女性",
  age: 32,
  height: 168,
  weight: 68,
  bodyFat: 26,
  goal: ["减脂塑型"],
  experience: "初级",
  days: 4,
  duration: 60,
  targetAmount: 3,
  targetWeeks: 8,
  targetMetric: "体重、围度、训练完成度",
  available: "周一、周三、周五、周日",
  equipment: "健身房完整器械",
  napHabit: "无午休习惯",
  conditions: "无基础病，偶发久坐腰背酸胀。",
  injuries: "右膝曾轻微扭伤，避免高冲击跳跃。"
};

const state = {
  profile: { ...defaultProfile },
  selectedWorkout: 0,
  planMode: "week",
  libraryCategory: null,
  posturePhotos: {},
  records: readLocalRecords(),
  db: null,
  dbReady: false,
  planCustom: {}
};

const libraryCategories = [
  { id: "chest", name: "胸部动作" },
  { id: "back", name: "背部动作" },
  { id: "legs", name: "腿部动作" },
  { id: "shoulders", name: "肩部动作" },
  { id: "core", name: "核心动作" },
  { id: "cardio", name: "心肺动作" },
  { id: "power", name: "爆发专项" },
  { id: "mobility", name: "灵活度与康复" }
];

const gymVisualAssets = {
  "goblet-squat": {
    image: "./assets/exercises/高脚杯深蹲.gif",
    source: "./assets/exercises/高脚杯深蹲.gif"
  },
  "barbell-back-squat": {
    image: "https://gymvisual.com/img/p/1/0/2/8/3/10283.gif",
    source: "https://gymvisual.com/animated-gifs/3795-dumbbell-goblet-squat.html"
  },
  "bench-press": {
    image: "https://gymvisual.com/img/p/1/7/5/5/2/17552.gif",
    source: "https://gymvisual.com/animated-gifs/1519-barbell-bench-press.html"
  },
  "dumbbell-bench-press": {
    image: "https://gymvisual.com/img/p/1/7/5/5/2/17552.gif",
    source: "https://gymvisual.com/animated-gifs/1519-barbell-bench-press.html"
  },
  "incline-pushup": {
    image: "https://gymvisual.com/img/p/1/7/5/5/2/17552.gif",
    source: "https://gymvisual.com/animated-gifs/1519-barbell-bench-press.html"
  },
  "dead-bug": {
    image: "https://gymvisual.com/img/p/5/9/2/9/5929.gif",
    source: "https://gymvisual.com/animated-gifs/2688-dead-bug-version-2.html"
  },
  "bird-dog": {
    image: "https://gymvisual.com/img/p/5/9/2/9/5929.gif",
    source: "https://gymvisual.com/animated-gifs/2688-dead-bug-version-2.html"
  },
  "lunge": {
    image: "https://gymvisual.com/img/p/1/8/3/6/3/18363.gif",
    source: "https://gymvisual.com/animated-gifs/9933-dumbbell-goblet-split-squat.html"
  },
  "bulgarian-split-squat": {
    image: "https://gymvisual.com/img/p/1/8/3/6/3/18363.gif",
    source: "https://gymvisual.com/animated-gifs/9933-dumbbell-goblet-split-squat.html"
  },
  "leg-press": {
    image: "https://gymvisual.com/img/p/1/8/3/6/4/18364.gif",
    source: "https://gymvisual.com/animated-gifs/9934-dumbbell-goblet-box-squat.html"
  }
};

const localExerciseAssets = {
  "goblet-squat": "./assets/exercises/高脚杯深蹲.gif",
  "db-row": "./assets/exercises/单边哑铃划船.gif",
  "incline-pushup": "./assets/exercises/上斜俯卧撑.gif",
  "dead-bug": "./assets/exercises/死虫式.gif",
  "bike-interval": "./assets/exercises/功率车间歇.jpg",
  "hip-flexor-stretch": "./assets/exercises/髋屈肌拉伸.gif",
  "barbell-back-squat": "./assets/exercises/杠铃后蹲.gif",
  "romanian-deadlift": "./assets/exercises/罗马尼亚硬拉.gif",
  "bench-press": "./assets/exercises/杠铃卧推.gif",
  "overhead-press": "./assets/exercises/站姿推举.gif",
  "lat-pulldown": "./assets/exercises/高位下拉.gif",
  "seated-row": "./assets/exercises/坐姿划船.gif",
  "lunge": "./assets/exercises/反向箭步蹲.gif",
  "hip-thrust": "./assets/exercises/臀桥推髋.gif",
  "plank": "./assets/exercises/平板支撑.gif",
  "side-plank": "./assets/exercises/侧桥支撑.webp",
  "pullup": "./assets/exercises/引体向上.gif",
  "cable-face-pull": "./assets/exercises/绳索面拉.gif",
  "calf-raise": "./assets/exercises/提踵.gif",
  "treadmill-run": "./assets/exercises/短跑加速跑.gif",
  "rowing-machine": "./assets/exercises/划船机.gif",
  "box-jump": "./assets/exercises/跳箱.gif",
  "medicine-ball-throw": "./assets/exercises/药球前抛.gif",
  "band-external-rotation": "./assets/exercises/弹力带肩外旋.gif",
  "ankle-mobility": "./assets/exercises/踝关节活动度训练.gif",
  "thoracic-rotation": "./assets/exercises/胸椎旋转.gif",
  "dumbbell-bench-press": "./assets/exercises/哑铃卧推.gif",
  "flat-pushup": "./assets/exercises/标准俯卧撑.gif",
  "dumbbell-fly": "./assets/exercises/哑铃飞鸟.gif",
  "cable-fly": "./assets/exercises/绳索夹胸.gif",
  "pec-deck": "./assets/exercises/器械夹胸.gif",
  "close-grip-pushup": "./assets/exercises/窄距俯卧撑.gif",
  "barbell-row": "./assets/exercises/杠铃俯身划船.gif",
  "chest-supported-row": "./assets/exercises/俯卧支撑划船.gif",
  "straight-arm-pulldown": "./assets/exercises/直臂下压.gif",
  "reverse-fly": "./assets/exercises/反向飞鸟.gif",
  "leg-press": "./assets/exercises/腿举.gif",
  "leg-curl": "./assets/exercises/腿弯举.gif",
  "leg-extension": "./assets/exercises/腿屈伸.gif",
  "bulgarian-split-squat": "./assets/exercises/保加利亚分腿蹲.gif",
  "sumo-deadlift": "./assets/exercises/相扑硬拉.gif",
  "lateral-raise": "./assets/exercises/哑铃侧平举.gif",
  "rear-delt-row": "./assets/exercises/后束划船.gif",
  "arnold-press": "./assets/exercises/阿诺德推举.gif",
  "bird-dog": "./assets/exercises/鸟狗式.gif",
  "pallof-press": "./assets/exercises/绳索抗旋推.gif",
  "hollow-hold": "./assets/exercises/空心支撑.webp",
  "elliptical": "./assets/exercises/椭圆机有氧.gif",
  "jump-rope": "./assets/exercises/跳绳.gif",
  "broad-jump": "./assets/exercises/立定跳远.gif",
  "kettlebell-swing": "./assets/exercises/壶铃摆动.gif",
  "sprint-drill": "./assets/exercises/短跑加速跑.gif",
  "cat-cow": "./assets/exercises/猫牛式.gif",
  "worlds-greatest-stretch": "./assets/exercises/弓步转体拉伸.gif",
  "wall-slide": "./assets/exercises/靠墙滑臂.gif"
};

const gymVisualFallbackByCategory = {
  chest: "bench-press",
  back: "goblet-squat",
  legs: "goblet-squat",
  shoulders: "bench-press",
  core: "dead-bug",
  cardio: "goblet-squat",
  power: "lunge",
  mobility: "dead-bug"
};

const exerciseCategoryMap = {
  "goblet-squat": "legs",
  "db-row": "back",
  "incline-pushup": "chest",
  "dead-bug": "core",
  "bike-interval": "cardio",
  "hip-flexor-stretch": "mobility",
  "barbell-back-squat": "legs",
  "romanian-deadlift": "legs",
  "bench-press": "chest",
  "overhead-press": "shoulders",
  "lat-pulldown": "back",
  "seated-row": "back",
  "lunge": "legs",
  "hip-thrust": "legs",
  "plank": "core",
  "side-plank": "core",
  "pullup": "back",
  "cable-face-pull": "shoulders",
  "calf-raise": "legs",
  "treadmill-run": "cardio",
  "rowing-machine": "cardio",
  "box-jump": "power",
  "medicine-ball-throw": "power",
  "band-external-rotation": "mobility",
  "ankle-mobility": "mobility",
  "thoracic-rotation": "mobility"
};

exerciseCatalog.forEach((exercise) => {
  exercise.category = exercise.category || exerciseCategoryMap[exercise.id] || "mobility";
});

const planTemplates = [
  {
    day: "周一",
    title: "全身力量 A",
    focus: "深蹲模式、水平推、核心稳定",
    duration: 58,
    intensity: "中等",
    exercises: ["goblet-squat", "incline-pushup", "db-row", "dead-bug"]
  },
  {
    day: "周三",
    title: "心肺与体态",
    focus: "低冲击间歇、肩胛与髋部控制",
    duration: 52,
    intensity: "中等偏低",
    exercises: ["bike-interval", "db-row", "hip-flexor-stretch", "dead-bug"]
  },
  {
    day: "周五",
    title: "全身力量 B",
    focus: "下肢容量、背部拉力、推力补强",
    duration: 60,
    intensity: "中等偏高",
    exercises: ["goblet-squat", "db-row", "incline-pushup", "dead-bug"]
  },
  {
    day: "周日",
    title: "恢复与灵活度",
    focus: "主动恢复、关节活动度、轻有氧",
    duration: 42,
    intensity: "低",
    exercises: ["hip-flexor-stretch", "dead-bug", "bike-interval"]
  }
];

const warmups = [
  "动态热身 8 分钟：快走或功率车 5 分钟 + 肩髋环绕各 10 次",
  "激活 6 分钟：臀桥 2 组 x 12 次 + 弹力带划船 2 组 x 15 次",
  "专项准备：当天第一个力量动作使用 40%-60% 训练重量做 2 组递增热身"
];

const cooldowns = [
  "训练后 5 分钟低强度有氧，让心率逐步下降",
  "髋屈肌、胸小肌、腘绳肌各 40 秒 x 2 组",
  "记录完成度、疼痛评分和主观感受，用于下次自动调整体量"
];

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

const DB_NAME = "fitplan-coach-db";
const DB_VERSION = 1;
const STORE_RECORDS = "records";
const STORE_SETTINGS = "settings";
const STORE_PLAN_CUSTOM = "planCustom";

async function init() {
  await initDataLayer();
  bindNavigation();
  bindForm();
  bindPhotoPreview();
  applyProfileToForm();
  renderMetrics();
  renderPlan();
  renderLibrary();
  renderRecords();
  renderRecordEditor();
  renderNutritionSleep();
  renderAvailableSummary();
  updateStatus();
}

function readLocalRecords() {
  try {
    const parsed = JSON.parse(localStorage.getItem("fitplan-records") || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeLocalRecords(records) {
  localStorage.setItem("fitplan-records", JSON.stringify(records));
}

function readLocalProfile() {
  try {
    const parsed = JSON.parse(localStorage.getItem("fitplan-profile") || "null");
    return parsed && typeof parsed === "object" ? parsed : null;
  } catch {
    return null;
  }
}

function writeLocalProfile(profile) {
  localStorage.setItem("fitplan-profile", JSON.stringify(profile));
}

function openFitPlanDb() {
  if (!("indexedDB" in window)) return Promise.resolve(null);
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_RECORDS)) db.createObjectStore(STORE_RECORDS, { keyPath: "id" });
      if (!db.objectStoreNames.contains(STORE_SETTINGS)) db.createObjectStore(STORE_SETTINGS, { keyPath: "key" });
      if (!db.objectStoreNames.contains(STORE_PLAN_CUSTOM)) db.createObjectStore(STORE_PLAN_CUSTOM, { keyPath: "key" });
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

function idbStore(storeName, mode = "readonly") {
  if (!state.db) return null;
  return state.db.transaction(storeName, mode).objectStore(storeName);
}

function idbRequest(request) {
  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function idbGetAllRecords() {
  const store = idbStore(STORE_RECORDS);
  if (!store) return [];
  const records = await idbRequest(store.getAll());
  return records.sort((a, b) => (b.savedAt || b.id || "").localeCompare(a.savedAt || a.id || ""));
}

async function idbReplaceRecords(records) {
  const store = idbStore(STORE_RECORDS, "readwrite");
  if (!store) return;
  await idbRequest(store.clear());
  await Promise.all(records.map((record) => idbRequest(store.put(record))));
}

async function idbPutRecord(record) {
  const store = idbStore(STORE_RECORDS, "readwrite");
  if (!store) return;
  await idbRequest(store.put(record));
}

async function idbGetValue(storeName, key) {
  const store = idbStore(storeName);
  if (!store) return null;
  const result = await idbRequest(store.get(key));
  return result?.value ?? null;
}

async function idbSetValue(storeName, key, value) {
  const store = idbStore(storeName, "readwrite");
  if (!store) return;
  await idbRequest(store.put({ key, value, updatedAt: new Date().toISOString() }));
}

async function initDataLayer() {
  try {
    state.db = await openFitPlanDb();
    state.dbReady = Boolean(state.db);
    if (!state.dbReady) {
      const localProfile = readLocalProfile();
      if (localProfile) state.profile = normalizeProfile(localProfile);
      setDataStatus("当前浏览器不支持 IndexedDB，已使用 localStorage 兼容模式。", "warning");
      return;
    }

    const [savedRecords, savedProfile, savedPlanCustom] = await Promise.all([
      idbGetAllRecords(),
      idbGetValue(STORE_SETTINGS, "profile"),
      idbGetValue(STORE_PLAN_CUSTOM, "current")
    ]);
    const localRecords = readLocalRecords();
    if (savedRecords.length) {
      state.records = savedRecords;
    } else if (localRecords.length) {
      state.records = localRecords.map(normalizeRecord);
      await idbReplaceRecords(state.records);
      setDataStatus(`已从 localStorage 迁移 ${state.records.length} 条训练记录到 IndexedDB，原 localStorage 已保留。`, "success");
    }
    if (state.records.length) writeLocalRecords(state.records);
    const localProfile = readLocalProfile();
    if (savedProfile) {
      state.profile = normalizeProfile(savedProfile);
      writeLocalProfile(buildProfileSnapshot());
    } else if (localProfile) {
      state.profile = normalizeProfile(localProfile);
      await idbSetValue(STORE_SETTINGS, "profile", buildProfileSnapshot());
      setDataStatus("已从 localStorage.fitplan-profile 恢复用户档案，并迁移到 IndexedDB。", "success");
    }
    if (savedPlanCustom) applyPlanCustom(savedPlanCustom);
    if (savedProfile || localProfile || savedPlanCustom) await persistPlanCustom();
  } catch (error) {
    console.warn("IndexedDB 初始化失败：", error);
    state.dbReady = false;
    const localProfile = readLocalProfile();
    if (localProfile) state.profile = normalizeProfile(localProfile);
    setDataStatus("IndexedDB 初始化失败，当前继续使用 localStorage 兼容备份。", "warning");
  }
}

function bindNavigation() {
  $$(".nav-item").forEach((button) => {
    button.addEventListener("click", () => {
      $$(".nav-item").forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      showView(button.dataset.view);
    });
  });
}

function showView(view) {
  const titles = {
    profile: "用户建档",
    schedule: "阶段计划",
    library: "基础动作库",
    records: "训练记录"
  };
  $$(".view").forEach((section) => section.classList.remove("is-visible"));
  $(`#${view}View`).classList.add("is-visible");
  $("#pageTitle").textContent = titles[view];
}

function bindForm() {
  $("#intakeForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    syncProfileFromForm(event.currentTarget);
    await persistUserSettings();
    await persistPlanCustom();
    setDataStatus("用户档案和生成后的训练计划已保存，下次打开会自动恢复。", "success");
    showView("schedule");
    $$(".nav-item").forEach((item) => item.classList.toggle("is-active", item.dataset.view === "schedule"));
  });

  $("#intakeForm").addEventListener("input", (event) => {
    if (event.target.matches("input, textarea, select")) syncProfileFromForm(event.currentTarget);
  });

  $("#intakeForm").addEventListener("change", (event) => {
    if (event.target.matches("input, textarea, select")) syncProfileFromForm(event.currentTarget);
  });

  $("#exerciseSearch").addEventListener("input", renderLibrary);
  $("#saveRecord").addEventListener("click", saveRecord);
  $("#addRecordExercise").addEventListener("click", addRecordExercise);
  $("#exportBackup").addEventListener("click", exportBackup);
  $("#importBackupInput").addEventListener("change", importBackup);
  $("#recordEditor").addEventListener("input", () => {
    renderCalorieEstimate();
    renderNutritionSleep();
  });
  $("#recordEditor").addEventListener("change", () => {
    renderCalorieEstimate();
    renderNutritionSleep();
  });
  $$(".segmented [data-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      state.planMode = button.dataset.mode;
      $$(".segmented [data-mode]").forEach((item) => item.classList.toggle("is-selected", item === button));
      persistPlanCustom();
      renderPlan();
    });
  });
}

function syncProfileFromForm(form) {
  const formData = new FormData(form);
  state.profile = Object.fromEntries(formData.entries());
  state.profile.goal = formData.getAll("goal");
  state.profile.available = formData.getAll("available");
  if (!state.profile.goal.length) state.profile.goal = ["减脂塑型"];
  if (!state.profile.available.length) state.profile.available = ["周一"];
  ["age", "height", "weight", "bodyFat", "days", "duration", "targetAmount", "targetWeeks"].forEach((key) => {
    state.profile[key] = Number(state.profile[key]);
  });
  renderAvailableSummary();
  updateStatus();
  renderMetrics();
  renderPlan();
  renderRecordEditor();
  renderNutritionSleep();
  persistUserSettings();
  persistPlanCustom();
}

function normalizeProfile(profile = {}) {
  const source = profile.profile && typeof profile.profile === "object" ? { ...profile.profile, ...profile } : profile;
  return {
    ...defaultProfile,
    ...source,
    goal: Array.isArray(source.goal) ? source.goal : [source.goal || defaultProfile.goal[0]].filter(Boolean),
    available: Array.isArray(source.available)
      ? source.available
      : String(source.available || defaultProfile.available).split(/[、,，\s]+/).filter(Boolean)
  };
}

function applyProfileToForm() {
  const form = $("#intakeForm");
  if (!form) return;
  const profile = normalizeProfile(state.profile);
  Object.entries(profile).forEach(([key, value]) => {
    if (key === "goal" || key === "available") return;
    const field = form.elements[key];
    if (field) field.value = value;
  });
  $$("input[name='goal']").forEach((input) => {
    input.checked = profile.goal.includes(input.value);
  });
  $$("input[name='available']").forEach((input) => {
    input.checked = profile.available.includes(input.value);
  });
  state.profile = profile;
  renderAvailableSummary();
}

function normalizeRecord(record = {}) {
  return {
    id: record.id || (window.crypto?.randomUUID ? window.crypto.randomUUID() : String(Date.now())),
    date: record.date || new Date().toLocaleDateString("zh-CN"),
    workout: record.workout || "未命名训练",
    duration: Number(record.duration) || Number(state.profile.duration) || 0,
    calories: Number(record.calories) || 0,
    sets: Array.isArray(record.sets) ? record.sets : [],
    savedAt: record.savedAt || new Date().toISOString()
  };
}

function applyPlanCustom(planCustom = {}) {
  state.planCustom = { ...planCustom };
  if (typeof planCustom.selectedWorkout === "number") state.selectedWorkout = planCustom.selectedWorkout;
  if (planCustom.planMode) state.planMode = planCustom.planMode;
}

async function persistUserSettings() {
  const snapshot = buildProfileSnapshot();
  writeLocalProfile(snapshot);
  if (!state.dbReady) return;
  try {
    await idbSetValue(STORE_SETTINGS, "profile", snapshot);
  } catch (error) {
    console.warn("用户设置保存失败：", error);
    setDataStatus("用户设置保存到 IndexedDB 失败，但已保留 localStorage.fitplan-profile 兼容备份。", "warning");
  }
}

function buildProfileSnapshot() {
  const profile = normalizeProfile(state.profile);
  return {
    ...profile,
    generatedPlan: getAdjustedPlan().map((workout) => ({
      day: workout.day,
      title: workout.title,
      focus: workout.focus,
      duration: workout.duration,
      intensity: workout.intensity,
      exercises: [...workout.exercises]
    })),
    savedAt: new Date().toISOString()
  };
}

async function persistPlanCustom() {
  state.planCustom = {
    selectedWorkout: state.selectedWorkout,
    planMode: state.planMode,
    available: state.profile.available,
    generatedPlan: getAdjustedPlan(),
    updatedAt: new Date().toISOString()
  };
  if (!state.dbReady) return;
  try {
    await idbSetValue(STORE_PLAN_CUSTOM, "current", state.planCustom);
  } catch (error) {
    console.warn("训练计划自定义数据保存失败：", error);
  }
}

function setDataStatus(message, type = "info") {
  const target = $("#dataStatus");
  if (!target) return;
  target.textContent = message;
  target.dataset.type = type;
}

function bindPhotoPreview() {
  $$(".posture-photo-input").forEach((input) => input.addEventListener("change", (event) => {
    const [file] = event.target.files;
    if (!file) return;
    const url = URL.createObjectURL(file);
    const angle = event.target.dataset.angle;
    $(`#${angle}Preview`).src = url;
    event.target.closest(".posture-slot")?.classList.add("has-photo");
    analyzePosturePhoto(url, file, angle);
  }));
}

function updateStatus() {
  $("#statusGoal").textContent = getGoalText(state.profile.goal);
  $("#statusDays").textContent = state.profile.days;
  $("#statusDuration").textContent = state.profile.duration;
}

function getGoalText(goals = []) {
  const list = Array.isArray(goals) ? goals : [goals].filter(Boolean);
  if (!list.length) return "未设置";
  if (list.length === 1) return list[0];
  return `${list[0]}等 ${list.length} 项`;
}

function renderAvailableSummary() {
  const summary = $("#availableSummary");
  if (!summary) return;
  const days = Array.isArray(state.profile.available) ? state.profile.available : String(state.profile.available || "").split(/[、,，\s]+/).filter(Boolean);
  summary.textContent = days.length ? days.join("、") : "请选择可训练日期";
}

function analyzePosturePhoto(url, file, angle) {
  const image = new Image();
  image.onload = () => {
    state.posturePhotos[angle] = inspectPostureImage(image, file, angle);
    renderPostureAnalysis();
  };
  image.onerror = () => {
    $("#photoAnalysis").innerHTML = "<strong>照片分析</strong><p>图片读取失败，请更换 jpg、png 或 heic 转码后的图片。</p>";
  };
  image.src = url;
}

function inspectPostureImage(image, file, angle) {
  const canvas = document.createElement("canvas");
  const size = 128;
  canvas.width = size;
  canvas.height = size;
  const context = canvas.getContext("2d", { willReadFrequently: true });
  context.drawImage(image, 0, 0, size, size);
  const { data } = context.getImageData(0, 0, size, size);
  let luminance = 0;
  let contrastSum = 0;
  let edgeScore = 0;
  let horizontalMass = 0;
  let verticalMass = 0;
  let prev = null;
  for (let index = 0; index < data.length; index += 4) {
    const pixel = index / 4;
    const x = pixel % size;
    const y = Math.floor(pixel / size);
    const current = 0.2126 * data[index] + 0.7152 * data[index + 1] + 0.0722 * data[index + 2];
    luminance += current;
    horizontalMass += Math.abs(x - size / 2) * (255 - current);
    verticalMass += Math.abs(y - size / 2) * (255 - current);
    if (prev !== null) {
      const diff = Math.abs(current - prev);
      contrastSum += diff;
      if (diff > 24) edgeScore += 1;
    }
    prev = current;
  }
  const pixels = data.length / 4;
  const brightness = luminance / pixels;
  const contrast = contrastSum / pixels;
  const aspectRatio = image.width / image.height;
  const edgeRatio = edgeScore / pixels;
  const checks = [
    { label: "亮度", pass: brightness > 55 && brightness < 210, value: `${Math.round(brightness)}/255` },
    { label: "清晰度", pass: edgeRatio > 0.08, value: edgeRatio > 0.08 ? "可用" : "偏模糊" },
    { label: "对比度", pass: contrast > 8, value: contrast.toFixed(1) },
    { label: "全身构图", pass: aspectRatio > 0.35 && aspectRatio < 1.4, value: `${image.width}x${image.height}` }
  ];
  const stabilityIndex = Math.max(0, Math.min(100, 100 - Math.abs(horizontalMass - verticalMass) / 52000));
  return {
    angle,
    fileName: file.name,
    sizeKb: Math.round(file.size / 1024),
    checks,
    passed: checks.filter((item) => item.pass).length,
    stabilityIndex
  };
}

function renderPostureAnalysis() {
  const labels = { front: "正面", side: "侧面", back: "背面" };
  const required = ["front", "side", "back"];
  const uploaded = required.filter((angle) => state.posturePhotos[angle]);
  const complete = uploaded.length === required.length;
  const allChecks = uploaded.flatMap((angle) => state.posturePhotos[angle].checks);
  const passRate = allChecks.length ? allChecks.filter((item) => item.pass).length / allChecks.length : 0;
  const usable = complete && passRate >= 0.75;
  const angleCards = required.map((angle) => {
    const item = state.posturePhotos[angle];
    if (!item) return `<li>${labels[angle]}：待上传</li>`;
    return `<li>${labels[angle]}：${item.fileName}，${item.passed}/4 项通过，体态线索稳定度 ${Math.round(item.stabilityIndex)}%</li>`;
  }).join("");
  const conclusion = usable
    ? buildPostureConclusion()
    : `当前只完成 ${uploaded.length}/3 个角度，或照片质量未达阈值。系统不会输出具体体态结论，请补齐标准角度并保证全身入镜、光线均匀、背景简洁。`;
  $("#photoAnalysis").innerHTML = `
    <strong>三视角体态分析</strong>
    <p>${conclusion}</p>
    <ul class="analysis-list">${angleCards}</ul>
    <div class="analysis-protocol">
      <strong>分析算法流程</strong>
      <span>质量门控 → 人体分割 → 关键点识别 → 正面左右对称评估 → 侧面耳肩髋膝踝垂线评估 → 背面肩胛与骨盆水平评估 → 仅在置信度达标时输出建议。</span>
    </div>
  `;
}

function buildPostureConclusion() {
  const averageStability = ["front", "side", "back"].reduce((sum, angle) => sum + state.posturePhotos[angle].stabilityIndex, 0) / 3;
  const advice = [];
  if (averageStability < 72) advice.push("建议优先安排肩胛控制、髋部稳定和核心抗伸展训练");
  else advice.push("照片质量已满足基础体态评估，可进入肩髋膝踝关键点复核");
  if (state.profile.injuries && !state.profile.injuries.includes("无")) advice.push("因存在伤病记录，训练计划应降低高冲击和疼痛诱发动作");
  advice.push("正式产品需接入人体关键点模型并保留人工复核入口，避免把低置信度照片误判为真实体态问题");
  return advice.join("；") + "。";
}

function renderMetrics() {
  const bmi = getBmi();
  const riskFlags = [
    state.profile.conditions && !state.profile.conditions.includes("无"),
    state.profile.injuries && !state.profile.injuries.includes("无"),
    state.profile.age >= 55
  ].filter(Boolean).length;
  const readiness = Math.max(58, Math.min(92, 86 - riskFlags * 8 - Math.max(0, bmi - 28) * 1.3));
  $("#readinessScore").textContent = Math.round(readiness);
  $(".score-ring").style.background = `radial-gradient(circle at center, white 57%, transparent 58%), conic-gradient(var(--green) 0 ${readiness}%, #eef0f3 ${readiness}% 100%)`;

  const volume = getVolumeGuidance(readiness);
  const bmiAdvice = getBmiAdvice(bmi);
  $("#bmiValue").textContent = bmi.toFixed(1);
  $("#bmiAdvice").textContent = bmiAdvice;
  renderGoalFeedback();
  renderGoalFeasibility();
  renderHeartZones();
  $("#metricsList").innerHTML = [
    `身体质量指数 ${bmi.toFixed(1)}：${bmiAdvice}`,
    `单次体量：${volume}`,
    `安全提醒：${riskFlags ? "存在需关注因素，避免疼痛中硬撑" : "暂无明显风险标记"}`,
    `计划周期：先以 4 周微周期验证，再进入月度调整`
  ].map((item) => `<li>${item}</li>`).join("");
}

function renderHeartZones() {
  const age = Number(state.profile.age) || 30;
  const maxHeartRate = Math.round(208 - 0.7 * age);
  const zones = [
    { name: "热身恢复", range: [0.5, 0.6], color: "#4285f4", fill: 36 },
    { name: "燃脂区间", range: [0.6, 0.7], color: "#34a853", fill: 52 },
    { name: "有氧耐力", range: [0.7, 0.8], color: "#fbbc05", fill: 68 },
    { name: "无氧提升", range: [0.8, 0.9], color: "#ff8c00", fill: 84 },
    { name: "最大强度", range: [0.9, 1], color: "#ea4335", fill: 100 }
  ];
  $("#heartRateSummary").textContent = `${age} 岁估算最大心率约 ${maxHeartRate} 次/分钟，训练中以智能手表实测为准。`;
  $("#heartZoneBars").innerHTML = zones.map((zone) => {
    const low = Math.round(maxHeartRate * zone.range[0]);
    const high = Math.round(maxHeartRate * zone.range[1]);
    return `
      <div class="heart-zone-row">
        <span>${zone.name}</span>
        <div class="heart-zone-track">
          <i style="background:${zone.color}; width:${zone.fill}%"></i>
        </div>
        <strong style="color:${zone.color}">${low}-${high}</strong>
      </div>
    `;
  }).join("");
}

function getBmi() {
  const height = Number(state.profile.height) || 1;
  const weight = Number(state.profile.weight) || 0;
  return weight / ((height / 100) ** 2);
}

function getBmiAdvice(bmi) {
  if (bmi < 18.5) return "偏低，优先提高能量摄入与基础力量";
  if (bmi < 24) return "正常范围，适合常规渐进训练";
  if (bmi < 28) return "超重范围，建议减脂与力量训练并行";
  return "肥胖风险范围，建议低冲击有氧与渐进力量并行";
}

function renderGoalFeedback() {
  const feedback = $("#goalFeedback");
  if (!feedback) return;
  const goals = Array.isArray(state.profile.goal) ? state.profile.goal : [state.profile.goal].filter(Boolean);
  const hasFatLoss = goals.includes("减脂塑型");
  const hasMassGain = goals.includes("增肌增重");
  const hasRehab = goals.some((goal) => goal.includes("恢复") || goal.includes("疼痛") || goal.includes("稳定性"));
  const hasPower = goals.some((goal) => goal.includes("最大力量") || goal.includes("弹跳") || goal.includes("速度") || goal.includes("投掷"));
  const bmi = getBmi();
  let text = `目标组合可行：当前选择 ${goals.join("、")}。`;
  let warning = false;
  if (hasFatLoss && hasMassGain) {
    warning = true;
    text = bmi >= 24
      ? "目标组合需要分阶段执行：体脂较高时可先以减脂塑型和力量保留为主，待体重与围度下降后进入增肌增重阶段；同一阶段不宜同时追求大幅热量缺口和快速增重。"
      : "目标组合存在生理约束：减脂塑型通常需要能量缺口，增肌增重通常需要能量盈余。建议按 4-8 周阶段切换，或采用体态重组的小幅能量平衡策略。";
  } else if (hasRehab && hasPower) {
    warning = true;
    text = "目标组合需降级排序：康复与疼痛控制优先，专项爆发力训练只能在无痛、关节稳定和动作质量达标后逐步加入。";
  } else if (goals.length > 3) {
    warning = true;
    text = "目标较多，建议设置主目标和次目标。系统会优先保证安全、恢复和基础体能，再安排专项提升。";
  }
  feedback.textContent = text;
  feedback.classList.toggle("is-warning", warning);
}

function renderGoalFeasibility() {
  const target = $("#goalFeasibility");
  if (!target) return;
  const goals = Array.isArray(state.profile.goal) ? state.profile.goal : [state.profile.goal].filter(Boolean);
  const amount = Math.abs(Number(state.profile.targetAmount) || 0);
  const weeks = Math.max(1, Number(state.profile.targetWeeks) || 1);
  const weight = Number(state.profile.weight) || 60;
  const weeklyChange = amount / weeks;
  const weeklyRate = weeklyChange / weight;
  const metric = state.profile.targetMetric || "体重、围度、训练完成度";
  let level = "合理";
  let message = `阶段指标：${amount || "未填写"} 单位 / ${weeks} 周，重点观察 ${metric}。`;

  if (goals.includes("减脂塑型")) {
    if (!amount) {
      message = `减脂塑型建议补充目标变化量，例如 8-12 周下降当前体重的 3%-6%，并同步观察腰围和力量表现。`;
    } else if (weeklyRate > 0.01) {
      level = "偏激进";
      message = `当前减脂速度约每周 ${weeklyChange.toFixed(1)} 千克，超过体重的 1%。建议延长到 ${Math.ceil(amount / (weight * 0.006))} 周以上，避免过大热量缺口影响恢复和肌肉保留。`;
    } else if (weeklyRate < 0.0025) {
      message = `当前减脂速度较温和，适合长期保持；可用围度、照片和训练表现共同判断，不只看体重。`;
    } else {
      message = `减脂目标可行：约每周 ${weeklyChange.toFixed(1)} 千克，适合配合力量训练与小幅热量缺口执行。`;
    }
  } else if (goals.includes("增肌增重")) {
    if (weeklyRate > 0.006) {
      level = "偏激进";
      message = `当前增重速度约每周 ${weeklyChange.toFixed(1)} 千克，脂肪增长风险较高。建议控制在每周体重的 0.25%-0.5%，并以围度和力量进步验证。`;
    } else {
      message = `增肌增重目标可行：保持小幅热量盈余，重点观察训练重量、围度和体脂变化。`;
    }
  } else if (goals.some((goal) => goal.includes("跑步") || goal.includes("弹跳") || goal.includes("球类") || goal.includes("中考"))) {
    message = `专项目标需量化成绩：建议在“重点指标”填写配速、立定跳远距离、投掷距离或考试项目分数，每 2-4 周测试一次。`;
  } else if (goals.some((goal) => goal.includes("恢复") || goal.includes("疼痛") || goal.includes("稳定"))) {
    message = `康复类目标以无痛活动范围、左右差异、稳定性和日常疼痛评分为指标；若疼痛加重，需要降低体量并由专业人士复核。`;
  }

  target.textContent = `${level}：${message}`;
  target.classList.toggle("is-warning", level === "偏激进");
}

function getVolumeGuidance(score) {
  if (score < 68) return "40-50 分钟，动作 4-5 个，保留 3 次余力";
  if (score < 82) return "50-65 分钟，动作 5-6 个，保留 2 次余力";
  return "60-75 分钟，动作 6 个以内，可加入少量高强度段";
}

function getAdjustedPlan() {
  const allowedDays = Array.isArray(state.profile.available)
    ? state.profile.available
    : String(state.profile.available || "").split(/[、,，\s]+/).filter(Boolean);
  const dayCount = Math.max(1, Math.min(Number(state.profile.days) || 4, planTemplates.length));
  return planTemplates.slice(0, dayCount).map((workout, index) => ({
    ...workout,
    day: allowedDays[index] || workout.day,
    duration: Math.min(workout.duration, Number(state.profile.duration) || workout.duration)
  }));
}

function renderPlan() {
  const plan = getAdjustedPlan();
  if (state.selectedWorkout >= plan.length) state.selectedWorkout = 0;
  $("#weekGrid").classList.toggle("is-month", state.planMode === "month");
  if (state.planMode === "month") {
    $("#weekGrid").innerHTML = renderMonthPlan(plan);
    renderWorkoutDetail();
    return;
  }
  $("#weekGrid").innerHTML = plan.map((workout, index) => `
    <button class="workout-row ${index === state.selectedWorkout ? "is-selected" : ""}" type="button" data-index="${index}">
      <span class="day-pill">${workout.day}</span>
      <span>
        <h3>${workout.title}</h3>
        <p>${workout.focus}</p>
      </span>
      <span class="tag-list">
        <span class="tag">${workout.duration} 分钟</span>
        <span class="tag">${workout.intensity}</span>
      </span>
    </button>
  `).join("");
  $$(".workout-row").forEach((row) => {
    row.addEventListener("click", () => {
      state.selectedWorkout = Number(row.dataset.index);
      persistPlanCustom();
      renderPlan();
      renderRecordEditor();
    });
  });
  renderWorkoutDetail();
}

function renderMonthPlan(plan) {
  const progressions = [
    "适应周：建立动作质量，用六到七成力",
    "容量周：主动作每项增加 1 组或 5%-8% 总量",
    "强化周：关键动作提高负荷，保持动作稳定",
    "调整周：降低 20%-30% 体量，复盘疼痛和完成度"
  ];
  return progressions.map((title, weekIndex) => `
    <article class="month-card">
      <h3>第 ${weekIndex + 1} 周</h3>
      <p>${title}</p>
      ${plan.map((workout) => `
        <div class="month-day">
          <strong>${workout.day} · ${workout.title}</strong>
          <span>${workout.duration} 分钟 · ${workout.intensity} · ${workout.focus}</span>
        </div>
      `).join("")}
    </article>
  `).join("");
}

function renderWorkoutDetail() {
  const workout = getAdjustedPlan()[state.selectedWorkout];
  const exercises = workout.exercises.map((id) => exerciseCatalog.find((item) => item.id === id));
  $("#workoutDetail").innerHTML = `
    <div class="detail-header">
      <span class="tag">${workout.day}</span>
      <h2>${workout.title}</h2>
      <p>${workout.focus}。本课控制在 ${workout.duration} 分钟内，疼痛评分超过 3/10 时停止相关动作。</p>
    </div>
    <section>
      <h2>训练前热身</h2>
      <ul class="warmup-list">${warmups.map((item) => `<li>${item}</li>`).join("")}</ul>
    </section>
    <section>
      <h2>主训练</h2>
      <div class="exercise-list">${exercises.map(renderExerciseCard).join("")}</div>
    </section>
    <section>
      <h2>训练后拉伸</h2>
      <ul class="warmup-list">${cooldowns.map((item) => `<li>${item}</li>`).join("")}</ul>
    </section>
  `;
  hydratePoseSvgs($("#workoutDetail"));
}

function renderExerciseCard(exercise) {
  return `
    <article class="exercise-card">
      ${renderExercisePhoto(exercise)}
      <h3>${exercise.name}</h3>
      <p>${exercise.target} · ${exercise.equipment}</p>
      <div class="tag-list">
        <span class="tag">${exercise.prescription}</span>
        <span class="tag">休息 ${exercise.rest}</span>
      </div>
      <p><strong>重量选择：</strong>${exercise.load}</p>
      <p><strong>关键提示：</strong>${exercise.cues.join("；")}</p>
      <strong class="mistake-title">常见错误提示</strong>
      <ul class="mistake-list">${exercise.mistakes.map((mistake) => `<li>${mistake}</li>`).join("")}</ul>
    </article>
  `;
}

function renderExercisePhoto(exercise) {
  const localAsset = localExerciseAssets[exercise.id];
  const fallbackId = gymVisualFallbackByCategory[exercise.category] || "goblet-squat";
  const asset = gymVisualAssets[exercise.id] || gymVisualAssets[fallbackId];
  const image = localAsset || asset.image;
  const source = localAsset || asset.source;
  const muscles = getMuscleNames(exercise.muscles || []);
  return `
    <figure class="exercise-photo">
      <img src="${image}" alt="${exercise.name}动作素材" loading="lazy" />
      <figcaption>
        <strong>${localAsset ? "本地动作素材" : "Basic grey 动图"}</strong>
        <span>${muscles}</span>
      </figcaption>
      <a class="asset-link" href="${source}" target="_blank" rel="noreferrer">${localAsset ? "本地" : "Gym Visual"}</a>
    </figure>
  `;
}

function getMuscleNames(muscles) {
  const names = {
    chest: "胸部",
    back: "背部",
    shoulders: "肩部",
    triceps: "肱三头肌",
    biceps: "肱二头肌",
    core: "核心",
    glutes: "臀部",
    quadriceps: "大腿前侧",
    hamstrings: "大腿后侧",
    calves: "小腿",
    hips: "髋部",
    cardio: "心肺"
  };
  return muscles.map((muscle) => names[muscle] || muscle).join("、") || "全身协调";
}

function renderLibrary() {
  const keyword = ($("#exerciseSearch")?.value || "").trim().toLowerCase();
  if (!state.libraryCategory && !keyword) {
    $("#exerciseLibrary").innerHTML = `
      <div class="library-categories">
        ${libraryCategories.map((category) => {
          const count = getExercisesByCategory(category.id).length;
          return `
            <button class="category-card" data-category="${category.id}" type="button">
              <strong>${category.name}</strong>
              <span>${getCategoryHint(category.id)}</span>
              <span>${count} 个动作</span>
            </button>
          `;
        }).join("")}
      </div>
    `;
    $$(".category-card").forEach((card) => {
      card.addEventListener("click", () => {
        state.libraryCategory = card.dataset.category;
        renderLibrary();
      });
    });
    return;
  }

  const source = state.libraryCategory ? getExercisesByCategory(state.libraryCategory) : exerciseCatalog;
  const filtered = source.filter((exercise) => {
    const text = `${exercise.name} ${exercise.target} ${exercise.equipment} ${(exercise.muscles || []).join(" ")}`.toLowerCase();
    return text.includes(keyword);
  });
  const category = libraryCategories.find((item) => item.id === state.libraryCategory);
  $("#exerciseLibrary").innerHTML = `
    <div class="library-toolbar">
      <div>
        <h3>${category ? category.name : "搜索结果"}</h3>
        <p>${category ? getCategoryHint(category.id) : "按关键词匹配动作名称、器械和肌群"}</p>
      </div>
      ${state.libraryCategory ? '<button class="small-button" id="backToCategories" type="button">返回分类</button>' : ""}
    </div>
    <div class="exercise-library">${filtered.map(renderExerciseCard).join("")}</div>
  `;
  $("#backToCategories")?.addEventListener("click", () => {
    state.libraryCategory = null;
    $("#exerciseSearch").value = "";
    renderLibrary();
  });
  hydratePoseSvgs($("#exerciseLibrary"));
}

function getExercisesByCategory(categoryId) {
  return exerciseCatalog.filter((exercise) => exercise.category === categoryId);
}

function getCategoryHint(categoryId) {
  const names = getExercisesByCategory(categoryId).slice(0, 4).map((exercise) => exercise.name);
  return names.join("、");
}

function renderPose(exercise) {
  return `<div class="pose-host" data-pose="${exercise.pose}" data-muscles="${(exercise.muscles || []).join(",")}"></div>`;
}

function hydratePoseSvgs(scope = document) {
  scope.querySelectorAll(".pose-host").forEach((host) => {
    const template = $("#exerciseFrameTemplate").content.cloneNode(true);
    const svg = template.querySelector("svg");
    const poses = buildPose(host.dataset.pose);
    svg.querySelector(".muscles").innerHTML = buildMuscleHighlights(host.dataset.muscles);
    ["one", "three"].forEach((key) => {
      svg.querySelector(`.pose-${key}`).innerHTML = poses[key];
    });
    host.replaceWith(svg);
  });
}

function buildMuscleHighlights(muscleText = "") {
  const muscles = muscleText.split(",").filter(Boolean);
  const coords = {
    chest: [[58, 45], [116, 45]],
    back: [[58, 48], [116, 48]],
    shoulders: [[48, 43], [106, 43]],
    triceps: [[72, 55], [130, 55]],
    biceps: [[48, 56], [106, 56]],
    core: [[58, 61], [116, 61]],
    glutes: [[58, 72], [116, 72]],
    quadriceps: [[52, 82], [110, 82]],
    hamstrings: [[64, 82], [122, 82]],
    calves: [[52, 91], [110, 91]],
    hips: [[57, 71], [115, 71]],
    cardio: [[58, 52], [116, 52]]
  };
  return muscles.flatMap((muscle) => {
    const points = coords[muscle] || [];
    return points.map(([cx, cy]) => `<ellipse class="muscle-highlight" cx="${cx}" cy="${cy}" rx="7" ry="5"></ellipse>`);
  }).join("");
}

function body(x, y, scale, armAngle = 0, legBend = 0) {
  const headY = y - 28 * scale;
  const torsoTop = y - 18 * scale;
  const torsoBottom = y + 18 * scale;
  const leftArmY = y + armAngle * scale;
  const rightArmY = y + armAngle * scale;
  const footY = y + (42 + legBend) * scale;
  const parts = [
    `<ellipse class="body-part" cx="${x}" cy="${headY}" rx="${8 * scale}" ry="${9 * scale}"></ellipse>`,
    `<path class="body-part" d="M ${x - 9 * scale} ${torsoTop} C ${x - 15 * scale} ${y - 4 * scale}, ${x - 13 * scale} ${y + 10 * scale}, ${x - 7 * scale} ${torsoBottom} L ${x + 7 * scale} ${torsoBottom} C ${x + 13 * scale} ${y + 10 * scale}, ${x + 15 * scale} ${y - 4 * scale}, ${x + 9 * scale} ${torsoTop} Z"></path>`,
    `<path class="body-part" d="M ${x - 8 * scale} ${y - 5 * scale} C ${x - 18 * scale} ${y + 3 * scale}, ${x - 21 * scale} ${leftArmY}, ${x - 17 * scale} ${leftArmY + 4 * scale} C ${x - 10 * scale} ${leftArmY - 1 * scale}, ${x - 5 * scale} ${y + 4 * scale}, ${x - 2 * scale} ${y - 2 * scale} Z"></path>`,
    `<path class="body-part" d="M ${x + 8 * scale} ${y - 5 * scale} C ${x + 18 * scale} ${y + 3 * scale}, ${x + 21 * scale} ${rightArmY}, ${x + 17 * scale} ${rightArmY + 4 * scale} C ${x + 10 * scale} ${rightArmY - 1 * scale}, ${x + 5 * scale} ${y + 4 * scale}, ${x + 2 * scale} ${y - 2 * scale} Z"></path>`,
    `<path class="body-part" d="M ${x - 5 * scale} ${torsoBottom} C ${x - 13 * scale} ${y + 29 * scale}, ${x - 20 * scale} ${footY - 3 * scale}, ${x - 16 * scale} ${footY + 2 * scale} C ${x - 7 * scale} ${footY - 4 * scale}, ${x - 1 * scale} ${y + 30 * scale}, ${x + 1 * scale} ${torsoBottom} Z"></path>`,
    `<path class="body-part" d="M ${x + 5 * scale} ${torsoBottom} C ${x + 13 * scale} ${y + 29 * scale}, ${x + 20 * scale} ${footY - 3 * scale}, ${x + 16 * scale} ${footY + 2 * scale} C ${x + 7 * scale} ${footY - 4 * scale}, ${x + 1 * scale} ${y + 30 * scale}, ${x - 1 * scale} ${torsoBottom} Z"></path>`,
    `<path class="muscle-line" d="M ${x - 5 * scale} ${torsoTop + 4 * scale} C ${x - 2 * scale} ${y}, ${x - 2 * scale} ${y + 10 * scale}, ${x - 4 * scale} ${torsoBottom - 2 * scale}"></path>`,
    `<path class="muscle-line" d="M ${x + 5 * scale} ${torsoTop + 4 * scale} C ${x + 2 * scale} ${y}, ${x + 2 * scale} ${y + 10 * scale}, ${x + 4 * scale} ${torsoBottom - 2 * scale}"></path>`
  ];
  return parts.join("");
}

function horizontalBody(x, y, scale, drop = 0) {
  const torsoY = y + drop * scale;
  const head = `<ellipse class="body-part" cx="${x - 27 * scale}" cy="${torsoY - 4 * scale}" rx="${8 * scale}" ry="${9 * scale}"></ellipse>`;
  const torso = `<path class="body-part" d="M ${x - 18 * scale} ${torsoY - 7 * scale} C ${x} ${torsoY - 13 * scale}, ${x + 22 * scale} ${torsoY - 10 * scale}, ${x + 33 * scale} ${torsoY - 3 * scale} C ${x + 22 * scale} ${torsoY + 6 * scale}, ${x} ${torsoY + 8 * scale}, ${x - 18 * scale} ${torsoY + 4 * scale} Z"></path>`;
  const arms = `<path class="body-part" d="M ${x - 4 * scale} ${torsoY + 2 * scale} C ${x - 10 * scale} ${torsoY + 18 * scale}, ${x - 13 * scale} ${torsoY + 30 * scale}, ${x - 7 * scale} ${torsoY + 31 * scale} C ${x + 2 * scale} ${torsoY + 17 * scale}, ${x + 4 * scale} ${torsoY + 8 * scale}, ${x + 2 * scale} ${torsoY + 1 * scale} Z"></path>`;
  const legs = `<path class="body-part" d="M ${x + 29 * scale} ${torsoY - 1 * scale} C ${x + 42 * scale} ${torsoY + 5 * scale}, ${x + 49 * scale} ${torsoY + 15 * scale}, ${x + 44 * scale} ${torsoY + 20 * scale} C ${x + 30 * scale} ${torsoY + 12 * scale}, ${x + 24 * scale} ${torsoY + 6 * scale}, ${x + 18 * scale} ${torsoY + 3 * scale} Z"></path>`;
  const lines = `<path class="muscle-line" d="M ${x - 12 * scale} ${torsoY - 4 * scale} C ${x + 3 * scale} ${torsoY}, ${x + 15 * scale} ${torsoY}, ${x + 28 * scale} ${torsoY - 1 * scale}"></path>`;
  return head + torso + arms + legs + lines;
}

function buildPose(type) {
  const common = {
    one: body(58, 47, 0.85, 10, 0),
    three: body(116, 54, 0.85, 18, -6)
  };
  const variants = {
    squat: common,
    press: {
      one: body(58, 48, 0.82, 18, 0),
      three: body(116, 44, 0.82, -22, 0)
    },
    fly: {
      one: body(58, 50, 0.8, 24, 0),
      three: body(116, 50, 0.8, 4, 0)
    },
    hinge: {
      one: body(58, 48, 0.82, 18, -2),
      three: body(116, 55, 0.82, 28, -8)
    },
    bridge: {
      one: horizontalBody(58, 62, 0.75, 8),
      three: horizontalBody(116, 54, 0.75, -2)
    },
    plank: {
      one: horizontalBody(58, 56, 0.76, -2),
      three: horizontalBody(116, 62, 0.76, 6)
    },
    calf: {
      one: body(58, 48, 0.82, 10, 0),
      three: body(116, 44, 0.82, 10, -8)
    },
    run: {
      one: body(58, 48, 0.8, 20, -4),
      three: body(116, 46, 0.8, -8, -10)
    },
    jump: {
      one: body(58, 55, 0.8, 22, -12),
      three: body(116, 42, 0.8, -18, -6)
    },
    throw: {
      one: body(58, 50, 0.8, 24, -4),
      three: body(116, 46, 0.8, -20, -2)
    },
    stretch: {
      one: body(58, 52, 0.78, 12, -8),
      three: body(116, 54, 0.78, -8, -12)
    },
    row: {
      one: body(58, 50, 0.8, 20, -4),
      three: body(116, 50, 0.8, 6, -4)
    },
    pushup: {
      one: body(58, 55, 0.76, 24, -10),
      three: body(116, 60, 0.76, 18, -12)
    },
    deadbug: {
      one: body(58, 62, 0.74, -16, -18),
      three: body(116, 66, 0.74, -2, -12)
    },
    bike: common,
    stretch: common
  };
  return variants[type] || common;
}

function renderRecordEditor() {
  const workout = getAdjustedPlan()[state.selectedWorkout];
  const exercises = workout.exercises.map((id) => exerciseCatalog.find((item) => item.id === id));
  $("#recordEditor").innerHTML = `
    <div class="record-item">
      <strong>动作</strong><strong>组</strong><strong>次</strong><strong>重量方式</strong><strong>重量详情</strong><strong>操作</strong>
    </div>
    ${exercises.map((exercise) => renderSetRow(exercise.name)).join("")}
    <div class="calorie-estimate" id="calorieEstimate"></div>
  `;
  renderCalorieEstimate();
}

function renderSetRow(name = "") {
  return `
    <div class="set-row" data-exercise="${name}">
      <input class="exercise-name-input" value="${name}" placeholder="动作名称" />
      <input type="number" min="0" placeholder="组" />
      <input type="number" min="0" placeholder="次" />
      <select class="weight-mode-select" aria-label="重量方式">
        <option>固定重量</option>
        <option>递增重量</option>
        <option>递减重量</option>
        <option>交替重量</option>
        <option>自重训练</option>
        <option>弹力带阻力</option>
      </select>
      <input class="weight-detail-input" placeholder="如 20kg；20/25/30kg；自重" />
      <button class="small-button delete-set-row" type="button" aria-label="删除动作">删除</button>
    </div>
  `;
}

function addRecordExercise() {
  $("#calorieEstimate")?.insertAdjacentHTML("beforebegin", renderSetRow(""));
  renderCalorieEstimate();
  renderNutritionSleep();
}

document.addEventListener("click", (event) => {
  const deleteButton = event.target.closest(".delete-set-row");
  if (!deleteButton) return;
  deleteButton.closest(".set-row")?.remove();
  renderCalorieEstimate();
  renderNutritionSleep();
});

function getEditorSets() {
  return $$(".set-row").map((row) => {
    const inputs = row.querySelectorAll("input");
    return {
      exercise: inputs[0].value || "",
      groups: inputs[1].value || "",
      reps: inputs[2].value || "",
      weightMode: row.querySelector(".weight-mode-select")?.value || "",
      weight: row.querySelector(".weight-detail-input")?.value || ""
    };
  });
}

function renderCalorieEstimate() {
  const target = $("#calorieEstimate");
  if (!target) return;
  const workout = getAdjustedPlan()[state.selectedWorkout];
  const sets = getEditorSets();
  const calories = estimateWorkoutCalories(sets, workout);
  const density = getWorkoutDensity(sets);
  target.innerHTML = `
    <div>
      <span>本次消耗热量参考</span>
      <strong>${calories} 卡路里</strong>
    </div>
    <p>已结合 ${state.profile.sex}、${state.profile.age} 岁、${state.profile.height} 厘米、${state.profile.weight} 千克和当前动作记录；未接入心率时以估算为准。</p>
    <small>训练密度：${density}，保存记录后会进入营养膳食及睡眠建议。</small>
  `;
}

function estimateWorkoutCalories(sets, workout) {
  const weight = Number(state.profile.weight) || 60;
  const bodyFat = Number(state.profile.bodyFat) || 25;
  const duration = Number(workout?.duration || state.profile.duration || 45);
  const met = estimateWorkoutMet(sets, workout);
  const leanMassFactor = Math.max(0.9, Math.min(1.08, 1 + (28 - bodyFat) / 180));
  const sexFactor = state.profile.sex === "男性" ? 1.04 : state.profile.sex === "女性" ? 0.98 : 1;
  const calories = met * 3.5 * weight / 200 * duration * leanMassFactor * sexFactor;
  return Math.max(20, Math.round(calories));
}

function estimateWorkoutMet(sets, workout) {
  const text = `${workout?.title || ""} ${workout?.focus || ""} ${sets.map((set) => `${set.exercise} ${set.weightMode}`).join(" ")}`;
  const filledSets = sets.reduce((sum, set) => sum + (Number(set.groups) || 0), 0);
  let met = 4.8;
  if (/跑|车|心肺|有氧|跳绳|划船机|间歇/.test(text)) met = 7.2;
  if (/拉伸|灵活|恢复|活动度/.test(text)) met = 2.8;
  if (/跳|投掷|爆发|短跑/.test(text)) met = 8.5;
  if (/深蹲|硬拉|卧推|推举|力量|递增|递减/.test(text)) met = Math.max(met, 5.8);
  if (filledSets >= 16) met += 0.5;
  if (filledSets >= 24) met += 0.4;
  return met;
}

function getWorkoutDensity(sets) {
  const filledSets = sets.reduce((sum, set) => sum + (Number(set.groups) || 0), 0);
  if (filledSets >= 20) return "较高";
  if (filledSets >= 10) return "中等";
  return "偏低或待补充";
}

async function saveRecord() {
  const workout = getAdjustedPlan()[state.selectedWorkout];
  const sets = getEditorSets();
  const calories = estimateWorkoutCalories(sets, workout);
  const record = normalizeRecord({
    id: window.crypto?.randomUUID ? window.crypto.randomUUID() : String(Date.now()),
    date: new Date().toLocaleDateString("zh-CN"),
    workout: workout.title,
    duration: workout.duration,
    calories,
    sets
  });
  state.records.unshift(record);
  state.records = state.records.slice(0, 8);
  writeLocalRecords(state.records);
  try {
    if (state.dbReady) await idbPutRecord(record);
    setDataStatus(state.dbReady ? "训练记录已保存到 IndexedDB，并同步保留 localStorage 备份。" : "训练记录已保存到 localStorage 兼容备份。", "success");
  } catch (error) {
    console.warn("IndexedDB 保存训练记录失败：", error);
    setDataStatus("IndexedDB 保存失败，但 localStorage 兼容备份已保留。", "warning");
  }
  renderRecords();
  renderNutritionSleep();
}

function renderRecords() {
  $("#recordList").innerHTML = state.records.length ? state.records.map((record, index) => `
    <details class="history-card">
      <summary>${record.date} · ${record.workout}</summary>
      <p>${record.duration} 分钟 · ${record.sets.length} 个动作 · 消耗约 ${record.calories || estimateWorkoutCalories(record.sets, record)} 卡路里</p>
      <p>${record.sets.map(formatSetSummary).join("；")}</p>
      <div class="history-actions">
        <button class="small-button" data-share-index="${index}" type="button">分享记录</button>
      </div>
      <p class="share-status" id="shareStatus${index}"></p>
    </details>
  `).join("") : "<p>还没有训练记录。打开一次训练，填写动作、组、次、重量方式和重量详情后保存；部分内容可以留空。</p>";
  $$("[data-share-index]").forEach((button) => {
    button.addEventListener("click", () => shareRecord(Number(button.dataset.shareIndex)));
  });
}

async function shareRecord(index) {
  const record = state.records[index];
  const text = formatRecordForShare(record);
  const status = $(`#shareStatus${index}`);
  try {
    if (navigator.share) {
      await navigator.share({ title: "FitPlan 训练记录", text });
      status.textContent = "已打开系统分享面板。";
    } else if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      status.textContent = "当前浏览器不支持系统分享，记录已复制到剪贴板。";
    } else {
      status.textContent = text;
    }
  } catch {
    status.textContent = "分享已取消，训练记录仍保留在本地。";
  }
}

function buildBackupPayload() {
  return {
    app: "FitPlan Coach",
    schemaVersion: 1,
    exportedAt: new Date().toISOString(),
    profile: buildProfileSnapshot(),
    planCustom: {
      ...state.planCustom,
      selectedWorkout: state.selectedWorkout,
      planMode: state.planMode,
      generatedPlan: getAdjustedPlan()
    },
    records: state.records.map(normalizeRecord)
  };
}

function exportBackup() {
  try {
    const payload = buildBackupPayload();
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const date = new Date().toISOString().slice(0, 10);
    const link = document.createElement("a");
    link.href = url;
    link.download = `fitplan-backup-${date}.json`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    setDataStatus(`已导出 ${payload.records.length} 条训练记录和当前用户设置。`, "success");
  } catch (error) {
    console.warn("导出备份失败：", error);
    setDataStatus("导出备份失败，请稍后重试。", "error");
  }
}

async function importBackup(event) {
  const [file] = event.target.files;
  event.target.value = "";
  if (!file) return;
  try {
    const text = await file.text();
    const payload = JSON.parse(text);
    const validation = validateBackupPayload(payload);
    if (!validation.valid) {
      setDataStatus(`导入失败：${validation.message}`, "error");
      return;
    }
    const ok = window.confirm("导入备份会覆盖当前训练记录、用户设置和训练计划自定义数据。是否继续？");
    if (!ok) {
      setDataStatus("已取消导入，当前数据未改变。", "info");
      return;
    }
    state.profile = normalizeProfile(payload.profile);
    state.records = payload.records.map(normalizeRecord);
    applyPlanCustom(payload.planCustom || {});
    writeLocalRecords(state.records);
    writeLocalProfile(buildProfileSnapshot());
    if (state.dbReady) {
      await Promise.all([
        idbReplaceRecords(state.records),
        idbSetValue(STORE_SETTINGS, "profile", buildProfileSnapshot()),
        idbSetValue(STORE_PLAN_CUSTOM, "current", state.planCustom)
      ]);
    }
    applyProfileToForm();
    updateStatus();
    renderMetrics();
    renderPlan();
    renderRecordEditor();
    renderRecords();
    renderNutritionSleep();
    setDataStatus(`导入成功：已恢复 ${state.records.length} 条训练记录、用户设置和训练计划自定义数据。`, "success");
  } catch (error) {
    console.warn("导入备份失败：", error);
    setDataStatus("导入失败：文件不是有效 JSON，或读取过程中发生错误。", "error");
  }
}

function validateBackupPayload(payload) {
  if (!payload || typeof payload !== "object") return { valid: false, message: "备份文件根节点必须是对象。" };
  if (payload.app !== "FitPlan Coach") return { valid: false, message: "不是 FitPlan Coach 备份文件。" };
  if (!Array.isArray(payload.records)) return { valid: false, message: "缺少 records 数组。" };
  if (!payload.profile || typeof payload.profile !== "object") return { valid: false, message: "缺少 profile 用户设置。" };
  const invalidRecord = payload.records.find((record) => !record || typeof record !== "object" || !Array.isArray(record.sets));
  if (invalidRecord) return { valid: false, message: "训练记录格式不正确。" };
  return { valid: true };
}

function renderNutritionSleep() {
  const target = $("#nutritionSleepPanel");
  if (!target) return;
  const latestRecord = state.records[0];
  const currentWorkout = getAdjustedPlan()[state.selectedWorkout];
  const liveCalories = estimateWorkoutCalories(getEditorSets(), currentWorkout);
  const workoutCalories = latestRecord?.calories || liveCalories;
  const bmr = estimateBasalMetabolism();
  const baseActivity = 1.22 + Math.min(0.35, (Number(state.profile.days) || 3) * 0.045);
  const dailyExpense = Math.round(bmr * baseActivity + workoutCalories * 0.35);
  const goals = Array.isArray(state.profile.goal) ? state.profile.goal : [state.profile.goal].filter(Boolean);
  const adjustment = getNutritionAdjustment(goals);
  const intakeTarget = dailyExpense + adjustment;
  const deficitText = adjustment < 0 ? `建议形成约 ${Math.abs(adjustment)} 卡路里缺口` : adjustment > 0 ? `建议形成约 ${adjustment} 卡路里盈余` : "建议维持收支平衡";
  const sleep = getSleepAdvice(workoutCalories);
  target.innerHTML = `
    <div class="nutrition-grid">
      <article>
        <span>今日消耗参考</span>
        <strong>${dailyExpense} 卡路里</strong>
        <small>含基础代谢、日常活动和本次训练约 ${workoutCalories} 卡路里</small>
      </article>
      <article>
        <span>饮食方向</span>
        <strong>${intakeTarget} 卡路里左右</strong>
        <small>${deficitText}，按 ${getGoalText(goals)} 调整</small>
      </article>
    </div>
    <div class="simple-advice">
      <h3>今天这样吃更好懂</h3>
      <p>${buildFoodAdvice(goals, adjustment)}</p>
    </div>
    <div class="simple-advice">
      <h3>睡眠与恢复</h3>
      <p>${sleep}</p>
    </div>
  `;
}

function estimateBasalMetabolism() {
  const weight = Number(state.profile.weight) || 60;
  const height = Number(state.profile.height) || 165;
  const age = Number(state.profile.age) || 30;
  if (state.profile.sex === "男性") return Math.round(10 * weight + 6.25 * height - 5 * age + 5);
  if (state.profile.sex === "女性") return Math.round(10 * weight + 6.25 * height - 5 * age - 161);
  return Math.round(10 * weight + 6.25 * height - 5 * age - 78);
}

function getNutritionAdjustment(goals) {
  if (goals.includes("减脂塑型")) return -360;
  if (goals.includes("增肌增重")) return 260;
  if (goals.some((goal) => goal.includes("中考") || goal.includes("弹跳") || goal.includes("跑步") || goal.includes("球类"))) return 120;
  return 0;
}

function buildFoodAdvice(goals, adjustment) {
  if (adjustment < 0) {
    return "每餐优先保证一掌心优质蛋白，主食控制在半个到一个拳头大的米饭或杂粮，蔬菜至少两把；训练后可补一个鸡蛋加一杯无糖酸奶，晚餐少油炸和含糖饮料。";
  }
  if (adjustment > 0) {
    return "每餐保留一到一个半拳头主食，蛋白质吃到一掌心以上，例如鸡胸、鱼、牛肉或 2 个鸡蛋；训练后加一份香蕉或酸奶，帮助恢复但避免暴饮暴食。";
  }
  return "保持每餐一个拳头主食、一掌心蛋白、两把蔬菜；训练日可在训练后补一份水果或酸奶，休息日减少零食和含糖饮料。";
}

function getSleepAdvice(workoutCalories) {
  const highLoad = workoutCalories >= 420 || (Number(state.profile.duration) || 60) >= 75;
  const total = highLoad ? 8.5 : 8;
  if (state.profile.napHabit === "习惯午休") {
    return `今日建议总睡眠约 ${total} 小时：午休 20-30 分钟即可，夜间保证 ${highLoad ? "8 小时左右" : "7.5 小时左右"}，避免午睡过长影响入睡。`;
  }
  if (state.profile.napHabit === "偶尔午休") {
    return `今日建议总睡眠约 ${total} 小时；若下午困倦，午休控制在 20 分钟内，夜间仍应保证 7.5-8 小时。`;
  }
  return `今日建议夜间连续睡眠 ${total} 小时左右；如果训练后肌肉酸痛明显，优先提前入睡，不建议用高强度训练替代恢复。`;
}

function formatRecordForShare(record) {
  return [
    `FitPlan 训练记录：${record.date} ${record.workout}`,
    `时长：${record.duration} 分钟`,
    `消耗：约 ${record.calories || estimateWorkoutCalories(record.sets, record)} 卡路里`,
    ...record.sets.map(formatSetSummary)
  ].join("\n");
}

function formatSetSummary(set) {
  const name = set.exercise || "未命名动作";
  const groups = set.groups ? `${set.groups}组` : "组数未填";
  const reps = set.reps ? `${set.reps}次` : "次数未填";
  const weight = set.weight || "重量未填";
  const weightMode = set.weightMode || "重量方式未填";
  return `${name}：${groups} / ${reps} / ${weightMode} / ${weight}`;
}

init();
