/**
 * Platform config can accept a name and a theme.
 * The theme can dictate how the pages will look.
 */
const platformConfig = {
  platformName: process.env.APP_NAME || 'The Posting Platform',
  platformDescription:
    process.env.APP_DESCRIPTION ||
    'Post things on the posting platform. It is the platform for posting. Check out the posts on the posting platform.',
  platformTheme: process.env.APP_THEME || 'posty',
};

module.exports = platformConfig;
