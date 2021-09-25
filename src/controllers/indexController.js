exports.indexRedirect = async (req, res, next) => {
    res.redirect('/documentation');
    console.log('Redirecting to documentation');
}