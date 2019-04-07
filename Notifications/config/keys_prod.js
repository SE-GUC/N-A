module.exports = {
    mongoURI: process.env.MONGO_URI,
    privateKey: process.env.VAPID_PRIVATE_KEY,
    publicKey: process.env.VAPID_PUBLIC_KEY
}//process.env.VAPID_PUBLIC_KEY or process.env.VAPID_PRIVATE_KEY understand as production server running environment configuration.