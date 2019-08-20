export const realQuestions = [
    
    {'title':'以下哪种情境对语音识别来说最难？','option':['近距离，安静，标准口音','远距离，安静，轻微口音','近距离，噪声，轻微口音','远距离，噪声，轻微口'],'A':'近距离，安静，标准口音','B':'远距离，安静，轻微口音','C':'近距离，噪声，轻微口音','answers':['D']},{'title':'语音压缩对语音识别性能影响怎么样？','option':['基本无影响','影响很大，要很小心','如果压缩太狠，性能悬崖式下','影响较轻微'],'A':'基本无影响','B':'影响很大，要很小心','answers':['C'],'D':'影响较轻微'},{'title':'以下说法正确的是？','option':['采样率对语音识别无影响','语音识别性能对语速不敏感','句子错误率是语音识别评价的最重要标准','语音识别能将特定语言的语音转化为文'],'A':'采样率对语音识别无影响','B':'语音识别性能对语速不敏感','C':'句子错误率是语音识别评价的最重要标准','answers':['D']},{'title':'关于云知声的语音识别公有云，以下说法错误的是？','option':['支持8k和16k采样率','可以选择近讲和远讲两种声学模型','只能选择一个语言模','可以配置个性化数据，比如手机联系人'],'A':'支持8k和16k采样率','B':'可以选择近讲和远讲两种声学模型','answers':['C'],'D':'可以配置个性化数据，比如手机联系人'},{'title':'关于ASR，以下说法错误的是？','option':['远讲声学模型相比近讲声学模型，识别速度要','语言模型的领域选择越多，识别速度越慢','口音较重时，语音识别性能下降明显','当前语音识别引擎还不支持中英文夹'],'B':'语言模型的领域选择越多，识别速度越慢','C':'口音较重时，语音识别性能下降明显','answers':['D']},{'title':'为了优化语音识别的效果，产品开发人员可以做的是？','option':['通过平台的开发者网站，配置个性化句式和词','适配声学模型，使得与真实声音场景更匹配','适配语言模型，使得与真实语言环境更匹配','切换语音识别版本，找到最合适的版本'],'answers':['A'],'B':'适配声学模型，使得与真实声音场景更匹配','C':'适配语言模型，使得与真实语言环境更匹配','D':'切换语音识别版本，找到最合适的版本'},{'title':'一次语音交互流程的顺序是？','option':['信号处理，语义理解，语音识别，语音合成','语音识别，语义理解，语音合成，信号处理','信号处理，语音识别，语义理解，语音合','语音合成，信号处理，语音识别，语义理解'],'A':'信号处理，语义理解，语音识别，语音合成','B':'语音识别，语义理解，语音合成，信号处理','answers':['C'],'D':'语音合成，信号处理，语音识别，语义理解'},{'title':'ASR的首次返回延迟主要应用于以下哪种场景？','option':['语音转写场景','实时听写场景','实时听写输入法类场','实时听写IOT类场景'],'A':'语音转写场景','B':'实时听写场景','answers':['C'],'D':'实时听写IOT类场景'},{'title':'以下对ASR并发描述正确的是？','option':['N（并发量）=峰值周期语音总时长(秒)/峰值周期(秒','当语音总时长为定值时，则峰值周期越大，对并发请求量要求越','当峰值周期为定值时，语音总时长越大，则对并发请求量要求越','当峰值周期为定值、且峰值周期中语音总量为定值时候，此时平均语音长度越长，则对并发请求量要求越'],'answers':['A','B','C','D']},{'title':'关于ASR，以下对于功能配置描述正确的是？','option':['VAD静音时长不会影响处理性能','有个性化词典比无个性化词典性能慢10%-15','全局静态词表延迟很高，使用需要慎重选','近讲比远讲模型大概率慢70%左右'],'A':'VAD静音时长不会影响处理性能','answers':['B'],'D':'近讲比远讲模型大概率慢70%左右'},{'title':'合成语音质量的评价方法是？','option':['人对语音质量进行主观评','计算合成语音与标准音的距离','正确合成文字数目／总文字数目','合成语音声学参数方差与音库声学参数方差的距离'],'answers':['A'],'B':'计算合成语音与标准音的距离','C':'正确合成文字数目／总文字数目','D':'合成语音声学参数方差与音库声学参数方差的距离'},{'title':'TTSABX倾向性评测含义是？','option':['测听者测听语音，评判合成语音是否可以听懂','测听者对语音进行主观意见的打分','测听者对比两组语音，给出更偏向于哪组语音的意','测听者测听语音，计算正确合成的字数与总的字数的比例'],'A':'测听者测听语音，评判合成语音是否可以听懂','B':'测听者对语音进行主观意见的打分','answers':['C'],'D':'测听者测听语音，计算正确合成的字数与总的字数的比例'},{'title':'下面哪些会影响TTS的效果表现？','option':['发音人音','技术路线的代数（G1/G2/G3','合成模型的训练环境','合成模型的运行时长'],'answers':['A','B'],'C':'合成模型的训练环境','D':'合成模型的运行时长'},{'title':'TTS实时率的计算公式是？','option':['引擎处理所耗时长/合成语音时','合成语音时长/引擎处理所耗时','合成的句数/总句数','引擎获取待合成文本到合成结束的时间差'],'answers':['A'],'C':'合成的句数/总句数','D':'引擎获取待合成文本到合成结束的时间差'},{'title':'TTS首帧返回时间的含义是？','option':['终端设备收到第一个音频包时间点与终端完成语音识别的时间差','终端设备收到最后一个音频包时间点与终端开始发送文本时间点的时间差','终端设备收到第一个音频包时间点与终端开始发送文本时间点的时间','终端设备收到第一个音频包时间点与NLU完成文本生成的时间差'],'A':'终端设备收到第一个音频包时间点与终端完成语音识别的时间差','B':'终端设备收到最后一个音频包时间点与终端开始发送文本时间点的时间差','answers':['C'],'D':'终端设备收到第一个音频包时间点与NLU完成文本生成的时间差'},{'title':'如何计算TTS并发？','option':['引擎处理所耗时长/合成语音时长','峰值周期的文字总数量/峰值周','峰值周期／峰值周期的文字总数量','峰值周期／峰值周期的文字平均数量'],'A':'引擎处理所耗时长/合成语音时长','answers':['B'],'C':'峰值周期／峰值周期的文字总数量','D':'峰值周期／峰值周期的文字平均数量'},{'title':'云知声目前已有的TTS音色包括？','option':['男','女','男童','女童'],'answers':['A','B','C','D']},{'title':'声纹识别性能指标——漏警计算公式是？','option':['冒认语音做测试时被判断为真的次数/用冒认语音做测试的总次数','目标说话人语音做测试时被判断为假的次数/用目标说话人语音做测试的总次','测试语音属于目标说话人集合中的说话人且识别结果正确的次数/测试语音属于目标说话人集合的测试总次','测试语音不属于目标说话人集合中的说话人且识别结果正确的次数/测试语音不属于目标说话人集合的测试总次数'],'A':'冒认语音做测试时被判断为真的次数/用冒认语音做测试的总次数','answers':['C'],'D':'测试语音不属于目标说话人集合中的说话人且识别结果正确的次数/测试语音不属于目标说话人集合的测试总次数'},{'title':'声纹识别性能指标——集内辨认准确率计算公式是？','option':['冒认语音做测试时被判断为真的次数/用冒认语音做测试的总次数','目标说话人语音做测试时被判断为假的次数/目标说话人语音做测试的总次数','测试语音属于目标说话人集合中的说话人且识别结果正确的次数/测试语音属于目标说话人集合的测试总次','测试语音不属于目标说话人集合中的说话人且识别结果正确的次数/测试语音不属于目标说话人集合的测试总次数'],'A':'冒认语音做测试时被判断为真的次数/用冒认语音做测试的总次数','B':'目标说话人语音做测试时被判断为假的次数/目标说话人语音做测试的总次数','answers':['C'],'D':'测试语音不属于目标说话人集合中的说话人且识别结果正确的次数/测试语音不属于目标说话人集合的测试总次数'},{'title':'关于声纹识别，下列说法正确的是？','option':['mic品质不会对声纹识别性能造成影响','mic品质会对声纹识别性能造成影','当mic型号相同时，mic间距会对声纹识别性能造成影','当mic型号相同时，mic间距不会对声纹识别性能造成影响'],'A':'mic品质不会对声纹识别性能造成影响','answers':['B','C'],'D':'当mic型号相同时，mic间距不会对声纹识别性能造成影响'},{'title':'关于声纹识别，下列说法正确的是？','option':['说话人刻意改变音调不会对声纹识别性能造成影响','说话人刻意改变音调会对声纹识别性能造成影','说话人因感冒导致音色改变不会对声纹识别性能造成影响','说话人因感冒导致音色改变会对声纹识别性能造成影'],'A':'说话人刻意改变音调不会对声纹识别性能造成影响','answers':['B','D'],'C':'说话人因感冒导致音色改变不会对声纹识别性能造成影响'},{'title':'关于声纹识别，下列说法正确的是？','option':['对语音进行opus压缩不会对声纹识别性能造成影响','对语音进行opus压缩会对声纹识别性能造成影','在对语音进行opus压缩时，压缩比越高，音频质量损失越多，声纹识别性能越','在对语音进行opus压缩时，压缩比越高，音频质量损失越少，声纹识别性能越好'],'A':'对语音进行opus压缩不会对声纹识别性能造成影响','answers':['B','C'],'D':'在对语音进行opus压缩时，压缩比越高，音频质量损失越少，声纹识别性能越好'},{'title':'关于声纹识别，下列说法正确的是？','option':['在噪声环境下，只要能听清语音内容，则该噪声不会影响声纹识别性能','相同的信噪比，人声背景噪声比空调噪声对声纹识别性能影响更','只要音量足够大，mic品质对声纹识别性能没有影响','声纹识别性能不受说话人发声状态影响'],'A':'在噪声环境下，只要能听清语音内容，则该噪声不会影响声纹识别性能','answers':['B'],'C':'只要音量足够大，mic品质对声纹识别性能没有影响','D':'声纹识别性能不受说话人发声状态影响'},{'title':'声纹识别简称是？','option':['ASR','NLP','VP','TTS'],'A':'ASR','B':'NLP','answers':['C'],'D':'TTS'},{'title':'关于Speaker，下列说法正确的是？','option':['用户声音画像识别是指计算机通过说话人的语音，识别出说话人的性别和年龄段的技','用户声音画像识别是指计算机通过说话人的语音，识别出说话人身份的技术','用户声音画像识别是指计算机通过说话人的语音，识别出说话人长相的技术','用户声音画像识别是指计算机通过说话人的语音，识别出说话人情感状态的技术'],'answers':['A'],'B':'用户声音画像识别是指计算机通过说话人的语音，识别出说话人身份的技术','C':'用户声音画像识别是指计算机通过说话人的语音，识别出说话人长相的技术','D':'用户声音画像识别是指计算机通过说话人的语音，识别出说话人情感状态的技术'},{'title':'关于Speaker，下列说法正确的是？','option':['说话人因感冒导致音色改变会对用户声音画像识别性能造成影','说话人因感冒导致音色改变不会对用户声音画像识别性能造成影响','说话人刻意改变音调会对用户声音画像识别性能造成影','说话人刻意改变音调不会对用户声音画像识别性能造成影响'],'answers':['A','C'],'B':'说话人因感冒导致音色改变不会对用户声音画像识别性能造成影响','D':'说话人刻意改变音调不会对用户声音画像识别性能造成影响'},{'title':'关于Speaker，下列说法正确的是？','option':['在对语音进行opus压缩时，压缩比越高，音频质量损失越多，用户声音画像识别性能越','在对语音进行opus压缩时，压缩比越高，音频质量损失越少，用户声音画像识别性能越好','对语音进行opus压缩不会对用户声音画像识别性能造成影响','对语音进行opus压缩会对用户声音画像识别性能造成影'],'answers':['A','D'],'B':'在对语音进行opus压缩时，压缩比越高，音频质量损失越少，用户声音画像识别性能越好','C':'对语音进行opus压缩不会对用户声音画像识别性能造成影响'},{'title':'用户声音画像识别性能指标——类别识别准确率计算公式是？','option':['某类别测试语音识别结果正确的条数/某类别测试语音的总条','某类别测试语音识别结果错误的条数/某类别测试语音的总条数','测试语音识别结果正确的条数/测试语音总条数','测试语音识别结果错误的条数/测试语音总条数'],'answers':['A'],'B':'某类别测试语音识别结果错误的条数/某类别测试语音的总条数','C':'测试语音识别结果正确的条数/测试语音总条数','D':'测试语音识别结果错误的条数/测试语音总条数'},{'title':'关于NLU（自然语言理解），以下哪种说法是正确的？','option':['NLU是指从自然语言中解析出语义信息','NLU解析自然语言文本，并将其转换为机器可使用的表征形式——语义意','语义理解是要理解文本中每一个字的含义，分析语句的语法结构，以方便计算机去使','NLU的输入是语音数据，输出是语义意图'],'answers':['A','B'],'D':'NLU的输入是语音数据，输出是语义意图'},{'title':'关于提NLU需求的标准，下面哪些做法是正确的？','option':['写明需求名称和描述，不需要提供验收标准','提倡提大需求，需要干两年才能收敛的单体大需求','在禅道中写明需求功能定义、示例数据、验收标','需求要定义合理的优先级和验收时间，合理控制和分解需求，一个需求的工作量建议不超过一个人.'],'A':'写明需求名称和描述，不需要提供验收标准','B':'提倡提大需求，需要干两年才能收敛的单体大需求','answers':['C','D']},{'title':'关于云知声公司的产品NLU接口人，下面说法正确的是？','option':['KAR的产品NLU接口人是朱清菁','KAR的产品NLU接口人是倪晓','PandoraA1、Unione、IVM产品的NLU接口人是朱清','车机产品的NLU接口人是邱佳'],'A':'KAR的产品NLU接口人是朱清菁','answers':['B','C','D']},{'title':'如果发现语音交互错误，下面哪些做法是正确的？','option':['找李彬','找单波','找产品的NLU接口人','找产品SA，如果SA确认是NLU的问题，提禅道BUG给产品的NLU接口人，并钉钉通'],'A':'找李彬','B':'找单波','C':'找产品的NLU接口人','answers':['D']},
    {'title':'关于给NLU提BUG，下面哪些做法是正确的？','option':['在钉钉上AT到NLU研发人员，并DING一下','创建禅道BUG，指派给产品NLU接口人。高优先级BUG，可以钉钉通知该接口','在禅道中用URL描述现场、实际的错误输出结','在禅道中用写明期望结果、期望解决时','需要修复的用例，将用例文本copy到禅道中；必要时一并附上日志文','一个类型的BUG，碰到一个提一个，重复提BUG也没事。','同个类型的BUG，提在同一个禅道BUG当中，区分为一类问题或个例问','不同类型的BUG，不混提在同一个禅道BUG'],'A':'在钉钉上AT到NLU研发人员，并DING一下','answers':['B','C','D','E','G','H'],'F':'一个类型的BUG，碰到一个提一个，重复提BUG也没事。'},{'title':'关于项目落地中的NLU需求，下面哪些做法是正确的？','option':['NLU团队需要直接参与项目，无条件的支持短期项目，否则被视为违背“客户第一”公司价值观；','NLU团队主要为产品线服务，NLU在产品上的工作产出主要由产品经理做验收','不鼓励项目经理直接对接NLU团队的研发','项目的NLU定制需求，应该由项目团队的人负责，最好是专职实施，可由NLU团队做培训、提供工具'],'A':'NLU团队需要直接参与项目，无条件的支持短期项目，否则被视为违背“客户第一”公司价值观；','answers':['B','C','D']},{'title':'如果你是一个AI产品经理，如何确保你产品已经上线的NLU功能表现基本稳定，而不出致命错误？','option':['提测试需求给测试团队，建立SanityTest，覆盖最基础、重要、不允许出错的功能','不需要做SanityTest，NLU服务自然是稳定的，不稳定就追究其负责人的问题。','将建立的SanityTest测试集提交平台测试张大康处，以便做线上服务监控','将必要的同事加入到SanityTest收件人列表中','随时关注邮件，如果有SanityTest测试警告或错误提示，及时观看测试报告。及时与测试和研发沟通测试报告中的预警内容，直至预警解决完毕'],'answers':['A','C','D','E'],'B':'不需要做SanityTest，NLU服务自然是稳定的，不稳定就追究其负责人的问题。'},{'title':'有市场竞争力的产品NLU测评体系，是有哪几部分构成的？','option':['主要技能测评盲测报告','覆盖所有功能点协议的SanityTest','定期做产品日志分析报告，统计各技能的调用分布，并量化主要技能的用户体验','一定周期的竞品对比分析报告，包括技能数量、种类、核心技能体验测评','测试集具有定期更新机'],'answers':['A','B','C','D','E']},{'title':'以儿童陪伴和教育场景为例，受3~6岁欢迎的语音交互技能应该具备哪些好的特征？','option':['语音友好性：语音交互的说法，容易说出口，识别率高，不容易出错，没有奇异性','寓教于乐：有知识教育性、有竞赛娱乐性','简单性：内容简单，最好是现实生活中就有的客观常见需求；内容不过于复杂高深，不过多超越儿童的知识储备','个性化：能够根据小朋友的个性化需求和信息，进行交互。比如，在应答中偶尔说出小朋友的名字','难度高：难度越高，越能体现技能的高超水平，越能收到小朋友的欢迎'],'answers':['A','B','C','D'],'E':'难度高：难度越高，越能体现技能的高超水平，越能收到小朋友的欢迎'},{'title':'关于如何定位是否为NLU的问题，下面做法正确的是？','option':['怀疑是NLU的问题，直接甩给NLU，让NLU的人定位排查。','终端服务测试时，返回结果有问题：有URL的，可先用URL测，若URL返回结果与终端返回不一致，则查日志，判断是否为NLU问题；若URL返回结果与终端一致，则可判定为NLU问','当出现没有应答、进入不了多轮对话的情况时，先确认是否打开了对话开','当某服务测试用例都测试不通过时，先确认测试appkey是否配置了该服务，场景参数是否正'],'A':'怀疑是NLU的问题，直接甩给NLU，让NLU的人定位排查。','answers':['B','C','D']},{'title':'MOS打分常用于以下哪个基础服务的测试指标？','option':['ASR','TT','NLU','VPR'],'A':'ASR','answers':['B'],'C':'NLU','D':'VPR'},{'title':'对于ASR测试，在相同的引擎、模型、配置、测试数据前提下，以下哪些说法是正确的？','option':['在相同的硬件上多次运行可能产生不同的结果','在相同的硬件上多次运行一定产生相同的结','在不同的硬件上运行一定产生相同的结果','在不同的硬件上运行可能产生不同的结'],'A':'在相同的硬件上多次运行可能产生不同的结果','answers':['B','D'],'C':'在不同的硬件上运行一定产生相同的结果'},
    {'title':'对于VPR（声纹识别），以下哪种解释是正确的？','option':['用于获取说话人性别和年龄段信息','用于验证说话人的身','理解用户输入的文本,转换为用户意图','在NLU的基础上实现知识对话问答'],'A':'用于获取说话人性别和年龄段信息','answers':['B'],'C':'理解用户输入的文本,转换为用户意图','D':'在NLU的基础上实现知识对话问答'},{'title':'NLU系统的基本单元是？','option':['语义','聊天','对话','意'],'A':'语义','B':'聊天','C':'对话','answers':['D']},{'title':'研究语音的时频分析特性，将时域语音信号经过傅里叶变换而得到的显示图形称为？','option':['语谱','波形图','波束图','倒谱图'],'answers':['A'],'B':'波形图','C':'波束图','D':'倒谱图'},{'title':'SSP引擎的主要作用包括？','option':['抑制使用环境中的噪声，提升复杂环境下的唤醒、识别引擎的准确率','去除设备播放的自噪声，让设备只能“听见”用户所发出的指令','测量说话人所处方位信息，并针对该方位信息的语音进行增强，抑制其他方位的噪声及干扰','减弱房间混响干扰，提高后端ASR引擎识别的准确率','提升远讲场景下的拾音质量'],'answers':['A','B','C','D','E']},{'title':'信号处理中，信噪比(SNR)是一个非常重要的概念，SNR0dB是指？','option':['人耳可听阈的最小值；','目标信号采音值为0dB；','目标信号和噪声信号能量相等','噪声信号采音值为0dB；'],'A':'人耳可听阈的最小值；','B':'目标信号采音值为0dB；','answers':['C'],'D':'噪声信号采音值为0dB；'},{'title':'以下关于麦克风阵列的间距、拓扑结构的说法，正确的是？','option':['麦克风阵列的间距、拓扑结构对于处理性能、DOA准确率等会造成明显影响，需要在产品设计之初就结合引擎建议及项目实施经验，仔细考量','麦克风阵列的间距不会对处理性能造成影响；','麦克风阵列的间距和拓扑结构，都只会对处理效果造成影响，不会影响到DOA；','麦克风阵列的间距和拓扑结构，都只会对DOA造成影响，不会影响到处理效果；'],'answers':['A'],'B':'麦克风阵列的间距不会对处理性能造成影响；','C':'麦克风阵列的间距和拓扑结构，都只会对处理效果造成影响，不会影响到DOA；','D':'麦克风阵列的间距和拓扑结构，都只会对DOA造成影响，不会影响到处理效果；'},{'title':'对于均匀线型麦克风阵列，下列哪个表示阵列间距？','option':['图中A所','图中B所示','图中C所示'],'answers':['A'],'B':'图中B所示','C':'图中C所示'},{'title':'SSP引擎中麦克风阵列声源定位会受哪些因素影响？','option':['信噪','房间混','送入引擎的信号顺序与引擎定义的麦克风顺序是否一','麦克风阵列失配误'],'answers':['A','B','C','D']},{'title':'麦克风阵列波束形成的主要作用是？','option':['消除设备自噪','估计声源方位','保留期望方向信号并抑制其他方向干扰和噪','防止音频削波、数据篡改、数据丢失'],'A':'消除设备自噪','B':'估计声源方位','answers':['C'],'D':'防止音频削波、数据篡改、数据丢失'},{'title':'SSP引擎中DOA实现的功能是？','option':['声源测','波束形成','回声消除','混响抑制'],'answers':['A'],'B':'波束形成','C':'回声消除','D':'混响抑制'},
    {'title':'以下哪种情境对语音识别来说最难？','option':['近距离，安静，标准口音','远距离，安静，轻微口音','近距离，噪声，轻微口音','远距离，噪声，轻微口音']},{'title':'语音压缩对语音识别性能影响怎么样？','option':['基本无影响','影响很大，要很小心','如果压缩太狠，性能悬崖式下跌','影响较轻微']},{'title':'以下不属于语音识别系统的模块的是？','option':['语义分析','语言模型','声学模型','解码器']},{'title':'关于ASR，字错误率不包含以下哪一种错误？','option':['删除错误','插入错误','标注错误','替换错误']},{'title':'工作量最大的语音识别优化是？','option':['语言模型适配','声学模型适配','配置特定句式和词典','调整语音识别解码器参数']},{'title':'远讲场景语音识别难度较大，以下哪个说法有错误？','option':['距离远时，采集到的语音信号自身能量低','相比近距离，更容易受到房间内各种噪声的干扰','远距离识别超过了目前语音识别的能力范畴','房间中，声音遇到墙壁等阻碍物会形成反射，形成混响']},{'title':'以下不会明显影响语音识别结果的是？','option':['语音的质量','服务器CPU的型号','声学模型的类别','语言模型的类别']},{'title':'关于ASR，以下说法错误的是？','option':['声学模型由数万小时带文字标注的语音数据，训练得到','通用领域的语言模型由数T文本数据训练得到','连续语音识别部署分为公有云和私有云','语音识别公有云支持普通话，上海话，闽南语，粤语等']},{'title':'关于ASR，以下说法正确的是？','option':['压缩比高低对音频质量没有直接影响，不会影响ASR性能；','个性化数据匹配度对ASR性能没什么影响；','语言模型匹配度与ASR性能无直接关系；','个性化数据生效范围:全局级别、场景级别、AppKey级别(产品级别)、设备级别；']},{'title':'以下对ASR并发描述正确的是？','option':['N（并发量）=峰值周期语音总时长(秒)/峰值周期(秒)','当语音总时长为定值时，则峰值周期越大，对并发请求量要求越低','当峰值周期为定值时，语音总时长越大，则对并发请求量要求越高','当峰值周期为定值、且峰值周期中语音总量为定值时候，此时平均语音长度越长，则对并发请求量要求越高']},{'title':'TTS的含义是？','option':['将语音转换成文字，让电脑能听懂','对输入文本进行语言学的分析','将文字转换成语音，让电脑会说话','输入包含关键词的语音，对设备进行唤醒']},{'title':'下面哪些是TTS的评价手段？','option':['MOS打分','ABX打分（倾向性测听）','正确率','召回率']},{'title':'TTSMOS评测含义是？','option':['MeanOptionalScore','MeanOpinionScore','MeanOptionalSelection','MeanOpinionSelection']},{'title':'TTSABX倾向性评测含义是？','option':['测听者测听语音，评判合成语音是否可以听懂','测听者对语音进行主观意见的打分','测听者对比两组语音，给出更偏向于哪组语音的意见','测听者测听语音，计算正确合成的字数与总的字数的比例']},{'title':'下面哪些对合成语音的听感有影响？','option':['采样率（每秒钟语音含有采样点的个数）','Opus编码压缩倍数','合成语音的语速','合成语音的播放设备']},{'title':'TTS工程指标包括？','option':['实时率','首帧返回时间','并发数','自然度']},{'title':'目前云知声支持多少句语音的个性化TTS定制？','option':['20句','50句','300句','1000句']},{'title':'关于声纹识别，下列说法正确的是？','option':['声纹识别能通过说话人语音，识别说话人身份','声纹识别能通过说话人语音，识别说话人说话内容','声纹识别能通过说话人语音，判断说话人性别','声纹识别能通过说话人语音，判断说话人的情感状态']},{'title':'声纹识别性能指标——集内辨认准确率计算公式是？','option':['冒认语音做测试时被判断为真的次数/用冒认语音做测试的总次数','目标说话人语音做测试时被判断为假的次数/目标说话人语音做测试的总次数','测试语音属于目标说话人集合中的说话人且识别结果正确的次数/测试语音属于目标说话人集合的测试总次数','测试语音不属于目标说话人集合中的说话人且识别结果正确的次数/测试语音不属于目标说话人集合的测试总次数']},{'title':'下列关于声纹识别引擎实时率说法正确的是？','option':['CPU性能直接影响引擎实时率','引擎实时率只和引擎本身相关，和CPU性能无关','引擎实时率数值越小表示引擎处理能力越强','引擎实时率数值越大表示引擎处理能力越强']},{'title':'关于Speaker，下列说法正确的是？','option':['用户声音画像识别是指计算机通过说话人的语音，识别出说话人的性别和年龄段的技术','用户声音画像识别是指计算机通过说话人的语音，识别出说话人身份的技术','用户声音画像识别是指计算机通过说话人的语音，识别出说话人长相的技术','用户声音画像识别是指计算机通过说话人的语音，识别出说话人情感状态的技术']},{'title':'关于提NLU需求的方式，下面哪些做法是正确的？','option':['在钉钉上AT到NLU研发人员，并DING一下。','提禅道任务给NLU的对应产品接口人','在禅道中写明需求功能定义、示例数据、验收标准','超过两周工作量的需求，在双方OKR中做对齐','客户提的需求，及时反馈给NLU，避免因为个人安排失误导致的客户需求无法按时完成。','个例问题提BUG，功能性批量优化提任务需求，两者不混提。']},{'title':'关于云知声公司的产品NLU接口人，下面说法正确的是？','option':['KAR的产品NLU接口人是朱清菁','KAR的产品NLU接口人是倪晓莉','PandoraA1、Unione、IVM产品的NLU接口人是朱清菁','车机产品的NLU接口人是邱佳敏']},{'title':'如果发现语音交互错误，下面哪些做法是正确的？','option':['找李彬','找单波','找产品的NLU接口人','找产品SA，如果SA确认是NLU的问题，提禅道BUG给产品的NLU接口人，并钉钉通知']},{'title':'关于给NLU提BUG，下面哪些做法是正确的？','option':['在钉钉上AT到NLU研发人员，并DING一下','创建禅道BUG，指派给产品NLU接口人。高优先级BUG，可以钉钉通知该接口人','在禅道中用URL描述现场、实际的错误输出结果','在禅道中用写明期望结果、期望解决时间','需要修复的用例，将用例文本copy到禅道中；必要时一并附上日志文件','一个类型的BUG，碰到一个提一个，重复提BUG也没事。','同个类型的BUG，提在同一个禅道BUG当中，区分为一类问题或个例问题','不同类型的BUG，不混提在同一个禅道BUG中']},{'title':'关于语义理解体验的评价，下面哪些说法是正确的？','option':['评价产品的体验，最好能使用符合产品真实日志分布的数据做评价；','一个新需求的体验评价，需要使用开发集做验收；','一个新需求的体验评价，需要使用盲测集做验收；','一个新需求的体验评价，可以用少数三五条用例做验收；']},{'title':'如果你是一个AI产品经理，如何确保你产品已经上线的NLU功能表现基本稳定，而不出致命错误？','option':['提测试需求给测试团队，建立SanityTest，覆盖最基础、重要、不允许出错的功能；','不需要做SanityTest，NLU服务自然是稳定的，不稳定就追究其负责人的问题。','将建立的SanityTest测试集提交平台测试张大康处，以便做线上服务监控；','将必要的同事加入到SanityTest收件人列表中；','随时关注邮件，如果有SanityTest测试警告或错误提示，及时观看测试报告。及时与测试和研发沟通测试报告中的预警内容，直至预警解决完毕；']},{'title':'以儿童陪伴和教育场景为例，受3~6岁欢迎的语音交互技能应该具备哪些好的特征？','option':['语音友好性：语音交互的说法，容易说出口，识别率高，不容易出错，没有奇异性。','寓教于乐：有知识教育性、有竞赛娱乐性。','简单性：内容简单，最好是现实生活中就有的客观常见需求；内容不过于复杂高深，不过多超越儿童的知识储备。','个性化：能够根据小朋友的个性化需求和信息，进行交互。比如，在应答中偶尔说出小朋友的名字。','难度高：难度越高，越能体现技能的高超水平，越能收到小朋友的欢迎']},{'title':'关于NLU协议的协议变更和版本升级，下面说法正确的是？','option':['随着智能语音产业的深入发展，NLU协议设计者对于产品交互的理解深刻，适当时候需要与时俱进，为产品提供更合理的NLU协议格式和内容。','NLUURL中的ver字段表示NLU的协议版本号。协议设计应合理谨慎并具有充分的前瞻性，尽量减少未来的协议变更或版本升级。','对于已经发布且被产品接入了的协议，NLU开发者需要保证其协议的稳定性。如果协议更改代价过高，需要升级协议版本号，以发布更合理的NLU协议，并对老版本协议向下兼容。','NLU协议变更流程：该技能负责人发起变更申请钉钉流程->NLU团队架构师同意->所有产品主线产品经理同意->所有产品主线SA同意->协议变更发布->产品验证->更新协议文档->协议更新发布到技能平台。']},{'title':'关于如何定位是否为NLU的问题，下面做法正确的是？','option':['怀疑是NLU的问题，直接甩给NLU，让NLU的人定位排查。','终端服务测试时，返回结果有问题：有URL的，可先用URL测，若URL返回结果与终端返回不一致，则查日志，判断是否为NLU问题；若URL返回结果与终端一致，则可判定为NLU问题','当出现没有应答、进入不了多轮对话的情况时，先确认是否打开了对话开关','当某服务测试用例都测试不通过时，先确认测试appkey是否配置了该服务，场景参数是否正确']},{'title':'以下哪些是NLU服务的测试指标？','option':['准确率','SER','召回率','WER']},{'title':'统计WER结果时，所统计的错误类型一般包括以下哪些？','option':['删除错误','插入错误','替换错误','语音错误']},{'title':'对于KRC（知性会话），以下哪种解释是正确的？','option':['用于获取说话人性别和年龄段信息','用于验证说话人的身份','理解用户输入的文本,转换为用户意图','在NLU的基础上实现知识对话问答']},{'title':'对于VPR（声纹识别），以下哪种解释是正确的？','option':['用于获取说话人性别和年龄段信息','用于验证说话人的身份','理解用户输入的文本,转换为用户意图','在NLU的基础上实现知识对话问答']},{'title':'SSP引擎的主要作用包括？','option':['抑制使用环境中的噪声，提升复杂环境下的唤醒、识别引擎的准确率；','去除设备播放的自噪声，让设备只能“听见”用户所发出的指令；','测量说话人所处方位信息，并针对该方位信息的语音进行增强，抑制其他方位的噪声及干扰；','减弱房间混响干扰，提高后端ASR引擎识别的准确率；','提升远讲场景下的拾音质量；']},{'title':'AEC在SSP引擎中所起的作用主要是？','option':['环境噪声干扰抑制','房间混响抑制','说话人测向','声学回声消除']},{'title':'在多mic板卡中，为保证产品的使用效果，我们通常要求mic间具备良好的灵敏度一致性，具体的一致性指标是不同mic间灵敏度差异小于？','option':['1dB','3dB','5dB','7dB']},{'title':'在AEC处理中，通常需要在特定的SER下去量化比对性能，否则由于不同设备、不同播放内容、不同播放音量等因素，会导致比对的时候不在同一个维度上，这其中SER是指？','option':['句错误率','社会与环境责任','信号回声比','搜索引擎排名']},{'title':'关于混响，下列说法正确的是？','option':['声源停止发声后，声波会在房间内经多次反射和吸收后才会消失，给人们的主观感觉是有若干个声波混合持续一段时间，这种现象叫做混响','混响时间指的是反射声能量比直达声能量衰减60dB所需要的时间','房间混响不会影响SSP引擎AEC、降噪、声源测向等性能','房间混响越大，对SSP引擎性能影响也越大']},{'title':'SSP引擎要求麦克风位置误差不超过？','option':['±3mm','±1mm','±5mm','±10mm']},{'title':'若发现SSP引擎输出DOA存在固定偏差，首先应该排查什么问题？','option':['麦克风位置误差是否满足SSP引擎要求','麦克风接收信号幅度误差是否满足SSP引擎要求','是否按照SSP引擎定义的麦克风顺序将信号送入引擎','所选麦克风的灵敏度是否满足要求']},{'title':'SSP引擎中麦克风接收信号包括哪些？','option':['声源信号','干扰信号','设备自噪声','环境噪声']},{'title':'以下说法正确的是？','option':['采样率对语音识别无影响','语音识别性能对语速不敏感','句子错误率是语音识别评价的最重要标准','语音识别能将特定语言的语音转化为文字']},{'title':'语音识别结果中删除错误很高，最不可能的情况是？','option':['配置错误，无法正常识别','远讲情况，声音能量太小','语速过快，超过引擎能力','说话时，有较强的人声背景音']},{'title':'为了优化语音识别的效果，产品开发人员可以做的是？','option':['通过平台的开发者网站，配置个性化句式和词典','适配声学模型，使得与真实声音场景更匹配','适配语言模型，使得与真实语言环境更匹配','切换语音识别版本，找到最合适的版本']},{'title':'一次语音交互流程的顺序是？','option':['信号处理，语义理解，语音识别，语音合成','语音识别，语义理解，语音合成，信号处理','信号处理，语音识别，语义理解，语音合成','语音合成，信号处理，语音识别，语义理解']},{'title':'TTSMOS评测最高分为？','option':['3分','5分','10分','100分']},{'title':'TTSMOS评测维度有？','option':['可懂度','自然度','正确率','召回率']},{'title':'TTS首帧返回时间的含义是？','option':['终端设备收到第一个音频包时间点与终端完成语音识别的时间差','终端设备收到最后一个音频包时间点与终端开始发送文本时间点的时间差','终端设备收到第一个音频包时间点与终端开始发送文本时间点的时间差','终端设备收到第一个音频包时间点与NLU完成文本生成的时间差']},{'title':'如何计算TTS并发？','option':['引擎处理所耗时长/合成语音时长','峰值周期的文字总数量/峰值周期','峰值周期／峰值周期的文字总数量','峰值周期／峰值周期的文字平均数量']},{'title':'云知声目前TTS支持的语种包括？','option':['中文','英文','日文','韩文']},{'title':'下列关于声纹识别说法正确的是？','option':['声纹识别是指利用计算机通过说话人语音判断说话人身份的技术','声纹识别可分为声纹确认和声纹辨认','当一段语音包含多个说话人且不同说话人语音没有相互交叠，声纹识别可以识别出该段语音中的每个说话人','当一段语音包含多个说话人，无论是否存在不同说话人语音相互交叠的情况，声纹识别均可以识别出该段语音中每个说话人']},{'title':'关于声纹识别，下列说话正确的是？','option':['在声纹识别时，识别语音与原声纹注册时使用的语音不属于同一个人，则识别时使用的语音为冒认语音','在声纹识别时，识别语音与原声纹注册时使用的语音属于同一个人，则识别时使用的语音为冒认语音','在声纹识别时，识别语音与原声纹注册时使用的语音不属于同一个人，则识别时使用的语音为目标说话人语音','在声纹识别时，识别语音与原声纹注册时使用的语音属于同一个人，则识别时使用的语音为目标说话人语音']},{'title':'声纹识别性能指标——虚警计算公式是？','option':['冒认语音做测试时被判断为真的次数/用冒认语音做测试的总次数','目标说话人语音做测试时被判断为假的次数/用目标说话人语音做测试的总次数','测试语音属于目标说话人集合中的说话人且识别结果正确的次数/测试语音属于目标说话人集合的测试总次数','测试语音不属于目标说话人集合中的说话人且识别结果正确的次数/测试语音不属于目标说话人集合的测试总次数']},{'title':'下列关于用户声音画像识别引擎实时率说法正确的是？','option':['CPU性能直接影响引擎实时率','引擎实时率只和引擎本身相关，和CPU性能无关','引擎实时率数值越小表示引擎处理能力越强','引擎实时率数值越大表示引擎处理能力越强']},{'title':'用户声音画像识别性能指标——类别识别准确率计算公式是？','option':['某类别测试语音识别结果正确的条数/某类别测试语音的总条数','某类别测试语音识别结果错误的条数/某类别测试语音的总条数','测试语音识别结果正确的条数/测试语音总条数','测试语音识别结果错误的条数/测试语音总条数']},{'title':'用户声音画像识别引擎实时率计算公式是？','option':['引擎处理时长/语音时长','语音时长/引擎处理时长','测试类别数目/引擎处理时长','测试语音数/引擎处理时长']},{'title':'完整的口语对话系统，包含哪些模块？','option':['自然语言理解(NLU)','对话管理(DialogManagement)和对话跟踪(DST)','数据服务(DataService)。','Android终端','自然语言生成(NaturalLanguageGeneration)。']},{'title':'关于NLU（自然语言理解），以下哪种说法是正确的？','option':['NLU是指从自然语言中解析出语义信息。','NLU解析自然语言文本，并将其转换为机器可使用的表征形式——语义意图','语义理解是要理解文本中每一个字的含义，分析语句的语法结构，以方便计算机去使用','NLU的输入是语音数据，输出是语义意图']},{'title':'关于AI产品的NLUSanityTest，下面做法错误的是？','option':['SanityTest随便搜集一些用例即可，不用考虑功能覆盖的完备度；','SanityTest是一成不变的，一次编辑上线，后期不用再维护；','产品经理不需要关心SanityTest的报告，由NLU团队同事负责即可；','SanityTest应该覆盖产品的基本、主要、重要功能，产品经理应时刻关注SanityTest，并推动SanityTest集合的定期维护；']},{'title':'有市场竞争力的产品NLU测评体系，是有哪几部分构成的？','option':['主要技能测评盲测报告；','覆盖所有功能点协议的SanityTest；','定期做产品日志分析报告，统计各技能的调用分布，并量化主要技能的用户体验；','一定周期的竞品对比分析报告，包括技能数量、种类、核心技能体验测评；','测试集具有定期更新机制']},{'title':'关于一个技能的开发，下面说法正确的是？','option':['技能开发，重中之重是要定义好技能协议。这要求设计者对需求的理解足够深刻，能够较好的抽象出需求中的事物的概念模型，并设计出合理的意图协议。','技能开发要同时合理的使用关键词、模板句式、词典、复述语料，不可偏废其一。','技能开发是个动态的过程，包含冷启动和在线运营两个阶段。有了真实日志语料以后，技能的持续在线更新运营会变得更加容易，投入产出比更高。','技能开发时，关键词和模板句式实施没有科技含量，没有理论依据，不如时下流行的深度学习好用，编辑模板是个体力活，应该废弃掉。']},{'title':'关于开发者网站的用法，下面做法正确的是？','option':['技能关联越多越好，不管现在有没有用到，关联上就行了，反正也没什么坏处。','技能关联要按需操作，不是越多越好，产品经理要非常熟悉每个技能的功能边界。盲目关联技能，会引起不必要的意图理解冲突，或者意图理解了但应用层没有接入。最终给产品交互带来负面影响。','每个业务团队有一个明确的开发者账号Owner。开发者网站的账户和密码，需要妥善保管，不可随意给到别的同事。Owner离职时，开发者账号和配置要办理交接。','每个业务团队管理的开发者网站上的配置项，可以多做配置尝试。一旦错了，再改回来就可以了。','技能关联与测试环境形成对应，测试内网时需要由账号owner关联内网环境中的服务；测试外网时需要由账号owner关联外网环境中的服务；测试uat环境时需要找张大康关联uat环境中的服务。']},{'title':'“首字节返回时间”常用于以下哪项服务的测试指标？通常情况下需要小于多少ms？','option':['ASR，500','VPR，500','NLU，500','TTS，']},{'title':'以下哪种测试，不属于基础服务的常规测试范畴？','option':['功能测试','性能测试','稳定性测试','强度测试']},{'title':'对于测试报告的注意事项，以下哪些说法是正确的？','option':['测试报告中使用的数据、工具、文档等资源都有唯一的ID来标识','测试中要考虑到影响测试结果的全部维度和变量，在做测试结果对比时，每次只能变化一个维度或变量','对于版本回归测试，每次测试的结果需要跟上个版本的结果（或Baseline）做对比，以此判断版本质量是否提升','测试方法和测试步骤要严谨，并且具备可重复性（即：任何人使用该方法都可以得出同样的测试结果）']},
    {'title':'对于WER/SER，下面哪种举例的表达方式是正确的？','option':['5.34%','0.0534','5.34','以上都正确']},
    {'title':'研究语音的时频分析特性，将时域语音信号经过傅里叶变换而得到的显示图形称为？','option':['语谱图','波形图','波束图','倒谱图']},{'title':'麦克风阵列波束形成的主要作用是？','option':['消除设备自噪','估计声源方位','保留期望方向信号并抑制其他方向干扰和噪声','防止音频削波、数据篡改、数据丢失']},{'title':'SSP引擎中DOA实现的功能是？','option':['声源测向','波束形成','回声消除','混响抑制']},{'title':'语音识别结果中插入错误很高，最可能的情况是？','option':['空语音','语音中有背景人声','引擎版本号不对','语音的能量太小']},{'title':'提禅道任务，要求优化语音识别效果时，不需要提供？','option':['引擎版本号','语音识别效果不好的demo或产品','错误的基本流程和情况','少量出问题的语音样例']},{'title':'关于云知声的语音识别公有云，以下说法错误的是？','option':['支持8k和16k采样率','可以选择近讲和远讲两种声学模型','只能选择一个语言模型','可以配置个性化数据，比如手机联系人']},{'title':'ASR的首次返回延迟主要应用于以下哪种场景？','option':['语音转写场景','实时听写场景','实时听写输入法类场景','实时听写IOT类场景']},{'title':'关于ASR，以下对于功能配置描述正确的是？','option':['VAD静音时长不会影响处理性能','有个性化词典比无个性化词典性能慢10%-15%','全局静态词表延迟很高，使用需要慎重选择','近讲比远讲模型大概率慢70%左右']},{'title':'合成语音质量的评价方法是？','option':['人对语音质量进行主观评价','计算合成语音与标准音的距离','正确合成文字数目／总文字数目','合成语音声学参数方差与音库声学参数方差的距离']},{'title':'下面哪些会影响TTS的效果表现？','option':['发音人音色','技术路线的代数（G1/G2/G3）','合成模型的训练环境','合成模型的运行时长']},{'title':'声纹识别引擎实时率计算公式是？','option':['引擎处理时长/语音时长','语音时长/引擎处理时长','测试语音总数/引擎处理时长','测试人数/引擎处理时长']},{'title':'声纹识别流程由下列哪几部分组成？','option':['语音识别','声纹注册','声纹识别','语音合成']},{'title':'测试人员A正在进行某APP声纹锁体验测试，A使用自己的语音完成声纹注册后并尝试进行声纹登录，共尝试20次，其中成功登录19次，请问在该次体验测试中，该声纹锁的漏警为？','option':['19','1','0.95','0.05']},{'title':'关于提NLU需求的标准，下面哪些做法是正确的？','option':['写明需求名称和描述，不需要提供验收标准','提倡提大需求，需要干两年才能收敛的单体大需求','在禅道中写明需求功能定义、示例数据、验收标准','需求要定义合理的优先级和验收时间，合理控制和分解需求，一个需求的工作量建议不超过一个人.月']},{'title':'关于项目落地中的NLU需求，下面哪些做法是正确的？','option':['NLU团队需要直接参与项目，无条件的支持短期项目，否则被视为违背“客户第一”公司价值观；','NLU团队主要为产品线服务，NLU在产品上的工作产出主要由产品经理做验收；','不鼓励项目经理直接对接NLU团队的研发；','项目的NLU定制需求，应该由项目团队的人负责，最好是专职实施，可由NLU团队做培训、提供工具；']},{'title':'关于项目落地中的NLU的价值发挥，下面哪些做法是正确的？','option':['项目具有不确定性，NLU团队不需要关心项目的任何诉求，坚决不予支持。','NLU团队主要为产品主线服务，关注产品的中长期价值，并由产品主线衍生出对项目的强大支撑能力；','产品布局要有前瞻性，对于有可能成长为产品线的项目，负责人要及时组织产品立项，并配备合理的产品组织架构；','项目交付物的NLU体验评价，由主线产品经理负责，并合理的定义评价体系中的技能权重和优先级；','项目的定制NLU需求，合理通用部分，鼓励抽象到主线产品上，有产品经理演进成有市场竞争力的主线需求；']},{'title':'对于NLU（自然语言理解），以下哪种解释是正确的？','option':['用于获取说话人性别和年龄段信息','用于验证说话人的身份','理解用户输入的文本,转换为用户意图','在NLU的基础上实现知识对话问答']},{'title':'NLU系统的基本单元是？','option':['语义','聊天','对话','意图']},{'title':'在理想声学环境下，说话人离拾音设备的距离每增加一倍，声压级会随之下降？','option':['3dB','6dB','9dB','12dB']},{'title':'声学回声消除与硬件设备的结构有十分紧密的关系，良好的硬件设计可以让算法的性能得到有效保证，以下哪些因素是硬件结构设计中需要重点考量的量？','option':['良好的声学器件特性，如mic、喇叭在工作频段内具备十分良好的频响曲线；','结构设计应尽可能的避免谐波、震动等因素的干扰；','设备应该具备良好的密封性，减少内部声音传导；','拾音器的安装，不应该引入腔体等结构干扰；']},{'title':'麦克风阵列处理相对于单麦克风的主要优势是什么？','option':['迎合市场需求，本身并没有太大作用；','仅能实现声源测向功能，其他无明显优势；','仅能改善远场使用场景下的拾音质量，其他无明显优势；','相对于单麦克风处理，能够更好的去除混响、环境噪声，并能够实现单麦克风所不能实现的声源测向，定向拾音等功能，且能在远场场景下显著改善拾音质量；']},{'title':'SSP引擎中麦克风阵列声源定位会受哪些因素影响？','option':['信噪比','房间混响','送入引擎的信号顺序与引擎定义的麦克风顺序是否一致','麦克风阵列失配误差']},{'title':'语音识别通常的评价标准是？','option':['SER','CER','WER','DER']},{'title':'关于当前的语音识别公有云，以下说法错误的是？','option':['引擎会返回多种可能的文字识别结果，供产品或开发人员进行选择','引擎返回的识别结果中，除了识别出的文字结果，还包括配置参数，语音/静音情况，词边界等富文本信息','语言领域可以最多选择5个，比如车载设备的通用，导航，音乐，有声读物，个性化','当前引擎对于快语速，重口音等极端情况，识别效果不佳']},{'title':'声纹识别性能指标——集外拒绝准确率计算公式是？','option':['冒认语音做测试时被判断为真的次数/用冒认语音做测试的总次数','目标说话人语音做测试时被判断为假的次数/目标说话人语音做测试的总次数','测试语音属于目标说话人集合中的说话人且识别结果正确的次数/测试语音属于目标说话人集合的测试总次数','测试语音不属于目标说话人集合中的说话人且识别结果正确的次数/测试语音不属于目标说话人集合的测试总次数']},{'title':'关于意图的测评，下面哪些说法是正确的？','option':['一个意图的召回率越高，体验越好；','一个意图的精确率越高，体验越好；','F-Score同时兼顾了召回率和精确率，因此，F-Score越高代表NLU的体验越好；','一个意图的召回率和精确率的重要程度可以不同。家居控制意图的精确率比召回率更重要。因为一旦误召回，会产生比较严重的后果(e.g.一句话误理解为空调制冷有可能导致用户感冒)；']},{'title':'测试报告中，一般要包含以下哪些要素？','option':['测试需求和目的','测试结论','测试环境','测试人员和日期']},{'title':'以下关于麦克风阵列的间距、拓扑结构的说法，正确的是？','option':['麦克风阵列的间距、拓扑结构对于处理性能、DOA准确率等会造成明显影响，需要在产品设计之初就结合引擎建议及项目实施经验，仔细考量；','麦克风阵列的间距不会对处理性能造成影响；','麦克风阵列的间距和拓扑结构，都只会对处理效果造成影响，不会影响到DOA；','麦克风阵列的间距和拓扑结构，都只会对DOA造成影响，不会影响到处理效果；']},{'title':'麦克风阵列失配误差包括？','option':['相位误差','位置误差','幅度误差','方位误差']},{'title':'常见的语音质量问题包括？','option':['语音削波','数据丢失','数据篡改','房间混响过大']},{'title':'下列哪些统计量是声纹识别性能衡量指标？','option':['虚警','漏警','字错误率','句错误率']},{'title':'NLU、对话、聊天、问答，四个概念之间的关系，下面说法正确的是？','option':['聊天机器人是对话机器人的一种，聊天和对话没有区别','NLU是语义理解的简称。','在语音交互类产品上，对话是指人与机器之间的交互，一般特指基于自然语言的人机口语交互。通过交互，最终实现自己的目的：服务、内容、陪伴等。','聊天是一个特殊技能(SKILL)，通过对话交互，它主要起陪伴作用','问答是另外一个特殊技能(SKILL)，通过问答交互，它能够给用户返回有用的知识，一般这些知识都是客观的信息']},{'title':'“末次返回延迟”常用于以下哪项服务的测试指标？通常情况下需要小于多少ms？','option':['ASR，500','VPR，500','NLU，500','TTS，']},{'title':'对于均匀线型麦克风阵列，下列哪个表示阵列间距？￼','option':['图中A所示','图中B所示','图中C所示']},{'title':'对于如下圆形麦克风阵列，下列哪个方向表示0度方向？￼','option':['图中A所示','图中B所示','图中C所示','图中D所示']},{'title':'语音识别的简称是？','option':['ASR','CALL','KWS','VPR']},{'title':'TTS实时率的计算公式是？','option':['引擎处理所耗时长/合成语音时长','合成语音时长/引擎处理所耗时长','合成的句数/总句数','引擎获取待合成文本到合成结束的时间差']},{'title':'TTS在线合成引擎支持下面哪些调整？','option':['语音的亮度','语音的速度','语音的音量','语音的音调']},{'title':'测试人员A和B正在进行某APP声纹锁体验测试，A使用自己的语音完成声纹注册后B尝试进行声纹登录，共尝试20次，其中成功登录1次，请问在该次体验测试中，该声纹锁的虚警为？','option':['20','1','0.95','0.05']},{'title':'WER数值越低，说明ASR服务的性能？','option':['越差','越好','不变','没有关系']},{'title':'语音识别技术领域中的“语音”是指？','option':['噪音','回声','专指人类说话的声音','各种声音']},{'title':'云知声目前已有的TTS音色包括？','option':['男声','女声','男童声','女童声']},{'title':'声纹识别性能指标——漏警计算公式是？','option':['冒认语音做测试时被判断为真的次数/用冒认语音做测试的总次数','目标说话人语音做测试时被判断为假的次数/用目标说话人语音做测试的总次数','测试语音属于目标说话人集合中的说话人且识别结果正确的次数/测试语音属于目标说话人集合的测试总次数','测试语音不属于目标说话人集合中的说话人且识别结果正确的次数/测试语音不属于目标说话人集合的测试总次数']},{'title':'关于NLU请求中的场景参数(scenario)，下面说法正确的是？','option':['场景参数(scenario)，是指对话交互场景，是一个交互态的概念。Scenario参数通过影响技能关联、技能排序、有风格的交互数据、交互流程，来实现对对话交互的影响','在云知声公司内部，我们一般用scenario打造出一个产品方案，比如child、incar、hotelDefault。一般的，一个scenario就打造一条产品线的turnkeyNLU交付方案。','除了方案级scenario参数，scenario还可以取值为单个技能的serviceCode,以实现表示沉浸式的在该技能内进行交互。如：翻译场景、打电话场景','scenario参数可以留空。','scenario参数可以随便填入，不用特别严谨']},{'title':'MOS打分常用于以下哪个基础服务的测试指标？','option':['ASR','TTS','NLU','VPR']},{'title':'WER常用于以下哪个基础服务的测试指标？','option':['ASR','TTS','NLU','VPR']},{'title':'对于Speaker（用户声音画像识别），以下哪种解释是正确的？','option':['用于获取说话人性别和年龄段信息','用于验证说话人的身份','理解用户输入的文本,转换为用户意图','在NLU的基础上实现知识对话问答']},{'title':'信号处理中，信噪比(SNR)是一个非常重要的概念，SNR0dB是指？','option':['人耳可听阈的最小值；','目标信号采音值为0dB；','目标信号和噪声信号能量相等；','噪声信号采音值为0dB；']},{'title':'对于如下圆形麦克风阵列，下列哪个方向表示0度方向？','option':['图中A所示','图中B所示','图中C所示','图中D所示']}
];




