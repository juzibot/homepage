import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { feishuBotUrl, juziHelloMsg, juziToken } from '@src/config';

type Data = {
  code: number;
  message: string;
};

`{
  "config": {
    "wide_screen_mode": true
  },
  "i18n_elements": {
    "zh_cn": [
      {
        "tag": "markdown",
        "content": "**🥳 有新客户咨询信息！ 🥳**\n手机号：15688286110\n姓名：\n公司：\n备注："
      },
      {
        "tag": "hr"
      },
      {
        "tag": "markdown",
        "content": "IP：\nIP 归属地：\n浏览页面：[https://baidu.com](https://baidu.com)\nUser-Agent："
      }
    ]
  }
}`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'POST') {
    res.status(403).json({
      code: 403,
      message: 'not allowed',
    });
  } else {
    const userAgent = req.headers['user-agent'] || 'null';
    const origin = req.headers['referer'] || 'null';
    const name = req.body['name'] || 'null';
    const phone = req.body['phone'] || 'null';
    const company = req.body['company'] || 'null';
    const remark = req.body['remark'] || 'null';

    try {
      // add friend
      const addFriendRes = await axios.post(
        'https://ex-api.botorange.com/addFriend/send',
        {
          token: juziToken,
          phoneNum: phone,
          remark: `${name || '官网用户'}-官网`,
          helloMsg: juziHelloMsg,
          extraInfo: '{}',
        }
      );

      const isSuccess = addFriendRes.data?.code == 0;
      await axios.post(feishuBotUrl, {
        msg_type: 'interactive',
        card: {
          config: {
            wide_screen_mode: true,
          },
          i18n_elements: {
            zh_cn: [
              {
                tag: 'markdown',
                content: `**🥳 有新客户咨询信息！ 🥳**\n手机号：${phone}\n姓名：${name}\n公司：${company}\n备注：${remark}\nAPI 加好友：${
                  isSuccess ? '是' : '否'
                }`,
              },
              {
                tag: 'hr',
              },
              {
                tag: 'markdown',
                content: `浏览页面：[${origin}](${origin})\nUser-Agent：${userAgent}`,
              },
            ],
          },
        },
      });
    } finally {
      res.status(200).json({
        code: 200,
        message: 'hi',
      });
    }
  }
}
