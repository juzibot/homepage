export const host =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://juzibot.com';

export const hireUrl = 'https://k0auuqcihb.jobs.feishu.cn/611573';
export const juziToken = process.env.JUZI_API_TOKEN || '';
export const juziHelloMsg = process.env.JUZI_HELLO_MSG || '';
export const feishuBotUrl = process.env.FEISHU_BOT_URL || '';
export const juziApiUrl = process.env.JUZI_API_URL || '';
