import bunyan from 'bunyan';
import BunyanFormat from 'bunyan-format';

const logger = bunyan.createLogger({
  name: 'MacrosMastery',
  streams: [
    {
      stream: BunyanFormat({ outputMode: 'long' }),
    },
  ],
});

export default logger;
