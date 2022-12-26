> all older code are same migration are use for change the column nae or change the data in mass

1. install  migrate-mongo globaly
```
npm install -g migrate-mongo
```

2. init 
```
migrate-mongo init
```

3. 

```
migrate-mongo create test
```

4. for up run 

```
migrate-mongo up
```

5. for down run

```
migrate-mongo down
```


6. for check status

```
migrate-mongo status
```


```
await db.collection('tableName').updateMany({}, { $rename: { name: 'newName' } }, { multi: true }, function(err, blocks) {
  if (err) { throw err; }
  console.log('done!');
});
```
