export function getPageKeywords(pathname?: string) {
  const map: { [p: string]: string } = {
    '/features/customer-acquisition':
      '句子互动,句子秒回,企微SCRM, 企微管家,批量加好友,自动加好友,聚合聊天,自动回复,自动群发,私域运营, 私域工具,私域流量,企业微信运营,精细化运营,流量运营,手机号加好友,Excel 加好友,AI 外呼',
    '/features/sop':
      '句子互动,句子秒回,企微SCRM,企微管家,批量加好友,自动加好友,聚合聊天,SOP触达,私域运营, 私域工具,私域流量,企业微信运营,精细化运营,流量运营,SOP运营,生命周期管理,自动回复,自动拉群',
    '/features/contact-platform':
      '句子互动,句子秒回,企微SCRM,企微管家,聚合聊天,批量加好友,自动加好友,聚合聊天,SOP触达,私域运营, 私域工具,私域流量,企业微信运营,精细化运营,流量运营,企微侧边栏,数据打通',
    '/features/data-center':
      '句子互动,句子秒回,企微SCRM,企微管家,批量加好友,自动加好友,聚合聊天,SOP触达,私域运营, 私域工具,私域流量,企业微信运营,精细化运营,流量运营,数据打通,绩效统计,消息存档,消息导出',
    '/features/management':
      '句子互动,句子秒回,企微SCRM,企微管家,批量加好友,自动加好友,聚合聊天,SOP触达,私域运营, 私域工具,私域流量,企业微信运营,精细化运营,流量运营,绩效统计',
    '/features/security':
      '句子互动,句子秒回,企微SCRM,企微管家,数据保护,数据安全,私有化部署,安全合规,私域运营, 私域工具,私域流量,企业微信运营,精细化运营,流量运营,私域风控',
    '/solutions/general':
      '句子互动,句子秒回,企微SCRM, 企微管家,批量加好友,自动加好友,SOP触达,excel加好友,AI外呼, RPA,聚合聊天,自动触达,定时推送,自动回复,自动群发,私域运营, 私域工具,私域流量,企业微信运营,精细化运营,流量运营',
    '/solutions/customer-service':
      '句子互动,句子秒回,企微SCRM, 企微管家,批量加好友,自动加好友,SOP触达,excel加好友,AI外呼, RPA,聚合聊天,自动触达,定时推送,自动回复,自动群发,私域运营, 私域工具,私域流量,企业微信运营,精细化运营,流量运营,绩效统计',
    '/solutions/increase':
      '句子互动,句子秒回,企微SCRM, 企微管家,批量加好友,自动加好友,SOP触达,excel加好友,AI外呼, RPA,聚合聊天,自动触达,定时推送,自动回复,自动群发,私域运营, 私域工具,私域流量,企业微信运营,精细化运营,流量运营',
    '/solutions/operate':
      '句子互动,句子秒回,企微SCRM, 企微管家,批量加好友,自动加好友,SOP触达,excel加好友,AI外呼, RPA,聚合聊天,自动触达,定时推送,自动回复,自动群发,私域运营, 私域工具,私域流量,企业微信运营,精细化运营,流量运营',
    '/solutions/consumer-goods':
      '句子互动,句子秒回,企微SCRM, 企微管家,批量加好友,自动加好友,SOP触达,excel加好友,AI外呼, RPA,聚合聊天,自动触达,定时推送,自动回复,自动群发,私域运营, 私域工具,私域流量,企业微信运营,精细化运营,流量运营,消费品,新零售',
    '/solutions/education':
      '句子互动,句子秒回,企微SCRM, 企微管家,批量加好友,自动加好友,SOP触达,excel加好友,AI外呼,聚合聊天,自动触达,定时推送,自动回复,自动群发,私域运营, 私域工具,私域流量,企业微信运营,精细化运营,K12,成人教育,成人培训,素质教育',
    '/solutions/health':
      '句子互动,句子秒回,企微SCRM, 企微管家,批量加好友,自动加好友,SOP触达,excel加好友,AI外呼, RPA,聚合聊天,自动触达,定时推送,自动回复,自动群发,私域运营, 私域工具,私域流量,企业微信运营,精细化运营,流量运营,医疗',
    '/solutions/finance':
      '句子互动,句子秒回,企微SCRM, 企微管家,批量加好友,自动加好友,SOP触达,excel加好友,AI外呼, RPA,聚合聊天,自动触达,定时推送,自动回复,自动群发,私域运营, 私域工具,私域流量,企业微信运营,精细化运营,流量运营,银行,证券,基金',
    '/cases':
      '句子互动,句子秒回,企微SCRM,企微管家,私域运营, 私域工具,私域流量,客户管理,企业微信运营,精细化运营,客户运营,流量运营, 批量加好友,自动加好友,自动回复,自动群发,SOP触达,消费品,新零售,教育,医疗,金融,互联网服务,政务服务',
    '/about-us':
      '句子互动,句子秒回,企微SCRM,企微管家,私域运营, 私域工具,私域流量,客户管理,企业微信运营,精细化运营,客户运营,流量运营, 批量加好友,自动加好友,自动回复,自动群发,SOP触达',
    '/culture':
      '句子互动,句子秒回,企微SCRM,企微管家,私域运营, 私域工具,私域流量,客户管理,企业微信运营,精细化运营,客户运营,流量运营, 批量加好友,自动加好友,自动回复,自动群发,SOP触达',
    '/': '句子互动,句子秒回,企微SCRM,企微管家,私域运营, 私域工具,私域流量,客户管理,企业微信运营,精细化运营,客户运营,流量运营, 批量加好友,自动加好友,自动回复,自动群发,SOP触达,聚合聊天',
  };
  if (!pathname) {
    return map['/'];
  }
  let key =
    Object.keys(map)
      .sort((a, b) => b.length - a.length)
      .find((k) => pathname.includes(k)) || '/';
  return map[key];
}

