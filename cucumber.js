module.exports = {
  default: {
    requireModule: ['ts-node/register'],
    require: [
        'src/features/support/world.ts', 
        'src/features/support/hooks.ts', 
        'src/features/steps/**/*.ts',
        'src/features/**/*.ts' 
    ],
    format: ['pretty', 'html:reports/cucumber-report.html'],
    paths: ['src/features/**/*.feature'], 
    publishQuiet: true,
  },
};