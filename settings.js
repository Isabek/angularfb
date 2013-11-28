module.exports = {
    NODE_ENV    : process.env.NODE_ENV,
    SECRET      : process.env.SECRET,
    SCOPE       : process.env.SCOPE,
    PORT        : process.env.PORT || 5000,
    APP_NAME    : process.env.APP_NAME,
    APP_ID      : process.env.APP_ID,
    APP_SECRET  : process.env.APP_SECRET,
    APP_URL     : process.env.APP_URL,
    DB_CONNECT  :
           process.env.MONGOLAB_URI
        || process.env.MONGOHQ_URL
        || process.env.DB_CONNECT
};