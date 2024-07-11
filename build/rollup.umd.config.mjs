import basicConfig, { name, file } from './rollup.config.mjs'


export default {
  ...basicConfig,
  output: {
    name,
    file: file('umd'),
    format: 'umd'
  }
}