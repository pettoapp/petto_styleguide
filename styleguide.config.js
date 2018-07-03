const path = require('path');
const createStyleguideConfig = require('create-react-styleguide').createStyleguideConfig;

module.exports = Object.assign(createStyleguideConfig(), {
    serverPort: process.env.PORT ? parseInt(process.env.PORT) : 6060,
    styleguideComponents: {
        Wrapper: path.join(__dirname, 'src/styleguidist/components/ThemeWrapper'),
    }
});
