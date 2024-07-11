// import babel from '@rollup/plugin-babel'
// import { nodeResolve } from '@rollup/plugin-node-resolve'
// import vue from 'rollup-plugin-vue'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'
import cjs from '@rollup/plugin-commonjs'
// import replace from '@rollup/plugin-replace'
import css from 'rollup-plugin-css-only'
// import CleanCSS from 'clean-css'
import json from '@rollup/plugin-json'
import fs, { readFileSync } from 'fs'
import excludeDependenciesFromBundle from 'rollup-plugin-exclude-dependencies-from-bundle'
import babel from '@rollup/plugin-babel';


const config = JSON.parse(readFileSync(new URL('../package.json', import.meta.url)));

const { name } = config
const file = type => `dist/${name}.${type}.js`

export { name, file }

let overrides = {
  compilerOptions: { declaration: true },
  exclude: [
    "node_modules",
    "src/App.vue",
    "src/main.ts",
    "src/router/**"
  ]
}

export default {
  input: 'src/index.ts',
  output: {
    name,
    file: file('esm'),
    format: 'esm'
  },
  plugins: [
    // vue(),
    json(),
    nodeResolve({
      // extensions: ['.mjs', '.js', '.json', '.node', '.ts', '.vue']
    }),
    excludeDependenciesFromBundle({
      peerDependencies: true,
      dependencies: false
    }),
    typescript({ tsconfigOverride: overrides }),
    babel({
      babelHelpers: 'bundled',
      presets: [
        '@babel/preset-react',  // 转换 JSX
        '@babel/preset-typescript'  // 转换 TypeScript
      ],
      extensions: ['.js', '.jsx', '.ts', '.tsx'],  // 指定 Babel 应处理的文件扩展名
      exclude: 'node_modules/**'  // 排除 node_modules
    }),
    css({
      output(style) {
        !fs.existsSync('dist') && fs.mkdirSync('dist')
        fs.writeFileSync(`dist/${name}.css`, style)
      }
    }),
    cjs(),
    // replace({
    //   VERSION: JSON.stringify(version)
    // })
  ]
}