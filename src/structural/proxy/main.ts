import { SystemUserProxy } from './system-user/system-user-proxy';

async function clientCode(): Promise<void> {
  const user = new SystemUserProxy('Jack', 'jackAlmeida');

  console.log('This will take 2 seconds');
  console.log(await user.getAddress());
  console.log('This will repeat (CACHE)');

  for (let i = 0; i < 5; i++) {
    console.log(await user.getAddress());
  }
}

clientCode();