export function getPageDescription(pathname?: string) {
  const map: { [p: string]: string } = {
    '/features/customer-acquisition':
      '句子互动提供规模化获客解决方案，零人工成本把沉默的存量线索规模化迁移成可双向互动、多维触达的社交关系链。为用户打造行动成本最低的转化路径、为企业实现高转化率的私域构建，全程自动化完成，同时提供更安全的风控策略。',
    '/features/sop':
      '句子互动提供私域SOP消息触达解决方案，一次性完成客户全生命周期的运营规划，在任意时间、任意场景下执行触达转化。依托 RPA 技术，句子互动将 IM 软件变成可自动执行计划任务的机器人，让营销实现真正意义上的 SOP 化。',
    '/features/contact-platform':
      '句子互动提供搭建客户会话中台解决方案，聚合多种 IM 平台消息的能力，在一个后台应答来自多平台多个账号上的消息，亦可以同时主动触达这些客户，无论他们来自微信、抖音、5G 短信、WhatsApp 还是邮件。',
    '/features/data-center':
      '句子互动提供搭建数据管理中心解决方案，把全域数据汇总在数据管理中心，呈现从增长到留存、从活跃到转化的一切业务数据和人效数据统计，为管理者提供更科学的业务流程优化策略和团队管理决策依据。',
    '/features/management':
      '句子互动提供多维度、多分级的权限管理，无论是企业内部各级消息的传达、权限的赋予，还是运营过程中消息的高效分配回复，亦或是运营后对员工的绩效管理。',
    '/features/security':
      '句子互动为企业提供数据保护技术措施、数据保护管理组织措施、信息安全事件的响应、第三方支持等解决方案。',
    '/solutions/general':
      '句子互动提供私域全链路解决方案，让私域业务成为可被标准化落地执行、真能为企业带来转化的数据资产，助力企业 10 倍提高私域流量的运营效率。',
    '/solutions/customer-service':
      '句子互动提供把任意 IM 软件变成效率客服系统的解决方案，在一个后台应答来自多平台多个账号上的消息。同时打破账号间好友关系隔阂，让会话在员工之间高效流转。',
    '/solutions/increase':
      '句子互动提供增长场景解决方案，打造新流量时代的增长引擎，句子互动提供多种方式零人工成本规模触达并添加用户进入私域，助力冷启动流量池搭建。',
    '/solutions/operate':
      '句子互动将 IM 软件变成可自动执行计划任务的机器人，解决面向数百万用户的规模化、千人千面营销推送难题。',
    '/solutions/consumer-goods':
      '句子互动助力消费品行业快速搭建私域流量池，赋能更多 SKU 展现机会、打通结果数据构建增长到转化的私域业务闭环。',
    '/solutions/education':
      '句子互动助力教培行业高效激活用户，将长转化周期下的复杂运营动作更标准化、完美的被执行落地，完成线索的转化。',
    '/solutions/health':
      '句子互动助力医疗健康行业为用户提供更高效、更专业、更安全的健康服务。',
    '/solutions/finance':
      '句子互动保障用户数据安全，集成已有数据系统，多层级权限管理让每一次服务更专业、更有温度。',
    '/cases':
      '各个行业、各种规模的团队都在使用句子互动。我们助力企业和组织建立以社交关系为核心的营销体系，高效触达与深度连接数以千万计的客户，让营销事半功倍。',
    '/about-us':
      '句子互动企微SCRM，是下一代营销云。通过企业微信运营沉淀微信流量，提供工具和整合业务流，从引流、转化到运营管理用户的全生命周期，助力企业实现精细化运营管理。',
    '/culture':
      '句子互动企微SCRM，是下一代营销云。通过企业微信运营沉淀微信流量，提供工具和整合业务流，从引流、转化到运营管理用户的全生命周期，助力企业实现精细化运营管理。',
    '/': '句子互动企微SCRM，是下一代营销云。通过企业微信运营沉淀私域流量，提供工具和咨询服务，从引流获客、规模化运营、客户管理到转化变现的全生命周期，助力企业实现精细化运营管理，十倍提高运营效率。',
  };
  if (!pathname) {
    return map['/'];
  }
  let key =
    Object.keys(map)
      .sort((a, b) => b.length - a.length)
      .find((k) => pathname.includes(k)) || '/';
  return map[key];
}
