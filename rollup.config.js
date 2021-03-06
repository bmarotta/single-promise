import typescript from 'rollup-plugin-typescript2'
import pkg from './package.json'

export default [{
  input: 'src/index.ts',
  output: [
    {
      file: "dist/index.js",
      format: 'cjs',
      name: "single-promise"  
    },
  ],
  //preserveModules: true, // Uncomment to split in separate files
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [
    typescript({
      typescript: require('typescript'),
    }),
  ],
}];