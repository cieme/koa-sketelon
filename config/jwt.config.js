module.exports = {
  secret: 'lokep',
  expiresIn: '8h',
  unlessPath: ['/', '/api/auth/login', '/api/auth/register'],
  unlessStartWithList: ['/assets'],
  errorMessage: 'Invalid token',
  lackOfTokenMessage: 'Unauthorized access',
};
