import registerWebworker from 'webworker-promise/lib/register';

registerWebworker(async (message, emit) => {
  return 'pong3';
});
