import ratelimit from "../src/config/upstash.js"


const rateLimiter = async (req, res, next) => {
    try {
        ratelimit
    } catch (error) {
        
    }
}

export default rateLimiter