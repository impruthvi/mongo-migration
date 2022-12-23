module.exports = {
    async up(db, client) {
        // TODO write your migration here.
        // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
        // Example:
        // await db.collection('albums').updateOne({ artist: 'The Beatles' }, { $set: { blacklisted: true } });
        await db.collection('tests').updateMany({}, { $rename: { name: 'newName' } }, { multi: true }, function(err, blocks) {
            if (err) { throw err; }
            console.log('done!');
        });
    },

    async down(db, client) {
        // TODO write the statements to rollback your migration (if possible)
        // Example:
        // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
        // await db.collection('test').updateMany({}, { $rename: { name: "test" } })
        await db.collection('tests').updateMany({}, { $rename: { newName: 'name' } }, { multi: true }, function(err, blocks) {
            if (err) { throw err; }
            console.log('done!');
        });
    }
};