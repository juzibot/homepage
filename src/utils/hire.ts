import { host } from '@src/config';

export function logHireInfo() {
  // if on browser side
  if (!process.browser) return;
  console.log(
    `
         __            _   __          __ 
        / /_  ______  (_) / /_  ____  / /_
   __  / / / / /_  / / / / __ \\/ __ \\/ __/
  / /_/ / /_/ / / /_/ / / /_/ / /_/ / /_
  \\____/\\__,_/ /___/_(_)_.___/\\____/\\__/

  我们正在招募，大量研发正式/实习 HC 等你来挑战：${host}/join-us \n
  `
  );
}
