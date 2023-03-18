import connectMongo from '../../database/conn'

// let client;
// let db;
// let emergency;

// async function init() {
//     if (db) return
//     try {
//         client = await connectMongo()
//         db = await client.db()
//         emergency = await db.collection('emergencies log')
//     } catch (error) {
//         throw new Error('Failed to establish connection to db')
//     }
// }

// ;(async () => {
//     await init()
// })()

export async function getEmergency () {
    connectMongo().catch(error => res.json({ error: "Connection Failed...!"}))

    const emergency = await db().collection('emergencies log').find().toArray();

    res.status(200).json(JSON.parse(JSON.stringify(data)))
}

    // try {
    //     if (!emergency) await init()
    //     const result = await emergency
    //         .find({})
    //         .map(user => ({ ...user, _id: user._id.toString() }))
    //         .toArray()
    //     return { emergency: result }
    // } catch (error) {
    //     return { error: 'Failed to fetch emergency'}
    // }